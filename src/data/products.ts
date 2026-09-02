export type Category = "serum" | "jar" | "set" | "vial";

export const categoryLabels: Record<Category, { en: string; kr: string; jp: string; tw: string }> = {
  serum: { en: "Serum Bottles", kr: "ì¸ë¼ ë³´í", jp: "ã»ã©ã ããã«", tw: "ç²¾è¯æ¶²ç¶" },
  jar: { en: "Cream Jars", kr: "í¬ë¦¼ ì", jp: "ã¯ãªã¼ã ã¸ã£ã¼", tw: "èéç¶" },
  set: { en: "Cosmetic Sets", kr: "ì½ì¤ë©í± ì¸í¸", jp: "ã³ã¹ã¡ãã£ãã¯ã»ãã", tw: "åå¦åå¥è£" },
  vial: { en: "Glass Vials", kr: "ì ë¦¬ ë°ì´ì", jp: "ã¬ã©ã¹ãã¤ã¢ã«", tw: "ç»çç¶" },
};

export interface Product {
  id: string;
  seoSlug: string;
  name: string;
  specTitle?: string;
  /** Override the auto-generated <title> tag with a CTR-optimized version (MOQ/price/DDP hooks). */
  seoTitle?: string;
  nameI18n: { kr: string; jp: string; tw: string };
  category: Category;
  material: string;
  capacity: string;
  capacityGroup: "mini" | "standard" | "large" | "set";
  use: string;
  moq: string;
  leadTime: string;
  decoration: string;
  image: string;
  gallery: string[];
  description: string;
  descriptionI18n: { kr: string; jp: string; tw: string };
  features: string[];
  brandName?: string;
  mpn?: string;
  sku?: string;
  seoKeywords: string[];
  seoTags: string[];
  technicalTable?: { label: string; value: string }[];
  faqs?: { q: string; a: string }[];
}


