"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
   return (
      <section className="relative w-full min-h-screen flex justify-center items-center overflow-hidden">
         {/* Background Image */}
         <div
            className="absolute max-h-[1293px] mx-auto inset-0 z-0 bg-center bg-contain bg-no-repeat"
            style={{
               backgroundImage: "url('/images/home/banner_hero-home.png')",
            }}
         >
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black/10" /> */}
         </div>

         {/* Content */}
         <div className="relative z-10 w-full lg:max-w-[1440px] mx-auto pb-[80px] px-6 text-center text-white drop-shadow-lg mt-[162px]">
            <h1
               className="
                    text-[24px]/[32px]
                    md:text-[24px]/[32px]
                    lg:text-[72px]/[80px]
                    font-bold
                    mb-6
                    leading-tight
                    lg:max-w-[1118px]
                    tracking-tight
                    text-[#0A0D12] mx-auto
                "
            >
               Unlock Seamless Crypto Payments
               <br /> And Wallet Management
            </h1>

            <p
               className="
                    text-base
                    lg:text-xl
                    font-normal
                    leading-relaxed
                    opacity-95
                  mb-12 text-[#717680] max-w-[692px] mx-auto
                "
            >
               An All-in-One bank with unifying accounts, payments, savings, lending, DAO, rewards and compliance.
            </p>

            {/* CTA */}
            <div className="flex justify-center">
               <Button
                  className="
                            h-14
                            px-6
                            rounded-[12px]
                            text-white
                            hover:bg-gray-800
                            text-lg
                            md:text-xl
                            font-normal
                            bg-[#FF6F2C]  hover:bg-[#FF6F2C]/80
                        "
               >
                  Download App
               </Button>
            </div>
            <div className="w-fit mx-auto mt-[112px]">
               <Image src={"/images/home/Device.png"} width={375} height={769} alt="device" />
            </div>
         </div>
      </section>
   );
}
