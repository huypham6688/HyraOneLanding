"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/hero-balloons.png')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center text-white drop-shadow-lg">

                <h1 className="
                    text-4xl
                    md:text-6xl
                    lg:text-7xl
                    font-extrabold
                    mb-6
                    leading-tight
                    tracking-tight
                    uppercase
                ">
                    Unlock Seamless Crypto Payments
                    <br />
                    and Wallet Management
                </h1>

                <p className="
                    text-lg
                    md:text-xl
                    lg:text-2xl
                    font-medium
                    leading-relaxed
                    opacity-95
                    mb-12
                ">
                    Secure, user-friendly crypto-to-fiat conversions and dApp
                    integrations for everyday spending.
                </p>

                {/* CTA */}
                <div className="flex justify-center">
                    <Button
                        className="
                            h-16
                            px-14
                            rounded-full
                            bg-black
                            text-white
                            hover:bg-gray-800
                            text-lg
                            md:text-xl
                            font-bold
                            tracking-wide
                        "
                    >
                        DOWNLOAD APP
                    </Button>
                </div>

            </div>
        </section>
    )
}
