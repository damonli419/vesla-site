const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "src/data/products.ts");
let content = fs.readFileSync(filePath, "utf-8");

const seoData = {
  dropper: {
    keywords: `custom glass dropper bottle manufacturer,frosted glass serum bottle wholesale,cosmetic dropper bottle low MOQ,skincare glass packaging supplier China,private label essential oil dropper,OEM glass dropper bottle factory,DDP cosmetic glass packaging USA,FDA compliant glass serum bottle`,
    tags: `Serum Packaging,Dropper Bottle,Skincare Glass,Custom OEM,Low MOQ,FDA Approved,DDP Shipping`,
  },
  jar: {
    keywords: `custom glass cream jar manufacturer,wholesale cosmetic glass jar with lid,thick wall glass jar skincare,private label face cream packaging,OEM cosmetic jar factory China,low MOQ glass cream jar,frosting glass jar bulk,hot stamping cream jar`,
    tags: `Cream Jar,Skincare Packaging,Glass Container,Custom OEM,Low MOQ,FDA Compliant,Bulk Wholesale`,
  },
  oil: {
    keywords: `essential oil glass bottle wholesale,custom glass roll on bottle manufacturer,amber glass dropper bottle bulk,aromatherapy glass vial supplier,OEM essential oil packaging China,frosted glass oil bottle low MOQ,euro round glass bottle factory,private label essential oil bottle`,
    tags: `Essential Oil,Glass Vial,Aromatherapy,Roll On Bottle,Custom OEM,Low MOQ,Bulk Supply`,
  },
  set: {
    keywords: `custom cosmetic glass set manufacturer,wholesale skincare packaging set,glass bottle and jar collection supplier,private label cosmetic packaging,OEM beauty packaging set China,low MOQ gradient glass set,luxury cosmetic glass packaging,matching bottle jar set wholesale`,
    tags: `Cosmetic Set,Glass Collection,Luxury Packaging,Custom OEM,Low MOQ,Gradient Glass,Wholesale Set`,
  },
};

// For each category, find products and inject SEO data after features
for (const [cat, data] of Object.entries(seoData)) {
  const kwArr = data.keywords.split(",").map((k) => `"${k.trim()}"`);
  const tagArr = data.tags.split(",").map((t) => `"${t.trim()}"`);

  const seoBlock = `\n    seoKeywords: [${kwArr.join(", ")}],\n    seoTags: [${tagArr.join(", ")}],`;

  // Find each product of this category and inject after features array
  const regex = new RegExp(
    `(category: "${cat}",[\\s\\S]*?features: \\[[\\s\\S]*?\\])`,
    "g"
  );
  content = content.replace(regex, `$1${seoBlock}`);
}

fs.writeFileSync(filePath, content, "utf-8");
console.log("✅ SEO data injected into all products");
