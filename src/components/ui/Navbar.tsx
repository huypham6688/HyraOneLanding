"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Navbar() {
    return (
        <nav className="fixed top-6 w-full z-50 flex justify-center">
            {/* PILL CONTAINER */}
            <div className="w-full max-w-[860px] px-4">
                <div
                    className="
                        flex items-center justify-between
                        rounded-full
                        bg-white/80 backdrop-blur-lg
                        border border-white/40
                        px-4 py-2.5
                        shadow-lg
                    "
                >
                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                            H
                        </div>
                        <span className="font-semibold text-slate-900 text-sm">
                            Hyra One
                        </span>
                    </Link>

                    {/* MENU */}
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <Link href="/" className="text-purple-600">
                            Home
                        </Link>
                        <Link href="/about" className="text-slate-700 hover:text-purple-600">
                            About
                        </Link>
                        <Link href="/policy" className="text-slate-700 hover:text-purple-600">
                            Policy
                        </Link>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2">
                        <Button className="rounded-full bg-black text-white px-4 py-1.5 text-xs font-semibold hover:bg-black/80">
                            Get Card
                        </Button>

                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
