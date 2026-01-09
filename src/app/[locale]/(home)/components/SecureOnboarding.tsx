"use client"

import { Button } from "@/components/ui/button"

export function SecureOnboarding() {
    return (
        <section className="min-h-screen bg-[#F5F3FF] flex items-center">
            <div className="w-full max-w-[1600px] mx-auto px-8 md:px-16">
                <div className="grid md:grid-cols-2 gap-24 items-center">

                    {/* LEFT */}
                    <div className="order-2 md:order-1">
                        <h2 className="text-5xl md:text-7xl xl:text-8xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight">
                            Secure
                            <br />
                            Onboarding
                        </h2>

                        <p className="text-slate-600 text-xl md:text-2xl leading-relaxed max-w-xl mb-10">
                            Easy Hyra Login (email/social) with biometric auth (FaceID/TouchID).
                            MPC recovery for seedless setups and robust privacy controls.
                            Key management made simple.
                        </p>

                        <Button className="rounded-full bg-slate-900 text-white px-12 py-6 text-base md:text-lg font-bold uppercase tracking-wider hover:bg-slate-800 h-auto">
                            Explore Security
                        </Button>
                    </div>

                    {/* RIGHT */}
                    <div className="order-1 md:order-2 flex justify-center md:justify-end">
                        <img
                            src="/earn-feature.png"
                            alt="Earn Feature"
                            className="w-full max-w-xl h-[620px] md:h-[680px] object-contain rounded-3xl drop-shadow-2xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
