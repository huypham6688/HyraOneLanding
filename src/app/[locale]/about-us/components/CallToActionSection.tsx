import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import React from "react";

const CallToActionSection = () => {
   return (
      <section className="py-24 px-6">
         <div className="max-w-[1000px] mx-auto bg-[#FF6F2C] rounded-[3rem] p-10 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-orange-500/40">
            <div className="relative z-10">
               <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-6">
                  Ready to change how <br /> you manage money?
               </h2>
               <p className="text-white/90 text-base mb-10 max-w-xl mx-auto font-medium">Join over 100,000+ users who trust HyraOne globally.</p>

               <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                  <div className="relative w-full">
                     <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                     <input type="email" placeholder="Enter your email" className="w-full pl-14 pr-6 py-4 rounded-full bg-white text-slate-900 focus:outline-none shadow-inner" />
                  </div>
                  <Button className="w-full sm:w-auto bg-slate-950 text-white hover:bg-slate-800 px-10 py-7 rounded-full font-bold transition-all shadow-xl">Join Now</Button>
               </div>
            </div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
         </div>
      </section>
   );
};

export default CallToActionSection;
