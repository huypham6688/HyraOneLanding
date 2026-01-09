"use client"

import Image from "next/image"

export function FullImageCTA() {
    return (
        <section className="relative min-h-screen w-full flex items-start justify-center overflow-hidden pt-[20vh]">
            {/* Background image */}
            <Image
                src="/cta-bg.png"   // ảnh giống hình bạn gửi
                alt="People enjoying borderless future"
                fill
                priority
                className="object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6 max-w-4xl">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-10">
                    Permissionless & Borderless
                    <br />
                    <span className="font-normal">Live the future today</span>
                </h2>

                {/* Download button */}
                <div className="flex justify-center">
                    <a
                        href="#"
                        className="
                            inline-flex items-center gap-3
                            bg-black/80 backdrop-blur
                            px-8 py-4
                            rounded-full
                            text-white
                            font-medium
                            hover:bg-black
                            transition
                        "
                    >
                        {/* Apple icon */}
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16.365 1.43c0 1.14-.463 2.205-1.23 3.06-.79.89-2.09 1.58-3.2 1.49-.07-1.07.48-2.2 1.2-3.01.8-.9 2.15-1.57 3.23-1.54z" />
                        </svg>

                        <span>Download Super App</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
