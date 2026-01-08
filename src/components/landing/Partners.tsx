"use client"

import React from 'react'

export function Partners() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="flex flex-wrap items-center justify-center gap-8 mb-6 opacity-90 scale-110">
                    <div className="flex items-center gap-2 font-bold text-xl text-yellow-600">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div> BSC
                    </div>
                    <div className="h-6 w-px bg-gray-300"></div>
                    <div className="flex items-center gap-2 font-bold text-xl text-blue-600">
                        <div className="w-6 h-6 bg-blue-500 rounded-full"></div> Ethereum
                    </div>
                    <div className="h-6 w-px bg-gray-300"></div>
                    <div className="flex items-center gap-2 font-bold text-xl text-red-600">
                        <div className="w-6 h-6 bg-red-500 rounded-full"></div> TRON
                    </div>
                </div>
                <p className="text-slate-500 font-medium text-lg max-w-xl mx-auto">
                    Supporting core <span className="text-purple-600 font-bold">EVM & Non-EVM</span> chains for fast, low-cost transactions.
                </p>
            </div>
        </section>
    )
}
