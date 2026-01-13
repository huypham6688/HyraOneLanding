"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function SecureOnboarding() {
   return (
      <section id="feature" className="flex items-center">
         <div className="w-full max-w-[1440px] mx-auto px-8 md:px-[88px] pt-[96px]">
            <h2 className="font-bold text-[48px]/[56px] text-[#0A0D12] max-w-[578px] mx-auto text-center">
               Your <span className="text-[#FB5F2F]">All-in-One</span> Crypto Wallet Experience
            </h2>
            <div className="grid md:grid-cols-2 lg:gap-24 items-center bg-[#F8F8F9] p-8 lg:pl-[72px] lg:pr-[55px] rounded-[40px] mt-16">
               <div className="">
                  <h2 className="text-2xl md:text-3xl xl:text-[40px]/[48px] font-bold text-[#0A0D12] mb-4 leading-[1.05] tracking-tight">Secure Onboarding</h2>
                  <p className="text-[#717680] text-base md:text-lg max-w-[517px] mb-10">Easy Hyra Login (email/social) with biometric auth (FaceID/TouchID). MPC recovery for seedless setups and robust privacy controls. Key management made simple.</p>
                  <Button className="rounded-[12px] bg-[#000000] h-14 text-white px-6 py-4 text-base md:text-lg font-medium hover:bg-slate-800">Explore Security</Button>
               </div>

               <div className="flex justify-center md:justify-end">
                  <Image src="/images/home/image_secure.png" width={0} height={0} sizes="100vw" alt="Earn Feature" className="w-full max-w-xl h-[425px] md:h-[514px] object-contain" />
               </div>
            </div>
         </div>
      </section>
   );
}
