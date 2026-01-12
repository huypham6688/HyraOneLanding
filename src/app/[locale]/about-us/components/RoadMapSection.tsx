import React from "react";

const RoadMapSection = () => {
   return (
      <section className="py-24 bg-white overflow-hidden">
         <div className="container mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-slate-900">Strategic Roadmap</h2>
               <p className="text-slate-500">Our journey to redefine the future of finance.</p>
            </div>
            <div className="relative max-w-4xl mx-auto">
               <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-50 via-[#FF6F2C] to-orange-50 hidden md:block -translate-x-1/2"></div>

               <div className="space-y-16">
                  {[
                     { phase: "Phase 1", title: "Mobile Wallet & Web Extension Launch" },
                     { phase: "Phase 2", title: "Fiat-to-Crypto On-ramp (USD/EUR/VND)" },
                     { phase: "Phase 3", title: "HyraOne Debit Card - Real-world Spending" },
                     { phase: "Phase 4", title: "Decentralized Lending & Borrowing Ecosystem" },
                  ].map((item, i) => (
                     <div key={i} className={`flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <div className="flex-1">
                           <div className={`p-8 bg-slate-50 rounded-3xl border border-slate-100 ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                              <span className="text-[#FF6F2C] font-extrabold block mb-2">{item.phase}</span>
                              <h4 className="text-xl font-bold text-slate-800">{item.title}</h4>
                           </div>
                        </div>
                        <div className="relative flex justify-center items-center">
                           <div className="w-6 h-6 rounded-full bg-white border-4 border-[#FF6F2C] shadow-lg shadow-orange-500/30 z-10"></div>
                        </div>
                        <div className="flex-1 hidden md:block"></div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default RoadMapSection;
