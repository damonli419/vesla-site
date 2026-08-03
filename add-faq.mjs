import fs from "fs";

const c = fs.readFileSync("src/data/content.ts", "utf-8");
const faqStart = c.indexOf("export const faqItems");
const faqSection = c.substring(faqStart);
const faqClose = faqSection.indexOf("];");

const newFaqItems = `
  {
    q: { en: "How quickly can I get physical samples for my brand pitch?", kr: "5~7 DHL Express.", jp: "5~7 DHL Express.", tw: "5-7 DHL Express。" },
    a: { en: "We ship a fully decorated sample kit (3-5 items) within 5-7 business days via DHL Express. Rush service (3 days) available for time-sensitive pitches. Kit includes MOQ pricing, decoration options, and closure compatibility guide.", kr: "5~7 영업일 내 풀 데코 샘플 키트 발송. 긴급 시 3일 가능.", jp: "5~7営業日以内にフル装飾サンプルキット発送。緊急時3日対応可。", tw: "5-7 工作日內寄出完整裝飾樣品組。急件 3 天可。" },
  },
  {
    q: { en: "How long does DDP to USA actually take real-world?", kr: "DDP 실제 소요?", jp: "DDP実所要時間？", tw: "DDP 實際多久？" },
    a: { en: "Door-to-door 20-26 calendar days: 14-18d sea freight(Los Angeles), 3-5d customs, 2-3d trucking. Add 5-7d peak season Aug-Oct. Live tracking provided.", kr: "도어 투 도어 20~26일: 해상 14~18일 + 통관 3~5일 + 트럭 2~3일. 성수기 +5~7일.", jp: "ドアツードア20~26日: 海上14~18日+通関3~5日+陸送2~3日。繁忙期+5~7日。", tw: "門到門 20-26 天：海運 14-18 天 + 清關 3-5 天 + 陸運 2-3 天。旺季加 5-7 天。" },
  },
  {
    q: { en: "Are glass bottles EU cosmetic compliant EC 1223/2009?", kr: "EU 화장품 규정 준수?", jp: "EU化粧品規則準拠？", tw: "符合歐盟化妝品法規？" },
    a: { en: "Yes. Type III soda-lime glass complies with EU 1935/2004 and EC 1223/2009 migration limits. ISO 17025-accredited test reports and REACH/RoHS declarations included with every EU shipment.", kr: "네. Type III 소다라임 유리, EU 1935/2004 및 EC 1223/2009 준수. ISO 17025 시험 보고서 제공.", jp: "はい。Type IIIソーダライムガラス、EU 1935/2004およびEC 1223/2009準拠。ISO 17025試験報告書付き。", tw: "是的。Type III 鈉鈣玻璃符合 EU 1935/2004 及 EC 1223/2009。附 ISO 17025 測試報告。" },
  },`;

const newFaq = faqSection.substring(0, faqClose) + newFaqItems + "\n];\n\n" + faqSection.substring(faqClose + 2);
const newContent = c.substring(0, faqStart) + newFaq;
fs.writeFileSync("src/data/content.ts", newContent, "utf-8");

const fCount = (newContent.match(/q: \{/g) || []).length;
const bCount = (newContent.match(/slug: "/g) || []).length;
console.log("FAQ:" + fCount + " Blog:" + bCount);
