import React from "react";
import Image from "next/image";
import { ArrowRight, Shield, Zap, Globe, Layers, TrendingUp, Cpu, Smartphone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutUsPage = () => {
   return (
      <div className="bg-white text-slate-900 max-w-[1440px] mx-auto lg:min-h-screen font-sans selection:bg-[#FF6F2C]/20">
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

         <section className="py-24 bg-slate-50/50 border-y border-slate-100">
            <div className="container mx-auto px-6">
               <div className="grid md:grid-cols-3 gap-12">
                  <div className="text-center group p-6 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                     <div className="w-16 h-16 bg-[#FF6F2C]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF6F2C] transition-colors duration-300">
                        <Globe className="text-[#FF6F2C] group-hover:text-white" />
                     </div>
                     <h3 className="text-xl font-bold mb-4 text-slate-900">No More Intermediaries</h3>
                     <p className="text-slate-600">Be your own bank. No one can freeze your account or control your spending.</p>
                  </div>
                  <div className="text-center group p-6 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                     <div className="w-16 h-16 bg-[#FF6F2C]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF6F2C] transition-colors duration-300">
                        <Zap className="text-[#FF6F2C] group-hover:text-white" />
                     </div>
                     <h3 className="text-xl font-bold mb-4 text-slate-900">Ultra-low Fees</h3>
                     <p className="text-slate-600">Eliminate traditional banking overhead. Transfer cross-border for just a few cents.</p>
                  </div>
                  <div className="text-center group p-6 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                     <div className="w-16 h-16 bg-[#FF6F2C]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF6F2C] transition-colors duration-300">
                        <Shield className="text-[#FF6F2C] group-hover:text-white" />
                     </div>
                     <h3 className="text-xl font-bold mb-4 text-slate-900">Absolute Security</h3>
                     <p className="text-slate-600">Non-custodial tech ensures Private Keys stay with you. Not your keys, not your coins.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* SECTION 3: CORE FEATURES */}
         <section id="feature" className="py-24">
            <div className="container mx-auto px-6">
               <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-slate-900">Core Features</h2>
                  <div className="w-20 h-1.5 bg-[#FF6F2C] mx-auto rounded-full"></div>
               </div>
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                     { icon: <Layers />, title: "Multi-chain Swap", desc: "Swap thousands of assets across different Blockchains with a single tap." },
                     { icon: <TrendingUp />, title: "Staking & Yield", desc: "Let your assets grow with attractive rates directly from trusted DeFi protocols." },
                     { icon: <Cpu />, title: "NFT Gateway", desc: "Display and trade your digital collections in an intuitive and artistic way." },
                     { icon: <Smartphone />, title: "Biometric Security", desc: "Combined Blockchain encryption with FaceID/Fingerprint for secure access." },
                  ].map((item, index) => (
                     <div key={index} className="p-8 bg-white rounded-3xl border border-slate-100 hover:border-[#FF6F2C]/30 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group cursor-pointer">
                        <div className="text-[#FF6F2C] mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                        <h4 className="text-lg font-bold mb-2 text-slate-900">{item.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

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
      </div>
   );
};

export default AboutUsPage;
