import { createContext, useContext, useMemo, useState, useEffect, ReactNode } from "react";
import { categoryLabels, type Category } from "../data/products";

export type Locale = "en" | "kr" | "jp" | "tw";

export const localeMeta: Record<Locale, { label: string; flag: string; htmlLang: string }> = {
  en: { label: "English", flag: "EN", htmlLang: "en" },
  kr: { label: "한국어", flag: "KR", htmlLang: "ko" },
  jp: { label: "日本語", flag: "JP", htmlLang: "ja" },
  tw: { label: "繁體中文", flag: "TW", htmlLang: "zh-Hant" },
};

type Dict = Record<string, string>;

const translations: Record<Locale, Dict> = {
  en: {
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.process": "Custom Process",
    "nav.about": "About",
    "nav.resources": "Resources",
    "nav.contact": "Contact",
    "nav.quote": "Get a Quote",
    "footer.explore": "Explore",
    "footer.contact": "Contact",
    "footer.tagline":
      "Custom cosmetic glass packaging supplier serving indie and emerging beauty brands across Europe and North America. From stock molds to fully bespoke bottles — one factory, end to end.",
    "footer.rights": "All rights reserved.",
    "common.viewCollection": "View collection",
    "common.viewAll": "View all",
    "common.sendInquiry": "Send Inquiry",
    "common.chatWhatsapp": "Chat on WhatsApp",
    "common.clearFilters": "Clear all filters",
    "common.backToProducts": "Back to all products",
    "common.youMayLike": "You May Also Like",
    "common.productNotFound": "Product not found",
    "products.title": "All Products",
    "products.subtitle":
      "Every item below is available with custom colors, decoration and closures. Can't find your shape? We build private molds from 10,000 pcs.",
    "products.filter": "Filters",
    "products.count": "product(s)",
    "products.noMatch": "No products match those filters.",
    "filter.category": "Category",
    "filter.material": "Material",
    "filter.capacity": "Capacity",
    "filter.use": "Use",
    "filter.allCategories": "All Categories",
    "filter.mini": "Mini (≤ 15 ml)",
    "filter.standard": "Standard (20 – 60 ml)",
    "filter.large": "Large (60 ml +)",
    "cat.dropper": "Dropper Bottles",
    "cat.jar": "Cream Jars",
    "cat.oil": "Essential Oil Bottles",
    "cat.set": "Cosmetic Sets",
    "spec.capacity": "Capacity",
    "spec.material": "Material",
    "spec.neck": "Neck Finish",
    "spec.moq": "MOQ",
    "spec.leadTime": "Lead Time",
    "spec.decoration": "Decoration",
    "spec.sampling": "Sampling",
    "spec.incoterms": "Incoterms",
    "spec.sampling.value": "5–7 days · existing molds",
    "spec.incoterms.value": "EXW / FOB / DDP",
  },
  kr: {
    "nav.home": "홈",
    "nav.products": "제품",
    "nav.process": "맞춤 제작 과정",
    "nav.about": "회사 소개",
    "nav.resources": "리소스",
    "nav.contact": "문의하기",
    "nav.quote": "견적 요청",
    "footer.explore": "둘러보기",
    "footer.contact": "연락처",
    "footer.tagline":
      "유럽과 북미의 인디 및 신생 뷰티 브랜드를 위한 맞춤형 화장품 유리 포장 공급업체. 스톡 몰드부터 완전 맞춤형 보틀까지 — 한 공장에서 전 과정.",
    "footer.rights": "모든 권리 보유.",
    "common.viewCollection": "컬렉션 보기",
    "common.viewAll": "전체 보기",
    "common.sendInquiry": "문의 보내기",
    "common.chatWhatsapp": "WhatsApp 상담",
    "common.clearFilters": "필터 초기화",
    "common.backToProducts": "전체 제품으로 돌아가기",
    "common.youMayLike": "함께 보면 좋은 제품",
    "common.productNotFound": "제품을 찾을 수 없습니다",
    "products.title": "전체 제품",
    "products.subtitle":
      "모든 제품은 맞춤 색상, 데코레이션 및 클로저 옵션이 가능합니다. 원하시는 형태가 없으신가요? 10,000개부터 프라이빗 몰드 제작이 가능합니다.",
    "products.filter": "필터",
    "products.count": "개의 제품",
    "products.noMatch": "선택하신 조건에 맞는 제품이 없습니다.",
    "filter.category": "카테고리",
    "filter.material": "소재",
    "filter.capacity": "용량",
    "filter.use": "용도",
    "filter.allCategories": "전체 카테고리",
    "filter.mini": "미니 (15ml 이하)",
    "filter.standard": "스탠다드 (20–60ml)",
    "filter.large": "라지 (60ml 이상)",
    "filter.set": "멀티 사이즈 세트",
    "cat.dropper": "드롭퍼 보틀",
    "cat.jar": "크림 자",
    "cat.oil": "에센셜 오일 보틀",
    "cat.set": "코스메틱 세트",
    "spec.capacity": "용량",
    "spec.material": "소재",
    "spec.neck": "넥 파이니시",
    "spec.moq": "최소주문수량",
    "spec.leadTime": "리드타임",
    "spec.decoration": "데코레이션",
    "spec.sampling": "샘플",
    "spec.incoterms": "인코텀스",
    "spec.sampling.value": "5–7일 · 기존 몰드",
    "spec.incoterms.value": "EXW / FOB / DDP",
  },
  jp: {
    "nav.home": "ホーム",
    "nav.products": "製品",
    "nav.process": "カスタマイズの流れ",
    "nav.about": "会社概要",
    "nav.resources": "リソース",
    "nav.contact": "お問い合わせ",
    "nav.quote": "見積もり依頼",
    "footer.explore": "カテゴリー",
    "footer.contact": "お問い合わせ",
    "footer.tagline":
      "ヨーロッパと北米のインディーおよび新興ビューティーブランド向けに、カスタマイズされた化粧品ガラス包装を提供。在庫型から完全オリジナルボトルまで、ワンストップで対応します。",
    "footer.rights": "無断複写・転載を禁じます。",
    "common.viewCollection": "コレクションを見る",
    "common.viewAll": "すべて見る",
    "common.sendInquiry": "問い合わせる",
    "common.chatWhatsapp": "WhatsAppで相談",
    "common.clearFilters": "フィルターをクリア",
    "common.backToProducts": "製品一覧へ戻る",
    "common.youMayLike": "関連製品",
    "common.productNotFound": "製品が見つかりません",
    "products.title": "すべての製品",
    "products.subtitle":
      "すべての製品はカスタムカラー・デコレーション・クロージャーに対応。お探しの形状がなくても、10,000個からプライベートモールドを製作します。",
    "products.filter": "フィルター",
    "products.count": "件",
    "products.noMatch": "条件に一致する製品がありません。",
    "filter.category": "カテゴリー",
    "filter.material": "素材",
    "filter.capacity": "容量",
    "filter.use": "用途",
    "filter.allCategories": "すべてのカテゴリー",
    "filter.mini": "ミニ (15ml以下)",
    "filter.standard": "スタンダード (20–60ml)",
    "filter.large": "ラージ (60ml以上)",
    "cat.dropper": "ドロッパーボトル",
    "cat.jar": "クリームジャー",
    "cat.oil": "エッセンシャルオイルボトル",
    "cat.set": "コスメティックセット",
    "spec.capacity": "容量",
    "spec.material": "素材",
    "spec.neck": "ネック仕上げ",
    "spec.moq": "最小発注数量",
    "spec.leadTime": "リードタイム",
    "spec.decoration": "デコレーション",
    "spec.sampling": "サンプル",
    "spec.incoterms": "インコタームズ",
    "spec.sampling.value": "5–7日 · 既存モールド",
    "spec.incoterms.value": "EXW / FOB / DDP",
  },
  tw: {
    "nav.home": "首頁",
    "nav.products": "產品",
    "nav.process": "客製流程",
    "nav.about": "關於我們",
    "nav.resources": "資源中心",
    "nav.contact": "聯絡我們",
    "nav.quote": "索取報價",
    "footer.explore": "瀏覽",
    "footer.contact": "聯絡",
    "footer.tagline":
      "服務歐美中小型美妝品牌的客製化化妝品玻璃包裝供應商。從現有模具到完全訂製瓶身，一間工廠全程把關。",
    "footer.rights": "保留所有權利。",
    "common.viewCollection": "查看系列",
    "common.viewAll": "查看全部",
    "common.sendInquiry": "發送詢盤",
    "common.chatWhatsapp": "WhatsApp 洽詢",
    "common.clearFilters": "清除全部篩選",
    "common.backToProducts": "返回所有產品",
    "common.youMayLike": "您可能也喜歡",
    "common.productNotFound": "找不到此產品",
    "products.title": "所有產品",
    "products.subtitle":
      "以下每款產品皆支援客製顏色、裝飾與瓶蓋配件。找不到您的瓶型？我們 10,000 瓶起即可開立私模。",
    "products.filter": "篩選",
    "products.count": "件產品",
    "products.noMatch": "沒有符合條件的產品。",
    "filter.category": "產品分類",
    "filter.material": "材質",
    "filter.capacity": "容量",
    "filter.use": "用途",
    "filter.allCategories": "所有分類",
    "filter.mini": "迷你 (15ml 以下)",
    "filter.standard": "標準 (20 – 60ml)",
    "filter.large": "大瓶 (60ml 以上)",
    "cat.dropper": "滴管瓶",
    "cat.jar": "膏霜瓶",
    "cat.oil": "精油瓶",
    "cat.set": "化妝品套裝",
    "spec.capacity": "容量",
    "spec.material": "材質",
    "spec.neck": "瓶口規格",
    "spec.moq": "最低起訂量",
    "spec.leadTime": "交期",
    "spec.decoration": "表面處理",
    "spec.sampling": "打樣",
    "spec.incoterms": "貿易條件",
    "spec.sampling.value": "5–7 天 · 既有模具",
    "spec.incoterms.value": "EXW / FOB / DDP",
  },
};

interface Ctx {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
  catLabel: (c: Category) => string;
}

const UICtx = createContext<Ctx | null>(null);

const STORAGE_KEY = "yt-locale";

export function UIProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "en";
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && stored in translations) return stored;
    return "en";
  });

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = localeMeta[l].htmlLang;
  };

  useEffect(() => {
    document.documentElement.lang = localeMeta[locale].htmlLang;
  }, [locale]);

  const value = useMemo<Ctx>(
    () => ({
      locale,
      setLocale,
      t: (key: string) => translations[locale][key] ?? translations.en[key] ?? key,
      catLabel: (c: Category) => categoryLabels[c][locale] ?? categoryLabels[c].en,
    }),
    [locale]
  );

  return <UICtx.Provider value={value}>{children}</UICtx.Provider>;
}

export function useUI() {
  const ctx = useContext(UICtx);
  if (!ctx) throw new Error("useUI must be used within UIProvider");
  return ctx;
}
