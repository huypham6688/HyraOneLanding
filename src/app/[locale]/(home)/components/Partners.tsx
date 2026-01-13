"use client";

import Image from "next/image";
import React from "react";

export function Partners() {
   return (
      <section className="p-[88px] max-w-[1440px] mx-auto bg-[#1E1E1E] rounded-[40px]">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-[#FFFFFF] font-bold text-[48px]/[56px]">Supported Networks</h2>
            <p className="font-normal text-xl/[26px] text-[#FFFFFFB8] mt-4">Supporting core EVM & Non-EVM chains for fast, low-cost transactions.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-20 lg:gap-[100px] mb-6 mt-[45px]">
               <div className="flex flex-col items-center">
                  <Image src={"/images/home/logo_bcs.svg"} width={225} height={225} alt="BCS" />
                  <p className="text-white text-xl font-medium -mt-6">BSC</p>
               </div>
               <div className="flex flex-col items-center">
                  <Image src={"/images/home/logo_eth.svg"} width={225} height={225} alt="BCS" />
                  <p className="text-white text-xl font-medium -mt-6">Etherum</p>
               </div>
               <div className="flex flex-col items-center">
                  <Image src={"/images/home/logo_tron.svg"} width={225} height={225} alt="BCS" />
                  <p className="text-white text-xl font-medium -mt-6">Tron</p>
               </div>
            </div>
         </div>
      </section>
   );
}
