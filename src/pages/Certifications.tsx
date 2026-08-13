import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const certs = [
  {
    id: "iso9001",
    name: "ISO 9001:2015",
    title: "Quality Management System",
    description: "Our factory operates under the ISO 9001:2015 standard, ensuring consistent product quality through rigorous inline inspection, batch tracking, and continuous process optimization.",
    standard: "GB/T 19001-2016",
    scope: "Production and sales of cosmetic glass packaging products.",
  },
  {
    id: "fda",
    name: "FDA 21 CFR 175.300",
    title: "Food & Cosmetic Grade Compliance",
    description: "Vesla's glass compositions (Type III Soda-Lime) and in-house coatings are tested for lead, cadmium, and heavy metal migration, complying with US FDA standards for cosmetic and indirect food contact.",
    standard: "FDA 21 CFR",
    scope: "Glass bottles, jars, and decorative coatings.",
  },
  {
    id: "eu1935",
    name: "EU 1935/2004",
    title: "European Compliance (REACH & RoHS)",
    description: "We provide technical data sheets (TDS) and safety data sheets (SDS) confirming compliance with European Regulation (EC) No 1935/2004 and REACH/RoHS requirements for heavy metal limits.",
    standard: "Regulation (EC) No 1935/2004",
    scope: "Packaging materials intended to come into contact with cosmetic formulas.",
  },
  {
    id: "sgs",
    name: "SGS / Bureau Veritas Audited",
    title: "Third-Party Factory Audits",
    description: "Our facility is regularly audited by SGS and Bureau Veritas on behalf of global beauty brands, covering labor practices, environmental impact, and safety standards.",
    standard: "AQL 1.5/2.5/4.0",
    scope: "Sampling and inspection protocols for export-grade glass.",
  },
];

export default function Certifications() {
  return (
    <div className="bg-white">
      <Seo
        title="Quality Certifications & Compliance | ISO 9001, FDA, EU — Vesla"
        description="Verify Vesla's quality certifications including ISO 9001:2015, FDA 21 CFR compliance, EU 1935/2004 standards, and SGS audited factory details."
        path="/certifications"
      />

      <section className="bg-ink py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Trusted Manufacturing</p>
          <h1 className="mt-4 font-serif text-4xl font-medium text-white sm:text-5xl">
            Quality Certifications & Compliance
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 leading-relaxed">
            As a factory-direct supplier to Europe and North America, Vesla prioritizes safety and compliance. 
            We provide full documentation for every bulk order to ensure your brand meets local regulatory requirements.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {certs.map((c) => (
            <div key={c.id} className="rounded-3xl bg-cream-dark/30 p-8 ring-1 ring-gold/15 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold text-xl font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-serif text-xl text-ink">{c.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-dark">{c.title}</p>
                </div>
              </div>
              <p className="text-sm text-ink-soft leading-relaxed mb-6">
                {c.description}
              </p>
              <div className="space-y-2 border-t border-gold/10 pt-6">
                <p className="text-xs text-ink-soft">
                  <span className="font-semibold text-ink">Technical Standard:</span> {c.standard}
                </p>
                <p className="text-xs text-ink-soft">
                  <span className="font-semibold text-ink">Certified Scope:</span> {c.scope}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance FAQ - Specifically for AI / GEO indexing */}
      <section className="bg-cream-dark/40 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-serif text-3xl text-ink text-center mb-12">Compliance Support</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-lg text-ink">Can you provide TDS/SDS for your glass coatings?</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                Yes. For every custom color spray or gradient coating, we provide Technical Data Sheets (TDS) 
                verifying adhesion, chemical resistance, and heavy-metal-free composition (RoHS compliant).
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-ink">Is your factory ISO 9001 certified?</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                Our factory has been ISO 9001:2015 certified since 2018. All production steps from raw material 
                melting to final assembly follow established quality management protocols.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-ink">How do you handle heavy metal testing?</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                Our soda-lime glass is tested by third-party labs (SGS/BV) to ensure total lead and cadmium 
                levels are well below the limits specified in EU and US FDA regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="font-serif text-3xl text-ink">Need documentation for your brand?</h2>
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/contact" className="bg-gold px-8 py-4 rounded-full text-white font-semibold shadow-lg hover:bg-gold-dark transition">
            Request Certification Copies
          </Link>
        </div>
      </section>
    </div>
  );
}