export const products: Product[] = [
  {
    id: "heart-dropper-30ml",
    seoSlug: "heart-shaped-glass-dropper-bottle-manufacturer",
    name: "Heart-Shaped Dropper Bottle",
    specTitle: "30ml Heart-Shaped Glass Dropper Bottle",
    nameI18n: { kr: "íí¸í ëë¡­í¼ ë³´í", jp: "ãã¼ãåãã­ããã¼ããã«", tw: "å¿å½¢æ»´ç®¡ç¶" },
    category: "serum",
    material: "Glass",
    capacity: "30 ml",
    capacityGroup: "standard",
    use: "Serum",
    moq: "5,000 pcs",
    leadTime: "25â30 days",
    decoration: "Frosting, silk screen, spray coating, gradient coating",
    image: "/images/products/heart-dropper-30ml/main.webp",
    gallery: [
      "/images/products/heart-dropper-30ml/gallery-0.webp",
      "/images/products/heart-dropper-30ml/gallery-1.webp",
      "/images/products/heart-dropper-30ml/gallery-2.webp",
      "/images/products/heart-dropper-30ml/gallery-3.webp"
    ],
    description:
      "A sculptural heart-shaped dropper bottle that doubles as a brand statement piece. Available in matte black, matte white, or translucent gradient glass with a matching heart-shaped dropper bulb â the ultimate holiday, Valentine's Day or love-themed beauty launch.",
    descriptionI18n: {
      kr: "íí¸ ëª¨ìì ì¡°íì ì¸ ëë¡­í¼ ë³´íë¡, ê·¸ ìì²´ë¡ ë¸ëë ìê·¸ëì²ê° ë©ëë¤. ë§¤í¸ ë¸ë, ë§¤í¸ íì´í¸, ë°í¬ëª ê·¸ë¼ë°ì´ì ê¸ëì¤ ì¤ ì í ê°ë¥íë©°, ì´ì¸ë¦¬ë íí¸í ëë¡­í¼ ë²ë¸ê¹ì§ â íë¦¬ë°ì´, ë°ë íì¸ë°ì´, ë¬ë¸ íë§ ë·°í° ë°ì¹­ì ìí ê¶ê·¹ì í¨í¤ì§.",
      jp: "ããèªä½ããã©ã³ãã®ã·ã°ããã£ã¼ã¨ãªããç«ä½æã®ãããã¼ãåãã­ããã¼ããã«ãããããã©ãã¯ãããããã¯ã¤ããåéæã°ã©ãã¼ã·ã§ã³ã¬ã©ã¹ããé¸ã¹ããæãã®ãã¼ãåãã­ããã¼ãã«ãä»ã â ããªãã¼ããã¬ã³ã¿ã¤ã³ãã©ããã¼ãã®ãã¥ã¼ãã£ã¼çºå£²ã«æé©ã",
      tw: "éå¡æå¿å½¢æ»´ç®¡ç¶ï¼æ¬èº«å°±æ¯åçæ¨èªæ§çè¦è¦ºå®åãå¯é¸é§é¢é»ãé§é¢ç½æåéææ¼¸å±¤ç»çï¼æ­éåæ¬¾å¿å½¢æ»´ç®¡ç â ç¯æ¥ç¦®çãæäººç¯éå®ãææä¸»é¡ç¾å¦ä¸å¸ççµæ¥µåè£ã",
    },
    features: [
      "Sculptural heart-shaped body â instant shelf standout",
      "Matte black, matte white & gradient glass options",
      "Matching heart-shaped dropper bulb",
      "Gold or matte black collar finishing",
      "Custom silk-screen branding on frosted surface",
      "Seasonal & holiday gift-set ready",
    ],
    brandName: "Vesla",
    mpn: "VSL-HEART-DROPPER-30ML",
    sku: "VSL-HEART-DROPPER-30ML-5K",
    seoKeywords: ["heart shaped glass dropper bottle", "valentine edition serum bottle wholesale", "unique cosmetic glass bottle shape", "limited edition skincare packaging", "gift ready glass dropper bottle", "heart silhouette perfume oil bottle", "custom shape glass dropper OEM", "Instagram worthy serum bottle design", "small batch unique glass bottle", "heart dropper bottle private label", "luxury gift packaging glass bottle", "beauty brand limited run packaging"],
    seoTags: ["Serum Packaging", "Dropper Bottle", "Skincare Glass", "Custom OEM", "Low MOQ", "FDA Approved", "DDP Shipping"],
    technicalTable: [
      { label: "Glass Wall Thickness", value: "4.5mm (Premium Heavy-Base)" },
      { label: "Empty Weight", value: "92g (Â±2g)" },
      { label: "Neck Finish", value: "18/415 Standard" },
      { label: "Glass Grade", value: "Grade A Flint Glass (High Clarity)" },
      { label: "Light Transmission", value: "Opaque (Matte versions) / 92% (Clear)" },
      { label: "Coating Durability", value: "Passes 3M tape & alcohol rub tests" },
      { label: "Lead Content", value: "0% (Lead-free eco glass)" },
    ],
    faqs: [
      { q: "Is the heart-shaped bottle compatible with standard serum droppers?", a: "Yes, it uses an 18/415 standard neck. We provide matching heart-shaped bulbs, but standard round bulbs also fit perfectly." },
      { q: "What is the MOQ for custom gradient colors?", a: "The minimum order quantity for custom Pantone gradient coating is 5,000 units per color scheme." },
      { q: "Is this glass bottle suitable for high-viscosity gels?", a: "The 18/415 neck and our standard pipette work best for low to medium viscosity serums and oils. For very thick gels, we recommend testing with our wide-pipette sample first." }
    ]
  },
  {
    id: "flat-square-dropper",
    seoSlug: "custom-flat-square-glass-dropper-bottle-supplier",
    name: "Flat Square Glass Dropper Bottle",
    specTitle: "30ml & 50ml Flat Square Glass Dropper Bottle",
    nameI18n: { kr: "íë« ì¤íì´ ê¸ëì¤ ëë¡­í¼ ë³´í", jp: "ãã©ããã¹ã¯ã¨ã¢ ã¬ã©ã¹ãã­ããã¼ããã«", tw: "æå¹³æ¹å½¢ç»çæ»´ç®¡ç¶" },
    category: "serum",
    material: "Glass",
    capacity: "30 / 50 ml",
    capacityGroup: "standard",
    use: "Serum",
    moq: "5,000 pcs",
    leadTime: "25â30 days",
    decoration: "Frosting, gradient coating, silk screen, color spray",
    image: "/images/products/flat-square-dropper/main.webp",
    gallery: [
      "/images/products/flat-square-dropper/gallery-0.webp",
      "/images/products/flat-square-dropper/gallery-1.webp",
      "/images/products/flat-square-dropper/gallery-2.webp",
      "/images/products/flat-square-dropper/gallery-3.webp"
    ],
    description:
      "A modern flat-square silhouette with softly rounded corners â a sleek alternative to the classic cylinder. Available in 30 ml and 50 ml with frosted, gradient, amber or matte beige finishes. A perfect fit for minimalist, gender-neutral and clinical skincare lines.",
    descriptionI18n: {
      kr: "ë¶ëë½ê² ë¥ê·¼ ëª¨ìë¦¬ì ëª¨ëí íë« ì¤íì´ ì¤ë£¨ì£ â í´ëìí ìíì ëì²´í  ì¸ë ¨ë ì í. 30mlÂ·50ml ë ê°ì§ ì©ë, íë¡ì¤í¸Â·ê·¸ë¼ë°ì´ìÂ·ì°ë²Â·ë§¤í¸ ë² ì´ì§ ë§ê° ì¤ ì í ê°ë¥. ë¯¸ëë©, ì  ëë¦¬ì¤, í´ë¦¬ëì»¬ ì¤í¨ì¼ì´ ë¼ì¸ì ìë²½íê² ì´ì¸ë¦½ëë¤.",
      jp: "æãããªè§ä¸¸ã®ã¢ãã³ãªãã©ããã¹ã¯ã¨ã¢ã·ã«ã¨ãã â ã¯ã©ã·ãã¯ãªåç­å½¢ã«ä»£ããæ´ç·´ãããé¸æè¢ã30mlÂ·50mlã®2ãµã¤ãºããã­ã¹ãÂ·ã°ã©ãã¼ã·ã§ã³Â·ã¢ã³ãã¼Â·ããããã¼ã¸ã¥ä»ä¸ãããé¸æå¯è½ããããã«ãã¸ã§ã³ãã¼ã¬ã¹ãã¯ãªãã«ã«ã¹ã­ã³ã±ã¢ã©ã¤ã³ã«æé©ã",
      tw: "æååè§çæ©ç»æå¹³æ¹å½¢è¼ªå» â åä»£å³çµ±åæ±çä¿è½é¸æãæä¾ 30ml è 50ml å©ç¨®å®¹éï¼å¯é¸ç£¨ç ãæ¼¸å±¤ãç¥çæé§é¢ç±³è²è¡¨é¢èçãæ¥µé©åæ¥µç°¡ãä¸­æ§ãé«ç¾è­·èåçã",
    },
    features: [
      "Sleek flat-square silhouette â stands out in a sea of round bottles",
      "30 ml & 50 ml dual-size lineup for serum + moisturizer pairing",
      "Frosted, gradient, amber & matte beige finishes",
      "White, black or metallic dropper collar options",
      "Thick base for a premium, weighty hand feel",
      "Custom gradient & Pantone color matching available",
    ],
    brandName: "Vesla",
    mpn: "VSL-FLAT-SQUARE-DROPPER",
    sku: "VSL-FLAT-SQUARE-DROPPER-5K",
    seoKeywords: ["flat square glass dropper bottle", "geometric shape serum bottle wholesale", "modern architectural glass packaging", "square glass bottle custom decoration", "matte finish square dropper OEM", "minimalist skincare bottle supplier", "flat side label area dropper bottle", "premium square glass serum container", "architectural beauty packaging bottle", "square dropper bottle low MOQ China", "custom Pantone color square glass"],
    seoTags: ["Serum Packaging", "Dropper Bottle", "Skincare Glass", "Custom OEM", "Low MOQ", "FDA Approved", "DDP Shipping"],
    technicalTable: [
      { label: "Base Thickness", value: "8mm (Heavy-Base Architectural)" },
      { label: "Wall Thickness", value: "3.8mm" },
      { label: "Neck Finish", value: "18/415 Crimp" },
      { label: "Material", value: "Grade A Flint Glass" },
      { label: "BPA Free", value: "100% Verified" },
      { label: "Compatibility", value: "Oil/Serum/Essence" },
    ],
    faqs: [
      { q: "Can I customize the gradient color?", a: "Yes, we support custom Pantone color matching for gradient spray coating with a 5,000 unit MOQ." },
      { q: "Is this bottle suitable for airline travel?", a: "Yes, the 30ml and 50ml sizes are within TSA liquid limits, and our 18/415 seal is tested for pressure changes." }
    ]
  },
  {
    id: "square-serum-dropper",
    seoSlug: "square-glass-serum-dropper-bottle-manufacturer-100ml",
    name: "Square Glass Serum Dropper Bottle",
    specTitle: "30ml 50ml 100ml Square Glass Serum Dropper Bottle",
    nameI18n: { kr: "ì¤íì´ ê¸ëì¤ ì¸ë¼ ëë¡­í¼ ë³´í", jp: "ã¹ã¯ã¨ã¢ã¬ã©ã¹ ã»ã©ã  ãã­ããã¼ããã«", tw: "æ¹å½¢ç»çç²¾è¯æ¶²æ»´ç®¡ç¶" },
    category: "serum",
    material: "Glass",
    capacity: "30 / 50 / 100 ml",
    capacityGroup: "large",
    use: "Serum",
    moq: "5,000 pcs",
    leadTime: "25â30 days",
    decoration: "Silk screen, hot stamping, frosting, color spray coating",
    image: "/images/products/square-serum-dropper/main.webp",
    gallery: [
      "/images/products/square-serum-dropper/gallery-0.webp",
      "/images/products/square-serum-dropper/gallery-1.webp",
      "/images/products/square-serum-dropper/gallery-2.webp",
      "/images/products/square-serum-dropper/gallery-3.webp"
    ],
    description:
      "A clean, architectural square dropper bottle with crisp edges and premium glass clarity. Available in 30 ml, 50 ml, and 100 ml â the 100 ml jumbo size is a standout for body serums and professional salon lines. Frosted or clear glass with gold, silver, or matte black collar options.",
    descriptionI18n: {
      kr: "ê¹ëí ì§ì ì ê±´ì¶ì ì¸ ì¤íì´ ëë¡­í¼ ë³´í. 30ml, 50ml, 100ml ì¸ ê°ì§ ì©ë â 100ml ì ë³´ ì¬ì´ì¦ë ë°ë ì¸ë¼ ë° íë¡íìë ì´ë¡± ë¼ì¸ì ëë³´ìëë¤. íë¡ì¤í¸ ëë í´ë¦¬ì´ ê¸ëì¤ì ê³¨ë, ì¤ë², ë§¤í¸ ë¸ë ì¹¼ë¼ ìµì ì í ê°ë¥.",
      jp: "ã¯ãªã¼ã³ã§å»ºç¯çãªã¹ã¯ã¨ã¢ãã­ããã¼ããã«ã30mlã50mlã100mlã®3ãµã¤ãºå±é â 100mlã®ã¸ã£ã³ããµã¤ãºã¯ããã£ã»ã©ã ããã­ãã§ãã·ã§ãã«ãµã­ã³ã©ã¤ã³ã®ä¸»å½¹ã«ããã­ã¹ãã¾ãã¯ã¯ãªã¢ã¬ã©ã¹ã«ãã´ã¼ã«ãã»ã·ã«ãã¼ã»ããããã©ãã¯ã®ã«ã©ã¼ãªãã·ã§ã³ã",
      tw: "ä¿è½å»ºç¯æçæ¹å½¢æ»´ç®¡ç¶ï¼æä¾ 30mlã50mlã100ml ä¸ç¨®å®¹é â 100ml å å¤§æ¬¾æ¯èº«é«ç²¾è¯æ¶²èå°æ¥­æ²é¾ç·çäº®é»å®åãå¯é¸ç£¨ç æéæç»çï¼æ­ééãéãé§é¢é»é ¸åã",
    },
    features: [
      "Architectural square body â stands out on shelf & camera",
      "30 / 50 / 100 ml three-size lineup including jumbo format",
      "Frosted or clear glass with gold, silver or matte black collar",
      "Thick glass base for a premium weighty feel",
      "Custom Pantone color coating & gradient options",
      "Compatible with push-button & straight droppers",
    ],
    brandName: "Vesla",
    mpn: "VSL-SQUARE-SERUM-DROPPER",
    sku: "VSL-SQUARE-SERUM-DROPPER-5K",
    seoKeywords: ["square glass serum bottle 100ml", "jumbo size dropper bottle wholesale", "body serum square glass packaging", "professional salon size serum bottle", "large capacity square dropper OEM", "clear square glass bottle bulk", "salon grade skincare glass packaging", "custom frosted square serum bottle", "square dropper with hot stamp logo", "gradient spray square glass bottle", "branded square serum bottle supplier"],
    seoTags: ["Serum Packaging", "Square Bottle", "Dropper Bottle", "Custom OEM", "Low MOQ", "Jumbo Size", "FDA Approved"],
    technicalTable: [
      { label: "Design", value: "90Â° Sharp-Edge Architectural" },
      { label: "Transparency", value: "92.5% (High-Clarity Glass)" },
      { label: "Wall Thickness", value: "4.0mm" },
      { label: "Neck Standard", value: "20/410 Wide-Bore" },
      { label: "Heat Resistance", value: "Up to 80Â°C (Sterilization Ready)" },
    ],
    faqs: [
      { q: "Is the 100ml version glass or plastic?", a: "The 100ml jumbo version is premium thick-wall glass, identical in material quality to our 30ml and 50ml sizes." },
      { q: "What printing works best on square bottles?", a: "Silk-screen printing on the flat surface provides the most crisp and durable result for square bottles." }
    ]
  },
  {
    id: "frosted-blue-dropper-30ml",
    seoSlug: "frosted-blue-glass-dropper-bottle-manufacturer",
    name: "30ml Frosted Blue Dropper Bottle",
    specTitle: "30ml Frosted Blue Glass Dropper Bottle",
    nameI18n: { kr: "30ml íë¡ì¤í¸ ë¸ë£¨ ëë¡­í¼ ë³´í", jp: "30ml ãã­ã¹ããã«ã¼ ãã­ããã¼ããã«", tw: "30ml ç£¨ç èæ»´ç®¡ç¶" },
    category: "serum",
    material: "Glass",
    capacity: "30 ml",
    capacityGroup: "standard",
    use: "Serum",
    moq: "5,000 pcs",
    leadTime: "25â30 days",
    decoration: "Color frosting (blue), silk screen, hot stamping",
    image: "/images/products/frosted-blue-dropper-30ml/main.webp",
    gallery: [
      "/images/products/frosted-blue-dropper-30ml/gallery-0.webp",
      "/images/products/frosted-blue-dropper-30ml/gallery-1.webp",
      "/images/products/frosted-blue-dropper-30ml/gallery-2.webp",
      "/images/products/frosted-blue-dropper-30ml/gallery-3.webp"
    ],
    description:
      "A popular 30 ml frosted blue dropper bottle with a vibrant, Instagram-ready aesthetic. The color frosting is baked into the glass for a permanent, scratch-resistant finish â ideal for hyaluronic acid, niacinamide, and vitamin C serums targeting Gen-Z and millennial skincare audiences.",
    descriptionI18n: {
      kr: "ì ëªíê³  ì¸ì¤íê·¸ë¨ì©ì¼ë¡ ìë²½í 30ml íë¡ì¤í¸ ë¸ë£¨ ëë¡­í¼ ë³´í. ì»¬ë¬ íë¡ì¤í¸ë ì ë¦¬ì ë² ì´í¹ ì²ë¦¬ëì´ ê¸íì ê°í ìêµ¬ ë§ê° â íìë£¨ë¡ ì°, ëì´ìì ìë§ì´ë, ë¹íë¯¼C ì¸ë¼ ë± Zì¸ëì ë°ë ëì¼ íê² ì¤í¨ì¼ì´ì ìµì .",
      jp: "é®®ããã§ã¤ã³ã¹ã¿æ ããã30mlãã­ã¹ããã«ã¼ãã­ããã¼ããã«ãã«ã©ã¼ãã­ã¹ãã¯ã¬ã©ã¹ã«ç¼ãä»ããæ°¸ä¹çãªå·ã¤ãã«ããä»ä¸ã â ãã¢ã«ã­ã³é¸ããã¤ã¢ã·ã³ã¢ããããã¿ãã³Cã»ã©ã ãªã©ãZä¸ä»£ã»ãã¬ãã¢ã«åãã¹ã­ã³ã±ã¢ã«æé©ã",
      tw: "30ml é®®æç£¨ç èæ»´ç®¡ç¶ï¼å·å Instagram ç´çè¦è¦ºå¸å¼åãå½©è²ç£¨ç ç¶é«æº«ççµå¥ç»çï¼æ°¸ä¹é²å® â æ¥µé©åç»å°¿é¸ãè¸é¹¼é¯èºãç¶­ä»å½ C ç²¾è¯æ¶²ç­çæº Z ä¸ä»£èåç¦§ä¸ä»£çè­·èåçã",
    },
    features: [
      "Baked-in color frosting â never peels or scratches",
      "Vibrant blue finish stands out on social media & shelf",
      "Compatible with gold, silver or matte black dropper collar",
      "Thick base for a premium, high-perceived-value weight",
      "Custom silk-screen or hot-stamp branding available",
      "Stocked 30 ml mold â fast 5-day sampling",
    ],
    brandName: "Vesla",
    mpn: "VSL-FROSTED-BLUE-DROPPER-30ML",
    sku: "VSL-FROSTED-BLUE-DROPPER-30ML-5K",
    seoKeywords: ["frosted blue glass dropper bottle OEM", "baked in color glass bottle factory", "permanent color frosting dropper bottle", "blue matte glass serum packaging", "scratch resistant colored glass bottle", "Instagram friendly blue serum bottle", "Gen Z skincare packaging glass", "vibrant colored glass dropper supplier", "custom color frosted glass manufacturer", "pantone matched blue glass bottle", "durable color glass dropper wholesale", "trending blue skincare bottle 2026"],
    seoTags: ["Serum Packaging", "Frosted Blue Glass", "Dropper Bottle", "Custom OEM", "Low MOQ", "Color Frosting", "FDA Approved"],
    technicalTable: [
      { label: "Frosting Type", value: "Baked-In Ceramic (Scratch-Resistant)" },
      { label: "UV Barrier", value: "85% Blue Light Filtering" },
      { label: "Neck Finish", value: "18/415" },
      { label: "Glass Purity", value: "Heavy-Metal Free (RoHS)" },
      { label: "Weight", value: "82g" },
    ],
    faqs: [
      { q: "Will the blue color peel off?", a: "No. The color is fused into the glass during a high-temperature baking process, making it resistant to chemicals and scratches." }
    ]
  },
  {
    id: "flat-shoulder-dropper-30ml",
    seoSlug: "flat-shoulder-glass-dropper-bottle-supplier",
    name: "30ml Flat Shoulder Empty Dropper Bottle",
    specTitle: "30ml Flat Shoulder Empty Glass Dropper Bottle",
    nameI18n: { kr: "30ml íë« ìë ëë¡­í¼ ë³´í", jp: "30ml ãã©ããã·ã§ã«ãã¼ ãã­ããã¼ããã«", tw: "30ml å¹³è©æ»´ç®¡ç©ºç¶" },
    category: "serum",
    material: "Glass",
    capacity: "30 ml",
    capacityGroup: "standard",
    use: "Serum",
    moq: "5,000 pcs",
    leadTime: "20â25 days",
    decoration: "Silk screen, hot stamping, frosting, color spray",
    image: "/images/products/flat-shoulder-dropper-30ml/main.webp",
    gallery: [
      "/images/products/flat-shoulder-dropper-30ml/gallery-0.webp",
      "/images/products/flat-shoulder-dropper-30ml/gallery-1.webp",
      "/images/products/flat-shoulder-dropper-30ml/gallery-2.webp",
      "/images/products/flat-shoulder-dropper-30ml/gallery-3.webp"
    ],
    description:
      "A classic flat-shoulder 30 ml dropper bottle with a low-profile, minimalist silhouette. The flat shoulder design creates a clean label area and a modern, understated look on shelf. Clear glass with gold or silver collar â an ideal entry-level serum bottle for new brand launches and private-label skincare lines.",
    descriptionI18n: {
      kr: "ë¡ì° íë¡íì¼ì ë¯¸ëë©í ì¤ë£¨ì£ì ê°ì§ í´ëì íë« ìë 30ml ëë¡­í¼ ë³´í. íë« ìë ëìì¸ì ê¹ëí ë¼ë²¨ ìì­ì ì ê³µíë©° ì ë° ììì ëª¨ëíê³  ì ì ë ëëì ì¤ëë¤. í´ë¦¬ì´ ê¸ëì¤ì ê³¨ë ëë ì¤ë² ì¹¼ë¼ â ì ê· ë¸ëë ë¡ ì¹­ ë° PB ì¤í¨ì¼ì´ ë¼ì¸ì ì´ìì ì¸ ìí¸ë¦¬ê¸ ì¸ë¼ ë³´í.",
      jp: "ã­ã¼ãã­ãã¡ã¤ã«ã§ãããã«ãªã·ã«ã¨ããã®ã¯ã©ã·ãã¯ãªãã©ããã·ã§ã«ãã¼30mlãã­ããã¼ããã«ããã©ããã·ã§ã«ãã¼ãã¶ã¤ã³ããã£ããã¨ããã©ãã«ã¨ãªã¢ãçã¿åºããæ£ã®ä¸ã§ã¢ãã³ã§æ§ãããªå°è±¡ãä¸ãã¾ããã¯ãªã¢ã¬ã©ã¹ã«ã´ã¼ã«ãã¾ãã¯ã·ã«ãã¼ã«ã©ã¼ â æ°ãã©ã³ãã®ç«ã¡ä¸ãããã©ã¤ãã¼ããã©ã³ãã®ã¹ã­ã³ã±ã¢ã©ã¤ã³ã«æé©ãªã¨ã³ããªã¼ã¯ã©ã¹ã®ã»ã©ã ããã«ã",
      tw: "ä½èª¿æ¥µç°¡è¼ªå»çç¶å¸å¹³è© 30ml æ»´ç®¡ç¶ï¼å¹³è©è¨­è¨æä¾ä¹¾æ·¨çæ¨ç±¤ååï¼é³åæ¶ä¸åç¾ç¾ä»£å§æçæ°£è³ªãéæç»çæ­ééè²æéè²é ¸å â æ¯åçååµèèªæåçè­·èç·ççæ³å¥éç´ç²¾è¯æ¶²ç¶ã",
    },
    features: [
      "Clean flat-shoulder silhouette â modern, minimal, label-ready",
      "30 ml ideal size for facial serums and oils",
      "Clear glass with gold or silver dropper collar",
      "Compatible with straight & push-button dropper assemblies",
      "Fast 5-day sample turnaround on stocked molds",
      "Low MOQ 5,000 pcs â perfect for indie brand launches",
    ],
    brandName: "Vesla",
    mpn: "VSL-FLAT-SHOULDER-DROPPER-30ML",
    sku: "VSL-FLAT-SHOULDER-DROPPER-30ML-5K",
    seoKeywords: ["flat shoulder dropper bottle clear glass", "classic clear dropper bottle wholesale", "label ready glass serum bottle", "entry level cosmetic glass packaging", "startup skincare brand dropper bottle", "clear glass dropper bottle stock mold", "minimal clean serum bottle design", "low cost glass dropper bottle OEM", "affordable custom glass serum packaging", "standard flat shoulder bottle bulk", "clear glass dropper gold collar option"],
    seoTags: ["Serum Packaging", "Flat Shoulder Bottle", "Dropper Bottle", "Custom OEM", "Low MOQ", "Clear Glass", "FDA Approved"],
    technicalTable: [
      { label: "Shoulder Style", value: "90Â° Flat-Flush Design" },
      { label: "Label Area", value: "Maximum Cylindrical Surface" },
      { label: "Wall Thickness", value: "3.2mm" },
      { label: "Glass Quality", value: "ISO 9001 Food-Grade" },
    ],
    faqs: [
      { q: "Is this bottle in stock?", a: "Yes, we maintain inventory of clear flat-shoulder 30ml bottles for fast sampling (5 days)." }
    ]
  },
  {
    id: "matte-black-serum-bottle",
    seoSlug: "custom-matte-black-glass-serum-bottle-manufacturer",
    name: "Matte Black Glass Serum Bottle",
    specTitle: "5ml-100ml Matte Black Glass Serum Bottle",
    seoTitle: "Matte Black Serum Bottle Manufacturer | 5-100ml, Low MOQ 5,000 â Vesla",
    nameI18n: { kr: "ë§¤í¸ ë¸ë ê¸ëì¤ ì¸ë¼ ë³´í", jp: "ããããã©ãã¯ ã¬ã©ã¹ ã»ã©ã ããã«", tw: "é§é¢é»ç»çç²¾è¯æ¶²ç¶" },
    category: "serum",
    material: "Glass",
    capacity: "5 / 10 / 15 / 20 / 30 / 50 / 100 ml",
    capacityGroup: "large",
    use: "Serum",
    moq: "5,000 pcs",
    leadTime: "25â30 days",
    decoration: "Matte black spray coating, silk screen, hot stamping",
    image: "/images/products/matte-black-serum-bottle/main.webp",
    gallery: [
      "/images/products/matte-black-serum-bottle/gallery-0.webp",
      "/images/products/matte-black-serum-bottle/gallery-1.webp",
      "/images/products/matte-black-serum-bottle/gallery-2.webp",
      "/images/products/matte-black-serum-bottle/gallery-3.webp"
    ],
    description:
      "A sleek matte black glass serum bottle with a soft-touch feel and seven size options â from 5 ml sample vials to 100 ml professional sizes. The matte finish photographs with zero glare, making it a favorite for high-contrast e-commerce product imagery. One of our most requested bottles for premium actives and luxury serum launches.",
    descriptionI18n: {
      kr: "ìíí¸ í°ì¹ ê°ì´ì ì¸ë ¨ë ë§¤í¸ ë¸ë ì¸ë¼ ë³´í. 5ml ìí ë°ì´ìë¶í° 100ml íë¡íìë ì¬ì´ì¦ê¹ì§ 7ê°ì§ ìµì. ë§¤í¸ ë§ê°ì ë¹ ë°ì¬ ìì´ ì´¬ìëì´ ê³ ëë¹ ì´ì»¤ë¨¸ì¤ ì´ë¯¸ì§ì ìµì . íë¦¬ë¯¸ì ì¡í°ë¸ ë° ë­ìë¦¬ ì¸ë¼ ë¡ ì¹­ì ê°ì¥ ë§ì´ ìì²­ëë ë³´íìëë¤.",
      jp: "ã½ããã¿ãããªè³ªæã®æ´ç·´ãããããããã©ãã¯ã¬ã©ã¹ã»ã©ã ããã«ã5mlãµã³ãã«ãã¤ã¢ã«ãã100mlãã­ä»æ§ã¾ã§7ãµã¤ãºå±éããããä»ä¸ãã¯åãåå°ããããã¤ã³ã³ãã©ã¹ããªECç»åã«æé©ããã¬ãã¢ã ã¢ã¯ãã£ããã©ã°ã¸ã¥ã¢ãªã¼ã»ã©ã ã®ã­ã¼ã³ãã§æããªã¯ã¨ã¹ãã®å¤ãããã«ã§ãã",
      tw: "æè§¸é§é¢é»ç»çç²¾è¯æ¶²ç¶ï¼7 ç¨®è¦æ ¼å¾ 5ml è©¦ç¨è£å° 100ml å°æ¥­å®¹éãé§é¢ä¸ååï¼æææé¶ç©åï¼æ¯é«ç«¯æ´»æ§æåèå¥¢è¯ç²¾è¯æ¶²æ°åé¦ç¼ä¸­æåæ­¡è¿çç¶åã",
    },
    features: [
      "Seven sizes from 5 ml sampler to 100 ml full-size",
      "Matte black soft-touch finish â premium feel, zero glare",
      "Compatible with gold, silver or matte black dropper collar",
      "Thick glass base for high-perceived-value weight",
      "Custom silk-screen or hot-stamp logo on bottle body",
      "Stocked molds across all sizes â fast 5-day samples",
    ],
    brandName: "Vesla",
    mpn: "VSL-MATTE-BLACK-SERUM-BOTTLE",
    sku: "VSL-MATTE-BLACK-SERUM-BOTTLE-5K",
    seoKeywords: ["matte black spray coated glass bottle", "soft touch black glass serum packaging", "zero glare cosmetic photography bottle", "luxury black dropper bottle wholesale", "black glass vitamin C serum container", "premium dark glass skincare packaging", "elegant black matte bottle OEM China", "matte black dropper 5ml to 100ml", "custom silk screen black glass bottle", "upscale serum packaging glass black", "black bottle gold collar dropper set", "high end cosmetic glass manufacturer"],
    seoTags: ["Serum Packaging", "Matte Black Glass", "Dropper Bottle", "Custom OEM", "Low MOQ", "Luxury Finish", "FDA Approved"],
    technicalTable: [
      { label: "Coating Type", value: "Soft-Touch Matte (Velvet Feel)" },
      { label: "Light Protection", value: "100% UV/Visible Block" },
      { label: "Material", value: "Recyclable Flint Glass" },
      { label: "Available Sizes", value: "5ml to 100ml Full Run" },
    ],
    faqs: [
      { q: "Is the matte coating fingerprint resistant?", a: "Yes, our specialized soft-touch coating is formulated to minimize oil transfer and fingerprints." }
    ]
  },
  {
    id: "black-flat-shoulder-dropper",
    seoSlug: "black-flat-shoulder-round-dropper-bottle-supplier",
    name: "Black Flat Shoulder Round Dropper Bottle",
    specTitle: "20ml-60ml Black Flat Shoulder Round Glass Dropper Bottle",
    nameI18n: { kr: "ë¸ë íë« ìë ë¼ì´ë ëë¡­í¼ ë³´í", jp: "ãã©ãã¯ ãã©ããã·ã§ã«ãã¼ ã©ã¦ã³ã ãã­ããã¼ããã«", tw: "é»è²å¹³è©åå½¢æ»´ç®¡ç¶" },
    category: "serum",
    material: "Glass",
    capacity: "20 / 30 / 50 / 60 ml",
    capacityGroup: "standard",
    use: "Serum",
    moq: "5,000 pcs",
    leadTime: "25â30 days",
    decoration: "Matte black spray coating, silk screen, hot stamping",
    image: "/images/products/black-flat-shoulder-dropper/main.webp",
    gallery: [
      "/images/products/black-flat-shoulder-dropper/gallery-0.webp",
      "/images/products/black-flat-shoulder-dropper/gallery-1.webp",
      "/images/products/black-flat-shoulder-dropper/gallery-2.webp",
      "/images/products/black-flat-shoulder-dropper/gallery-3.webp"
    ],
    description:
      "A flat-shoulder round dropper bottle in matte black â the clean, understated silhouette that brands return to season after season. The flat shoulder provides a generous, flat label area while the matte finish eliminates reflection in product photography. Four popular sizes from 20 ml to 60 ml cover the sweet spot for face serums and facial oils.",
    descriptionI18n: {
      kr: "ë§¤í¸ ë¸ë ë§ê°ì íë« ìë ë¼ì´ë ëë¡­í¼ ë³´í â ë¸ëëê° ìì¦ë§ë¤ ë¤ì ì°¾ë ê¹ëíê³  ì ì ë ì¤ë£¨ì£. íë« ìëë ëëí ë¼ë²¨ ìì­ì ì ê³µíë©°, ë§¤í¸ ë§ê°ì ì í ì´¬ì ì ë°ì¬ë¥¼ ìì±ëë¤. 20ml~60mlì ì¸ê¸° 4ì¢ ì¬ì´ì¦ë¡ íì´ì¤ ì¸ë¼ê³¼ íì´ì ì¤ì¼ì ìµì í.",
      jp: "ããããã©ãã¯ä»ä¸ãã®ãã©ããã·ã§ã«ãã¼ã©ã¦ã³ããã­ããã¼ããã« â ãã©ã³ããæ¯ã·ã¼ãºã³é¸ã³ç¶ããã¯ãªã¼ã³ã§æ§ãããªã·ã«ã¨ããããã©ããã·ã§ã«ãã¼ã¯åºãã©ãã«ã¨ãªã¢ãæä¾ãããããä»ä¸ããååæ®å½±æã®åå°ãæé¤ã20mlãã60mlã®äººæ°4ãµã¤ãºã§ãã§ã¤ã¹ã»ã©ã ããã§ã¤ã·ã£ã«ãªã¤ã«ã«æé©ã",
      tw: "é§é¢é»å¹³è©åå½¢æ»´ç®¡ç¶ â åçæ¯å­£åè³¼çä¹¾æ·¨å§æå»å½¢ãå¹³è©è¨­è¨æä¾å¯¬ææ¨ç±¤ååï¼é§é¢æè³ªæ¶é¤ç¢åæå½±ååã20ml è³ 60ml åæ¬¾ç±éå®¹éï¼å®ç¾è¦èé¢é¨ç²¾è¯æ¶²èè­·èæ²¹çæ ¸å¿éæ±ã",
    },
    features: [
      "Flat shoulder design â generous label area, clean silhouette",
      "Matte black finish â zero-glare photography, premium touch",
      "Four core sizes: 20 / 30 / 50 / 60 ml",
      "Compatible with gold, silver or matte black dropper collar",
      "Custom silk-screen, hot-stamp or UV print branding",
      "Stocked molds â 5-day sample turnaround",
    ],
    brandName: "Vesla",
    mpn: "VSL-BLACK-FLAT-SHOULDER-DROPPER",
    sku: "VSL-BLACK-FLAT-SHOULDER-DROPPER-5K",
    seoKeywords: ["black flat shoulder round dropper OEM", "matte black dropper bottle 20ml 30ml", "flat shoulder dark glass serum bottle", "no reflection black glass packaging", "black dropper bottle gold collar set", "round shoulder matte black bottle factory", "custom logo black glass dropper", "professional skincare black bottle bulk", "clean label black flat shoulder bottle", "modern matte black serum glass supplier"],
    seoTags: ["Serum Packaging", "Flat Shoulder", "Matte Black", "Custom OEM", "Low MOQ", "Dropper Bottle", "FDA Approved"],
    technicalTable: [
      { label: "Design", value: "Flat-Shoulder Minimalist" },
      { label: "Coating", value: "Matte Black (Non-Reflective)" },
      { label: "Closure Fit", value: "18/415 or 18/410" },
    ],
    faqs: [
      { q: "Can I use a wooden cap with this?", a: "Yes, our flat-shoulder bottles are compatible with both bamboo and plastic collars in 18/415 size." }
    ]
  },
  {
    id: "flat-shoulder-round-dropper-60ml",
    seoSlug: "flat-shoulder-round-glass-dropper-bottle-manufacturer",
    name: "Flat Shoulder Round Glass Dropper Bottle",
    specTitle: "60ml Flat Shoulder Round Glass Dropper Bottle",
    nameI18n: { kr: "íë« ìë ë¼ì´ë ê¸ëì¤ ëë¡­í¼ ë³´í", jp: "ãã©ããã·ã§ã«ãã¼ ã©ã¦ã³ã ã¬ã©ã¹ ãã­ããã¼ããã«", tw: "å¹³è©åå½¢ç»çæ»´ç®¡ç¶" },
    category: "serum",
    material: "Glass",
    capacity: "60 ml",
    capacityGroup: "standard",
    use: "Serum",
    moq: "5,000 pcs",
    leadTime: "25â30 days",
    decoration: "Silk screen, hot stamping, frosting, color spray",
    image: "/images/products/flat-shoulder-round-dropper-60ml/main.webp",
    gallery: [
      "/images/products/flat-shoulder-round-dropper-60ml/gallery-0.webp",
      "/images/products/flat-shoulder-round-dropper-60ml/gallery-1.webp",
      "/images/products/flat-shoulder-round-dropper-60ml/gallery-2.webp",
      "/images/products/flat-shoulder-round-dropper-60ml/gallery-3.webp"
    ],
    description:
      "A 60 ml flat-shoulder round dropper bottle â the larger sibling in our flat-shoulder family, ideal for facial oils, hair serums, and body treatment oils that call for a generous fill volume. Clear glass with gold or silver collar options, ready for custom decoration.",
    descriptionI18n: {
      kr: "íë« ìë ë¼ì´ë 60ml ëë¡­í¼ ë³´í â íì´ì ì¤ì¼, í¤ì´ ì¸ë¼, ë°ë í¸ë¦¬í¸ë¨¼í¸ ì¤ì¼ ë± ëëí ì©ëì´ íìí ì íì ì´ìì ì¸ ëì©ë ë²ì . í´ë¦¬ì´ ê¸ëì¤, ê³¨ë ëë ì¤ë² ì¹¼ë¼ ìµì, ë§ì¶¤ ë°ì½ë ì´ì ê°ë¥.",
      jp: "ãã©ããã·ã§ã«ãã¼ã©ã¦ã³ã60mlãã­ããã¼ããã« â ãã§ã¤ã·ã£ã«ãªã¤ã«ããã¢ã»ã©ã ãããã£ããªã¼ãã¡ã³ããªã¤ã«ãªã©ããã£ã·ãã¨ããå®¹éãæ±ããããè£½åã«æé©ãªå¤§å®¹éçãã¯ãªã¢ã¬ã©ã¹ãã´ã¼ã«ãã¾ãã¯ã·ã«ãã¼ã«ã©ã¼ãªãã·ã§ã³ãã«ã¹ã¿ã è£é£¾å¯¾å¿ã",
      tw: "60ml å¹³è©åå½¢æ»´ç®¡ç¶ â é©åé¢é¨è­·çæ²¹ãé ­é«®ç²¾è¯ãèº«é«è­·çæ²¹ç­éè¦å¤§å®¹éçç¢åãéæç»çæ­ééè²æéè²é ¸åï¼æ¯æè¨è£½è¡¨é¢èçã",
    },
    features: [
      "60 ml generous size for body & hair formulations",
      "Flat shoulder design â wide label area, clean profile",
      "Clear glass with gold or silver dropper collar",
      "Compatible with straight & push-button dropper inserts",
      "Custom silk-screen, hot-stamp or spray coating available",
      "Stocked mold â fast 5-day sample turnaround",
    ],
    brandName: "Vesla",
    mpn: "VSL-FLAT-SHOULDER-ROUND-DROPPER-60ML",
    sku: "VSL-FLAT-SHOULDER-ROUND-DROPPER-60ML-5K",
    seoKeywords: ["60ml clear glass dropper bottle wholesale", "body oil large dropper bottle OEM", "hair serum 60ml glass container", "jumbo clear flat shoulder dropper", "60ml cosmetic glass bottle factory", "large format serum packaging glass", "clear dropper bottle with gold collar", "bulk 60ml cosmetic glass dropper", "treatment oil bottle China supplier", "oversized clear glass serum dropper"],
    seoTags: ["Serum Packaging", "60ml Dropper", "Flat Shoulder", "Custom OEM", "Low MOQ", "Clear Glass", "FDA Approved"],
    technicalTable: [
      { label: "Capacity", value: "60ml (Jumbo Facial Oil)" },
      { label: "Wall Thickness", value: "4.5mm" },
      { label: "Neck Standard", value: "20/410" },
    ],
    faqs: [
      { q: "Is this suitable for hair oils?", a: "Yes, the 60ml capacity and wider 20/410 neck are ideal for thicker hair oil formulations." }
    ]
  },
  {
    id: "matte-black-brown-jar",
    seoSlug: "matte-black-brown-glass-cream-jar-manufacturer",
    name: "30g 50g Matte Black Brown Face Cream Jar",
    specTitle: "30g & 50g Matte Black Brown Face Cream Jar",
    nameI18n: { kr: "30g 50g ë§¤í¸ ë¸ë ë¸ë¼ì´ íì´ì¤ í¬ë¦¼ ì", jp: "30g 50g ããããã©ãã¯ãã©ã¦ã³ ãã§ã¤ã¹ã¯ãªã¼ã ã¸ã£ã¼", tw: "30g 50g é§é¢é»æ£é¢éç¶" },
    category: "jar",
    material: "Glass",
    capacity: "30 / 50 g",
    capacityGroup: "standard",
    use: "Face Cream",
    moq: "5,000 pcs",
    leadTime: "25â30 days",
    decoration: "Matte black-brown color coating, silk screen, hot stamping",
    image: "/images/products/matte-black-brown-jar/main.webp",
    gallery: [
      "/images/products/matte-black-brown-jar/gallery-0.webp",
      "/images/products/matte-black-brown-jar/gallery-1.webp",
      "/images/products/matte-black-brown-jar/gallery-2.webp",
      "/images/products/matte-black-brown-jar/gallery-3.webp"
    ],
    description:
      "A refined matte black-brown cream jar with a soft, velvety surface that photographs beautifully for e-commerce. The double-wall glass body adds weight and perceived luxury, while the wide mouth makes formulation filling effortless. Available in 30 g and 50 g â a go-to for premium face creams, eye creams and overnight masks.",
    descriptionI18n: {
      kr: "ë¶ëë½ê³  ë²¨ë²³ ê°ì íë©´ì ì¸ë ¨ë ë§¤í¸ ë¸ë ë¸ë¼ì´ í¬ë¦¼ ì. ëë¸ì ê¸ëì¤ ë°ëê° ë¬´ê²ê°ê³¼ ê³ ê¸ì¤ë¬ìì ëíê³ , ìì´ë ë§ì°ì¤ë¡ í¬ë®¬ë¬ ì¶©ì ì´ ì©ì´í©ëë¤. 30gê³¼ 50gì¼ë¡ ì ê³µ â íë¦¬ë¯¸ì íì´ì¤ í¬ë¦¼, ìì´ í¬ë¦¼, ì¤ë²ëì´í¸ ë§ì¤í¬ì ìµì .",
      jp: "æããããã­ã¼ãã®ãããªè¡¨é¢ãæã¤æ´ç·´ãããããããã©ãã¯ãã©ã¦ã³ã®ã¯ãªã¼ã ã¸ã£ã¼ãããã«ã¦ã©ã¼ã«ã¬ã©ã¹ããã£ãééæã¨ã©ã°ã¸ã¥ã¢ãªã¼ããæ¼åºããã¯ã¤ããã¦ã¹ã§è£½å¤åå¡«ãã¹ã ã¼ãºã30gã¨50gãã©ã¤ã³ããã â ãã¬ãã¢ã ãã§ã¤ã¹ã¯ãªã¼ã ãã¢ã¤ã¯ãªã¼ã ããªã¼ãã¼ãã¤ããã¹ã¯ã«æé©ã",
      tw: "æè»çµ²çµ¨è¡¨é¢çç²¾ç·»é§é¢é»æ£èéç¶ï¼éå±¤ç»çç¶èº«è³¦äºåéæèå¥¢è¯è³ªæï¼å»£å£è¨­è¨ä¾¿æ¼éæ¹å¡«åãæä¾ 30g è 50g â æ¯é«éé¢éãç¼éãæå®é¢èççæ³ä¹é¸ã",
    },
    features: [
      "Velvet matte black-brown finish â soft touch, zero fingerprints",
      "Double-wall glass for premium weight and durability",
      "Wide mouth for easy filling on standard production lines",
      "Gold, silver or matte black lid options",
      "Custom silk-screen or hot-stamp logo on lid or base",
      "30 g & 50 g â ideal for face cream and eye cream",
    ],
    brandName: "Vesla",
    mpn: "VSL-MATTE-BLACK-BROWN-JAR",
    sku: "VSL-MATTE-BLACK-BROWN-JAR-5K",
    seoKeywords: ["matte black brown cream jar OEM", "soft touch matte glass jar wholesale", "velvet finish face cream container", "double wall glass cream jar factory", "fingerprint resistant cosmetic jar", "premium skincare jar matte coating", "custom color spray coated glass jar", "matte glass cream jar 30g 50g", "luxury face cream packaging glass jar", "thick wall matte finish jar supplier", "brown black matte cosmetic jar China", "private label matte glass cream jar"],
    seoTags: ["Cream Jar", "Matte Finish", "Skincare Packaging", "Custom OEM", "Low MOQ", "Double Wall Glass", "FDA Compliant"],
    technicalTable: [
      { label: "Structure", value: "Double-Wall Glass (Inner/Outer Vessel)" },
      { label: "Empty Weight", value: "125g (50g Jar)" },
      { label: "Sealing", value: "Hand-Applied Gasket + Inner Liner" },
    ],
    faqs: [
      { q: "Is the double-wall glass fragile?", a: "No, our double-wall construction actually increases structural integrity and thermal resistance." }
    ]
  },
  {
    id: "frosted-round-jar-woodgrain",
    seoSlug: "frosted-round-glass-cream-jar-woodgrain-lid-supplier",
    name: "Frosted Round Glass Cream Jar â Woodgrain Lid",
    specTitle: "5g-100g Frosted Round Glass Cream Jar with Woodgrain Lid",
    nameI18n: { kr: "íë¡ì¤í¸ ë¼ì´ë ê¸ëì¤ í¬ë¦¼ ì â ì°ëê·¸ë ì¸ ë¦¬ë", jp: "ãã­ã¹ã ã©ã¦ã³ã ã¯ãªã¼ã ã¸ã£ã¼ â æ¨ç®èª¿ãªãã", tw: "ç£¨ç åå½¢èéç¶ â æ°´è½å°æ¨ç´è" },
    category: "jar",
    material: "Glass",
    capacity: "5 / 10 / 15 / 30 / 50 / 100 g",
    capacityGroup: "standard",
    use: "Face Cream",
    moq: "5,000 pcs",
    leadTime: "25â30 days",
    decoration: "Frosted glass + water transfer-printed woodgrain lid, silk screen, hot stamping",
    image: "/images/products/frosted-round-jar-woodgrain/main.webp",
    gallery: [
      "/images/products/frosted-round-jar-woodgrain/gallery-0.webp",
      "/images/products/frosted-round-jar-woodgrain/gallery-1.webp",
      "/images/products/frosted-round-jar-woodgrain/gallery-2.webp",
      "/images/products/frosted-round-jar-woodgrain/gallery-3.webp"
    ],
    description:
      "A classic frosted round cream jar paired with a premium water transfer-printed woodgrain lid â delivering a warm, natural aesthetic at half the cost of real bamboo. Six sizes from 5 g sample jars to 100 g body butter jars make this one of our most versatile stock programs. Popular with natural and botanical skincare brands across Europe.",
    descriptionI18n: {
      kr: "íë¦¬ë¯¸ì ìì ì¬ ì¸ì ì°ëê·¸ë ì¸ ë¦¬ëì ì¡°íë¥¼ ì´ë£¨ë í´ëì íë¡ì¤í¸ ë¼ì´ë í¬ë¦¼ ì â ì¤ì  ëëë¬´ ëë¹ ì ë°ì ë¹ì©ì¼ë¡ ë°ë»íê³  ìì°ì¤ë¬ì´ ë¯¸íì êµ¬íí©ëë¤. 5g ìí ìë¶í° 100g ë°ë ë²í° ìê¹ì§ 6ê°ì§ ì¬ì´ì¦ë¡, ì ë½ ë´ ë´ì¶ë´ ë° ë³´íëì»¬ ì¤í¨ì¼ì´ ë¸ëëì ê°ì¥ ë¤ì¬ë¤ë¥í ì¬ê³  íë¡ê·¸ë¨ìëë¤.",
      jp: "ã¯ã©ã·ãã¯ãªãã­ã¹ãã©ã¦ã³ãã¯ãªã¼ã ã¸ã£ã¼ã«ãæ°´è»¢åããªã³ãã®æ¨ç®èª¿ãªãããçµã¿åãã â æ¬ç©ã®ç«¹ã®ååã®ã³ã¹ãã§æ¸©ãã¿ã®ããããã¥ã©ã«ãªç¾ãããå®ç¾ã5gã®ãµã³ãã«ã¸ã£ã¼ãã100gã®ããã£ãã¿ã¼ã¸ã£ã¼ã¾ã§6ãµã¤ãºå±éã§ãã¨ã¼ã­ããã®ããã¥ã©ã«ï¼ãã¿ãã«ã«ã¹ã­ã³ã±ã¢ãã©ã³ãã«äººæ°ã®å¤ç¨éã¹ããã¯ãã­ã°ã©ã ã§ãã",
      tw: "ç¶å¸ç£¨ç åå½¢èéç¶æ­éæ°´è½å°æ¨ç´è â ä»¥çå¯¦ç«¹æä¸åçææ¬å¯¦ç¾æº«æèªç¶çç¾æãå¾ 5g è©¦ç¨è£å° 100g èº«é«ä¹³éç¶å­ç¨®å®¹éï¼æ¯æ­æ´²å¤©ç¶èæ¤èè­·èåçææçå¤è¦æ ¼åº«å­æ¹æ¡ã",
    },
    features: [
      "Water transfer-printed woodgrain lid â natural look, durable finish",
      "Six sizes from 5 g to 100 g â covers sampler to full-size",
      "Frosted glass body â soft matte touch, fingerprint-resistant",
      "Inner liner available for formula protection and freshness",
      "Custom silk-screen or hot-stamp logo on lid or base",
      "Fast 5-day sample turnaround on stocked molds",
    ],
    brandName: "Vesla",
    mpn: "VSL-FROSTED-ROUND-JAR-WOODGRAIN",
    sku: "VSL-FROSTED-ROUND-JAR-WOODGRAIN-5K",
    seoKeywords: ["frosted round jar woodgrain lid OEM", "water transfer wood grain cream jar", "natural aesthetic cosmetic glass jar", "botanical skincare packaging supplier", "bamboo alternative lid glass jar", "eco friendly look cosmetic glass package", "warm natural cream jar bulk wholesale", "wood effect lid frosted glass jar", "green beauty packaging glass container", "natural skincare jar 5g to 100g", "rustic chic cosmetic glass packaging"],
    seoTags: ["Cream Jar", "Woodgrain Lid", "Natural Packaging", "Custom OEM", "Low MOQ", "Frosted Glass", "FDA Compliant"],
    technicalTable: [
      { label: "Lid Material", value: "Water-Transfer Printed PP (Wood Effect)" },
      { label: "Body", value: "Acid-Etched Frosted Glass" },
      { label: "Weight", value: "95g (50g jar)" },
    ],
    faqs: [
      { q: "Is the woodgrain lid real wood?", a: "It is a high-definition water transfer print on durable PP plastic, giving you the natural aesthetic of bamboo at a much lower cost and weight." }
    ]
  },
  {
    id: "brown-woodgrain-jar",
    seoSlug: "brown-woodgrain-water-transfer-cream-jar-manufacturer",
    name: "Brown Water Transfer Woodgrain Cream Jar",
    specTitle: "10g-50g Brown Water Transfer Woodgrain Cream Jar",
    nameI18n: { kr: "ë¸ë¼ì´ ìì ì¬ ì°ëê·¸ë ì¸ í¬ë¦¼ ì", jp: "ãã©ã¦ã³æ°´è»¢åæ¨ç®èª¿ã¯ãªã¼ã ã¸ã£ã¼", tw: "æ£è²æ°´è½å°æ¨ç´èéç¶" },
    category: "jar",
    material: "Glass",
    capacity: "10 / 15 / 30 / 50 g",
    capacityGroup: "standard",
    use: "Face Cream",
    moq: "5,000 pcs",
    leadTime: "25â30 days",
    decoration: "Water transfer-printed woodgrain lid (brown), silk screen, hot stamping",
    image: "/images/products/brown-woodgrain-jar/main.webp",
    gallery: [
      "/images/products/brown-woodgrain-jar/gallery-0.webp",
      "/images/products/brown-woodgrain-jar/gallery-1.webp",
      "/images/products/brown-woodgrain-jar/gallery-2.webp",
      "/images/products/brown-woodgrain-jar/gallery-3.webp"
    ],
    description:
      "A warm brown woodgrain cream jar â the rich espresso tone reads as organic skincare, perfect for brands positioning in the botanical, Ayurvedic, and craft-beauty space. The water transfer-printed lid delivers the look and feel of solid wood at one-third the cost and weight. Available in four sizes from 10 g travel minis to 50 g full-size jars.",
    descriptionI18n: {
      kr: "ë°ë»í ë¸ë¼ì´ ì°ëê·¸ë ì¸ í¬ë¦¼ ì â ë¦¬ì¹í ìì¤íë ì í¤ì´ ì¤ê°ë ì¤í¨ì¼ì´ì ëëì ì£¼ë©°, ë³´íëì»¬Â·ìì ë¥´ë² ë¤Â·í¬ëíí¸ ë·°í° ë¸ëëì ì´ìì ìëë¤. ìì ì¬ íë¦°í¸ ë¦¬ëê° ìëª©ì ì§ê°ì 1/3 ë¹ì©ê³¼ ë¬´ê²ë¡ êµ¬íí©ëë¤. 10g í¸ëë¸ ë¯¸ëë¶í° 50g ì ì¬ì´ì¦ê¹ì§ 4ê°ì§ ì©ë.",
      jp: "æ¸©ãã¿ã®ãããã©ã¦ã³æ¨ç®èª¿ã¯ãªã¼ã ã¸ã£ã¼ â ãªãããªã¨ã¹ãã¬ãã½ãã¼ã³ããªã¼ã¬ããã¯ã¹ã­ã³ã±ã¢ã®é°å²æ°ãé¸ãåºãããã¿ãã«ã«ã»ã¢ã¼ã¦ã«ã´ã§ã¼ãã»ã¯ã©ãããã¥ã¼ãã£ã¼ãã©ã³ãã«æé©ãæ°´è»¢åããªã³ããªããããç¡å¢æã®è³ªæã3åã®1ã®ã³ã¹ãã¨ééã§å®ç¾ã10gãã©ãã«ãããã50gãã«ãµã¤ãºã¾ã§4ãµã¤ãºã",
      tw: "æº«ææ£æ¨ç´èéç¶ â æ¿åçæ¿ç¸®åå¡è²èª¿å¸¶åºææ©è­·èè³ªæï¼æ¯æ¤èãé¿è²å éãæå·¥ç¾å¦åçççæ³ä¹é¸ãæ°´è½å°æ¨ç´èä»¥ä¸åä¹ä¸ææ¬èéééåå¯¦æ¨è³ªæã10g æè¡è¿·ä½ è£å° 50g æ­£è£åç¨®å®¹éã",
    },
    features: [
      "Warm brown woodgrain lid â organic skincare aesthetic",
      "Water transfer printed â durable, won't peel or warp",
      "Four sizes: 10g travel mini / 15g sample / 30g daily / 50g full-size",
      "Frosted glass body with rich espresso-toned lid",
      "Custom silk-screen or hot-stamp logo on lid or base",
      "Stocked molds â 5-day sample turnaround",
    ],
    brandName: "Vesla",
    mpn: "VSL-BROWN-WOODGRAIN-JAR",
    sku: "VSL-BROWN-WOODGRAIN-JAR-5K",
    seoKeywords: [
      "brown woodgrain cream jar OEM",
      "espresso tone wood effect lid jar",
      "Ayurvedic skincare glass packaging",
      "organic beauty cream jar supplier",
      "water transfer brown wood grain jar",
      "craft beauty packaging glass container",
      "botanical skincare cream jar wholesale",
      "warm natural wood lid cosmetic jar",
      "travel size 10g glass cream jar",
      "rustic brown wood grain jar factory China",
      "eco aesthetic glass cream jar bulk",
    ],
    seoTags: ["Cream Jar", "Woodgrain Lid", "Organic Aesthetic", "Custom OEM", "Low MOQ", "Botanical Packaging", "FDA Compliant"],
    technicalTable: [
      { label: "Finish", value: "Espresso Toned Woodgrain" },
      { label: "Glass Color", value: "Natural Amber or Frosted Brown" },
    ],
    faqs: [
      { q: "Is this suitable for organic skincare?", a: "Yes, the aesthetic and materials are specifically curated for the botanical and organic beauty market." }
    ]
  },
  {
    id: "amber-serum-vial-dropper",
    seoSlug: "amber-glass-serum-vial-dropper-bottle-supplier",
    specTitle: "Amber Serum Vials: Wholesale Glass Vial Dropper Bottles (5ml-50ml)",
    seoTitle: "Amber Serum Vials Wholesale | 5-50ml, MOQ 5,000 pcs â Vesla Factory Direct",
    name: "Amber Glass Serum Vial Dropper Bottle",
    nameI18n: { kr: "ì°ë² ê¸ëì¤ ì¸ë¼ ë°ì´ì ëë¡­í¼", jp: "ã¢ã³ãã¼ã¬ã©ã¹ ã»ã©ã  ãã¤ã¢ã« ãã­ããã¼", tw: "è¶è²ç²¾è¯æ¶²æç®¡æ»´ç®¡ç¶" },
    category: "vial",
    material: "Glass",
    capacity: "5 / 10 / 20 / 30 / 50 ml",
    capacityGroup: "standard",
    use: "Serum / Injectable / Wellness",
    moq: "5,000 pcs",
    leadTime: "25â30 days",
    decoration: "Amber glass + silk screen, hot stamping",
    image: "/images/products/amber-serum-vial-dropper/main.webp",
    gallery: [
      "/images/products/amber-serum-vial-dropper/gallery-0.webp",
      "/images/products/amber-serum-vial-dropper/gallery-1.webp",
      "/images/products/amber-serum-vial-dropper/gallery-2.webp",
      "/images/products/amber-serum-vial-dropper/gallery-3.webp"
    ],
    description:
      "A classic amber glass vial dropper bottle â the workhorse of serum, essential oil and wellness packaging. Five sizes from 5 ml sample vials to 50 ml full-size droppers. Amber glass provides natural UV protection for light-sensitive formulations like vitamin C, retinol and essential oils. Compatible with rubber teat and screw-cap dropper assemblies.",
    descriptionI18n: {
      kr: "í´ëì ì°ë² ê¸ëì¤ ë°ì´ì ëë¡­í¼ ë³´í â ì¸ë¼, ìì¼ì ì¤ì¼, ì°ëì¤ í¬ì¥ì íµì¬ ì í. 5ml ìíë¶í° 50ml íì¬ì´ì¦ê¹ì§ 5ê°ì§ ì©ë. ì°ë² ê¸ëì¤ê° ë¹íë¯¼C, ë í°ë, ìì¼ì ì¤ì¼ ë± ê´ë¯¼ê°ì± ì íì ìì° UV ì°¨ë¨ì ì ê³µí©ëë¤.",
      jp: "ã¯ã©ã·ãã¯ãªã¢ã³ãã¼ã¬ã©ã¹ãã¤ã¢ã«ãã­ããã¼ããã« â ã»ã©ã ãã¨ãã»ã³ã·ã£ã«ãªã¤ã«ãã¦ã§ã«ãã¹åè£ã®å®çªã5mlãµã³ãã«ãã50mlãã«ãµã¤ãºã¾ã§5ãµã¤ãºãã¢ã³ãã¼ã¬ã©ã¹ããã¿ãã³Cãã¬ããã¼ã«ãã¨ãã»ã³ã·ã£ã«ãªã¤ã«ã«èªç¶UVä¿è­·ãæä¾ã",
      tw: "ç¶å¸è¶è²ç»çæç®¡æ»´ç®¡ç¶ â ç²¾è¯æ¶²ãç²¾æ²¹ãä¿å¥ç¢ååè£çä¸»åã5ml è©¦ç¨è£å° 50ml æ­£è£äºç¨®å®¹éãè¶è²ç»ççºç¶­ä»å½ CãA éãç²¾æ²¹ç­åæéæ¹æä¾å¤©ç¶ç´«å¤ç·é²è­·ã",
    },
    features: [
      "Amber glass â natural UV protection for light-sensitive formulas",
      "Five sizes from 5 ml sampler to 50 ml full-size",
      "Compatible with rubber teat & screw-cap droppers",
      "Smooth cylindrical body ideal for full-wrap labels",
      "Custom silk-screen or hot-stamp logo on bottle body",
      "Stocked molds â fast 5-day sample turnaround",
    ],
    brandName: "Vesla",
    mpn: "VSL-AMBER-SERUM-VIAL-DROPPER",
    sku: "VSL-AMBER-SERUM-VIAL-DROPPER-5K",
    seoKeywords: [
      "amber glass serum vial dropper",
      "brown glass dropper bottle wholesale",
      "UV protective glass vial packaging",
      "essential oil amber dropper bottle",
      "5ml sample glass vial manufacturer",
      "wellness supplement glass dropper",
      "light sensitive serum glass packaging",
      "rubber teat dropper bottle supplier",
      "50ml amber glass vial bulk",
    ],
    seoTags: ["Glass Vial", "Amber Glass", "Serum Dropper", "UV Protection", "Custom OEM", "Low MOQ", "FDA Compliant"],
    technicalTable: [
      { label: "Glass Grade", value: "USP Type III Amber Glass" },
      { label: "UV Protection", value: "Filters 98% of harmful wavelengths" },
      { label: "Durability", value: "Hydrolytic Resistance Grade 1" },
    ],
    faqs: [
      { q: "Why choose amber glass?", a: "Amber glass provides superior protection for light-sensitive ingredients like Vitamin C, Retinol, and Essential Oils compared to clear glass." }
    ]
  },
  {
    id: "gradient-green-cosmetic-set",
    seoSlug: "gradient-green-cosmetic-glass-set-manufacturer",
    name: "Gradient Green Cosmetic Glass Set",
    specTitle: "Gradient Green Cosmetic Glass Set",
    nameI18n: { kr: "ê·¸ë¼ë°ì´ì ê·¸ë¦° ì½ì¤ë©í± ì ë¦¬ ì¸í¸", jp: "ã°ã©ãã¼ã·ã§ã³ã°ãªã¼ã³ ã³ã¹ã¡ãã£ãã¯ã¬ã©ã¹ã»ãã", tw: "æ¼¸å±¤ç¶ åå¦åç»çå¥è£" },
    category: "set",
    material: "Glass",
    capacity: "40 / 100 / 120 / 150 ml + 30 / 50 / 100 g",
    capacityGroup: "set",
    use: "Serum",
    moq: "5,000 pcs per SKU",
    leadTime: "30â35 days",
    decoration: "Gradient spray coating, hot stamping, silk screen, electroplated gold cap",
    image: "/images/products/gradient-green-cosmetic-set/main.webp",
    gallery: [
      "/images/products/gradient-green-cosmetic-set/gallery-0.webp",
      "/images/products/gradient-green-cosmetic-set/gallery-1.webp",
      "/images/products/gradient-green-cosmetic-set/gallery-2.webp",
      "/images/products/gradient-green-cosmetic-set/gallery-3.webp"
    ],
    description:
      "A full-range coordinated cosmetic glass set in deep forest green to seafoam gradient. Includes teardrop lotion bottles (40â150 ml) with gold pump caps, serum droppers, and round cream jars (30â100 g) with domed gold lids. Every piece shares the same gradient finish and gold hardware â a turnkey packaging identity for a single-brand skincare launch.",
    descriptionI18n: {
      kr: "ë¥ í¬ë ì¤í¸ ê·¸ë¦°ìì ì¨í¼ê¹ì§ ì´ì´ì§ë ê·¸ë¼ë°ì´ìì íë ì¸ì§ ì½ì¤ë©í± ì ë¦¬ ì¸í¸. ê³¨ë íí ìº¡ì´ ë¬ë¦° í°ì´ëë¡­ ë¡ì ë³´í(40â150ml), ì¸ë¼ ëë¡­í¼, ëí ê³¨ë ë¦¬ëì í¬ë¦¼ ì(30â100g)ë¡ êµ¬ì±. ëª¨ë  ì íì´ ëì¼í ê·¸ë¼ë°ì´ì ë§ê°ê³¼ ê³¨ë íëì¨ì´ë¥¼ ê³µì  â ë¨ì¼ ë¸ëë ì¤í¨ì¼ì´ ë°ì¹­ì ìí í´í¤ í¨í¤ì§ ìì´ë´í°í°.",
      jp: "ãã£ã¼ããã©ã¬ã¹ãã°ãªã¼ã³ããã·ã¼ãã©ã¼ã ã¸ã®ã°ã©ãã¼ã·ã§ã³ã§çµ±ä¸ããããã«ã©ã¤ã³ã®ã³ã¹ã¡ãã£ãã¯ã¬ã©ã¹ã»ãããã´ã¼ã«ããã³ãã­ã£ããä»ããã£ã¢ãã­ããã­ã¼ã·ã§ã³ããã«ï¼40â150mlï¼ãã»ã©ã ãã­ããã¼ããã¼ã åã´ã¼ã«ããªããã®ã¯ãªã¼ã ã¸ã£ã¼ï¼30â100gï¼ãã©ã¤ã³ããããå¨ã¢ã¤ãã ãåä¸ã®ã°ã©ãã¼ã·ã§ã³ä»ä¸ãã¨ã´ã¼ã«ãéå·ã§çµ±ä¸ â åä¸ãã©ã³ãã®ã¹ã­ã³ã±ã¢ç«ã¡ä¸ãã«æé©ãªã¿ã¼ã³ã­ã¼ããã±ã¼ã¸ã",
      tw: "æ·±æç¶ å°æµ·æ²«ç¶ æ¼¸å±¤çå®æ´åå¦åç»çå¥è£ãåå«éè²æå£é ­æ°´æ»´å½¢ä¹³æ¶²ç¶ï¼40â150mlï¼ãç²¾è¯æ¶²æ»´ç®¡ãåé éèèéç¶ï¼30â100gï¼ï¼å¨ç³»åçµ±ä¸æ¼¸å±¤è¡¨é¢èçèéè²äºé â çºå®ä¸åçè­·èç·æä¾ä¸ç«å¼çåè£è­å¥ã",
    },
    features: [
      "7-piece coordinated family: droppers, pumps & jars",
      "Custom forest-green gradient â available in blue & amber too",
      "Electroplated gold caps, collars & pump heads",
      "Teardrop lotion bottles: 40 / 100 / 120 / 150 ml",
      "Round cream jars: 30 / 50 / 100 g",
      "Single-brand turnkey packaging identity",
      "Gift-box & insert tray sourcing for holiday sets",
    ],
    brandName: "Vesla",
    mpn: "VSL-GRADIENT-GREEN-COSMETIC-SET",
    sku: "VSL-GRADIENT-GREEN-COSMETIC-SET-5K",
    seoKeywords: ["gradient green glass cosmetic set OEM", "color matched skincare packaging collection", "ombre green dropper jar set wholesale", "pantone matched green glass set", "bundled cosmetic glass packaging supplier", "regimen skincare set glass bottles", "gradient spray coat glass collection", "matching bottle jar set factory China", "full skincare line glass packaging", "4 piece cosmetic glass set OEM", "green gradient luxury skincare set"],
    seoTags: ["Cosmetic Set", "Glass Collection", "Luxury Packaging", "Custom OEM", "Low MOQ", "Gradient Glass", "Wholesale Set"],
    technicalTable: [
      { label: "Set Consistency", value: "Color-Matched Across All SKUs" },
      { label: "Hardware", value: "Electroplated Anti-Oxidation Gold" },
      { label: "Leak Testing", value: "100% Vacuum-Pressure Tested" },
    ],
    faqs: [
      { q: "Can I order items individually?", a: "Yes, while designed as a set, each SKU can be ordered separately with its own MOQ." }
    ]
  },
  {
    id: "gradient-green-pump-set",
    seoSlug: "gradient-green-lotion-cream-glass-set-supplier",
    name: "Gradient Green Lotion + Cream Deluxe Set",
    specTitle: "Gradient Green Lotion + Cream Glass Set",
    nameI18n: { kr: "ê·¸ë¼ë°ì´ì ê·¸ë¦° ë¡ì+í¬ë¦¼ ëë­ì¤ ì¸í¸", jp: "ã°ã©ãã¼ã·ã§ã³ã°ãªã¼ã³ ã­ã¼ã·ã§ã³ï¼ã¯ãªã¼ã  ãã©ãã¯ã¹ã»ãã", tw: "æ¼¸å±¤ç¶ ä¹³æ¶²+é¢éè±ªè¯å¥è£" },
    category: "set",
    material: "Glass",
    capacity: "40 / 100 / 120 ml + 50 / 100 g",
    capacityGroup: "set",
    use: "Serum",
    moq: "5,000 pcs per SKU",
    leadTime: "30â35 days",
    decoration: "Gradient spray coating, hot stamping, silk screen, electroplated gold cap & pump",
    image: "/images/products/gradient-green-pump-set/main.webp",
    gallery: [
      "/images/products/gradient-green-pump-set/gallery-0.webp",
      "/images/products/gradient-green-pump-set/gallery-1.webp",
      "/images/products/gradient-green-pump-set/gallery-2.webp",
      "/images/products/gradient-green-pump-set/gallery-3.webp"
    ],
    description:
      "A 5-piece coordinated lotion + cream set with forest-green gradient glass and polished gold hardware. Includes three teardrop pump bottles (40 / 100 / 120 ml) and two domed cream jars (50 / 100 g). Available in green gradient, black-to-gold gradient or solid amber â the perfect turnkey packaging for a single-brand skincare collection launch.",
    descriptionI18n: {
      kr: "í¬ë ì¤í¸ ê·¸ë¦° ê·¸ë¼ë°ì´ì ê¸ëì¤ì í´ë¦¬ìë ê³¨ë íëì¨ì´ë¡ êµ¬ì±ë 5í¼ì¤ ë¡ì+í¬ë¦¼ ì¸í¸. í°ì´ëë¡­ íí ë³´í 3ì¢(40/100/120ml)ê³¼ ëí í¬ë¦¼ ì 2ì¢(50/100g) í¬í¨. ê·¸ë¦° ê·¸ë¼ë°ì´ì, ë¸ë-ê³¨ë ê·¸ë¼ë°ì´ì, ìë¦¬ë ì°ë² ì¤ ì í ê°ë¥ â ë¨ì¼ ë¸ëë ì¤í¨ì¼ì´ ë¼ì¸ ë¡ ì¹­ì ìí ìë²½í í´í¤ í¨í¤ì§.",
      jp: "ãã©ã¬ã¹ãã°ãªã¼ã³ã®ã°ã©ãã¼ã·ã§ã³ã¬ã©ã¹ã¨ããªãã·ã¥ãã´ã¼ã«ãéå·ã§çµ±ä¸ããã5ç¹ã»ããããã£ã¢ãã­ãããã³ãããã«3ç¨®ï¼40/100/120mlï¼ã¨ãã¼ã åã¯ãªã¼ã ã¸ã£ã¼2ç¨®ï¼50/100gï¼ãã°ãªã¼ã³ã°ã©ãã¼ã·ã§ã³ããã©ãã¯âã´ã¼ã«ãã°ã©ãã¼ã·ã§ã³ãã½ãªããã¢ã³ãã¼ããé¸æå¯è½ â åä¸ãã©ã³ãã®ã¹ã­ã³ã±ã¢ã©ã¤ã³ç«ã¡ä¸ãã«æé©ãªã¿ã¼ã³ã­ã¼ããã±ã¼ã¸ã",
      tw: "æ£®æç¶ æ¼¸å±¤ç»çæ­éäº®é¢éè²äºéï¼5 ä»¶å¼ä¹³æ¶²+é¢éå¥è£ãæ°´æ»´å½¢æå£ç¶ 3 æ¬¾ï¼40/100/120mlï¼èåé èéç¶ 2 æ¬¾ï¼50/100gï¼ãå¯é¸ç¶ è²æ¼¸å±¤ãé»éæ¼¸å±¤æç´ç¥çè² â çºå®ä¸åçè­·èç³»åä¸å¸æä¾å®ç¾çä¸ç«å¼åè£æ¹æ¡ã",
    },
    features: [
      "5-piece pump lotion + cream jar coordinated set",
      "Forest-green gradient â also in black-gold & amber",
      "Electroplated gold dome lids & pump heads",
      "Teardrop pump bottles: 40 / 100 / 120 ml",
      "Domed cream jars: 50 / 100 g",
      "Turnkey single-brand identity with consistent finish",
      "Gift-box & insert tray sourcing for holiday sets",
    ],
    brandName: "Vesla",
    mpn: "VSL-GRADIENT-GREEN-PUMP-SET",
    sku: "VSL-GRADIENT-GREEN-PUMP-SET-5K",
    seoKeywords: ["gradient green pump bottle set OEM", "lotion pump glass cosmetic set wholesale", "color coordinated pump jar skincare set", "modern dispensing glass bottle set", "matching pump jar cosmetic collection", "full regimen pump dispenser glass set", "skincare routine glass set packaging", "pump bottle jar gradient green factory", "coordinated cosmetic packaging China OEM", "pump dispenser green glass bottle set", "all in one skincare glass set supplier", "luxury pump jar cosmetic gift set"],
    seoTags: ["Cosmetic Set", "Glass Collection", "Luxury Packaging", "Custom OEM", "Low MOQ", "Gradient Glass", "Wholesale Set"],
    technicalTable: [
      { label: "Set Consistency", value: "Color-Matched Across All SKUs" },
      { label: "Hardware", value: "Electroplated Anti-Oxidation Gold" },
      { label: "Leak Testing", value: "100% Vacuum-Pressure Tested" },
    ],
    faqs: [
      { q: "Can I order items individually?", a: "Yes, while designed as a set, each SKU can be ordered separately with its own MOQ." }
    ]
  },
  {
    id: "gradient-red-cosmetic-set",
    seoSlug: "red-gradient-round-cosmetic-set-bottle-manufacturer",
    name: "Red Gradient Round Cosmetic Set Bottles",
    specTitle: "Red Gradient Round Cosmetic Glass Set",
    nameI18n: { kr: "ë ë ê·¸ë¼ë°ì´ì ë¼ì´ë ì½ì¤ë©í± ì¸í¸ ë³´í", jp: "ã¬ããã°ã©ãã¼ã·ã§ã³ ã©ã¦ã³ãã³ã¹ã¡ãã£ãã¯ã»ããããã«", tw: "ç´è²æ¼¸å±¤åç¶åå¦åå¥è£" },
    category: "set",
    material: "Glass",
    capacity: "30 / 50 / 100 / 120 ml + 30 / 50 / 100 g",
    capacityGroup: "set",
    use: "Lotion / Cream",
    moq: "5,000 pcs per SKU",
    leadTime: "30â35 days",
    decoration: "Red gradient spray coating, silk screen, hot stamping, metallic red cap",
    image: "/images/products/gradient-red-cosmetic-set/main.webp",
    gallery: [
      "/images/products/gradient-red-cosmetic-set/gallery-0.webp",
      "/images/products/gradient-red-cosmetic-set/gallery-1.webp",
      "/images/products/gradient-red-cosmetic-set/gallery-2.webp",
      "/images/products/gradient-red-cosmetic-set/gallery-3.webp"
    ],
    description:
      "A coordinated red gradient cosmetic set built on classic straight-round bottles and cream jars. Deep crimson spray coating melts into clear glass at the base, paired with satin metallic red caps and gold foil branding. Covers 30â120 ml lotion and serum bottles plus 30â100 g cream jars â one consistent, eye-catching identity for a single-brand skincare or gift-set launch.",
    descriptionI18n: {
      kr: "í´ëì ì¤í¸ë ì´í¸ ë¼ì´ë ë³´íê³¼ í¬ë¦¼ ìë¡ êµ¬ì±ë ë ë ê·¸ë¼ë°ì´ì ì½ì¤ë©í± ì¸í¸. ë¥ í¬ë¦¼ì¨ ì¤íë ì´ ì½íì´ ë°ë¥ì í¬ëª ê¸ëì¤ë¡ ì´ì´ì§ë©°, ìí´ ë©íë¦­ ë ë ìº¡ê³¼ ê³¨ë í´ ë¸ëë©ì ëíìµëë¤. 30â120ml ë¡ìÂ·ì¸ë¼ ë³´íê³¼ 30â100g í¬ë¦¼ ìë¥¼ ì»¤ë² â ë¨ì¼ ë¸ëë ì¤í¨ì¼ì´ ëë ê¸°íí¸ ì¸í¸ ë°ì¹­ì ìí ì¼ê´ë ìì´ë´í°í°.",
      jp: "ã¯ã©ã·ãã¯ãªã¹ãã¬ã¼ãã©ã¦ã³ãããã«ã¨ã¯ãªã¼ã ã¸ã£ã¼ã§æ§æãããã¬ããã°ã©ãã¼ã·ã§ã³ã®ã³ã¹ã¡ãã£ãã¯ã»ããããã£ã¼ãã¯ãªã ã¾ã³ã®ã¹ãã¬ã¼ã³ã¼ãã£ã³ã°ãåºé¨ã®éæã¬ã©ã¹ã¸ã¨æº¶ãè¾¼ã¿ããµãã³ã¡ã¿ãªãã¯ã¬ããã®ã­ã£ããã¨ã´ã¼ã«ããã©ã¤ã«ã®ãã©ã³ãã£ã³ã°ãåããã¾ããã30ã120mlã®ã­ã¼ã·ã§ã³ã»ã»ã©ã ããã«ã¨30ã100gã®ã¯ãªã¼ã ã¸ã£ã¼ã«å¯¾å¿ â åä¸ãã©ã³ãã®ã¹ã­ã³ã±ã¢ãã®ããã»ããã®ç«ã¡ä¸ãã«æé©ãªä¸è²«ããã¢ã¤ãã³ãã£ãã£ã",
      tw: "ä»¥ç¶å¸ç´åç¶èèéç½çµæçç´è²æ¼¸å±¤åå¦åå¥è£ãæ·±ç´å´å¡æ¼¸è®è³ç¶åºéæç»çï¼æ­éç·é¢éå±¬ç´èèéè²çå°åçæ¨è­ãæ¶µè 30â120ml ä¹³æ¶²/ç²¾è¯ç¶è 30â100g èéç½ â çºå®ä¸åçè­·èæç¦®çä¸å¸æä¾ä¸è´çè¦è¦ºè­å¥ã",
    },
    features: [
      "Classic straight-round bottles + wide-mouth cream jars",
      "Custom crimson-to-clear gradient â also in other Pantone colors",
      "Satin metallic red caps & gold foil logo stamping",
      "Lotion bottles: 30 / 50 / 100 / 120 ml",
      "Cream jars: 30 / 50 / 100 g",
      "Turnkey single-brand identity with consistent finish",
      "Gift-box & insert tray sourcing for holiday sets",
    ],
    brandName: "Vesla",
    mpn: "VSL-GRADIENT-RED-COSMETIC-SET",
    sku: "VSL-GRADIENT-RED-COSMETIC-SET-5K",
    seoKeywords: ["red gradient glass cosmetic set wholesale", "crimson ombre bottle jar packaging set", "red round cosmetic bottle set factory", "matching red lotion jar set OEM China", "red spray coat glass set manufacturer", "wine red gradient skincare collection", "red pump lotion bottle cream jar set", "brand matched red glass packaging set", "luxury red cosmetic gift set packaging", "straight round red bottle jar supplier"],
    seoTags: ["Cosmetic Set", "Red Gradient", "Lotion Bottle", "Cream Jar", "Custom OEM", "Gift Set Packaging", "Gradient Glass"],
    technicalTable: [
      { label: "Coating", value: "Crimson-to-Clear Ombre Spray" },
      { label: "Lid Style", value: "Satin Metallic Red" },
      { label: "Material", value: "High-Density Recyclable Glass" },
    ],
    faqs: [
      { q: "Is this set suitable for holiday gifting?", a: "Yes, the vibrant crimson gradient is a bestseller for Christmas and Lunar New Year gift sets." }
    ]
  },
  {
    id: "small-round-dropper-10ml-15ml",
    seoSlug: "10ml-15ml-small-straight-round-dropper-bottle-supplier",
    name: "10ml & 15ml Small Straight Round Dropper Bottles",
    specTitle: "10ml & 15ml Small Straight Round Glass Dropper Bottles",
    nameI18n: { kr: "10mlÂ·15ml ìí ì¤í¸ë ì´í¸ ë¼ì´ë ëë¡­í¼ ë³´í", jp: "10mlã»15ml å°åã¹ãã¬ã¼ãã©ã¦ã³ããã­ããã¼ããã«", tw: "10mlã»15ml å°åç´åæ»´ç®¡ç¶" },
    category: "serum",
    material: "Glass",
    capacity: "10 / 15 ml",
    capacityGroup: "mini",
    use: "Serum / Oil",
    moq: "5,000 pcs",
    leadTime: "25â30 days",
    decoration: "Silk screen, hot stamping, frosting, color spray coating, gold/silver collar",
    image: "/images/products/small-round-dropper-10ml-15ml/main.webp",
    gallery: [
      "/images/products/small-round-dropper-10ml-15ml/gallery-0.webp",
      "/images/products/small-round-dropper-10ml-15ml/gallery-1.webp",
      "/images/products/small-round-dropper-10ml-15ml/gallery-2.webp",
      "/images/products/small-round-dropper-10ml-15ml/gallery-3.webp"
    ],
    description:
      "Compact 10ml and 15ml straight-round dropper bottles in translucent purple, matte white or teal glass. Small enough for travel-size serums, essential oil blends and sample kits â premium enough to sit beside full-size SKUs. Choose between gold knurled collars with white squeeze bulbs, silver push-button droppers or matte white caps, with glass pipettes inside every bottle.",
    descriptionI18n: {
      kr: "í¸ëì¤ë£¨ì¼í¸ í¼í, ë§¤í¸ íì´í¸ ëë í¸ ê¸ëì¤ë¡ ì ìë 10mlÂ·15ml ì»´í©í¸ ì¤í¸ë ì´í¸ ë¼ì´ë ëë¡­í¼ ë³´í. í¸ëë¸ ì¬ì´ì¦ ì¸ë¼, ìì¼ì ì¤ì¼ ë¸ë ë, ìí í¤í¸ì ì í©íë©° íì¬ì´ì¦ SKUì ëëí ëì¬ë ìììë íë¦¬ë¯¸ì íë¦¬í°. ê³¨ë ëì¼ ì»¬ë¬ + íì´í¸ ì¤í´ì¦ ë¶ë¸, ì¤ë² í¸ìë²í¼ ëë¡­í¼, ë§¤í¸ íì´í¸ ìº¡ ì¤ ì í ê°ë¥. ëª¨ë  ë³´íì ê¸ëì¤ í¼í« ë´ì¥.",
      jp: "åéæãã¼ãã«ãããããã¯ã¤ãããã£ã¼ã«ã¬ã©ã¹ã®10mlã»15mlã³ã³ãã¯ãã¹ãã¬ã¼ãã©ã¦ã³ããã­ããã¼ããã«ããã©ãã«ãµã¤ãºã®ã»ã©ã ãã¨ãã»ã³ã·ã£ã«ãªã¤ã«ãã¬ã³ãããµã³ãã«ã­ããã«æé©ã§ããã«ãµã¤ãºSKUã®é£ã«ç½®ãã¦ãå¼ããåããªããã¬ãã¢ã åè³ªãã´ã¼ã«ããã¼ã«ã«ã©ã¼ï¼ãã¯ã¤ãã¹ã¯ã¤ã¼ãºãã«ããã·ã«ãã¼ããã·ã¥ãã¿ã³ãã­ããã¼ãããããã¯ã¤ãã­ã£ããããé¸æå¯è½ãå¨ããã«ã«ã¬ã©ã¹ããããåèµã",
      tw: "åéæç´«ãé§é¢ç½ææ¹æ°´ç¶ ç»çè£½æç 10mlã»15ml å°åç´åæ»´ç®¡ç¶ãé©åæè¡è£ç²¾è¯æ¶²ãç²¾æ²¹èª¿éèè©¦ç¨å¥è£ï¼æ¾å¨å¨å°ºå¯¸ç¢åæåæ¨£é«ç´ãå¯é¸éè²æ»¾è±å+ç½è²è é ­ãéè²æå£å¼æ»´ç®¡æé§é¢ç½èï¼æ¯ç¶åéç»çå¸ç®¡ã",
    },
    features: [
      "Compact 10ml & 15ml straight-round silhouette",
      "Translucent purple, matte white or teal glass",
      "Gold knurled collar + white squeeze bulb droppers",
      "Silver push-button dropper caps available",
      "Glass pipette inside every bottle",
      "Travel-size, sample-kit & essential oil ready",
      "Custom silk screen & hot stamping logos",
    ],
    brandName: "Vesla",
    mpn: "VSL-SMALL-ROUND-DROPPER-10ML-15ML",
    sku: "VSL-SMALL-ROUND-DROPPER-10ML-15ML-5K",
    seoKeywords: ["10ml small glass dropper bottle supplier", "15ml straight round dropper bottle wholesale", "mini essential oil dropper bottle 10ml 15ml", "small capacity glass serum bottle travel size", "10ml purple glass dropper bottle OEM", "15ml matte white dropper bottle factory", "compact straight round dropper glass manufacturer", "small dropper bottle sample size bulk", "10ml 15ml dropper bottle with glass pipette", "travel size essential oil dropper packaging"],
    seoTags: ["Dropper Bottle", "Small Capacity", "Essential Oil", "Travel Size", "Sample Bottle", "Custom OEM", "Glass Pipette"],
    technicalTable: [
      { label: "Glass Type", value: "Borosilicate (High Durability)" },
      { label: "Neck Finish", value: "13/415" },
      { label: "Wall Thickness", value: "2.8mm" },
    ],
    faqs: [
      { q: "Do you provide glass pipettes for these?", a: "Yes, every small dropper bottle includes a precision-cut glass pipette matched to the bottle depth." }
    ]
  },
  {
    id: "stone-texture-white-cosmetic-set",
    seoSlug: "stone-texture-white-cosmetic-set-bottle-manufacturer",
    specTitle: "Stone Texture White Cosmetic Set â Matte White Bottles & Jars with Silver Caps",
    name: "Stone Texture White Cosmetic Set",
    nameI18n: { kr: "ì¤í¤ íì¤ì² íì´í¸ ì½ì¤ë©í± ì¸í¸", jp: "ã¹ãã¼ã³ãã¯ã¹ãã£ã¼ãã¯ã¤ãã³ã¹ã¡ãã£ãã¯ã»ãã", tw: "ç³ç´ç½ç·åå¦åå¥è£" },
    category: "set",
    material: "Glass",
    capacity: "40 / 100 / 120 ml + 30 / 50 g",
    capacityGroup: "set",
    use: "Lotion / Cream",
    moq: "5,000 pcs per SKU",
    leadTime: "30â35 days",
    decoration: "Matte white spray coating, silk screen, hot stamping, silver metal caps",
    image: "/images/products/stone-texture-white-cosmetic-set/main.webp",
    gallery: [
      "/images/products/stone-texture-white-cosmetic-set/gallery-0.webp",
      "/images/products/stone-texture-white-cosmetic-set/gallery-1.webp",
      "/images/products/stone-texture-white-cosmetic-set/gallery-2.webp",
      "/images/products/stone-texture-white-cosmetic-set/gallery-3.webp"
    ],
    description:
      "A stone-texture matte white cosmetic set with high-polish silver caps â the 'ceramic' look that reads premium on any shelf. Three straight-round lotion bottles (40, 100, 120 ml) and two dome-lid cream jars (30, 50 g) in one coordinated identity, with soft-touch white coating and gold or silver logo stamping. Works as a full skincare regimen set, a retail gift collection or a hotel & spa amenity line.",
    descriptionI18n: {
      kr: "íì´í´ë¦¬ì ì¤ë² ìº¡ì ëí ì¤í¤ íì¤ì² ë§¤í¸ íì´í¸ ì½ì¤ë©í± ì¸í¸ â ì´ë¤ ì ë°ììë íë¦¬ë¯¸ìì¼ë¡ ì½íë 'ì¸ë¼ë¯¹' ë£©. ì¤í¸ë ì´í¸ ë¼ì´ë ë¡ì ë³´í 3ì¢(40, 100, 120ml)ê³¼ ë ë¦¬ë í¬ë¦¼ ì 2ì¢(30, 50g)ì´ íëì ì½ëë¤ì´í°ë ìì´ë´í°í°ë¡ êµ¬ì±ëë©°, ìíí¸ í°ì¹ íì´í¸ ì½íê³¼ ê³¨ë/ì¤ë² ë¡ê³  ì¤í¬í. í ì¤í¨ì¼ì´ ì¸í¸, ë¦¬íì¼ ê¸°íí¸ ì»¬ë ì ëë í¸íÂ·ì¤í ì´ë©ëí° ë¼ì¸ì¼ë¡ íì© ê°ë¥.",
      jp: "ãã¤ããªãã·ã¥ã·ã«ãã¼ã­ã£ãããåããã¹ãã¼ã³ãã¯ã¹ãã£ã¼ããããã¯ã¤ãã®ã³ã¹ã¡ãã£ãã¯ã»ãã â ã©ããªæ£ã§ããã¬ãã¢ã ã«è¦ãããã»ã©ããã¯ãã«ãã¯ãã¹ãã¬ã¼ãã©ã¦ã³ãã®ã­ã¼ã·ã§ã³ããã«3ç¨®ï¼40ã»100ã»120mlï¼ã¨ãã¼ã ãªããã®ã¯ãªã¼ã ã¸ã£ã¼2ç¨®ï¼30ã»50gï¼ãä¸è²«ããã¢ã¤ãã³ãã£ãã£ã§æ§æãã½ããã¿ããã®ãã¯ã¤ãã³ã¼ãã£ã³ã°ã¨ã´ã¼ã«ã/ã·ã«ãã¼ã®ã­ã´ã¹ã¿ã³ãã³ã°ããã«ã¹ã­ã³ã±ã¢ã»ããããªãã¼ã«ã®ããã³ã¬ã¯ã·ã§ã³ãããã«ã»ã¹ãã®ã¢ã¡ããã£ã©ã¤ã³ã¨ãã¦ãå¯¾å¿ã",
      tw: "æ­éé«åéèçç³ç´é§é¢ç½åå¦åå¥è£ââå¨è²¨æ¶ä¸ç«å»åç¾é«ç´ãé¶ç·ãè³ªæãä¸æ¬¾ç´åä¹³æ¶²ç¶ï¼40/100/120mlï¼èå©æ¬¾åé èèéç½ï¼30/50gï¼çµæçµ±ä¸è¦è¦ºï¼é§é¢ç½å¡å±¤æ­ééè²æéè² Logo çå°ãé©åä½çºå®æ´è­·èå¥çµãé¶å®ç¦®çæé£¯åº SPA ååç³»åã",
    },
    features: [
      "Stone-texture matte white coating â ceramic look, soft-touch feel",
      "High-polish silver caps: teardrop for bottles, dome for jars",
      "Bottles: 40 / 100 / 120 ml straight-round with rounded shoulders",
      "Jars: 30 / 50 g wide-mouth with dome lids",
      "Gold or silver logo silk screen & hot stamping",
      "Turnkey regimen set â same identity across every SKU",
      "Hotel & spa amenity and gift-set packaging options",
    ],
    brandName: "Vesla",
    mpn: "VSL-STONE-TEXTURE-WHITE-COSMETIC-SET",
    sku: "VSL-STONE-TEXTURE-WHITE-COSMETIC-SET-5K",
    seoKeywords: ["white coated glass cosmetic set wholesale", "stone texture white bottle jar set factory", "matte white cosmetic set silver cap", "white ceramic look glass set OEM", "silver cap white bottle jar packaging set", "matte white lotion jar set China supplier", "white cosmetic set gift packaging wholesale", "pearl white glass set manufacturer", "silver lid white cream jar set", "white coating bottle jar collection OEM"],
    seoTags: ["Cosmetic Set", "White Coating", "Matte Finish", "Silver Cap", "Lotion Bottle", "Cream Jar", "Custom OEM"],
    technicalTable: [
      { label: "Visual Effect", value: "Matte Ceramic/Porcelain Look" },
      { label: "Texture", value: "Stone-Texture (Enhanced Grip)" },
      { label: "Durability", value: "Passes 300+ alcohol rub cycles" },
    ],
    faqs: [
      { q: "Is the white coating truly opaque?", a: "Yes, our stone-texture coating is applied in a double-pass process to ensure 100% opacity." }
    ]
  },
  {
    id: "gold-pump-black-cosmetic-set",
    seoSlug: "gold-pump-black-cosmetic-set-bottle-manufacturer",
    specTitle: "Gold Pump Black Cosmetic Set â Black Lotion Bottles & Cream Jars with Gold Pumps",
    name: "Gold Pump Black Cosmetic Set",
    nameI18n: { kr: "ê³¨ë íí ë¸ë ì½ì¤ë©í± ì¸í¸", jp: "ã´ã¼ã«ããã³ããã©ãã¯ã³ã¹ã¡ãã£ãã¯ã»ãã", tw: "éæ³µé ­é»è²åå¦åå¥è£" },
    category: "set",
    material: "Glass",
    capacity: "40 / 100 / 120 ml + 30 / 50 g",
    capacityGroup: "set",
    use: "Lotion / Cream",
    moq: "5,000 pcs per SKU",
    leadTime: "30â35 days",
    decoration: "Black spray coating, gold metal pump, silk screen, hot stamping",
    image: "/images/products/gold-pump-black-cosmetic-set/main.webp",
    gallery: [
      "/images/products/gold-pump-black-cosmetic-set/gallery-0.webp",
      "/images/products/gold-pump-black-cosmetic-set/gallery-1.webp",
      "/images/products/gold-pump-black-cosmetic-set/gallery-2.webp",
      "/images/products/gold-pump-black-cosmetic-set/gallery-3.webp"
    ],
    description:
      "A statement black cosmetic set with gold pumps and black caps â deep matte black bottles and cream jars in a single coordinated identity. Three lotion bottles (40, 100, 120 ml) with gold pump dispensers and two cream jars (30, 50 g) with black screw lids, finished with your logo in silk screen or hot stamping. The gold-on-black contrast reads premium and gender-neutral, fitting men's grooming, luxury skincare and hotel amenity lines.",
    descriptionI18n: {
      kr: "ê³¨ë ííì ë¸ë ìº¡ì ëí ì¤íì´í¸ë¨¼í¸ ë¸ë ì½ì¤ë©í± ì¸í¸ â ë¥ ë§¤í¸ ë¸ë ë³´íê³¼ í¬ë¦¼ ìë¥¼ íëì ì½ëë¤ì´í°ë ìì´ë´í°í°ë¡ êµ¬ì±. ê³¨ë íí ëì¤íìê° ì ì©ë ë¡ì ë³´í 3ì¢(40, 100, 120ml)ê³¼ ë¸ë ì¤í¬ë¥ ë¦¬ëì í¬ë¦¼ ì 2ì¢(30, 50g)ì ì¤í¬ì¤í¬ë¦° ëë í ì¤í¬íì¼ë¡ ë¡ê³ ë¥¼ ì ì©. ê³¨ë-ì¨-ë¸ë ëë¹ë íë¦¬ë¯¸ìíê³  ì¤ì±ì ì¸ ëëì¼ë¡, ë¨ì± ê·¸ë£¨ë°, ë­ìë¦¬ ì¤í¨ì¼ì´, í¸í ì´ë©ëí° ë¼ì¸ì ì í©.",
      jp: "ã´ã¼ã«ããã³ãã¨ãã©ãã¯ã­ã£ãããåããã¹ãã¼ãã¡ã³ããªãã©ãã¯ã®ã³ã¹ã¡ãã£ãã¯ã»ããããã£ã¼ãããããã©ãã¯ã®ããã«ã¨ã¯ãªã¼ã ã¸ã£ã¼ãä¸è²«ããã¢ã¤ãã³ãã£ãã£ã§æ§æãã´ã¼ã«ããã³ããã£ã¹ãã³ãµã¼ä»ãã­ã¼ã·ã§ã³ããã«3ç¨®ï¼40ã»100ã»120mlï¼ã¨ãã©ãã¯ã¹ã¯ãªã¥ã¼ãªããã®ã¯ãªã¼ã ã¸ã£ã¼2ç¨®ï¼30ã»50gï¼ã«ãã·ã«ã¯ã¹ã¯ãªã¼ã³ã¾ãã¯ãããã¹ã¿ã³ãã³ã°ã§ã­ã´ãæ½ãã¾ããã´ã¼ã«ãÃãã©ãã¯ã®ã³ã³ãã©ã¹ãã¯ãã¬ãã¢ã ã§ã¸ã§ã³ãã¼ãã¥ã¼ãã©ã«ãã¡ã³ãºã°ã«ã¼ãã³ã°ãã©ã°ã¸ã¥ã¢ãªã¼ã¹ã­ã³ã±ã¢ãããã«ã¢ã¡ããã£ã©ã¤ã³ã«æé©ã",
      tw: "ä»¥éè²æ³µé ­èé»èæé çé»è²å®£è¨ç³»åââæ·±é§é»ç¶èº«èèéç½çµæçµ±ä¸è¦è¦ºãä¸æ¬¾ä¹³æ¶²ç¶ï¼40/100/120mlï¼æ­ééè²æå£æ³µï¼å©æ¬¾èéç½ï¼30/50gï¼éé»è²æèï¼å¯çµ²å°æçå°æ¨ç LogoãéÃé»å°æ¯æ¢é«ç´åä¸­æ§ï¼é©åç·æ§è­·çãå¥¢è¯è­·èèé£¯åºååç³»åã",
    },
    features: [
      "Deep matte black coating â gold-on-black premium contrast",
      "Gold metal pump dispensers on 40 / 100 / 120 ml lotion bottles",
      "Black screw lids on 30 / 50 g cream jars",
      "Straight-round silhouette with rounded shoulders",
      "Silk screen & hot stamping logos in gold or silver",
      "Turnkey set â one identity across bottles and jars",
      "Men's grooming, luxury skincare & hotel amenity ready",
    ],
    brandName: "Vesla",
    mpn: "VSL-GOLD-PUMP-BLACK-COSMETIC-SET",
    sku: "VSL-GOLD-PUMP-BLACK-COSMETIC-SET-5K",
    seoKeywords: ["black glass lotion bottle pump set", "gold pump black cosmetic bottle set", "black cream jar set gold cap", "black cosmetic set luxury packaging", "gold pump bottle black glass OEM", "black lotion jar set China supplier", "black glass cosmetic set wholesale", "gold pump black jar set factory", "matte black pump bottle jar set", "black gold luxury cosmetic set"],
    seoTags: ["Cosmetic Set", "Black Coating", "Gold Pump", "Lotion Bottle", "Cream Jar", "Luxury Packaging", "Custom OEM"],
    technicalTable: [
      { label: "Hardware", value: "Gold-Anodized Precision Pumps" },
      { label: "Coating", value: "Stealth Matte Black" },
      { label: "Gasket", value: "A-Grade Silicone (Anti-Leak)" },
    ],
    faqs: [
      { q: "Do the gold pumps tarnish?", a: "No, our pumps undergo a 48-hour salt spray test to ensure the electroplating remains pristine even in humid bathroom environments." }
    ]
  },
  {
    id: "waistline-textured-glass-set",
    seoSlug: "hourglass-textured-glass-cosmetic-set-wholesale",
    specTitle: "Hourglass Textured Glass Cosmetic Set â 50g-100g Jars & 40ml-120ml Bottles",
    name: "Waistline Textured Glass Cosmetic Set",
    nameI18n: { kr: "ì¨ì´ì¤í¸ë¼ì¸ íì¤ì² ê¸ëì¤ ì½ì¤ë©í± ì¸í¸", jp: "ã¦ã¨ã¹ãã©ã¤ã³ ãã¯ã¹ãã£ã¼ãã¬ã©ã¹ ã³ã¹ã¡ãã£ãã¯ã»ãã", tw: "å°è »è°ç´çç»çåå¦åå¥è£" },
    category: "set",
    material: "Glass",
    capacity: "40 / 100 / 120 ml + 50 / 100 g",
    capacityGroup: "set",
    use: "Lotion / Cream",
    moq: "5,000 pcs per SKU",
    leadTime: "30â35 days",
    decoration: "Diamond texture glass, color spray (gradient/solid), gold metallic pump & cap, silk screen",
    image: "/images/products/waistline-textured-glass-set/main.webp",
    gallery: [
      "/images/products/waistline-textured-glass-set/gallery-0.webp",
      "/images/products/waistline-textured-glass-set/gallery-1.webp",
      "/images/products/waistline-textured-glass-set/gallery-2.webp",
      "/images/products/waistline-textured-glass-set/gallery-3.webp"
    ],
    description:
      "A premium hourglass-shaped glass cosmetic set featuring a distinct diamond textured surface and metallic gold accents. The 'waistline' design offers an ergonomic grip and a unique visual silhouette that stands out in the luxury skincare market. Available in royal blue gradient, ice blue, ruby red, and amber gold finishes. This collection includes high-capacity 40-120ml lotion bottles with pumps and 50-100g wide-mouth cream jars, making it ideal for complete high-end anti-aging or moisturizing regimens.",
    descriptionI18n: {
      kr: "ëí¹í ë¤ì´ìëª¬ë íì¤ì² íë©´ê³¼ ë©íë¦­ ê³¨ë í¬ì¸í¸ê° í¹ì§ì¸ íë¦¬ë¯¸ì ììê¸ëì¤ ííì ì ë¦¬ ì½ì¤ë©í± ì¸í¸. 'ì¨ì´ì¤í¸ë¼ì¸' ëìì¸ì ì¸ì²´ê³µíì ì¸ ê·¸ë¦½ê°ê³¼ ë­ìë¦¬ ì¤í¨ì¼ì´ ìì¥ìì ëë³´ì´ë ëí¹í ì¤ë£¨ì£ì ì ê³µí©ëë¤. ë¡ì ë¸ë£¨ ê·¸ë¼ë°ì´ì, ìì´ì¤ ë¸ë£¨, ë£¨ë¹ ë ë, ì°ë² ê³¨ë ë§ê°ì¼ë¡ ì ê³µë©ëë¤. 40-120ml ëì©ë ë¡ì íí ë³´íê³¼ 50-100g ìì´ë ë§ì°ì¤ í¬ë¦¼ ìê° í¬í¨ëì´ ê³ ê¸°ë¥ì± ìí°ìì´ì§ ëë ë³´ìµ ë¼ì¸ì ì í©í©ëë¤.",
      jp: "ç¬ç¹ãªãã¤ã¤ã¢ã³ããã¯ã¹ãã£ã®è¡¨é¢ã¨ã¡ã¿ãªãã¯ã´ã¼ã«ãã®ã¢ã¯ã»ã³ããç¹å¾´ã®ãã¬ãã¢ã ãªã¢ã¯ã¼ã°ã©ã¹åã¬ã©ã¹ã³ã¹ã¡ã»ããããã¦ã¨ã¹ãã©ã¤ã³ããã¶ã¤ã³ã¯ãäººéå·¥å­¦ã«åºã¥ããã°ãªããæã¨ãé«ç´ã¹ã­ã³ã±ã¢å¸å ´ã§éç«ã¤ã¦ãã¼ã¯ãªã·ã«ã¨ãããæä¾ãã¾ããã­ã¤ã¤ã«ãã«ã¼ã°ã©ãã¼ã·ã§ã³ãã¢ã¤ã¹ãã«ã¼ãã«ãã¼ã¬ãããã¢ã³ãã¼ã´ã¼ã«ãã®ä»ä¸ããå¯è½ã40-120mlã®å¤§å®¹éã­ã¼ã·ã§ã³ãã³ãããã«ã¨50-100gã®åºå£ã¯ãªã¼ã ã¸ã£ã¼ãå«ã¿ãé«ç´ã¢ã³ãã¨ã¤ã¸ã³ã°ãä¿æ¹¿ã©ã¤ã³ã«æé©ã§ãã",
      tw: "ä¸æ¬¾é«ç´ãå°è »è°ãå½¢çç»çåå¦åå¥è£ï¼å·æç¨ç¹çé½ç³ç´çè¡¨é¢åéå±¬éè£é£¾ãç¸®è°è¨­è¨æä¾ç¬¦åäººé«å·¥ç¨å­¦çæ¡æåç¨ç¹çè¦è¦ºè¼ªå»ï¼å¨å¥¢è¯è­·èå¸å ´ä¸­è«ç©èåºãæä¾çå®¤èæ¼¸è®ãå°èãç´å¯¶ç³è²åç¥çéç­å¤ç¨®è¡¨é¢èçãæ­¤ç³»ååå« 40-120ml å¤§å®¹éä¹³æ¶²æ³µç¶å 50-100g å¯¬å£èéç½ï¼éå¸¸é©åå®æ´çé ç´æè¡°èæä¿æ¿ç³»åã",
    },
    features: [
      "Ergonomic hourglass 'waistline' shape for a luxury feel",
      "Sophisticated diamond/prism texture molded into the glass",
      "Premium gold metallic pump dispensers and matching screw lids",
      "Lotion bottles: 40ml, 100ml, 120ml with high-performance pumps",
      "Cream jars: 50g, 100g with matching textured lids",
      "Available in multiple colors: Blue Gradient, Ice Blue, Red, Amber",
      "Thick-wall glass for weight and premium shelf presence",
    ],
    brandName: "Vesla",
    mpn: "VSL-WAISTLINE-TEXTURE-SET",
    sku: "VSL-WAISTLINE-TEXTURE-SET-5K",
    seoKeywords: ["waistline glass cosmetic set wholesale", "hourglass glass bottle manufacturer", "textured glass skincare packaging set", "diamond pattern glass bottle set factory", "luxury glass lotion bottle pump set", "wholesale red glass jar bottle set", "blue gradient glass packaging collection", "amber textured glass cosmetic bottles", "50g 100g glass cream jar supplier", "custom glass set for luxury skincare"],
    seoTags: ["Cosmetic Set", "Textured Glass", "Hourglass Shape", "Gold Pump", "Lotion Bottle", "Cream Jar", "Luxury Packaging", "Custom OEM"],
    technicalTable: [
      { label: "Shape", value: "Ergonomic Hourglass (Waistline)" },
      { label: "Glass Pattern", value: "Geometric Diamond Prism" },
      { label: "Wall Strength", value: "Heavy-Wall Reinforced Glass" },
    ],
    faqs: [
      { q: "Is the texture on the inside or outside?", a: "The prism texture is molded into the exterior of the glass, providing both visual depth and an anti-slip grip." }
    ]
  },
  {
    id: "classic-glass-dropper-bottle",
    seoSlug: "classic-light-shielding-glass-dropper-bottle-wholesale",
    specTitle: "Classic Glass Dropper Bottles â 5ml-100ml Opaque & Gradient Options",
    name: "Classic Light-Shielding Glass Dropper Bottles",
    nameI18n: { kr: "í´ëì ì°¨ê´ ì ë¦¬ ëë¡­í¼ ë³´í", jp: "ã¯ã©ã·ãã¯é®åã¬ã©ã¹ãã­ããã¼ããã«", tw: "ç¶å¸é¿åç»çæ»´ç®¡ç¶" },
    category: "serum",
    material: "Glass",
    capacity: "5 / 10 / 15 / 20 / 30 / 50 / 100 ml",
    capacityGroup: "standard",
    use: "Serum / Essential Oil",
    moq: "5,000 pcs",
    leadTime: "25â30 days",
    decoration: "Frosted, matte, gradient or opaque coating; silk screen & hot stamping",
    image: "/images/products/classic-glass-dropper-bottle/main.webp",
    gallery: [
      "/images/products/classic-glass-dropper-bottle/gallery-0.webp",
      "/images/products/classic-glass-dropper-bottle/gallery-1.webp",
      "/images/products/classic-glass-dropper-bottle/gallery-2.webp",
      "/images/products/classic-glass-dropper-bottle/gallery-3.webp"
    ],
    description:
      "A versatile range of classic straight-round glass dropper bottles designed for maximum formula protection. These 'light-shielding' bottles feature high-quality opaque coatings and gradients that block harmful UV rays, making them ideal for high-potency serums, essential oils, and light-sensitive skincare actives. Available in a full size run from 5ml travel sizes to 100ml professional volumes, with your choice of silver or black metallic collars and precision glass pipettes.",
    descriptionI18n: {
      kr: "í¬ë®¬ë¬ë¥¼ ìµëí ë³´í¸íëë¡ ì¤ê³ë ë¤ìí í´ëì ì¤í¸ë ì´í¸ ë¼ì´ë ì ë¦¬ ëë¡­í¼ ë³´í ì íêµ°ìëë¤. ì´ 'ì°¨ê´' ë³´íì ì í´í ìì¸ì ì ì°¨ë¨íë ê³ íì§ ë¶í¬ëª ì½íê³¼ ê·¸ë¼ë°ì´ìì´ í¹ì§ì¼ë¡, ê³ í¨ë¥ ì¸ë¼, ìì¼ì ì¤ì¼ ë° ë¹ì ë¯¼ê°í ì¤í¨ì¼ì´ ì±ë¶ì ì í©í©ëë¤. 5ml ì¬íì© ì¬ì´ì¦ë¶í° 100ml ì ë¬¸ê°ì© ì©ëê¹ì§ ì ì²´ ì¬ì´ì¦ê° ì ê³µëë©°, ì¤ë² ëë ë¸ë ë©íë¦­ ì»¬ë¬ì ì ë° ì ë¦¬ í¼í«ì ì íí  ì ììµëë¤.",
      jp: "æåã®ä¿è­·ãæå¤§éã«é«ããããè¨­è¨ããããã¯ã©ã·ãã¯ãªã¹ãã¬ã¼ãã©ã¦ã³ãã¬ã©ã¹ãã­ããã¼ããã«ã®å¤ç¨éãªã¬ã³ã¸ã§ãããããã®ãé®åãããã«ã¯ãæå®³ãªç´«å¤ç·ãé®æ­ããé«åè³ªãªä¸éæã³ã¼ãã£ã³ã°ã¨ã°ã©ãã¼ã·ã§ã³ãç¹å¾´ã§ãé«æ¿åº¦ã»ã©ã ãã¨ãã»ã³ã·ã£ã«ãªã¤ã«ãåã«ææãªã¹ã­ã³ã±ã¢æåã«æé©ã§ãã5mlã®ãã©ãã«ãµã¤ãºãã100mlã®ãã­ãã§ãã·ã§ãã«ããªã¥ã¼ã ã¾ã§ãã«ãµã¤ãºå±éã§ãã·ã«ãã¼ã¾ãã¯ãã©ãã¯ã®ã¡ã¿ãªãã¯ã«ã©ã¼ã¨ç²¾å¯ã¬ã©ã¹ãããããé¸æã§ãã¾ãã",
      tw: "ä¸ç³»åå°çºæå¤§éåº¦ä¿è­·éæ¹èè¨­è¨çç¶å¸ç´åç»çæ»´ç®¡ç¶ãéäºãé¿åãç¶å·æé«åè³ªçä¸éæå¡å±¤åæ¼¸è®è²ï¼å¯é»ææå®³çç´«å¤ç·ï¼æ¯é«æ¿åº¦ç²¾è¯æ¶²ãç²¾æ²¹åå°åææçè­·èæ´»æ§æåççæ³é¸æãæä¾å¾ 5ml æè¡è£å° 100ml å°æ¥­å®¹éçå®æ´å°ºå¯¸ï¼å¯é¸ééè²æé»è²éå±¬ååç²¾å¯ç»çå¸ç®¡ã",
    },
    features: [
      "Classic light-shielding design for UV-sensitive formulas",
      "Full size run: 5ml, 10ml, 15ml, 20ml, 30ml, 50ml, 100ml",
      "Available in Opaque White, Blue Gradient, Light Blue, and Forest Green",
      "Premium metallic collars (Silver/Black) and glass pipettes",
      "Ideal for essential oils, vitamin C serums, and active facial oils",
      "In-house custom color matching and logo printing",
    ],
    brandName: "Vesla",
    mpn: "VSL-CLASSIC-UV-DROPPER",
    sku: "VSL-CLASSIC-UV-DROPPER-5K",
    seoKeywords: ["light shielding dropper bottle wholesale", "UV protection glass bottle manufacturer", "opaque glass serum bottle supplier", "essential oil dropper bottle factory", "bulk glass dropper bottles China", "5ml 100ml glass dropper set", "custom coated glass dropper bottles", "skincare packaging for light sensitive formulas", "wholesale blue gradient dropper bottles", "matte white glass dropper bottle manufacturer"],
    seoTags: ["Dropper Bottle", "UV Protection", "Essential Oil", "Opaque Glass", "Custom OEM", "Wholesale Packaging", "China Manufacturer"],
    technicalTable: [
      { label: "Design", value: "Classic Straight-Round" },
      { label: "Light Blocking", value: "99% UV Protection (Opaque versions)" },
      { label: "Safety", value: "Child-Resistant Cap Compatible" },
    ],
    faqs: [
      { q: "Can these be used for vitamin C?", a: "Yes, our opaque white and dark gradient coatings provide the light-shielding necessary for stable vitamin C formulations." }
    ]
  },
];

