// Cloudflare Pages Function — POST /api/contact
// Receives contact-form submissions and forwards them via the MailChannels
// transactional email API (free for Cloudflare-hosted zones). Configure
// secrets with:  wrangler pages secret put MAILCHANNELS_API_KEY
// The MailChannels key is optional — without it the function still works
// but MailChannels applies a 1,000 msg/day cap per zone.
//
// Set the env variable CONTACT_TO (default sales@veslapack.com) to
// forward the email to the right inbox.

interface Env {
  MAILCHANNELS_API_KEY?: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  country?: string;
  product?: string;
  quantity?: string;
  message: string;
  hp?: string; // honeypot — must be empty
}

const JSON_HEADERS = { "content-type": "application/json" } as const;
const CORS_HEADERS = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "POST, OPTIONS",
  "access-control-allow-headers": "content-type",
} as const;

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { ...JSON_HEADERS, ...CORS_HEADERS } });
}

function isValid(payload: unknown): payload is ContactPayload {
  if (!payload || typeof payload !== "object") return false;
  const p = payload as Record<string, unknown>;
  if (typeof p.name !== "string" || p.name.trim().length < 2) return false;
  if (typeof p.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email)) return false;
  if (typeof p.message !== "string" || p.message.trim().length < 5) return false;
  return true;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  if (!isValid(body)) {
    return json({ error: "Missing or invalid required fields" }, 400);
  }

  // Honeypot: silently accept and discard bot submissions.
  if (body.hp && body.hp.length > 0) {
    return json({ ok: true, discarded: true });
  }

  const to = env.CONTACT_TO || "sales@veslapack.com";
  const from = env.CONTACT_FROM || "no-reply@veslapack.com";
  const subject = `New inquiry from ${body.name}${body.company ? ` (${body.company})` : ""}`;
  const text = [
    `Name: ${body.name}`,
    `Email: ${body.email}`,
    body.company ? `Company: ${body.company}` : null,
    body.country ? `Country: ${body.country}` : null,
    body.product ? `Product of interest: ${body.product}` : null,
    body.quantity ? `Quantity: ${body.quantity}` : null,
    "",
    "Message:",
    body.message,
  ]
    .filter(Boolean)
    .join("\n");

  // MailChannels free transactional API (Cloudflare zones only).
  const headers: Record<string, string> = { "content-type": "application/json" };
  if (env.MAILCHANNELS_API_KEY) headers["x-api-key"] = env.MAILCHANNELS_API_KEY;

  try {
    const resp = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers,
      body: JSON.stringify({
        personalizations: [{ to: [{ email: to, name: "Vesla Sales" }] }],
        from: { email: from, name: "Vesla Website" },
        reply_to: { email: body.email, name: body.name },
        subject,
        content: [{ type: "text/plain", value: text }],
      }),
    });
    if (!resp.ok) {
      const detail = await resp.text();
      console.error("MailChannels error", resp.status, detail);
      // Even if email fails we still return a generic success to the user
      // and log the message server-side for manual follow-up.
    }
  } catch (e) {
    console.error("MailChannels exception", e);
  }

  // Always log the inquiry server-side as a backup.
  console.log("[contact]", { ts: new Date().toISOString(), ...body });

  return json({ ok: true });
};

export const onRequestOptions: PagesFunction = async () =>
  new Response(null, { status: 204, headers: CORS_HEADERS });
