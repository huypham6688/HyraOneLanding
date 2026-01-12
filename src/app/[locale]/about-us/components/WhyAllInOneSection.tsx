import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const WhyAllInOneSection = () => {
   return (
      <section className="py-24 bg-slate-50/50">
         <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="flex-1 order-2 lg:order-1">
                  <Image src={"/images/home/banner.jpg"} width={0} height={0} sizes="100vw" className="rounded-xl min-w-[300px] w-full h-auto aspect-video" alt="banner" />
               </div>
               <div className="flex-1 order-1 lg:order-2">
                  <h2 className="text-[#FF6F2C] font-bold mb-4 uppercase tracking-[0.2em] text-sm">Why All-in-one?</h2>
                  <h3 className="text-3xl lg:text-5xl font-extrabold mb-8 leading-tight text-slate-950">
                     Simplifying the <br />
                     Complexity of Crypto.
                  </h3>
                  <ul className="space-y-6">
                     {["Instead of installing 5 different apps, you only need HyraOne.", "Integrated dApps Browser: Access the Web3 world right inside your wallet.", "Track market volatility in real-time with intuitive analytics and charts."].map((text, i) => (
                        <li key={i} className="flex items-start gap-4">
                           <div className="mt-1 w-6 h-6 rounded-full bg-[#FF6F2C]/10 flex items-center justify-center flex-shrink-0">
                              <ArrowRight size={14} className="text-[#FF6F2C]" />
                           </div>
                           <p className="text-slate-700 text-lg font-medium">{text}</p>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
};

export default WhyAllInOneSection;