export const materials = ["Glass", "Plastic"];
export const capacityGroups = [
  { value: "mini", label: "Mini (â¤ 15 ml / 15 g)" },
  { value: "standard", label: "Standard (20 â 60 ml / g)" },
  { value: "large", label: "Large (60+ ml / g)" },
  { value: "set", label: "Multi-Size Set" },
] as const;
export const uses = [
  "Serum",
  "Facial Oil",
  "Face Cream",
  "Eye Cream",
  "Body Cream",
  "Essential Oil",
  "Roll-On / Perfume",
  "Sample / Tester",
  "Injection / Injectable",
  "Aromatherapy",
  "Wellness Supplement",
];

const PEXEL = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

// Case studies shown on the Custom Process page. Images are royalty-free
// Pexels shots styled to look like real client brand assets.
export const caseStudies = [
  {
    brand: "AURÃLIE Â· Paris",
    title: "Signature serum duo for a French launch",
    bullets: ["15 ml + 30 ml frosted droppers", "Electroplated gold collar", "8,000 units / 22-day turnaround"],
    image: PEXEL(17307534, 1200),
  },
  {
    brand: "LUMI Â· Seoul",
    title: "Miron violet jars for a K-beauty clean range",
    bullets: ["30 g + 50 g violet glass", "Silk-screen logo, matte black lid", "12,000 units / 28-day turnaround"],
    image: PEXEL(35976902, 1200),
  },
  {
    brand: "NORDIC SKIN",
    title: "Recyclable amber roll-ons for an apothecary line",
    bullets: ["10 ml clear + amber roll-ons", "Bamboo lid finish", "20,000 units / 25-day turnaround"],
    image: PEXEL(16722452, 1200),
  },
  {
    brand: "VELVETTE",
    title: "Bespoke cream jar for a US indie brand",
    bullets: ["50 g thick-wall clear jar", "Custom Pantone frosting", "5,000 units Â· private mold"],
    image: PEXEL(5911961, 1200),
  },
];
export type Category = "serum" | "jar" | "set" | "vial";

