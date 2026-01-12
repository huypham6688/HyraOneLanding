import { Cpu, Layers, Smartphone, TrendingUp } from "lucide-react";
import React from "react";

const CoreFeatureSection = () => {
   return (
      <section id="feature" className="py-24">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-slate-900">Core Features</h2>
               <div className="w-20 h-1.5 bg-[#FF6F2C] mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                  { icon: <Layers />, title: "Multi-chain Swap", desc: "Swap thousands of assets across different Blockchains with a single tap." },
                  { icon: <TrendingUp />, title: "Staking & Yield", desc: "Let your assets grow with attractive rates directly from trusted DeFi protocols." },
                  { icon: <Cpu />, title: "NFT Gateway", desc: "Display and trade your digital collections in an intuitive and artistic way." },
                  { icon: <Smartphone />, title: "Biometric Security", desc: "Combined Blockchain encryption with FaceID/Fingerprint for secure access." },
               ].map((item, index) => (
                  <div key={index} className="p-8 bg-white rounded-3xl border border-slate-100 hover:border-[#FF6F2C]/30 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group cursor-pointer">
                     <div className="text-[#FF6F2C] mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                     <h4 className="text-lg font-bold mb-2 text-slate-900">{item.title}</h4>
                     <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default CoreFeatureSection;
