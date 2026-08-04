import { useUI } from "../i18n/UIContext";
import Seo from "../components/Seo";
import { siteConfig } from "../config/site";

const copy = {
  en: {
    title: "Privacy Policy",
    intro: "This policy describes how Vesla Co., Ltd. ('we', 'us') collects, uses and shares personal information when you visit veslapack.com or contact us through it. We are committed to GDPR, CCPA and PIPL compliance.",
    sections: [
      { h: "1. Data we collect", b: "When you submit our contact form we receive your name, work email, company, country, the product you are interested in, your estimated order quantity and the free-text project details. When you browse the site we collect anonymized analytics (page views, device, country) and a single locale preference stored in your browser's localStorage." },
      { h: "2. Why we collect it", b: "We use your contact information exclusively to reply to your inquiry, send the requested quotation, ship samples and — only if you opt in — follow up with relevant product news. We do not sell, rent or share your data with third parties for marketing." },
      { h: "3. Where your data is stored", b: "Form submissions are processed on Cloudflare's global edge network and forwarded via the MailChannels transactional email API to our sales inbox. Backups are stored on encrypted cloud infrastructure in the EU (Frankfurt) and US (Virginia) regions. We retain inquiry records for 24 months unless you request earlier deletion." },
      { h: "4. Cookies & tracking", b: "We use a single first-party locale preference stored in localStorage. If you enable Google Analytics or Plausible (set via the VITE_GA_MEASUREMENT_ID / VITE_PLAUSIBLE_DOMAIN env variables) we load the corresponding script. We do not run any advertising, retargeting or cross-site tracking pixels." },
      { h: "5. Your rights", b: "Under GDPR you can request access to, correction of, or deletion of your personal data at any time, free of charge. Email " },
      { h: "6. International transfers", b: "We may transfer your data to processors outside your home jurisdiction (e.g. when you contact us from the EU but our sales team is in China). In those cases we rely on Standard Contractual Clauses and equivalent safeguards." },
      { h: "7. Children", b: "Our site is intended for B2B professionals and is not directed at children under 16. We do not knowingly collect data from minors." },
      { h: "8. Changes to this policy", b: "We will post any material changes on this page and update the 'last updated' date below. Continued use of the site after a change constitutes acceptance of the revised policy." },
      { h: "9. Contact our DPO", b: "For any privacy-related request, email " },
    ],
  },
  kr: {
    title: "개인정보 처리방침",
    intro: "본 정책은 Vesla Co., Ltd.('당사')가 veslapack.com 방문 및 문의를 통해 수집·이용·공유하는 개인정보에 대한 내용을 설명합니다. 당사는 GDPR, CCPA, PIPL을 준수합니다.",
    sections: [
      { h: "1. 수집하는 데이터", b: "문의 양식 제출 시 성함, 업무용 이메일, 회사, 국가, 관심 제품, 예상 주문 수량, 자유 기술 프로젝트 세부사항을 수집합니다. 사이트 이용 시에는 익명화된 분석 데이터(페이지 뷰, 기기, 국가)와 브라우저 localStorage에 저장된 단일 언어 설정을 수집합니다." },
      { h: "2. 수집 목적", b: "수집한 정보는 문의 회신, 견적서 발송, 샘플 배송 및 (귀하의 동의 시) 관련 제품 정보 안내 목적으로만 사용됩니다. 마케팅을 위해 제3자에게 데이터를 판매·대여·공유하지 않습니다." },
      { h: "3. 데이터 보관 위치", b: "양식 제출 데이터는 Cloudflare 글로벌 엣지 네트워크에서 처리되어 MailChannels 거래 메일 API를 통해 영업팀 수신함으로 전달됩니다. 백업은 EU(프랑크푸르트) 및 US(버지니아) 지역의 암호화된 클라우드 인프라에 저장됩니다. 별도 요청이 없는 한 문의 기록은 24개월간 보관됩니다." },
      { h: "4. 쿠키 및 추적", b: "단일 1st-party 언어 설정을 localStorage에 저장합니다. Google Analytics 또는 Plausible 사용 시(VITE_GA_MEASUREMENT_ID / VITE_PLAUSIBLE_DOMAIN 환경변수) 해당 스크립트를 로드합니다. 광고·리타겟팅·크로스사이트 추적 픽셀은 일체 사용하지 않습니다." },
      { h: "5. 이용자의 권리", b: "GDPR에 따라 언제든지 무료로 개인정보 열람·정정·삭제를 요청할 수 있습니다. 이메일로 연락해 주세요. " },
      { h: "6. 국제 전송", b: "귀하의 관할 외 처리자에게 데이터가 전송될 수 있습니다(예: EU 거주자가 문의 시 영업팀은 중국에 위치). 이 경우 표준계약조항(Standard Contractual Clauses) 및 동등한 보호 장치에 의존합니다." },
      { h: "7. 아동", b: "본 사이트는 B2B 전문가를 대상으로 하며 16세 미만 아동을 대상으로 하지 않습니다. 미성년자의 데이터를 고의로 수집하지 않습니다." },
      { h: "8. 정책 변경", b: "중요한 변경 사항은 본 페이지에 게시하고 하단 '최종 업데이트' 일자를 갱신합니다. 변경 후 사이트 계속 이용 시 개정된 정책에 동의한 것으로 간주됩니다." },
      { h: "9. DPO 연락처", b: "개인정보 관련 요청은 이메일로 연락해 주세요. " },
    ],
  },
  jp: {
    title: "プライバシーポリシー",
    intro: "本ポリシーは、Vesla Co., Ltd.（以下「当社」）が veslapack.com のご訪問およびお問い合わせを通じて取得・利用・共有する個人情報について説明するものです。当社は GDPR、CCPA、PIPL を遵守します。",
    sections: [
      { h: "1. 取得するデータ", b: "お問い合わせフォーム送信時に、お名前、勤務先メール、会社名、国、ご関心製品、想定発注数量、自由記述のプロジェクト詳細を取得します。サイト閲覧時には、匿名化された分析データ（ページビュー、デバイス、国）およびブラウザ localStorage に保存される単一の言語設定を取得します。" },
      { h: "2. 利用目的", b: "取得した情報は、お問合せへのご返信、ご要望のお見積送付、サンプル発送、および（ご同意いただいた場合のみ）関連製品情報のご案内目的にのみ使用します。マーケティング目的での第三者への販売・貸与・共有は一切行いません。" },
      { h: "3. データの保管場所", b: "フォーム送信データは Cloudflare グローバルエッジネットワーク上で処理され、MailChannels トランザクションメール API を介して当社営業チームの受信箱へ転送されます。バックアップは EU（フランクフルト）および US（バージニア）地域の暗号化クラウドインフラに保存されます。別途ご要望のない限り、お問合せ記録は 24 か月間保持します。" },
      { h: "4. クッキー・トラッキング", b: "単一の 1st パーティ言語設定を localStorage に保存します。Google Analytics または Plausible を有効化した場合（VITE_GA_MEASUREMENT_ID / VITE_PLAUSIBLE_DOMAIN 環境変数）、対応するスクリプトを読み込みます。広告・リターゲティング・クロスサイト追跡ピクセルは一切使用しません。" },
      { h: "5. お客様の権利", b: "GDPR に基づき、ご自身の個人情報へのアクセス、訂正、削除をいつでも無償で請求できます。メールにてご連絡ください。" },
      { h: "6. 国際転送", b: "お客様の管轄区域外の処理者へデータが転送される場合があります（例：EU 居住者からのお問合せに対し営業チームが中国に所在する場合）。この場合、標準契約条項（Standard Contractual Clauses）および同等の保護措置に依拠します。" },
      { h: "7. お子様", b: "本サイトは B2B の専門家向けであり、16 歳未満のお子様を対象としていません。未成年者から故意にデータを取得することはありません。" },
      { h: "8. ポリシーの変更", b: "重要な変更は本ページに掲載し、下部の「最終更新日」を更新します。変更後のサイト継続利用は、改訂版ポリシーへの同意とみなされます。" },
      { h: "9. DPO お問い合わせ", b: "プライバシー関連のご請求はメールにてご連絡ください。" },
    ],
  },
  tw: {
    title: "隱私權政策",
    intro: "本政策說明 Vesla Co., Ltd.（以下稱「我們」）如何於您造訪 veslapack.com 或透過本站聯繫我們時，蒐集、使用與分享個人資訊。我們遵循 GDPR、CCPA 與 PIPL。",
    sections: [
      { h: "1. 我們蒐集的資料", b: "當您提交聯繫表單時，我們會收到您的姓名、 工作電子郵件、公司、國家、您感興趣的產品、預估訂購數量與自由填寫的專案細節。瀏覽網站時，我們會蒐集匿名化的分析資料（瀏覽量、裝置、國家），以及儲存於您瀏覽器 localStorage 的單一語系偏好。" },
      { h: "2. 蒐集目的", b: "我們僅將您的聯繫資訊用於回覆詢盤、寄送報價、運送樣品，以及（僅在您同意後）相關產品新知。我們不會將您的資料出售、出租或分享給第三方以用於行銷。" },
      { h: "3. 資料儲存位置", b: "表單提交資料於 Cloudflare 全球邊緣網路處理，並透過 MailChannels 交易型電子郵件 API 轉發至我們的業務郵箱。備份儲存於 EU（法蘭克福）與 US（維吉尼亞）區域的加密雲端基礎設施。除非您要求提前刪除，否則我們保留詢盤紀錄 24 個月。" },
      { h: "4. Cookie 與追蹤", b: "我們僅於 localStorage 儲存單一一方語系偏好。若您啟用 Google Analytics 或 Plausible（透過 VITE_GA_MEASUREMENT_ID / VITE_PLAUSIBLE_DOMAIN 環境變數），將載入對應腳本。我們不運行任何廣告、再行銷或跨站追蹤像素。" },
      { h: "5. 您的權利", b: "依據 GDPR，您得隨時免費請求查詢、更正或刪除您的個人資料。請來信聯繫。" },
      { h: "6. 跨境傳輸", b: "我們可能將您的資料傳輸至您居住司法管轄區以外的處理者（例如您從 EU 聯繫我們，但業務團隊位於中國）。在此情況下我們仰賴標準契約條款（Standard Contractual Clauses）與相當之防護機制。" },
      { h: "7. 兒童", b: "本站以 B2B 專業人士為對象，並非針對 16 歲以下兒童。我們不會刻意蒐集未成年人資料。" },
      { h: "8. 政策變更", b: "任何重大變更將公布於本頁並更新下方「最後更新日期」。於變更後繼續使用本站，即視為同意修訂後之政策。" },
      { h: "9. 聯絡 DPO", b: "任何隱私相關請求，請來信聯繫。" },
    ],
  },
};