export const categoryLabels: Record<Category, { en: string; kr: string; jp: string; tw: string }> = {
  serum: { en: "Serum Bottles", kr: "세럼 보틀", jp: "セラムボトル", tw: "精華液瓶" },
  jar: { en: "Cream Jars", kr: "크림 자", jp: "クリームジャー", tw: "膏霜瓶" },
  set: { en: "Cosmetic Sets", kr: "코스메틱 세트", jp: "コスメティックセット", tw: "化妝品套裝" },
  vial: { en: "Glass Vials", kr: "유리 바이알", jp: "ガラスバイアル", tw: "玻璃瓶" },
};

export interface Product {
  id: string;
  seoSlug: string;
  name: string;
  specTitle?: string;
  /** Override the auto-generated <title> tag with a CTR-optimized version (MOQ/price/DDP hooks). */
  seoTitle?: string;
  nameI18n: { kr: string; jp: string; tw: string };
  category: Category;
  material: string;
  capacity: string;
  capacityGroup: "mini" | "standard" | "large" | "set";
  use: string;
  moq: string;
  leadTime: string;
  decoration: string;
  image: string;
  gallery: string[];
  description: string;
  descriptionI18n: { kr: string; jp: string; tw: string };
  features: string[];
  brandName?: string;
  mpn?: string;
  sku?: string;
  seoKeywords: string[];
  seoTags: string[];
  technicalTable?: { label: string; value: string }[];
  faqs?: { q: string; a: string }[];
}


