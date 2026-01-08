"use client"

import { Button } from "@/components/ui/button"

export function PaymentGateway() {
    return (
        <section className="min-h-screen bg-[#F5F3FF] flex items-center">
            <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-20">
                <div className="grid md:grid-cols-2 gap-24 items-center">

                    {/* LEFT TEXT */}
                    <div className="order-2 md:order-1">
                        <h2 className="text-5xl md:text-7xl xl:text-8xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight">
                            Payment Gateway &
                            <br />
                            Integrations
                        </h2>

                        <p className="text-slate-600 text-xl md:text-2xl leading-relaxed max-w-xl mb-10">
                            Convert Crypto to Fiat (VND/USD) via Encryptus & Xpressflow.
                            Send/Receive with QR codes and EIP-712 signing security.
                        </p>

                        <Button className="rounded-full bg-slate-900 text-white px-12 py-6 text-base md:text-lg font-bold uppercase tracking-wider hover:bg-slate-800 h-auto">
                            Start Spending
                        </Button>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="order-1 md:order-2 flex justify-center md:justify-end">
                        <img
                            src="/pay-feature.png"
                            alt="Pay Feature"
                            className="w-full max-w-xl h-[620px] md:h-[680px] object-contain rounded-3xl drop-shadow-2xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
