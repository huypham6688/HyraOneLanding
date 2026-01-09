"use client"

import { Button } from "@/components/ui/button"

export function MiniApps() {
    return (
        <section
            className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/fizen-card.png')" }}
        >
            {/* Overlay để chữ nổi */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/60 to-purple-600/10" />
            <div className="absolute inset-0 bg-black/30" />



            {/* CONTENT */}
            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-20">
                <div className="max-w-2xl">

                    <h2 className="text-5xl md:text-7xl xl:text-8xl font-black text-white mb-8 leading-[1.05] tracking-tight">
                        Mini Apps &
                        <br />
                        Partners
                    </h2>

                    <p className="text-white/90 text-xl md:text-2xl leading-relaxed mb-10">
                        Embed AITRADI (web-first).
                        eSIM and Hotel booking partners integrated directly into your wallet.
                        One ecosystem for all your needs.
                    </p>

                    <Button
                        className="rounded-full bg-white/20 backdrop-blur-sm border border-white/30
                       text-white px-12 py-6 text-base md:text-lg font-bold uppercase tracking-wider
                       hover:bg-white/30 h-auto"
                    >
                        Join Beta
                    </Button>

                </div>
            </div>
        </section>
    )
}
