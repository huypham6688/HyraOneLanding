"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function NetworksAssets() {
   return (
      <section className="flex items-center">
         <div className="w-full max-w-[1440px] mx-auto px-8 md:px-[88px]">
            <div className="grid md:grid-cols-2 lg:gap-24 items-center bg-[#F8F8F9] p-8 lg:pl-[72px] lg:pr-[55px] rounded-[40px] mt-10">
               <div className="order-1 md:order-2">
                  <h2 className="text-2xl md:text-3xl xl:text-[40px]/[48px] font-bold text-[#0A0D12] mb-4 leading-[1.05] tracking-tight">Networks & Asset Support</h2>

                  <p className="text-[#717680] text-base md:text-lg max-w-[517px] mb-10">Preset chains: ETH, BSC, TRON. Full support for ERC-20 and TRC-20 tokens with real-time fiat pricing (USD/VND). Manage your portfolio effortlessly.</p>

                  <Button className="rounded-[12px] bg-[#000000] h-14 text-white px-6 py-4 text-base md:text-lg font-medium hover:bg-slate-800">Explore Security</Button>
               </div>

               <div className="order-2 md:order-1 flex justify-center md:justify-start">
                  <Image src="/images/home/image_network.png" width={0} height={0} sizes="100vw" alt="Earn Feature" className="w-full max-w-xl h-[350px] md:h-[425px] object-contain" />
               </div>
            </div>
         </div>
      </section>
   );
}
