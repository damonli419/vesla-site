import React from "react";
import LazyImage from "./LazyImage";

export default function TrustWidget() {
  const points = [
    { title: "In-house Decoration", desc: "100% control over frosting, spray coating and silk-screen printing quality.", icon: "✧" },
    { title: "AQL 1.5 Standard", desc: "Rigorous batch-by-batch inspection protocol to ensure zero leakage and defect control.", icon: "✧" },
    { title: "DDP Global Logistics", desc: "We handle customs, duties and local trucking to your warehouse in USA & EU.", icon: "✧" },
  ];

  return (
    <div className="rounded-3xl bg-white p-8 lg:p-12 ring-1 ring-gold/20 shadow-xl overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
        <div>
          <h3 className="font-serif text-3xl text-ink leading-tight">Agile Manufacturing, <br/><span className="text-gold-dark italic">Indie-Brand Ready.</span></h3>
          <p className="mt-4 text-sm text-ink-soft leading-relaxed max-w-xl">
            At Vesla, we bridge the gap between small batch startups and enterprise-scale manufacturing. 
            By keeping decoration in-house, we offer premium finishes at a 5,000-unit MOQ.
          </p>
          
          <div className="mt-10 space-y-8">
            {points.map((p) => (
              <div key={p.title} className="flex gap-4">
                <span className="text-gold text-lg mt-0.5">{p.icon}</span>
                <div>
                  <h4 className="font-bold text-ink text-sm uppercase tracking-wider">{p.title}</h4>
                  <p className="mt-1 text-xs text-ink-soft leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-cream-dark/30 ring-1 ring-gold/15">
            <LazyImage 
              src="https://sc02.alicdn.com/kf/H3ed4c7e33e7444e0b8776874383d6c0d2.jpg" 
              alt="Vesla Manufacturing Factory Floor"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Guangzhou, China</p>
              <p className="font-serif text-xl mt-1">Visit Our Production Floor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