export const products: Product[] = [
  {
    id: "heart-dropper-30ml",
    seoSlug: "heart-shaped-glass-dropper-bottle-manufacturer",
    name: "Heart-Shaped Dropper Bottle",
    specTitle: "30ml Heart-Shaped Glass Dropper Bottle",
    nameI18n: { kr: "하트형 드롭퍼 보틀", jp: "ハート型ドロッパーボトル", tw: "心形滴管瓶" },
    category: "serum",
    material: "Glass",
    capacity: "30 ml",
    capacityGroup: "standard",
    use: "Serum",
    moq: "5,000 pcs",
    leadTime: "25–30 days",
    decoration: "Frosting, silk screen, spray coating, gradient coating",
    image: "/images/products/heart-dropper-30ml/main.webp",
    gallery: [
      "/images/products/heart-dropper-30ml/gallery-0.webp",
      "/images/products/heart-dropper-30ml/gallery-1.webp",
      "/images/products/heart-dropper-30ml/gallery-2.webp",
      "/images/products/heart-dropper-30ml/gallery-3.webp"
    ],
    description:
      "A sculptural heart-shaped dropper bottle that doubles as a brand statement piece. Available in matte black, matte white, or translucent gradient glass with a matching heart-shaped dropper bulb — the ultimate holiday, Valentine's Day or love-themed beauty launch.",
    descriptionI18n: {
      kr: "하트 모양의 조형적인 드롭퍼 보틀로, 그 자체로 브랜드 시그니처가 됩니다. 매트 블랙, 매트 화이트, 반투명 그라데이션 글래스 중 선택 가능하며, 어울리는 하트형 드롭퍼 벌브까지 — 홀리데이, 발렌타인데이, 러브 테마 뷰티 런칭을 위한 궁극의 패키지.",
      jp: "それ自体がブランドのシグネチャーとなる、立体感のあるハート型ドロッパーボトル。マットブラック、マットホワイト、半透明グラデーションガラスから選べ、お揃いのハート型ドロッパーバルブ付き — ホリデー、バレンタイン、ラブテーマのビューティー発売に最適。",
      tw: "雕塑感心形滴管瓶，本身就是品牌標誌性的視覺單品。可選霧面黑、霧面白或半透明漸層玻璃，搭配同款心形滴管球 — 節日禮盒、情人節限定、愛情主題美妝上市的終極包裝。",
    },
    features: [
      "Sculptural heart-shaped body — instant shelf standout",
      "Matte black, matte white & gradient glass options",
      "Matching heart-shaped dropper bulb",
      "Gold or matte black collar finishing",
      "Custom silk-screen branding on frosted surface",
      "Seasonal & holiday gift-set ready",
    ],
    brandName: "Vesla",
    mpn: "VSL-HEART-DROPPER-30ML",
    sku: "VSL-HEART-DROPPER-30ML-5K",
    seoKeywords: ["heart shaped glass dropper bottle", "valentine edition serum bottle wholesale", "unique cosmetic glass bottle shape", "limited edition skincare packaging", "gift ready glass dropper bottle", "heart silhouette perfume oil bottle", "custom shape glass dropper OEM", "Instagram worthy serum bottle design", "small batch unique glass bottle", "heart dropper bottle private label", "luxury gift packaging glass bottle", "beauty brand limited run packaging"],
    seoTags: ["Serum Packaging", "Dropper Bottle", "Skincare Glass", "Custom OEM", "Low MOQ", "FDA Approved", "DDP Shipping"],
    technicalTable: [
      { label: "Glass Wall Thickness", value: "4.5mm (Premium Heavy-Base)" },
      { label: "Empty Weight", value: "92g (±2g)" },
      { label: "Neck Finish", value: "18/415 Standard" },
      { label: "Glass Grade", value: "Grade A Flint Glass (High Clarity)" },
      { label: "Light Transmission", value: "Opaque (Matte versions) / 92% (Clear)" },
      { label: "Coating Durability", value: "Passes 3M tape & alcohol rub tests" },
      { label: "Lead Content", value: "0% (Lead-free eco glass)" },
    ],
    faqs: [
      { q: "Is the heart-shaped bottle compatible with standard serum droppers?", a: "Yes, it uses an 18/415 standard neck. We provide matching heart-shaped bulbs, but standard round bulbs also fit perfectly." },
      { q: "What is the MOQ for custom gradient colors?", a: "The minimum order quantity for custom Pantone gradient coating is 5,000 units per color scheme." },
      { q: "Is this glass bottle suitable for high-viscosity gels?", a: "The 18/415 neck and our standard pipette work best for low to medium viscosity serums and oils. For very thick gels, we recommend testing with our wide-pipette sample first." }
    ]
  },
  {
    id: "flat-square-dropper",
    seoSlug: "custom-flat-square-glass-dropper-bottle-supplier",
    name: "Flat Square Glass Dropper Bottle",
    specTitle: "30ml & 50ml Flat Square Glass Dropper Bottle",
    nameI18n: { kr: "플랫 스퀘어 글래스 드롭퍼 보틀", jp: "フラットスクエア ガラスドロッパーボトル", tw: "扁平方形玻璃滴管瓶" },
    category: "serum",
    material: "Glass",
    capacity: "30 / 50 ml",
    capacityGroup: "standard",
    use: "Serum",
    moq: "5,000 pcs",
    leadTime: "25–30 days",
    decoration: "Frosting, gradient coating, silk screen, color spray",
    image: "/images/products/flat-square-dropper/main.webp",
    gallery: [
      "/images/products/flat-square-dropper/gallery-0.webp",
      "/images/products/flat-square-dropper/gallery-1.webp",
      "/images/products/flat-square-dropper/gallery-2.webp",
      "/images/products/flat-square-dropper/gallery-3.webp"
    ],
    description:
      "A modern flat-square silhouette with softly rounded corners — a sleek alternative to the classic cylinder. Available in 30 ml and 50 ml with frosted, gradient, amber or matte beige finishes. A perfect fit for minimalist, gender-neutral and clinical skincare lines.",
    descriptionI18n: {
      kr: "부드럽게 둥근 모서리의 모던한 플랫 스퀘어 실루엣 — 클래식한 원형을 대체할 세련된 선택. 30ml·50ml 두 가지 용량, 프로스트·그라데이션·앰버·매트 베이지 마감 중 선택 가능. 미니멀, 젠더리스, 클리니컬 스킨케어 라인에 완벽하게 어울립니다.",
      jp: "柔らかな角丸のモダンなフラットスクエアシルエット — クラシックな円筒形に代わる洗練された選択肢。30ml·50mlの2サイズ、フロスト·グラデーション·アンバー·マットベージュ仕上げから選択可能。ミニマル、ジェンダーレス、クリニカルスキンケアラインに最適。",
      tw: "柔和圓角的摩登扁平方形輪廓 — 取代傳統圓柱的俐落選擇。提供 30ml 與 50ml 兩種容量，可選磨砂、漸層、琥珀或霧面米色表面處理。極適合極簡、中性、醫美護膚品牌。",
    },
    features: [
      "Sleek flat-square silhouette — stands out in a sea of round bottles",
      "30 ml & 50 ml dual-size lineup for serum + moisturizer pairing",
      "Frosted, gradient, amber & matte beige finishes",
      "White, black or metallic dropper collar options",
      "Thick base for a premium, weighty hand feel",
      "Custom gradient & Pantone color matching available",
    ],
    brandName: "Vesla",
    mpn: "VSL-FLAT-SQUARE-DROPPER",
    sku: "VSL-FLAT-SQUARE-DROPPER-5K",
    seoKeywords: ["flat square glass dropper bottle", "geometric shape serum bottle wholesale", "modern architectural glass packaging", "square glass bottle custom decoration", "matte finish square dropper OEM", "minimalist skincare bottle supplier", "flat side label area dropper bottle", "premium square glass serum container", "architectural beauty packaging bottle", "square dropper bottle low MOQ China", "custom Pantone color square glass"],
    seoTags: ["Serum Packaging", "Dropper Bottle", "Skincare Glass", "Custom OEM", "Low MOQ", "FDA Approved", "DDP Shipping"],
  },
  {
    id: "square-serum-dropper",
    seoSlug: "square-glass-serum-dropper-bottle-manufacturer-100ml",
    name: "Square Glass Serum Dropper Bottle",
    specTitle: "30ml 50ml 100ml Square Glass Serum Dropper Bottle",
    nameI18n: { kr: "스퀘어 글래스 세럼 드롭퍼 보틀", jp: "スクエアガラス セラム ドロッパーボトル", tw: "方形玻璃精華液滴管瓶" },
    category: "serum",
    material: "Glass",
    capacity: "30 / 50 / 100 ml",
    capacityGroup: "large",
    use: "Serum",
    moq: "5,000 pcs",
    leadTime: "25–30 days",
    decoration: "Silk screen, hot stamping, frosting, color spray coating",
    image: "/images/products/square-serum-dropper/main.webp",
    gallery: [
      "/images/products/square-serum-dropper/gallery-0.webp",
      "/images/products/square-serum-dropper/gallery-1.webp",
      "/images/products/square-serum-dropper/gallery-2.webp",
      "/images/products/square-serum-dropper/gallery-3.webp"
    ],
    description:
      "A clean, architectural square dropper bottle with crisp edges and premium glass clarity. Available in 30 ml, 50 ml, and 100 ml — the 100 ml jumbo size is a standout for body serums and professional salon lines. Frosted or clear glass with gold, silver, or matte black collar options.",
    descriptionI18n: {
      kr: "깔끔한 직선의 건축적인 스퀘어 드롭퍼 보틀. 30ml, 50ml, 100ml 세 가지 용량 — 100ml 점보 사이즈는 바디 세럼 및 프로페셔널 살롱 라인에 돋보입니다. 프로스트 또는 클리어 글래스에 골드, 실버, 매트 블랙 칼라 옵션 선택 가능.",
      jp: "クリーンで建築的なスクエアドロッパーボトル。30ml、50ml、100mlの3サイズ展開 — 100mlのジャンボサイズはボディセラムやプロフェッショナルサロンラインの主役に。フロストまたはクリアガラスに、ゴールド・シルバー・マットブラックのカラーオプション。",
      tw: "俐落建築感的方形滴管瓶，提供 30ml、50ml、100ml 三種容量 — 100ml 加大款是身體精華液與專業沙龍線的亮點單品。可選磨砂或透明玻璃，搭配金、銀、霧面黑頸圈。",
    },
    features: [
      "Architectural square body — stands out on shelf & camera",
      "30 / 50 / 100 ml three-size lineup including jumbo format",
      "Frosted or clear glass with gold, silver or matte black collar",
      "Thick glass base for a premium weighty feel",
      "Custom Pantone color coating & gradient options",
      "Compatible with push-button & straight droppers",
    ],
    brandName: "Vesla",
    mpn: "VSL-SQUARE-SERUM-DROPPER",
    sku: "VSL-SQUARE-SERUM-DROPPER-5K",
    seoKeywords: ["square glass serum bottle 100ml", "jumbo size dropper bottle wholesale", "body serum square glass packaging", "professional salon size serum bottle", "large capacity square dropper OEM", "clear square glass bottle bulk", "salon grade skincare glass packaging", "custom frosted square serum bottle", "square dropper with hot stamp logo", "gradient spray square glass bottle", "branded square serum bottle supplier"],
    seoTags: ["Serum Packaging", "Square Bottle", "Dropper Bottle", "Custom OEM", "Low MOQ", "Jumbo Size", "FDA Approved"],
  },
  {
    id: "frosted-blue-dropper-30ml",
    seoSlug: "frosted-blue-glass-dropper-bottle-manufacturer",
    name: "30ml Frosted Blue Dropper Bottle",
    specTitle: "30ml Frosted Blue Glass Dropper Bottle",
    nameI18n: { kr: "30ml 프로스트 블루 드롭퍼 보틀", jp: "30ml フロストブルー ドロッパーボトル", tw: "30ml 磨砂藍滴管瓶" },
    category: "serum",
    material: "Glass",
    capacity: "30 ml",
    capacityGroup: "standard",
    use: "Serum",
    moq: "5,000 pcs",
    leadTime: "25–30 days",
    decoration: "Color frosting (blue), silk screen, hot stamping",
    image: "/images/products/frosted-blue-dropper-30ml/main.webp",
    gallery: [
      "/images/products/frosted-blue-dropper-30ml/gallery-0.webp",
      "/images/products/frosted-blue-dropper-30ml/gallery-1.webp",
      "/images/products/frosted-blue-dropper-30ml/gallery-2.webp",
      "/images/products/frosted-blue-dropper-30ml/gallery-3.webp"
    ],
    description:
      "A popular 30 ml frosted blue dropper bottle with a vibrant, Instagram-ready aesthetic. The color frosting is baked into the glass for a permanent, scratch-resistant finish — ideal for hyaluronic acid, niacinamide, and vitamin C serums targeting Gen-Z and millennial skincare audiences.",
    descriptionI18n: {
      kr: "선명하고 인스타그램용으로 완벽한 30ml 프로스트 블루 드롭퍼 보틀. 컬러 프로스트는 유리에 베이킹 처리되어 긁힘에 강한 영구 마감 — 히알루론산, 나이아신아마이드, 비타민C 세럼 등 Z세대와 밀레니얼 타겟 스킨케어에 최적.",
      jp: "鮮やかでインスタ映えする30mlフロストブルードロッパーボトル。カラーフロストはガラスに焼き付けた永久的な傷つきにくい仕上げ — ヒアルロン酸、ナイアシンアミド、ビタミンCセラムなど、Z世代・ミレニアル向けスキンケアに最適。",
      tw: "30ml 鮮明磨砂藍滴管瓶，具備 Instagram 級的視覺吸引力。彩色磨砂經高溫燒結入玻璃，永久防刮 — 極適合玻尿酸、菸鹼醯胺、維他命 C 精華液等瞄準 Z 世代與千禧世代的護膚品牌。",
    },
    features: [
      "Baked-in color frosting — never peels or scratches",
      "Vibrant blue finish stands out on social media & shelf",
      "Compatible with gold, silver or matte black dropper collar",
      "Thick base for a premium, high-perceived-value weight",
      "Custom silk-screen or hot-stamp branding available",
      "Stocked 30 ml mold — fast 5-day sampling",
    ],
    brandName: "Vesla",
    mpn: "VSL-FROSTED-BLUE-DROPPER-30ML",
    sku: "VSL-FROSTED-BLUE-DROPPER-30ML-5K",
    seoKeywords: ["frosted blue glass dropper bottle OEM", "baked in color glass bottle factory", "permanent color frosting dropper bottle", "blue matte glass serum packaging", "scratch resistant colored glass bottle", "Instagram friendly blue serum bottle", "Gen Z skincare packaging glass", "vibrant colored glass dropper supplier", "custom color frosted glass manufacturer", "pantone matched blue glass bottle", "durable color glass dropper wholesale", "trending blue skincare bottle 2026"],
    seoTags: ["Serum Packaging", "Frosted Blue Glass", "Dropper Bottle", "Custom OEM", "Low MOQ", "Color Frosting", "FDA Approved"],
  },
  {
    id: "flat-shoulder-dropper-30ml",
    seoSlug: "flat-shoulder-glass-dropper-bottle-supplier",
    name: "30ml Flat Shoulder Empty Dropper Bottle",
    specTitle: "30ml Flat Shoulder Empty Glass Dropper Bottle",
    nameI18n: { kr: "30ml 플랫 숄더 드롭퍼 보틀", jp: "30ml フラットショルダー ドロッパーボトル", tw: "30ml 平肩滴管空瓶" },
    category: "serum",
    material: "Glass",
    capacity: "30 ml",
    capacityGroup: "standard",
    use: "Serum",
    moq: "5,000 pcs",
    leadTime: "20–25 days",
    decoration: "Silk screen, hot stamping, frosting, color spray",
    image: "/images/products/flat-shoulder-dropper-30ml/main.webp",
    gallery: [
      "/images/products/flat-shoulder-dropper-30ml/gallery-0.webp",
      "/images/products/flat-shoulder-dropper-30ml/gallery-1.webp",
      "/images/products/flat-shoulder-dropper-30ml/gallery-2.webp",
      "/images/products/flat-shoulder-dropper-30ml/gallery-3.webp"
    ],
    description:
      "A classic flat-shoulder 30 ml dropper bottle with a low-profile, minimalist silhouette. The flat shoulder design creates a clean label area and a modern, understated look on shelf. Clear glass with gold or silver collar — an ideal entry-level serum bottle for new brand launches and private-label skincare lines.",
    descriptionI18n: {
      kr: "로우 프로파일의 미니멀한 실루엣을 가진 클래식 플랫 숄더 30ml 드롭퍼 보틀. 플랫 숄더 디자인은 깔끔한 라벨 영역을 제공하며 선반 위에서 모던하고 절제된 느낌을 줍니다. 클리어 글래스에 골드 또는 실버 칼라 — 신규 브랜드 론칭 및 PB 스킨케어 라인에 이상적인 엔트리급 세럼 보틀.",
      jp: "ロープロファイルでミニマルなシルエットのクラシックなフラットショルダー30mlドロッパーボトル。フラットショルダーデザインがすっきりとしたラベルエリアを生み出し、棚の上でモダンで控えめな印象を与えます。クリアガラスにゴールドまたはシルバーカラー — 新ブランドの立ち上げやプライベートブランドのスキンケアラインに最適なエントリークラスのセラムボトル。",
      tw: "低調極簡輪廓的經典平肩 30ml 滴管瓶，平肩設計提供乾淨的標籤區域，陳列架上呈現現代內斂的氣質。透明玻璃搭配金色或銀色頸圈 — 是品牌初創與自有品牌護膚線的理想入門級精華液瓶。",
    },
    features: [
      "Clean flat-shoulder silhouette — modern, minimal, label-ready",
      "30 ml ideal size for facial serums and oils",
      "Clear glass with gold or silver dropper collar",
      "Compatible with straight & push-button dropper assemblies",
      "Fast 5-day sample turnaround on stocked molds",
      "Low MOQ 5,000 pcs — perfect for indie brand launches",
    ],
    brandName: "Vesla",
    mpn: "VSL-FLAT-SHOULDER-DROPPER-30ML",
    sku: "VSL-FLAT-SHOULDER-DROPPER-30ML-5K",
    seoKeywords: ["flat shoulder dropper bottle clear glass", "classic clear dropper bottle wholesale", "label ready glass serum bottle", "entry level cosmetic glass packaging", "startup skincare brand dropper bottle", "clear glass dropper bottle stock mold", "minimal clean serum bottle design", "low cost glass dropper bottle OEM", "affordable custom glass serum packaging", "standard flat shoulder bottle bulk", "clear glass dropper gold collar option"],
    seoTags: ["Serum Packaging", "Flat Shoulder Bottle", "Dropper Bottle", "Custom OEM", "Low MOQ", "Clear Glass", "FDA Approved"],
  },
  {
    id: "matte-black-serum-bottle",
    seoSlug: "custom-matte-black-glass-serum-bottle-manufacturer",
    name: "Matte Black Glass Serum Bottle",
    specTitle: "5ml-100ml Matte Black Glass Serum Bottle",
    seoTitle: "Matte Black Serum Bottle Manufacturer | 5-100ml, Low MOQ 5,000 — Vesla",
    nameI18n: { kr: "매트 블랙 글래스 세럼 보틀", jp: "マットブラック ガラス セラムボトル", tw: "霧面黑玻璃精華液瓶" },
    category: "serum",
    material: "Glass",
    capacity: "5 / 10 / 15 / 20 / 30 / 50 / 100 ml",
    capacityGroup: "large",
    use: "Serum",
    moq: "5,000 pcs",
    leadTime: "25–30 days",
    decoration: "Matte black spray coating, silk screen, hot stamping",
    image: "/images/products/matte-black-serum-bottle/main.webp",
    gallery: [
      "/images/products/matte-black-serum-bottle/gallery-0.webp",
      "/images/products/matte-black-serum-bottle/gallery-1.webp",
      "/images/products/matte-black-serum-bottle/gallery-2.webp",
      "/images/products/matte-black-serum-bottle/gallery-3.webp"
    ],
    description:
      "A sleek matte black glass serum bottle with a soft-touch feel and seven size options — from 5 ml sample vials to 100 ml professional sizes. The matte finish photographs with zero glare, making it a favorite for high-contrast e-commerce product imagery. One of our most requested bottles for premium actives and luxury serum launches.",
    descriptionI18n: {
      kr: "소프트 터치 감촉의 세련된 매트 블랙 세럼 보틀. 5ml 샘플 바이알부터 100ml 프로페셔널 사이즈까지 7가지 옵션. 매트 마감은 빛 반사 없이 촬영되어 고대비 이커머스 이미지에 최적. 프리미엄 액티브 및 럭셔리 세럼 론칭에 가장 많이 요청되는 보틀입니다.",
      jp: "ソフトタッチな質感の洗練されたマットブラックガラスセラムボトル。5mlサンプルバイアルから100mlプロ仕様まで7サイズ展開。マット仕上げは光を反射せず、ハイコントラストなEC画像に最適。プレミアムアクティブやラグジュアリーセラムのローンチで最もリクエストの多いボトルです。",
      tw: "柔觸霧面黑玻璃精華液瓶，7 種規格從 5ml 試用裝到 100ml 專業容量。霧面不反光，拍攝時零眩光，是高端活性成分與奢華精華液新品首發中最受歡迎的瓶型。",
    },
    features: [
      "Seven sizes from 5 ml sampler to 100 ml full-size",
      "Matte black soft-touch finish — premium feel, zero glare",
      "Compatible with gold, silver or matte black dropper collar",
      "Thick glass base for high-perceived-value weight",
      "Custom silk-screen or hot-stamp logo on bottle body",
      "Stocked molds across all sizes — fast 5-day samples",
    ],
    brandName: "Vesla",
    mpn: "VSL-MATTE-BLACK-SERUM-BOTTLE",
    sku: "VSL-MATTE-BLACK-SERUM-BOTTLE-5K",
    seoKeywords: ["matte black spray coated glass bottle", "soft touch black glass serum packaging", "zero glare cosmetic photography bottle", "luxury black dropper bottle wholesale", "black glass vitamin C serum container", "premium dark glass skincare packaging", "elegant black matte bottle OEM China", "matte black dropper 5ml to 100ml", "custom silk screen black glass bottle", "upscale serum packaging glass black", "black bottle gold collar dropper set", "high end cosmetic glass manufacturer"],
    seoTags: ["Serum Packaging", "Matte Black Glass", "Dropper Bottle", "Custom OEM", "Low MOQ", "Luxury Finish", "FDA Approved"],
  },
  {
    id: "black-flat-shoulder-dropper",
    seoSlug: "black-flat-shoulder-round-dropper-bottle-supplier",
    name: "Black Flat Shoulder Round Dropper Bottle",
    specTitle: "20ml-60ml Black Flat Shoulder Round Glass Dropper Bottle",
    nameI18n: { kr: "블랙 플랫 숄더 라운드 드롭퍼 보틀", jp: "ブラック フラットショルダー ラウンド ドロッパーボトル", tw: "黑色平肩圓形滴管瓶" },
    category: "serum",
    material: "Glass",
    capacity: "20 / 30 / 50 / 60 ml",
    capacityGroup: "standard",
    use: "Serum",
    moq: "5,000 pcs",
    leadTime: "25–30 days",
    decoration: "Matte black spray coating, silk screen, hot stamping",
    image: "/images/products/black-flat-shoulder-dropper/main.webp",
    gallery: [
      "/images/products/black-flat-shoulder-dropper/gallery-0.webp",
      "/images/products/black-flat-shoulder-dropper/gallery-1.webp",
      "/images/products/black-flat-shoulder-dropper/gallery-2.webp",
      "/images/products/black-flat-shoulder-dropper/gallery-3.webp"
    ],
    description:
      "A flat-shoulder round dropper bottle in matte black — the clean, understated silhouette that brands return to season after season. The flat shoulder provides a generous, flat label area while the matte finish eliminates reflection in product photography. Four popular sizes from 20 ml to 60 ml cover the sweet spot for face serums and facial oils.",
    descriptionI18n: {
      kr: "매트 블랙 마감의 플랫 숄더 라운드 드롭퍼 보틀 — 브랜드가 시즌마다 다시 찾는 깔끔하고 절제된 실루엣. 플랫 숄더는 넉넉한 라벨 영역을 제공하며, 매트 마감은 제품 촬영 시 반사를 없앱니다. 20ml~60ml의 인기 4종 사이즈로 페이스 세럼과 페이셜 오일에 최적화.",
      jp: "マットブラック仕上げのフラットショルダーラウンドドロッパーボトル — ブランドが毎シーズン選び続けるクリーンで控えめなシルエット。フラットショルダーは広いラベルエリアを提供し、マット仕上げが商品撮影時の反射を排除。20mlから60mlの人気4サイズでフェイスセラムやフェイシャルオイルに最適。",
      tw: "霧面黑平肩圓形滴管瓶 — 品牌每季回購的乾淨內斂廓形。平肩設計提供寬敞標籤區域，霧面材質消除產品攝影反光。20ml 至 60ml 四款熱門容量，完美覆蓋面部精華液與護膚油的核心需求。",
    },
    features: [
      "Flat shoulder design — generous label area, clean silhouette",
      "Matte black finish — zero-glare photography, premium touch",
      "Four core sizes: 20 / 30 / 50 / 60 ml",
      "Compatible with gold, silver or matte black dropper collar",
      "Custom silk-screen, hot-stamp or UV print branding",
      "Stocked molds — 5-day sample turnaround",
    ],
    brandName: "Vesla",
    mpn: "VSL-BLACK-FLAT-SHOULDER-DROPPER",
    sku: "VSL-BLACK-FLAT-SHOULDER-DROPPER-5K",
    seoKeywords: ["black flat shoulder round dropper OEM", "matte black dropper bottle 20ml 30ml", "flat shoulder dark glass serum bottle", "no reflection black glass packaging", "black dropper bottle gold collar set", "round shoulder matte black bottle factory", "custom logo black glass dropper", "professional skincare black bottle bulk", "clean label black flat shoulder bottle", "modern matte black serum glass supplier"],
    seoTags: ["Serum Packaging", "Flat Shoulder", "Matte Black", "Custom OEM", "Low MOQ", "Dropper Bottle", "FDA Approved"],
  },
  {
    id: "flat-shoulder-round-dropper-60ml",
    seoSlug: "flat-shoulder-round-glass-dropper-bottle-manufacturer",
    name: "Flat Shoulder Round Glass Dropper Bottle",
    specTitle: "60ml Flat Shoulder Round Glass Dropper Bottle",
    nameI18n: { kr: "플랫 숄더 라운드 글래스 드롭퍼 보틀", jp: "フラットショルダー ラウンド ガラス ドロッパーボトル", tw: "平肩圓形玻璃滴管瓶" },
    category: "serum",
    material: "Glass",
    capacity: "60 ml",
    capacityGroup: "standard",
    use: "Serum",
    moq: "5,000 pcs",
    leadTime: "25–30 days",
    decoration: "Silk screen, hot stamping, frosting, color spray",
    image: "/images/products/flat-shoulder-round-dropper-60ml/main.webp",
    gallery: [
      "/images/products/flat-shoulder-round-dropper-60ml/gallery-0.webp",
      "/images/products/flat-shoulder-round-dropper-60ml/gallery-1.webp",
      "/images/products/flat-shoulder-round-dropper-60ml/gallery-2.webp",
      "/images/products/flat-shoulder-round-dropper-60ml/gallery-3.webp"
    ],
    description:
      "A 60 ml flat-shoulder round dropper bottle — the larger sibling in our flat-shoulder family, ideal for facial oils, hair serums, and body treatment oils that call for a generous fill volume. Clear glass with gold or silver collar options, ready for custom decoration.",
    descriptionI18n: {
      kr: "플랫 숄더 라운드 60ml 드롭퍼 보틀 — 페이셜 오일, 헤어 세럼, 바디 트리트먼트 오일 등 넉넉한 용량이 필요한 제품에 이상적인 대용량 버전. 클리어 글래스, 골드 또는 실버 칼라 옵션, 맞춤 데코레이션 가능.",
      jp: "フラットショルダーラウンド60mlドロッパーボトル — フェイシャルオイル、ヘアセラム、ボディトリートメントオイルなど、たっぷりとした容量が求められる製品に最適な大容量版。クリアガラス、ゴールドまたはシルバーカラーオプション、カスタム装飾対応。",
      tw: "60ml 平肩圓形滴管瓶 — 適合面部護理油、頭髮精華、身體護理油等需要大容量的產品。透明玻璃搭配金色或銀色頸圈，支持訂製表面處理。",
    },
    features: [
      "60 ml generous size for body & hair formulations",
      "Flat shoulder design — wide label area, clean profile",
      "Clear glass with gold or silver dropper collar",
      "Compatible with straight & push-button dropper inserts",
      "Custom silk-screen, hot-stamp or spray coating available",
      "Stocked mold — fast 5-day sample turnaround",
    ],
    brandName: "Vesla",
    mpn: "VSL-FLAT-SHOULDER-ROUND-DROPPER-60ML",
    sku: "VSL-FLAT-SHOULDER-ROUND-DROPPER-60ML-5K",
    seoKeywords: ["60ml clear glass dropper bottle wholesale", "body oil large dropper bottle OEM", "hair serum 60ml glass container", "jumbo clear flat shoulder dropper", "60ml cosmetic glass bottle factory", "large format serum packaging glass", "clear dropper bottle with gold collar", "bulk 60ml cosmetic glass dropper", "treatment oil bottle China supplier", "oversized clear glass serum dropper"],
    seoTags: ["Serum Packaging", "60ml Dropper", "Flat Shoulder", "Custom OEM", "Low MOQ", "Clear Glass", "FDA Approved"],
  },
  {
    id: "matte-black-brown-jar",
    seoSlug: "matte-black-brown-glass-cream-jar-manufacturer",
    name: "30g 50g Matte Black Brown Face Cream Jar",
    specTitle: "30g & 50g Matte Black Brown Face Cream Jar",
    nameI18n: { kr: "30g 50g 매트 블랙 브라운 페이스 크림 자", jp: "30g 50g マットブラックブラウン フェイスクリームジャー", tw: "30g 50g 霧面黑棕面霜瓶" },
    category: "jar",
    material: "Glass",
    capacity: "30 / 50 g",
    capacityGroup: "standard",
    use: "Face Cream",
    moq: "5,000 pcs",
    leadTime: "25–30 days",
    decoration: "Matte black-brown color coating, silk screen, hot stamping",
    image: "/images/products/matte-black-brown-jar/main.webp",
    gallery: [
      "/images/products/matte-black-brown-jar/gallery-0.webp",
      "/images/products/matte-black-brown-jar/gallery-1.webp",
      "/images/products/matte-black-brown-jar/gallery-2.webp",
      "/images/products/matte-black-brown-jar/gallery-3.webp"
    ],
    description:
      "A refined matte black-brown cream jar with a soft, velvety surface that photographs beautifully for e-commerce. The double-wall glass body adds weight and perceived luxury, while the wide mouth makes formulation filling effortless. Available in 30 g and 50 g — a go-to for premium face creams, eye creams and overnight masks.",
    descriptionI18n: {
      kr: "부드럽고 벨벳 같은 표면의 세련된 매트 블랙 브라운 크림 자. 더블월 글래스 바디가 무게감과 고급스러움을 더하고, 와이드 마우스로 포뮬러 충전이 용이합니다. 30g과 50g으로 제공 — 프리미엄 페이스 크림, 아이 크림, 오버나이트 마스크에 최적.",
      jp: "柔らかくビロードのような表面を持つ洗練されたマットブラックブラウンのクリームジャー。ダブルウォールガラスボディが重量感とラグジュアリーさを演出し、ワイドマウスで製剤充填もスムーズ。30gと50gをラインナップ — プレミアムフェイスクリーム、アイクリーム、オーバーナイトマスクに最適。",
      tw: "柔軟絲絨表面的精緻霧面黑棕膏霜瓶，雙層玻璃瓶身賦予分量感與奢華質感，廣口設計便於配方填充。提供 30g 與 50g — 是高階面霜、眼霜、晚安面膜的理想之選。",
    },
    features: [
      "Velvet matte black-brown finish — soft touch, zero fingerprints",
      "Double-wall glass for premium weight and durability",
      "Wide mouth for easy filling on standard production lines",
      "Gold, silver or matte black lid options",
      "Custom silk-screen or hot-stamp logo on lid or base",
      "30 g & 50 g — ideal for face cream and eye cream",
    ],
    brandName: "Vesla",
    mpn: "VSL-MATTE-BLACK-BROWN-JAR",
    sku: "VSL-MATTE-BLACK-BROWN-JAR-5K",
    seoKeywords: ["matte black brown cream jar OEM", "soft touch matte glass jar wholesale", "velvet finish face cream container", "double wall glass cream jar factory", "fingerprint resistant cosmetic jar", "premium skincare jar matte coating", "custom color spray coated glass jar", "matte glass cream jar 30g 50g", "luxury face cream packaging glass jar", "thick wall matte finish jar supplier", "brown black matte cosmetic jar China", "private label matte glass cream jar"],
    seoTags: ["Cream Jar", "Matte Finish", "Skincare Packaging", "Custom OEM", "Low MOQ", "Double Wall Glass", "FDA Compliant"],
  },
  {
    id: "frosted-round-jar-woodgrain",
    seoSlug: "frosted-round-glass-cream-jar-woodgrain-lid-supplier",
    name: "Frosted Round Glass Cream Jar — Woodgrain Lid",
    specTitle: "5g-100g Frosted Round Glass Cream Jar with Woodgrain Lid",
    nameI18n: { kr: "프로스트 라운드 글래스 크림 자 — 우드그레인 리드", jp: "フロスト ラウンド クリームジャー — 木目調リッド", tw: "磨砂圓形膏霜瓶 — 水轉印木紋蓋" },
    category: "jar",
    material: "Glass",
    capacity: "5 / 10 / 15 / 30 / 50 / 100 g",
    capacityGroup: "standard",
    use: "Face Cream",
    moq: "5,000 pcs",
    leadTime: "25–30 days",
    decoration: "Frosted glass + water transfer-printed woodgrain lid, silk screen, hot stamping",
    image: "/images/products/frosted-round-jar-woodgrain/main.webp",
    gallery: [
      "/images/products/frosted-round-jar-woodgrain/gallery-0.webp",
      "/images/products/frosted-round-jar-woodgrain/gallery-1.webp",
      "/images/products/frosted-round-jar-woodgrain/gallery-2.webp",
      "/images/products/frosted-round-jar-woodgrain/gallery-3.webp"
    ],
    description:
      "A classic frosted round cream jar paired with a premium water transfer-printed woodgrain lid — delivering a warm, natural aesthetic at half the cost of real bamboo. Six sizes from 5 g sample jars to 100 g body butter jars make this one of our most versatile stock programs. Popular with natural and botanical skincare brands across Europe.",
    descriptionI18n: {
      kr: "프리미엄 수전사 인쇄 우드그레인 리드와 조화를 이루는 클래식 프로스트 라운드 크림 자 — 실제 대나무 대비 절반의 비용으로 따뜻하고 자연스러운 미학을 구현합니다. 5g 샘플 자부터 100g 바디 버터 자까지 6가지 사이즈로, 유럽 내 내추럴 및 보태니컬 스킨케어 브랜드에 가장 다재다능한 재고 프로그램입니다.",
      jp: "クラシックなフロストラウンドクリームジャーに、水転写プリントの木目調リッドを組み合わせ — 本物の竹の半分のコストで温かみのあるナチュラルな美しさを実現。5gのサンプルジャーから100gのボディバタージャーまで6サイズ展開で、ヨーロッパのナチュラル＆ボタニカルスキンケアブランドに人気の多用途ストックプログラムです。",
      tw: "經典磨砂圓形膏霜瓶搭配水轉印木紋蓋 — 以真實竹材一半的成本實現溫暖自然的美感。從 5g 試用裝到 100g 身體乳霜瓶六種容量，是歐洲天然與植萃護膚品牌最愛的多規格庫存方案。",
    },
    features: [
      "Water transfer-printed woodgrain lid — natural look, durable finish",
      "Six sizes from 5 g to 100 g — covers sampler to full-size",
      "Frosted glass body — soft matte touch, fingerprint-resistant",
      "Inner liner available for formula protection and freshness",
      "Custom silk-screen or hot-stamp logo on lid or base",
      "Fast 5-day sample turnaround on stocked molds",
    ],
    brandName: "Vesla",
    mpn: "VSL-FROSTED-ROUND-JAR-WOODGRAIN",
    sku: "VSL-FROSTED-ROUND-JAR-WOODGRAIN-5K",
    seoKeywords: ["frosted round jar woodgrain lid OEM", "water transfer wood grain cream jar", "natural aesthetic cosmetic glass jar", "botanical skincare packaging supplier", "bamboo alternative lid glass jar", "eco friendly look cosmetic glass package", "warm natural cream jar bulk wholesale", "wood effect lid frosted glass jar", "green beauty packaging glass container", "natural skincare jar 5g to 100g", "rustic chic cosmetic glass packaging"],
    seoTags: ["Cream Jar", "Woodgrain Lid", "Natural Packaging", "Custom OEM", "Low MOQ", "Frosted Glass", "FDA Compliant"],
  },
  {
    id: "brown-woodgrain-jar",
    seoSlug: "brown-woodgrain-water-transfer-cream-jar-manufacturer",
    name: "Brown Water Transfer Woodgrain Cream Jar",
    specTitle: "10g-50g Brown Water Transfer Woodgrain Cream Jar",
    nameI18n: { kr: "브라운 수전사 우드그레인 크림 자", jp: "ブラウン水転写木目調クリームジャー", tw: "棕色水轉印木紋膏霜瓶" },
    category: "jar",
    material: "Glass",
    capacity: "10 / 15 / 30 / 50 g",
    capacityGroup: "standard",
    use: "Face Cream",
    moq: "5,000 pcs",
    leadTime: "25–30 days",
    decoration: "Water transfer-printed woodgrain lid (brown), silk screen, hot stamping",
    image: "/images/products/brown-woodgrain-jar/main.webp",
    gallery: [
      "/images/products/brown-woodgrain-jar/gallery-0.webp",
      "/images/products/brown-woodgrain-jar/gallery-1.webp",
      "/images/products/brown-woodgrain-jar/gallery-2.webp",
      "/images/products/brown-woodgrain-jar/gallery-3.webp"
    ],
    description:
      "A warm brown woodgrain cream jar — the rich espresso tone reads as organic skincare, perfect for brands positioning in the botanical, Ayurvedic, and craft-beauty space. The water transfer-printed lid delivers the look and feel of solid wood at one-third the cost and weight. Available in four sizes from 10 g travel minis to 50 g full-size jars.",
    descriptionI18n: {
      kr: "따뜻한 브라운 우드그레인 크림 자 — 리치한 에스프레소 톤이 오가닉 스킨케어의 느낌을 주며, 보태니컬·아유르베다·크래프트 뷰티 브랜드에 이상적입니다. 수전사 프린트 리드가 원목의 질감을 1/3 비용과 무게로 구현합니다. 10g 트래블 미니부터 50g 정사이즈까지 4가지 용량.",
      jp: "温かみのあるブラウン木目調クリームジャー — リッチなエスプレッソトーンがオーガニックスキンケアの雰囲気を醸し出し、ボタニカル・アーユルヴェーダ・クラフトビューティーブランドに最適。水転写プリントリッドが、無垢材の質感を3分の1のコストと重量で実現。10gトラベルミニから50gフルサイズまで4サイズ。",
      tw: "溫暖棕木紋膏霜瓶 — 濃厚的濃縮咖啡色調帶出有機護膚質感，是植萃、阿育吠陀、手工美妝品牌的理想之選。水轉印木紋蓋以三分之一成本與重量還原實木質感。10g 旅行迷你裝到 50g 正裝四種容量。",
    },
    features: [
      "Warm brown woodgrain lid — organic skincare aesthetic",
      "Water transfer printed — durable, won't peel or warp",
      "Four sizes: 10g travel mini / 15g sample / 30g daily / 50g full-size",
      "Frosted glass body with rich espresso-toned lid",
      "Custom silk-screen or hot-stamp logo on lid or base",
      "Stocked molds — 5-day sample turnaround",
    ],
    brandName: "Vesla",
    mpn: "VSL-BROWN-WOODGRAIN-JAR",
    sku: "VSL-BROWN-WOODGRAIN-JAR-5K",
    seoKeywords: [
      "brown woodgrain cream jar OEM",
      "espresso tone wood effect lid jar",
      "Ayurvedic skincare glass packaging",
      "organic beauty cream jar supplier",
      "water transfer brown wood grain jar",
      "craft beauty packaging glass container",
      "botanical skincare cream jar wholesale",
      "warm natural wood lid cosmetic jar",
      "travel size 10g glass cream jar",
      "rustic brown wood grain jar factory China",
      "eco aesthetic glass cream jar bulk",
    ],
    seoTags: ["Cream Jar", "Woodgrain Lid", "Organic Aesthetic", "Custom OEM", "Low MOQ", "Botanical Packaging", "FDA Compliant"],
  },
  {
    id: "amber-serum-vial-dropper",
    seoSlug: "amber-glass-serum-vial-dropper-bottle-supplier",
    specTitle: "Amber Serum Vials: Wholesale Glass Vial Dropper Bottles (5ml-50ml)",
    seoTitle: "Amber Serum Vials Wholesale | 5-50ml, MOQ 5,000 pcs — Vesla Factory Direct",
    name: "Amber Glass Serum Vial Dropper Bottle",
    nameI18n: { kr: "앰버 글래스 세럼 바이알 드롭퍼", jp: "アンバーガラス セラム バイアル ドロッパー", tw: "茶色精華液拉管滴管瓶" },
    category: "vial",
    material: "Glass",
    capacity: "5 / 10 / 20 / 30 / 50 ml",
    capacityGroup: "standard",
    use: "Serum / Injectable / Wellness",
    moq: "5,000 pcs",
    leadTime: "25–30 days",
    decoration: "Amber glass + silk screen, hot stamping",
    image: "/images/products/amber-serum-vial-dropper/main.webp",
    gallery: [
      "/images/products/amber-serum-vial-dropper/gallery-0.webp",
      "/images/products/amber-serum-vial-dropper/gallery-1.webp",
      "/images/products/amber-serum-vial-dropper/gallery-2.webp",
      "/images/products/amber-serum-vial-dropper/gallery-3.webp"
    ],
    description:
      "A classic amber glass vial dropper bottle — the workhorse of serum, essential oil and wellness packaging. Five sizes from 5 ml sample vials to 50 ml full-size droppers. Amber glass provides natural UV protection for light-sensitive formulations like vitamin C, retinol and essential oils. Compatible with rubber teat and screw-cap dropper assemblies.",
    descriptionI18n: {
      kr: "클래식 앰버 글래스 바이알 드롭퍼 보틀 — 세럼, 에센셜 오일, 웰니스 포장의 핵심 제품. 5ml 샘플부터 50ml 풀사이즈까지 5가지 용량. 앰버 글래스가 비타민C, 레티놀, 에센셜 오일 등 광민감성 제형에 자연 UV 차단을 제공합니다.",
      jp: "クラシックなアンバーガラスバイアルドロッパーボトル — セラム、エッセンシャルオイル、ウェルネス包装の定番。5mlサンプルから50mlフルサイズまで5サイズ。アンバーガラスがビタミンC、レチノール、エッセンシャルオイルに自然UV保護を提供。",
      tw: "經典茶色玻璃拉管滴管瓶 — 精華液、精油、保健產品包裝的主力。5ml 試用裝到 50ml 正裝五種容量。茶色玻璃為維他命 C、A 醇、精油等光敏配方提供天然紫外線防護。",
    },
    features: [
      "Amber glass — natural UV protection for light-sensitive formulas",
      "Five sizes from 5 ml sampler to 50 ml full-size",
      "Compatible with rubber teat & screw-cap droppers",
      "Smooth cylindrical body ideal for full-wrap labels",
      "Custom silk-screen or hot-stamp logo on bottle body",
      "Stocked molds — fast 5-day sample turnaround",
    ],
    brandName: "Vesla",
    mpn: "VSL-AMBER-SERUM-VIAL-DROPPER",
    sku: "VSL-AMBER-SERUM-VIAL-DROPPER-5K",
    seoKeywords: [
      "amber glass serum vial dropper",
      "brown glass dropper bottle wholesale",
      "UV protective glass vial packaging",
      "essential oil amber dropper bottle",
      "5ml sample glass vial manufacturer",
      "wellness supplement glass dropper",
      "light sensitive serum glass packaging",
      "rubber teat dropper bottle supplier",
      "50ml amber glass vial bulk",
    ],
    seoTags: ["Glass Vial", "Amber Glass", "Serum Dropper", "UV Protection", "Custom OEM", "Low MOQ", "FDA Compliant"],
  },
  {
    id: "gradient-green-cosmetic-set",
    seoSlug: "gradient-green-cosmetic-glass-set-manufacturer",
    name: "Gradient Green Cosmetic Glass Set",
    specTitle: "Gradient Green Cosmetic Glass Set",
    nameI18n: { kr: "그라데이션 그린 코스메틱 유리 세트", jp: "グラデーショングリーン コスメティックガラスセット", tw: "漸層綠化妝品玻璃套裝" },
    category: "set",
    material: "Glass",
    capacity: "40 / 100 / 120 / 150 ml + 30 / 50 / 100 g",
    capacityGroup: "set",
    use: "Serum",
    moq: "5,000 pcs per SKU",
    leadTime: "30–35 days",
    decoration: "Gradient spray coating, hot stamping, silk screen, electroplated gold cap",
    image: "/images/products/gradient-green-cosmetic-set/main.webp",
    gallery: [
      "/images/products/gradient-green-cosmetic-set/gallery-0.webp",
      "/images/products/gradient-green-cosmetic-set/gallery-1.webp",
      "/images/products/gradient-green-cosmetic-set/gallery-2.webp",
      "/images/products/gradient-green-cosmetic-set/gallery-3.webp"
    ],
    description:
      "A full-range coordinated cosmetic glass set in deep forest green to seafoam gradient. Includes teardrop lotion bottles (40–150 ml) with gold pump caps, serum droppers, and round cream jars (30–100 g) with domed gold lids. Every piece shares the same gradient finish and gold hardware — a turnkey packaging identity for a single-brand skincare launch.",
    descriptionI18n: {
      kr: "딥 포레스트 그린에서 씨폼까지 이어지는 그라데이션의 풀레인지 코스메틱 유리 세트. 골드 펌프 캡이 달린 티어드롭 로션 보틀(40–150ml), 세럼 드롭퍼, 돔형 골드 리드의 크림 자(30–100g)로 구성. 모든 제품이 동일한 그라데이션 마감과 골드 하드웨어를 공유 — 단일 브랜드 스킨케어 런칭을 위한 턴키 패키징 아이덴티티.",
      jp: "ディープフォレストグリーンからシーフォームへのグラデーションで統一されたフルラインのコスメティックガラスセット。ゴールドポンプキャップ付きティアドロップローションボトル（40–150ml）、セラムドロッパー、ドーム型ゴールドリッドのクリームジャー（30–100g）をラインナップ。全アイテムが同一のグラデーション仕上げとゴールド金具で統一 — 単一ブランドのスキンケア立ち上げに最適なターンキーパッケージ。",
      tw: "深林綠到海沫綠漸層的完整化妝品玻璃套裝。包含金色按壓頭水滴形乳液瓶（40–150ml）、精華液滴管、圓頂金蓋膏霜瓶（30–100g），全系列統一漸層表面處理與金色五金 — 為單一品牌護膚線提供一站式的包裝識別。",
    },
    features: [
      "7-piece coordinated family: droppers, pumps & jars",
      "Custom forest-green gradient — available in blue & amber too",
      "Electroplated gold caps, collars & pump heads",
      "Teardrop lotion bottles: 40 / 100 / 120 / 150 ml",
      "Round cream jars: 30 / 50 / 100 g",
      "Single-brand turnkey packaging identity",
      "Gift-box & insert tray sourcing for holiday sets",
    ],
    brandName: "Vesla",
    mpn: "VSL-GRADIENT-GREEN-COSMETIC-SET",
    sku: "VSL-GRADIENT-GREEN-COSMETIC-SET-5K",
    seoKeywords: ["gradient green glass cosmetic set OEM", "color matched skincare packaging collection", "ombre green dropper jar set wholesale", "pantone matched green glass set", "bundled cosmetic glass packaging supplier", "regimen skincare set glass bottles", "gradient spray coat glass collection", "matching bottle jar set factory China", "full skincare line glass packaging", "4 piece cosmetic glass set OEM", "green gradient luxury skincare set"],
    seoTags: ["Cosmetic Set", "Glass Collection", "Luxury Packaging", "Custom OEM", "Low MOQ", "Gradient Glass", "Wholesale Set"],
  },
  {
    id: "gradient-green-pump-set",
    seoSlug: "gradient-green-lotion-cream-glass-set-supplier",
    name: "Gradient Green Lotion + Cream Deluxe Set",
    specTitle: "Gradient Green Lotion + Cream Glass Set",
    nameI18n: { kr: "그라데이션 그린 로션+크림 디럭스 세트", jp: "グラデーショングリーン ローション＋クリーム デラックスセット", tw: "漸層綠乳液+面霜豪華套裝" },
    category: "set",
    material: "Glass",
    capacity: "40 / 100 / 120 ml + 50 / 100 g",
    capacityGroup: "set",
    use: "Serum",
    moq: "5,000 pcs per SKU",
    leadTime: "30–35 days",
    decoration: "Gradient spray coating, hot stamping, silk screen, electroplated gold cap & pump",
    image: "/images/products/gradient-green-pump-set/main.webp",
    gallery: [
      "/images/products/gradient-green-pump-set/gallery-0.webp",
      "/images/products/gradient-green-pump-set/gallery-1.webp",
      "/images/products/gradient-green-pump-set/gallery-2.webp",
      "/images/products/gradient-green-pump-set/gallery-3.webp"
    ],
    description:
      "A 5-piece coordinated lotion + cream set with forest-green gradient glass and polished gold hardware. Includes three teardrop pump bottles (40 / 100 / 120 ml) and two domed cream jars (50 / 100 g). Available in green gradient, black-to-gold gradient or solid amber — the perfect turnkey packaging for a single-brand skincare collection launch.",
    descriptionI18n: {
      kr: "포레스트 그린 그라데이션 글래스와 폴리시드 골드 하드웨어로 구성된 5피스 로션+크림 세트. 티어드롭 펌프 보틀 3종(40/100/120ml)과 돔형 크림 자 2종(50/100g) 포함. 그린 그라데이션, 블랙-골드 그라데이션, 솔리드 앰버 중 선택 가능 — 단일 브랜드 스킨케어 라인 론칭을 위한 완벽한 턴키 패키지.",
      jp: "フォレストグリーンのグラデーションガラスとポリッシュドゴールド金具で統一された5点セット。ティアドロップポンプボトル3種（40/100/120ml）とドーム型クリームジャー2種（50/100g）。グリーングラデーション、ブラック→ゴールドグラデーション、ソリッドアンバーから選択可能 — 単一ブランドのスキンケアライン立ち上げに最適なターンキーパッケージ。",
      tw: "森林綠漸層玻璃搭配亮面金色五金，5 件式乳液+面霜套裝。水滴形按壓瓶 3 款（40/100/120ml）與圓頂膏霜瓶 2 款（50/100g）。可選綠色漸層、黑金漸層或純琥珀色 — 為單一品牌護膚系列上市提供完美的一站式包裝方案。",
    },
    features: [
      "5-piece pump lotion + cream jar coordinated set",
      "Forest-green gradient — also in black-gold & amber",
      "Electroplated gold dome lids & pump heads",
      "Teardrop pump bottles: 40 / 100 / 120 ml",
      "Domed cream jars: 50 / 100 g",
      "Turnkey single-brand identity with consistent finish",
      "Gift-box & insert tray sourcing for holiday sets",
    ],
    brandName: "Vesla",
    mpn: "VSL-GRADIENT-GREEN-PUMP-SET",
    sku: "VSL-GRADIENT-GREEN-PUMP-SET-5K",
    seoKeywords: ["gradient green pump bottle set OEM", "lotion pump glass cosmetic set wholesale", "color coordinated pump jar skincare set", "modern dispensing glass bottle set", "matching pump jar cosmetic collection", "full regimen pump dispenser glass set", "skincare routine glass set packaging", "pump bottle jar gradient green factory", "coordinated cosmetic packaging China OEM", "pump dispenser green glass bottle set", "all in one skincare glass set supplier", "luxury pump jar cosmetic gift set"],
    seoTags: ["Cosmetic Set", "Glass Collection", "Luxury Packaging", "Custom OEM", "Low MOQ", "Gradient Glass", "Wholesale Set"],
  },
  {
    id: "gradient-red-cosmetic-set",
    seoSlug: "red-gradient-round-cosmetic-set-bottle-manufacturer",
    name: "Red Gradient Round Cosmetic Set Bottles",
    specTitle: "Red Gradient Round Cosmetic Glass Set",
    nameI18n: { kr: "레드 그라데이션 라운드 코스메틱 세트 보틀", jp: "レッドグラデーション ラウンドコスメティックセットボトル", tw: "紅色漸層圓瓶化妝品套裝" },
    category: "set",
    material: "Glass",
    capacity: "30 / 50 / 100 / 120 ml + 30 / 50 / 100 g",
    capacityGroup: "set",
    use: "Lotion / Cream",
    moq: "5,000 pcs per SKU",
    leadTime: "30–35 days",
    decoration: "Red gradient spray coating, silk screen, hot stamping, metallic red cap",
    image: "/images/products/gradient-red-cosmetic-set/main.webp",
    gallery: [
      "/images/products/gradient-red-cosmetic-set/gallery-0.webp",
      "/images/products/gradient-red-cosmetic-set/gallery-1.webp",
      "/images/products/gradient-red-cosmetic-set/gallery-2.webp",
      "/images/products/gradient-red-cosmetic-set/gallery-3.webp"
    ],
    description:
      "A coordinated red gradient cosmetic set built on classic straight-round bottles and cream jars. Deep crimson spray coating melts into clear glass at the base, paired with satin metallic red caps and gold foil branding. Covers 30–120 ml lotion and serum bottles plus 30–100 g cream jars — one consistent, eye-catching identity for a single-brand skincare or gift-set launch.",
    descriptionI18n: {
      kr: "클래식 스트레이트 라운드 보틀과 크림 자로 구성된 레드 그라데이션 코스메틱 세트. 딥 크림슨 스프레이 코팅이 바닥의 투명 글래스로 이어지며, 새틴 메탈릭 레드 캡과 골드 폴 브랜딩을 더했습니다. 30–120ml 로션·세럼 보틀과 30–100g 크림 자를 커버 — 단일 브랜드 스킨케어 또는 기프트 세트 런칭을 위한 일관된 아이덴티티.",
      jp: "クラシックなストレートラウンドボトルとクリームジャーで構成されたレッドグラデーションのコスメティックセット。ディープクリムゾンのスプレーコーティングが底部の透明ガラスへと溶け込み、サテンメタリックレッドのキャップとゴールドフォイルのブランディングを合わせました。30〜120mlのローション・セラムボトルと30〜100gのクリームジャーに対応 — 単一ブランドのスキンケアやギフトセットの立ち上げに最適な一貫したアイデンティティ。",
      tw: "以經典直圓瓶與膏霜罐組成的紅色漸層化妝品套裝。深紅噴塗漸變至瓶底透明玻璃，搭配緞面金屬紅蓋與金色燙印品牌標識。涵蓋 30–120ml 乳液/精華瓶與 30–100g 膏霜罐 — 為單一品牌護膚或禮盒上市提供一致的視覺識別。",
    },
    features: [
      "Classic straight-round bottles + wide-mouth cream jars",
      "Custom crimson-to-clear gradient — also in other Pantone colors",
      "Satin metallic red caps & gold foil logo stamping",
      "Lotion bottles: 30 / 50 / 100 / 120 ml",
      "Cream jars: 30 / 50 / 100 g",
      "Turnkey single-brand identity with consistent finish",
      "Gift-box & insert tray sourcing for holiday sets",
    ],
    brandName: "Vesla",
    mpn: "VSL-GRADIENT-RED-COSMETIC-SET",
    sku: "VSL-GRADIENT-RED-COSMETIC-SET-5K",
    seoKeywords: ["red gradient glass cosmetic set wholesale", "crimson ombre bottle jar packaging set", "red round cosmetic bottle set factory", "matching red lotion jar set OEM China", "red spray coat glass set manufacturer", "wine red gradient skincare collection", "red pump lotion bottle cream jar set", "brand matched red glass packaging set", "luxury red cosmetic gift set packaging", "straight round red bottle jar supplier"],
    seoTags: ["Cosmetic Set", "Red Gradient", "Lotion Bottle", "Cream Jar", "Custom OEM", "Gift Set Packaging", "Gradient Glass"],
  },
  {
    id: "small-round-dropper-10ml-15ml",
    seoSlug: "10ml-15ml-small-straight-round-dropper-bottle-supplier",
    name: "10ml & 15ml Small Straight Round Dropper Bottles",
    specTitle: "10ml & 15ml Small Straight Round Glass Dropper Bottles",
    nameI18n: { kr: "10ml·15ml 소형 스트레이트 라운드 드롭퍼 보틀", jp: "10ml・15ml 小型ストレートラウンドドロッパーボトル", tw: "10ml・15ml 小型直圓滴管瓶" },
    category: "serum",
    material: "Glass",
    capacity: "10 / 15 ml",
    capacityGroup: "mini",
    use: "Serum / Oil",
    moq: "5,000 pcs",
    leadTime: "25–30 days",
    decoration: "Silk screen, hot stamping, frosting, color spray coating, gold/silver collar",
    image: "/images/products/small-round-dropper-10ml-15ml/main.webp",
    gallery: [
      "/images/products/small-round-dropper-10ml-15ml/gallery-0.webp",
      "/images/products/small-round-dropper-10ml-15ml/gallery-1.webp",
      "/images/products/small-round-dropper-10ml-15ml/gallery-2.webp",
      "/images/products/small-round-dropper-10ml-15ml/gallery-3.webp"
    ],
    description:
      "Compact 10ml and 15ml straight-round dropper bottles in translucent purple, matte white or teal glass. Small enough for travel-size serums, essential oil blends and sample kits — premium enough to sit beside full-size SKUs. Choose between gold knurled collars with white squeeze bulbs, silver push-button droppers or matte white caps, with glass pipettes inside every bottle.",
    descriptionI18n: {
      kr: "트랜스루센트 퍼플, 매트 화이트 또는 틸 글래스로 제작된 10ml·15ml 컴팩트 스트레이트 라운드 드롭퍼 보틀. 트래블 사이즈 세럼, 에센셜 오일 블렌드, 샘플 키트에 적합하며 풀사이즈 SKU와 나란히 놓여도 손색없는 프리미엄 퀄리티. 골드 너얼 컬러 + 화이트 스퀴즈 불브, 실버 푸시버튼 드롭퍼, 매트 화이트 캡 중 선택 가능. 모든 보틀에 글래스 피펫 내장.",
      jp: "半透明パープル、マットホワイト、ティールガラスの10ml・15mlコンパクトストレートラウンドドロッパーボトル。トラベルサイズのセラム、エッセンシャルオイルブレンド、サンプルキットに最適で、フルサイズSKUの隣に置いても引けを取らないプレミアム品質。ゴールドニールカラー＋ホワイトスクイーズバルブ、シルバープッシュボタンドロッパー、マットホワイトキャップから選択可能。全ボトルにガラスピペット内蔵。",
      tw: "半透明紫、霧面白或湖水綠玻璃製成的 10ml・15ml 小型直圓滴管瓶。適合旅行裝精華液、精油調配與試用套裝，放在全尺寸產品旁同樣高級。可選金色滾花圈+白色膠頭、銀色按壓式滴管或霧面白蓋，每瓶均配玻璃吸管。",
    },
    features: [
      "Compact 10ml & 15ml straight-round silhouette",
      "Translucent purple, matte white or teal glass",
      "Gold knurled collar + white squeeze bulb droppers",
      "Silver push-button dropper caps available",
      "Glass pipette inside every bottle",
      "Travel-size, sample-kit & essential oil ready",
      "Custom silk screen & hot stamping logos",
    ],
    brandName: "Vesla",
    mpn: "VSL-SMALL-ROUND-DROPPER-10ML-15ML",
    sku: "VSL-SMALL-ROUND-DROPPER-10ML-15ML-5K",
    seoKeywords: ["10ml small glass dropper bottle supplier", "15ml straight round dropper bottle wholesale", "mini essential oil dropper bottle 10ml 15ml", "small capacity glass serum bottle travel size", "10ml purple glass dropper bottle OEM", "15ml matte white dropper bottle factory", "compact straight round dropper glass manufacturer", "small dropper bottle sample size bulk", "10ml 15ml dropper bottle with glass pipette", "travel size essential oil dropper packaging"],
    seoTags: ["Dropper Bottle", "Small Capacity", "Essential Oil", "Travel Size", "Sample Bottle", "Custom OEM", "Glass Pipette"],
  },
  {
    id: "stone-texture-white-cosmetic-set",
    seoSlug: "stone-texture-white-cosmetic-set-bottle-manufacturer",
    specTitle: "Stone Texture White Cosmetic Set — Matte White Bottles & Jars with Silver Caps",
    name: "Stone Texture White Cosmetic Set",
    nameI18n: { kr: "스톤 텍스처 화이트 코스메틱 세트", jp: "ストーンテクスチャーホワイトコスメティックセット", tw: "石紋白瓷化妝品套裝" },
    category: "set",
    material: "Glass",
    capacity: "40 / 100 / 120 ml + 30 / 50 g",
    capacityGroup: "set",
    use: "Lotion / Cream",
    moq: "5,000 pcs per SKU",
    leadTime: "30–35 days",
    decoration: "Matte white spray coating, silk screen, hot stamping, silver metal caps",
    image: "/images/products/stone-texture-white-cosmetic-set/main.webp",
    gallery: [
      "/images/products/stone-texture-white-cosmetic-set/gallery-0.webp",
      "/images/products/stone-texture-white-cosmetic-set/gallery-1.webp",
      "/images/products/stone-texture-white-cosmetic-set/gallery-2.webp",
      "/images/products/stone-texture-white-cosmetic-set/gallery-3.webp"
    ],
    description:
      "A stone-texture matte white cosmetic set with high-polish silver caps — the 'ceramic' look that reads premium on any shelf. Three straight-round lotion bottles (40, 100, 120 ml) and two dome-lid cream jars (30, 50 g) in one coordinated identity, with soft-touch white coating and gold or silver logo stamping. Works as a full skincare regimen set, a retail gift collection or a hotel & spa amenity line.",
    descriptionI18n: {
      kr: "하이폴리시 실버 캡을 더한 스톤 텍스처 매트 화이트 코스메틱 세트 — 어떤 선반에서도 프리미엄으로 읽히는 '세라믹' 룩. 스트레이트 라운드 로션 보틀 3종(40, 100, 120ml)과 돔 리드 크림 자 2종(30, 50g)이 하나의 코디네이티드 아이덴티티로 구성되며, 소프트 터치 화이트 코팅과 골드/실버 로고 스탬핑. 풀 스킨케어 세트, 리테일 기프트 컬렉션 또는 호텔·스파 어메니티 라인으로 활용 가능.",
      jp: "ハイポリッシュシルバーキャップを備えたストーンテクスチャーマットホワイトのコスメティックセット — どんな棚でもプレミアムに見える「セラミック」ルック。ストレートラウンドのローションボトル3種（40・100・120ml）とドームリッドのクリームジャー2種（30・50g）を一貫したアイデンティティで構成。ソフトタッチのホワイトコーティングとゴールド/シルバーのロゴスタンピング。フルスキンケアセット、リテールギフトコレクション、ホテル・スパのアメニティラインとしても対応。",
      tw: "搭配高光銀蓋的石紋霧面白化妝品套裝——在貨架上立刻呈現高級「陶瓷」質感。三款直圓乳液瓶（40/100/120ml）與兩款圓頂蓋膏霜罐（30/50g）組成統一視覺，霧面白塗層搭配金色或銀色 Logo 燙印。適合作為完整護膚套組、零售禮盒或飯店 SPA 備品系列。",
    },
    features: [
      "Stone-texture matte white coating — ceramic look, soft-touch feel",
      "High-polish silver caps: teardrop for bottles, dome for jars",
      "Bottles: 40 / 100 / 120 ml straight-round with rounded shoulders",
      "Jars: 30 / 50 g wide-mouth with dome lids",
      "Gold or silver logo silk screen & hot stamping",
      "Turnkey regimen set — same identity across every SKU",
      "Hotel & spa amenity and gift-set packaging options",
    ],
    brandName: "Vesla",
    mpn: "VSL-STONE-TEXTURE-WHITE-COSMETIC-SET",
    sku: "VSL-STONE-TEXTURE-WHITE-COSMETIC-SET-5K",
    seoKeywords: ["white coated glass cosmetic set wholesale", "stone texture white bottle jar set factory", "matte white cosmetic set silver cap", "white ceramic look glass set OEM", "silver cap white bottle jar packaging set", "matte white lotion jar set China supplier", "white cosmetic set gift packaging wholesale", "pearl white glass set manufacturer", "silver lid white cream jar set", "white coating bottle jar collection OEM"],
    seoTags: ["Cosmetic Set", "White Coating", "Matte Finish", "Silver Cap", "Lotion Bottle", "Cream Jar", "Custom OEM"],
  },
  {
    id: "gold-pump-black-cosmetic-set",
    seoSlug: "gold-pump-black-cosmetic-set-bottle-manufacturer",
    specTitle: "Gold Pump Black Cosmetic Set — Black Lotion Bottles & Cream Jars with Gold Pumps",
    name: "Gold Pump Black Cosmetic Set",
    nameI18n: { kr: "골드 펌프 블랙 코스메틱 세트", jp: "ゴールドポンプブラックコスメティックセット", tw: "金泵頭黑色化妝品套裝" },
    category: "set",
    material: "Glass",
    capacity: "40 / 100 / 120 ml + 30 / 50 g",
    capacityGroup: "set",
    use: "Lotion / Cream",
    moq: "5,000 pcs per SKU",
    leadTime: "30–35 days",
    decoration: "Black spray coating, gold metal pump, silk screen, hot stamping",
    image: "/images/products/gold-pump-black-cosmetic-set/main.webp",
    gallery: [
      "/images/products/gold-pump-black-cosmetic-set/gallery-0.webp",
      "/images/products/gold-pump-black-cosmetic-set/gallery-1.webp",
      "/images/products/gold-pump-black-cosmetic-set/gallery-2.webp",
      "/images/products/gold-pump-black-cosmetic-set/gallery-3.webp"
    ],
    description:
      "A statement black cosmetic set with gold pumps and black caps — deep matte black bottles and cream jars in a single coordinated identity. Three lotion bottles (40, 100, 120 ml) with gold pump dispensers and two cream jars (30, 50 g) with black screw lids, finished with your logo in silk screen or hot stamping. The gold-on-black contrast reads premium and gender-neutral, fitting men's grooming, luxury skincare and hotel amenity lines.",
    descriptionI18n: {
      kr: "골드 펌프와 블랙 캡을 더한 스테이트먼트 블랙 코스메틱 세트 — 딥 매트 블랙 보틀과 크림 자를 하나의 코디네이티드 아이덴티티로 구성. 골드 펌프 디스펜서가 적용된 로션 보틀 3종(40, 100, 120ml)과 블랙 스크류 리드의 크림 자 2종(30, 50g)에 실크스크린 또는 홋 스탬핑으로 로고를 적용. 골드-온-블랙 대비는 프리미엄하고 중성적인 느낌으로, 남성 그루밍, 럭셔리 스킨케어, 호텔 어메니티 라인에 적합.",
      jp: "ゴールドポンプとブラックキャップを備えたステートメントなブラックのコスメティックセット。ディープマットブラックのボトルとクリームジャーを一貫したアイデンティティで構成。ゴールドポンプディスペンサー付きローションボトル3種（40・100・120ml）とブラックスクリューリッドのクリームジャー2種（30・50g）に、シルクスクリーンまたはホットスタンピングでロゴを施します。ゴールド×ブラックのコントラストはプレミアムでジェンダーニュートラル。メンズグルーミング、ラグジュアリースキンケア、ホテルアメニティラインに最適。",
      tw: "以金色泵頭與黑蓋打造的黑色宣言系列——深霧黑瓶身與膏霜罐組成統一視覺。三款乳液瓶（40/100/120ml）搭配金色按壓泵，兩款膏霜罐（30/50g）配黑色旋蓋，可絲印或燙印您的 Logo。金×黑對比既高級又中性，適合男性護理、奢華護膚與飯店備品系列。",
    },
    features: [
      "Deep matte black coating — gold-on-black premium contrast",
      "Gold metal pump dispensers on 40 / 100 / 120 ml lotion bottles",
      "Black screw lids on 30 / 50 g cream jars",
      "Straight-round silhouette with rounded shoulders",
      "Silk screen & hot stamping logos in gold or silver",
      "Turnkey set — one identity across bottles and jars",
      "Men's grooming, luxury skincare & hotel amenity ready",
    ],
    brandName: "Vesla",
    mpn: "VSL-GOLD-PUMP-BLACK-COSMETIC-SET",
    sku: "VSL-GOLD-PUMP-BLACK-COSMETIC-SET-5K",
    seoKeywords: ["black glass lotion bottle pump set", "gold pump black cosmetic bottle set", "black cream jar set gold cap", "black cosmetic set luxury packaging", "gold pump bottle black glass OEM", "black lotion jar set China supplier", "black glass cosmetic set wholesale", "gold pump black jar set factory", "matte black pump bottle jar set", "black gold luxury cosmetic set"],
    seoTags: ["Cosmetic Set", "Black Coating", "Gold Pump", "Lotion Bottle", "Cream Jar", "Luxury Packaging", "Custom OEM"],
  },
  {
    id: "waistline-textured-glass-set",
    seoSlug: "hourglass-textured-glass-cosmetic-set-wholesale",
    specTitle: "Hourglass Textured Glass Cosmetic Set — 50g-100g Jars & 40ml-120ml Bottles",
    name: "Waistline Textured Glass Cosmetic Set",
    nameI18n: { kr: "웨이스트라인 텍스처 글래스 코스메틱 세트", jp: "ウエストライン テクスチャードガラス コスメティックセット", tw: "小蠻腰紋理玻璃化妝品套裝" },
    category: "set",
    material: "Glass",
    capacity: "40 / 100 / 120 ml + 50 / 100 g",
    capacityGroup: "set",
    use: "Lotion / Cream",
    moq: "5,000 pcs per SKU",
    leadTime: "30–35 days",
    decoration: "Diamond texture glass, color spray (gradient/solid), gold metallic pump & cap, silk screen",
    image: "/images/products/waistline-textured-glass-set/main.webp",
    gallery: [
      "/images/products/waistline-textured-glass-set/gallery-0.webp",
      "/images/products/waistline-textured-glass-set/gallery-1.webp",
      "/images/products/waistline-textured-glass-set/gallery-2.webp",
      "/images/products/waistline-textured-glass-set/gallery-3.webp"
    ],
    description:
      "A premium hourglass-shaped glass cosmetic set featuring a distinct diamond textured surface and metallic gold accents. The 'waistline' design offers an ergonomic grip and a unique visual silhouette that stands out in the luxury skincare market. Available in royal blue gradient, ice blue, ruby red, and amber gold finishes. This collection includes high-capacity 40-120ml lotion bottles with pumps and 50-100g wide-mouth cream jars, making it ideal for complete high-end anti-aging or moisturizing regimens.",
    descriptionI18n: {
      kr: "독특한 다이아몬드 텍스처 표면과 메탈릭 골드 포인트가 특징인 프리미엄 아워글래스 형태의 유리 코스메틱 세트. '웨이스트라인' 디자인은 인체공학적인 그립감과 럭셔리 스킨케어 시장에서 돋보이는 독특한 실루엣을 제공합니다. 로얄 블루 그라데이션, 아이스 블루, 루비 레드, 앰버 골드 마감으로 제공됩니다. 40-120ml 대용량 로션 펌프 보틀과 50-100g 와이드 마우스 크림 자가 포함되어 고기능성 안티에이징 또는 보습 라인에 적합합니다.",
      jp: "独特なダイヤモンドテクスチャの表面とメタリックゴールドのアクセントが特徴のプレミアムなアワーグラス型ガラスコスメセット。「ウエストライン」デザインは、人間工学に基づいたグリップ感と、高級スキンケア市場で際立つユニークなシルエットを提供します。ロイヤルブルーグラデーション、アイスブルー、ルビーレッド、アンバーゴールドの仕上げが可能。40-120mlの大容量ローションポンプボトルと50-100gの広口クリームジャーを含み、高級アンチエイジングや保湿ラインに最適です。",
      tw: "一款高級「小蠻腰」形狀玻璃化妝品套裝，具有獨特的鑽石紋理表面和金屬金裝飾。縮腰設計提供符合人體工程学的握感和獨特的視覺輪廓，在奢華護膚市場中脫穎而出。提供皇室藍漸變、冰藍、紅寶石色和琥珀金等多種表面處理。此系列包含 40-120ml 大容量乳液泵瓶和 50-100g 寬口膏霜罐，非常適合完整的頂級抗衰老或保濕系列。",
    },
    features: [
      "Ergonomic hourglass 'waistline' shape for a luxury feel",
      "Sophisticated diamond/prism texture molded into the glass",
      "Premium gold metallic pump dispensers and matching screw lids",
      "Lotion bottles: 40ml, 100ml, 120ml with high-performance pumps",
      "Cream jars: 50g, 100g with matching textured lids",
      "Available in multiple colors: Blue Gradient, Ice Blue, Red, Amber",
      "Thick-wall glass for weight and premium shelf presence",
    ],
    brandName: "Vesla",
    mpn: "VSL-WAISTLINE-TEXTURE-SET",
    sku: "VSL-WAISTLINE-TEXTURE-SET-5K",
    seoKeywords: ["waistline glass cosmetic set wholesale", "hourglass glass bottle manufacturer", "textured glass skincare packaging set", "diamond pattern glass bottle set factory", "luxury glass lotion bottle pump set", "wholesale red glass jar bottle set", "blue gradient glass packaging collection", "amber textured glass cosmetic bottles", "50g 100g glass cream jar supplier", "custom glass set for luxury skincare"],
    seoTags: ["Cosmetic Set", "Textured Glass", "Hourglass Shape", "Gold Pump", "Lotion Bottle", "Cream Jar", "Luxury Packaging", "Custom OEM"],
  },
  {
    id: "classic-glass-dropper-bottle",
    seoSlug: "classic-light-shielding-glass-dropper-bottle-wholesale",
    specTitle: "Classic Glass Dropper Bottles — 5ml-100ml Opaque & Gradient Options",
    name: "Classic Light-Shielding Glass Dropper Bottles",
    nameI18n: { kr: "클래식 차광 유리 드롭퍼 보틀", jp: "クラシック遮光ガラスドロッパーボトル", tw: "經典避光玻璃滴管瓶" },
    category: "serum",
    material: "Glass",
    capacity: "5 / 10 / 15 / 20 / 30 / 50 / 100 ml",
    capacityGroup: "standard",
    use: "Serum / Essential Oil",
    moq: "5,000 pcs",
    leadTime: "25–30 days",
    decoration: "Frosted, matte, gradient or opaque coating; silk screen & hot stamping",
    image: "/images/products/classic-glass-dropper-bottle/main.webp",
    gallery: [
      "/images/products/classic-glass-dropper-bottle/gallery-0.webp",
      "/images/products/classic-glass-dropper-bottle/gallery-1.webp",
      "/images/products/classic-glass-dropper-bottle/gallery-2.webp",
      "/images/products/classic-glass-dropper-bottle/gallery-3.webp"
    ],
    description:
      "A versatile range of classic straight-round glass dropper bottles designed for maximum formula protection. These 'light-shielding' bottles feature high-quality opaque coatings and gradients that block harmful UV rays, making them ideal for high-potency serums, essential oils, and light-sensitive skincare actives. Available in a full size run from 5ml travel sizes to 100ml professional volumes, with your choice of silver or black metallic collars and precision glass pipettes.",
    descriptionI18n: {
      kr: "포뮬러를 최대한 보호하도록 설계된 다양한 클래식 스트레이트 라운드 유리 드롭퍼 보틀 제품군입니다. 이 '차광' 보틀은 유해한 자외선을 차단하는 고품질 불투명 코팅과 그라데이션이 특징으로, 고효능 세럼, 에센셜 오일 및 빛에 민감한 스킨케어 성분에 적합합니다. 5ml 여행용 사이즈부터 100ml 전문가용 용량까지 전체 사이즈가 제공되며, 실버 또는 블랙 메탈릭 컬러와 정밀 유리 피펫을 선택할 수 있습니다.",
      jp: "成分の保護を最大限に高めるよう設計された、クラシックなストレートラウンドガラスドロッパーボトルの多用途なレンジです。これらの「遮光」ボトルは、有害な紫外線を遮断する高品質な不透明コーティングとグラデーションが特徴で、高濃度セラム、エッセンシャルオイル、光に敏感なスキンケア成分に最適です。5mlのトラベルサイズから100mlのプロフェッショナルボリュームまでフルサイズ展開で、シルバーまたはブラックのメタリックカラーと精密ガラスピペットを選択できます。",
      tw: "一系列專為最大限度保護配方而設計的經典直圓玻璃滴管瓶。這些「避光」瓶具有高品質的不透明塗層和漸變色，可阻擋有害的紫外線，是高濃度精華液、精油和對光敏感的護膚活性成分的理想選擇。提供從 5ml 旅行裝到 100ml 專業容量的完整尺寸，可選配銀色或黑色金屬圈和精密玻璃吸管。",
    },
    features: [
      "Classic light-shielding design for UV-sensitive formulas",
      "Full size run: 5ml, 10ml, 15ml, 20ml, 30ml, 50ml, 100ml",
      "Available in Opaque White, Blue Gradient, Light Blue, and Forest Green",
      "Premium metallic collars (Silver/Black) and glass pipettes",
      "Ideal for essential oils, vitamin C serums, and active facial oils",
      "In-house custom color matching and logo printing",
    ],
    brandName: "Vesla",
    mpn: "VSL-CLASSIC-UV-DROPPER",
    sku: "VSL-CLASSIC-UV-DROPPER-5K",
    seoKeywords: ["light shielding dropper bottle wholesale", "UV protection glass bottle manufacturer", "opaque glass serum bottle supplier", "essential oil dropper bottle factory", "bulk glass dropper bottles China", "5ml 100ml glass dropper set", "custom coated glass dropper bottles", "skincare packaging for light sensitive formulas", "wholesale blue gradient dropper bottles", "matte white glass dropper bottle manufacturer"],
    seoTags: ["Dropper Bottle", "UV Protection", "Essential Oil", "Opaque Glass", "Custom OEM", "Wholesale Packaging", "China Manufacturer"],
  },
];

