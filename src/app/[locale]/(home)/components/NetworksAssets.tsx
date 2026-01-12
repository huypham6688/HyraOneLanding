"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function NetworksAssets() {
    return (
        <section className="min-h-screen bg-[#F3F0FF] flex items-center">
            <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-20">
                <div className="grid md:grid-cols-2 gap-24 items-center">

                    {/* RIGHT TEXT */}
                    <div className="order-2 md:order-2">
                        <h2 className="text-5xl md:text-7xl xl:text-8xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight">
                            Networks &
                            <br />
                            Asset Support
                        </h2>

                        <p className="text-slate-600 text-xl md:text-2xl leading-relaxed max-w-xl mb-10">
                            Preset chains: ETH, BSC, TRON.
                            Full support for ERC-20 and TRC-20 tokens with real-time fiat pricing (USD/VND).
                            Manage your portfolio effortlessly.
                        </p>

                        <Button className="rounded-full bg-slate-900 text-white px-12 py-6 text-base md:text-lg font-bold uppercase tracking-wider hover:bg-slate-800 h-auto">
                            View Assets
                        </Button>
                    </div>

                    {/* LEFT IMAGE */}
                    <div className="order-1 md:order-1 flex justify-center md:justify-start">
                        <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            src="/savings-feature.png"
                            alt="Invest Feature"
                            className="w-full max-w-xl h-[620px] md:h-[680px] object-contain rounded-3xl drop-shadow-2xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