export default function Privacy() {
  const { locale } = useUI();
  const c = copy[locale];
  const dpo = siteConfig.email;
  const lastUpdated = "2026-08-01";

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
      <Seo
        title={c.title}
        description="Vesla privacy policy — GDPR, CCPA and PIPL compliant. How we collect, store and protect your personal data."
        path="/privacy"
      />
      <h1 className="font-serif text-4xl font-medium text-ink sm:text-5xl">{c.title}</h1>
      <p className="mt-5 text-sm leading-relaxed text-ink-soft">{c.intro}</p>

      <div className="mt-10 space-y-7 text-sm leading-relaxed text-ink-soft">
        {c.sections.map((s, i) => (
          <section key={i}>
            <h2 className="font-serif text-xl text-ink">{s.h}</h2>
            <p className="mt-2">
              {s.b}
              {(i === 4 || i === 8) && (
                <>
                  <a href={`mailto:${dpo}`} className="font-semibold text-gold-dark underline-offset-4 hover:underline">
                    {dpo}
                  </a>
                  {locale === "en" && ". We respond within 30 days."}
                  {locale === "kr" && ". 30일 이내에 회신드립니다."}
                  {locale === "jp" && "。30日以内にご返信します。"}
                  {locale === "tw" && "，我們將於 30 天內回覆。"}
                </>
              )}
            </p>
          </section>
        ))}
      </div>

      <p className="mt-12 text-xs text-ink-soft">
        Last updated: {lastUpdated} · {siteConfig.legalName}
      </p>
    </div>
  );
}
