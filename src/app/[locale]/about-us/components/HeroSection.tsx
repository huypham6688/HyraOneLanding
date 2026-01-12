import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-20 overflow-hidden lg:h-screen flex items-center">
            <div className="container mx-auto px-6 relative z-10">
               <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="flex-1 text-center lg:text-left">
                     <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-slate-950">
                        Decentralized Finance. <br />
                        <span className="text-[#FF6F2C]">Control</span> is Yours.
                     </h1>
                     <p className="text-slate-600 text-lg lg:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">HyraOne is the next-gen All-in-one wallet helping you store, trade, and optimize digital asset returns without any intermediary banks.</p>
                     <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <Button className="bg-[#FF6F2C] hover:bg-[#FF6F2C]/90 text-white px-8 py-6 rounded-full text-lg font-bold w-full sm:w-auto shadow-lg shadow-orange-500/20 transition-all">Download app</Button>
                        <Button variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 px-8 py-6 rounded-full text-lg font-bold w-full sm:w-auto transition-all">
                           Explore Ecosystem
                        </Button>
                     </div>
                  </div>
                  <div className="flex-1 relative">
                     <div className="absolute -z-10 w-[400px] h-[400px] bg-[#FF6F2C]/10 blur-[100px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                     <div className="relative mx-auto w-[320px] lg:w-[395px]">
                        <Image src={"/images/about-us/hero_image.png"} width={450} height={632} alt="Hero Image" />
                     </div>
                  </div>
               </div>
            </div>
         </section>
  )
}

export default HeroSection