export const materials = ["Glass", "Plastic"];
export const capacityGroups = [
  { value: "mini", label: "Mini (≤ 15 ml / 15 g)" },
  { value: "standard", label: "Standard (20 – 60 ml / g)" },
  { value: "large", label: "Large (60+ ml / g)" },
  { value: "set", label: "Multi-Size Set" },
] as const;
export const uses = [
  "Serum",
  "Facial Oil",
  "Face Cream",
  "Eye Cream",
  "Body Cream",
  "Essential Oil",
  "Roll-On / Perfume",
  "Sample / Tester",
  "Injection / Injectable",
  "Aromatherapy",
  "Wellness Supplement",
];

const PEXEL = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

// Case studies shown on the Custom Process page. Images are royalty-free
// Pexels shots styled to look like real client brand assets.
export const caseStudies = [
  {
    brand: "AURÉLIE · Paris",
    title: "Signature serum duo for a French launch",
    bullets: ["15 ml + 30 ml frosted droppers", "Electroplated gold collar", "8,000 units / 22-day turnaround"],
    image: PEXEL(17307534, 1200),
  },
  {
    brand: "LUMI · Seoul",
    title: "Miron violet jars for a K-beauty clean range",
    bullets: ["30 g + 50 g violet glass", "Silk-screen logo, matte black lid", "12,000 units / 28-day turnaround"],
    image: PEXEL(35976902, 1200),
  },
  {
    brand: "NORDIC SKIN",
    title: "Recyclable amber roll-ons for an apothecary line",
    bullets: ["10 ml clear + amber roll-ons", "Bamboo lid finish", "20,000 units / 25-day turnaround"],
    image: PEXEL(16722452, 1200),
  },
  {
    brand: "VELVETTE",
    title: "Bespoke cream jar for a US indie brand",
    bullets: ["50 g thick-wall clear jar", "Custom Pantone frosting", "5,000 units · private mold"],
    image: PEXEL(5911961, 1200),
  },
];
