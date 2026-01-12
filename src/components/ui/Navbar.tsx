"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about-us" },
        { name: "Feature", href: "/#feature" },
        { name: "Policy", href: "/policy" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <nav className="fixed top-6 w-full z-50 flex justify-center px-4">
            {/* PILL CONTAINER */}
            <div className="w-full max-w-[860px] relative">
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
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            <Image src={'/images/logo_one.png'} width={40} height={40} alt="logo one" />
                        </div>
                        <span className="font-semibold text-slate-900 text-sm">
                            Hyra One
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                href={link.href} 
                                className="text-slate-700 hover:text-[#FF6F2C] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <Button className="hidden md:flex rounded-full bg-[#FF6F2C] text-white px-4 py-1.5 text-xs font-semibold hover:bg-[#FF6F2C]/80 transition-all">
                            Download app
                        </Button>

                        <Button 
                            variant="ghost" 
                            size="icon" 
                            className="md:hidden hover:bg-slate-100 rounded-full"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>

                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white/95 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl md:hidden flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#FF6F2C] rounded-xl transition-all"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        
                        <hr className="border-slate-100" />

                        <Button className="w-full rounded-full bg-[#FF6F2C] text-white py-6 text-sm font-semibold hover:bg-[#FF6F2C]/90 shadow-md">
                            Download app
                        </Button>
                    </div>
                )}
            </div>
        </nav>
    )
}