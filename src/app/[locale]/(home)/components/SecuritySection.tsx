export function SecuritySection() {
    return (
        <section className="bg-[#F8F8F9]">
            {/* White Container - responsive */}
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12 md:py-16 lg:py-24">
                <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-14">
                    {/* Text Content */}
                    <div className="w-full max-w-[636px] flex flex-col items-center gap-3 md:gap-4 px-4">
                        <h2 className="w-full font-bold text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] leading-tight md:leading-[52px] lg:leading-[56px] tracking-[-0.05em] text-gray-900 text-center capitalize">
                            Transaction & Safety
                        </h2>
                        <p className="w-full text-base sm:text-lg md:text-[18px] lg:text-[20px] leading-relaxed md:leading-[24px] lg:leading-[26px] tracking-[0.02em] text-gray-600 text-center">
                            Advanced security with EIP-712 signing, anti-phishing guards, and full
                            transaction history audit logs.
                        </p>
                    </div>

                    {/* Image Container */}
                    <div className="w-full max-w-[1264px] h-auto aspect-[1264/701]">
                        <img
                            src="/safety/security.svg"
                            alt="Transaction & Safety"
                            className="w-full h-full object-cover rounded-[20px] md:rounded-[28px] lg:rounded-[36px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}