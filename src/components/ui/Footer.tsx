"use client"

import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <h2 className="text-2xl font-bold tracking-widest uppercase">Hyra MVP</h2>
                    <div className="text-right">
                        <p className="text-gray-500 text-sm mb-2">JOIN US</p>
                        <div className="flex gap-6">
                            <Link href="#" className="hover:text-purple-400 transition-colors">Twitter</Link>
                            <Link href="#" className="hover:text-purple-400 transition-colors">Telegram</Link>
                            <Link href="#" className="hover:text-purple-400 transition-colors">Discord</Link>
                        </div>
                    </div>
                </div>

                <div className="text-center text-gray-600 text-xs border-t border-gray-900 pt-8 uppercase tracking-widest">
                    © 2026 Hyra Labs. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
