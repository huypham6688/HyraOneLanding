"use client"

import { Shield } from "lucide-react"

export function SecuritySection() {
    return (
        <section className="py-24 md:py-32 bg-white text-center">
            <div className="max-w-3xl mx-auto px-6">
                <div className="flex justify-center mb-10">
                    <div className="w-24 h-24 bg-gradient-to-tr from-purple-500 to-fuchsia-600 rounded-[2rem] flex items-center justify-center shadow-lg shadow-purple-200">
                        <Shield className="w-10 h-10 text-white fill-current" />
                    </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                    Transactions & Safety
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed max-w-xl mx-auto">
                    Advanced security with <span className="text-purple-600 font-bold">EIP-712</span> signing, anti-phishing guards, and full transaction history audit logs.
                </p>
            </div>
        </section>
    )
}
