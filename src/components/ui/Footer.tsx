"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
   return (
      <footer className="bg-white text-white pt-20 pb-10 border-t border-gray-900">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
               <Link href="/" className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">
                     <Image src={"/images/logo_one.png"} width={40} height={40} alt="logo one" />
                  </div>
                  <span className="font-bold text-2xl uppercase tracking-wide bg-gradient-to-r from-[#FF6F2C] to-[#FFB799] text-transparent bg-clip-text">Hyra One</span>
               </Link>
               <div className="text-right">
                  <p className="text-gray-600 text-sm mb-2">JOIN US</p>
                  <div className="flex gap-6">
                     <Link href="#" className="hover:text-[#FF6F2C]/80 transition-colors text-slate-700 font-medium">
                        Twitter
                     </Link>
                     <Link href="#" className="hover:text-[#FF6F2C]/80 transition-colors text-slate-700 font-medium">
                        Telegram
                     </Link>
                     <Link href="#" className="hover:text-[#FF6F2C]/80 transition-colors text-slate-700 font-medium">
                        Discord
                     </Link>
                  </div>
               </div>
            </div>

            <div className="text-center text-gray-600 text-xs border-t border-gray-900 pt-8 uppercase tracking-widest">© 2026 Hyra Labs. All rights reserved.</div>
         </div>
      </footer>
   );
}
