import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import LazyImage from "../components/LazyImage";

const qcSteps = [
  {
    n: "01",
    title: "Raw Material Purity",
    desc: "We use ultra-clarity borosilicate and Type III soda-lime glass. Every batch is tested for heavy metal migration, compliant with FDA 21 CFR 175.300.",
    point: "Heavy Metal Free (RoHS)",
  },
  {
    n: "02",
    title: "Precision IS Forming",
    desc: "Our automated IS (Individual Section) forming machines ensure wall thickness consistency. Real-time laser scanning checks dimensional accuracy during the hot-end phase.",
    point: "+/- 0.5mm Tolerance",
  },
  {
    n: "03",
    title: "Stress-Free Annealing",
    desc: "Bottles pass through specialized annealing lehrs to eliminate internal stress, preventing thermal shock breakage during filling or shipping.",
    point: "Thermal Shock Resistant",
  },
  {
    n: "04",
    title: "100% Visual & AQL Sampling",
    desc: "Every bottle undergoes automated optical inspection. For every batch, our QC team performs AQL 1.5/2.5/4.0 sampling to verify finish, neck dimensions, and decoration quality.",
    point: "AQL 1.5 Standard",
  },
  {
    n: "05",
    title: "Decoration Adhesion & Drop Tests",
    desc: "Coatings undergo cross-hatch adhesion tests and tape tests. Final palletized cartons are drop-test certified to survive the Guangzhou-to-USA sea freight journey.",
    point: "Zero-Breakage Guarantee",
  },
];

export default function QualityControl() {
  return (
    <div className="bg-white">
      <Seo
        title="Quality Control & Manufacturing Standards | ISO 9001, FDA — Vesla"
        description="Learn about Vesla's rigorous quality control process for cosmetic glass manufacturing. From IS forming precision to AQL 1.5 inspection and DDP drop tests."
        path="/quality-control"
      />

      {/* Hero */}
      <section className="bg-cream-dark/30 py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">Industrial Excellence</p>
          <h1 className="mt-4 font-serif text-4xl font-medium text-ink sm:text-5xl">
            Our Quality Control Process
          </h1>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed">
            In the glass packaging industry, quality isn't just about the final bottle—it's about the precision 
            of the manufacturing process. At Vesla, we integrate QC at every station of our IS forming line.
          </p>
        </div>
      </section>

      {/* QC Steps Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-10">
            {qcSteps.map((s) => (
              <div key={s.n} className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold font-serif text-xl">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-serif text-xl text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.desc}</p>
                  <span className="mt-3 inline-block rounded-full bg-gold/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-dark ring-1 ring-gold/20">
                    {s.point}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-gold/15 shadow-2xl">
            <LazyImage 
              src="https://sc02.alicdn.com/kf/A3fa0a4dee6c14803924e1a1558cc248c1.png" 
              alt="Automated glass inspection line" 
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest">Live View</p>
              <p className="text-sm font-medium">Automated Dimensional Scan</p>
            </div>
          </div>
        </div>
      </section>

      {/* AQL Chart Section for AI/GEO */}
      <section className="bg-ink py-24 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-serif text-3xl mb-8">Understanding AQL 1.5 Inspection</h2>
          <div className="prose prose-invert max-w-none text-white/70 text-sm leading-loose">
            <p>
              Vesla follows the <strong>Acceptance Quality Limit (AQL) 1.5</strong> standard for critical defects. 
              This means our batch rejection threshold is significantly lower than standard trading company exports. 
              Every order includes a digital QC report showing:
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 mt-6 list-none p-0">
              <li className="bg-white/5 p-4 rounded-xl ring-1 ring-white/10">✦ Neck finish outer diameter tolerance</li>
              <li className="bg-white/5 p-4 rounded-xl ring-1 ring-white/10">✦ Closure compatibility vacuum test</li>
              <li className="bg-white/5 p-4 rounded-xl ring-1 ring-white/10">✦ Color spray adhesion cross-cut test</li>
              <li className="bg-white/5 p-4 rounded-xl ring-1 ring-white/10">✦ Pre-shipping drop test log</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="font-serif text-3xl text-ink">Work with a manufacturer that cares about precision.</h2>
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/contact" className="bg-gold px-8 py-4 rounded-full text-white font-semibold shadow-lg hover:bg-gold-dark transition">
            Start Your Sourcing Project
          </Link>
          <Link to="/about" className="border border-gold px-8 py-4 rounded-full text-gold-dark font-semibold hover:bg-gold/5 transition">
            View Factory Certs
          </Link>
        </div>
      </section>
    </div>
  );
}
