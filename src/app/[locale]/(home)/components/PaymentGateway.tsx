"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function PaymentGateway() {
   return (
      <section className="flex items-center">
         <div className="w-full max-w-[1440px] mx-auto px-8 md:px-[88px] pb-[96px]">
            <div className="grid md:grid-cols-2 lg:gap-24 items-center bg-[#F8F8F9] p-8 lg:pl-[72px] lg:pr-[55px] rounded-[40px] mt-10">
               <div className="">
                  <h2 className="text-2xl md:text-3xl xl:text-[40px]/[48px] font-bold text-[#0A0D12] mb-4 leading-[1.05] tracking-tight">Payment Gateway & Integrations</h2>
                  <p className="text-[#717680] text-base md:text-lg max-w-[517px] mb-10">Convert Crypto to Fiat (VND/USD) via Encryptus & Xpressflow. Send/Receive with QR codes and EIP-712 signing security.</p>
                  <Button className="rounded-[12px] bg-[#000000] h-14 text-white px-6 py-4 text-base md:text-lg font-medium hover:bg-slate-800">Start Spending</Button>
               </div>
               <div className="flex justify-center md:justify-end">
                  <Image src="/images/home/image_payment.png" width={0} height={0} sizes="100vw" alt="Earn Feature" className="w-full max-w-xl h-[350px] md:h-[425px] object-contain" />
               </div>
            </div>
         </div>
      </section>
   );
}
