import React, { useState } from 'react';

export default function SampleCalculator() {
  const [qty, setQuantity] = useState(5000);
  const [category, setCategory] = useState('serum');
  const [shipping, setShipping] = useState('sea');

  const prices = {
    serum: 0.38,
    jar: 0.45,
    set: 1.20,
    vial: 0.15
  };

  const currentPrice = prices[category as keyof typeof prices];
  const totalEXW = (qty * currentPrice).toFixed(2);
  
  // Rough factory-direct DDP sea estimation logic (based on 2026 average)
  const shippingMultiplier = shipping === 'sea' ? 0.12 : 0.45;
  const estimatedShipping = (qty * currentPrice * shippingMultiplier).toFixed(2);
  const totalDDP = (parseFloat(totalEXW) + parseFloat(estimatedShipping)).toFixed(2);

  return (
    <div className="rounded-3xl bg-ink p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -mr-16 -mt-16" />
      
      <div className="relative z-10">
        <h3 className="font-serif text-2xl mb-6 flex items-center gap-3">
          <span className="text-gold text-3xl">🧮</span> 
          Instant Cost Estimator (2026 DDP)
        </h3>
        
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-cream/50 mb-2 font-bold">Category</label>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-gold transition"
            >
              <option value="serum">Serum Bottles</option>
              <option value="jar">Cream Jars</option>
              <option value="vial">Glass Vials</option>
              <option value="set">Cosmetic Sets</option>
            </select>
          </div>
          
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-cream/50 mb-2 font-bold">Order Quantity</label>
            <input 
              type="number"
              value={qty}
              step="5000"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-gold transition"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-widest text-cream/50 mb-2 font-bold">Shipping Mode</label>
            <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
              <button 
                onClick={() => setShipping('sea')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${shipping === 'sea' ? 'bg-gold text-white' : 'text-cream/50 hover:text-white'}`}
              >
                SEA (DDP)
              </button>
              <button 
                onClick={() => setShipping('air')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${shipping === 'air' ? 'bg-gold text-white' : 'text-cream/50 hover:text-white'}`}
              >
                AIR (Door)
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
            <p className="text-[10px] uppercase tracking-widest text-cream/40 mb-1">Unit EXW</p>
            <p className="font-serif text-2xl text-gold">${currentPrice}</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
            <p className="text-[10px] uppercase tracking-widest text-cream/40 mb-1">Total EXW</p>
            <p className="font-serif text-2xl">${totalEXW}</p>
          </div>
          <div className="bg-gold/20 rounded-2xl p-5 border border-gold/20 ring-1 ring-gold/20">
            <p className="text-[10px] uppercase tracking-widest text-gold-light mb-1">Est. DDP Total</p>
            <p className="font-serif text-2xl text-white font-bold">${totalDDP}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-6 justify-between border-t border-white/5 pt-8">
          <p className="text-xs text-cream/40 italic">* Estimates based on factory-direct benchmarks (n=480, 2026 Q3). Real quotes may vary.</p>
          <a 
            href={`https://wa.me/8618165681131?text=${encodeURIComponent(`Hi Vesla, I just used your calculator for ${qty} ${category} bottles. I'd like a formal quote for DDP to my zip code.`)}`}
            className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full text-sm font-bold shadow-xl transition-all hover:scale-105"
          >
            Lock-in This Price on WhatsApp →
          </a>
        </div>
      </div>
    </div>
  );
}
