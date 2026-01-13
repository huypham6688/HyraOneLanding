"use client"

export function Roadmap() {
    return (
        <section className="bg-white">
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Lora:wght@600&display=swap');
            `}</style>

            {/* Container - responsive */}
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[88px] py-12 md:py-16 lg:py-24">
                <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
                    {/* Title */}
                    <h2 className="w-full max-w-[714px] mx-auto font-bold text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] leading-tight md:leading-[52px] lg:leading-[56px] tracking-[-0.05em] text-gray-900 text-center capitalize px-4">
                        Development Sprint Plan
                    </h2>

                    {/* Sprint Cards Grid - responsive */}
                    <div className="w-full max-w-[1120px] mx-auto flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12">
                        {/* Sprint 1 */}
                        <div
                            className="w-full md:w-[341.33px] h-auto md:h-[272px] bg-gray-100 rounded-xl p-6 flex flex-col justify-between relative overflow-hidden"
                            style={{
                                backgroundColor: '#F8F8F9',
                                clipPath: typeof window !== 'undefined' && window.innerWidth >= 768 ? 'polygon(80px 0, 100% 0, 100% 100%, 0 100%, 0 80px)' : 'polygon(60px 0, 100% 0, 100% 100%, 0 100%, 0 60px)'
                            }}
                        >
                            <div className="w-full mb-4 md:mb-0">
                                <div className="text-xl md:text-[24px] leading-[28px] tracking-[0] text-right" style={{ fontFamily: 'Lora', fontWeight: 600, color: '#717680' }}>
                                    Sprint 1
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="text-base md:text-[18px] leading-[24px] tracking-[0.01em] font-medium text-gray-700">
                                    <div className="font-bold mb-2">Onboarding & Basics</div>
                                    <ul className="space-y-1 text-base md:text-[18px] leading-[24px] tracking-[0.01em] pl-1.5">
                                        <li>• Login/Signup & Wallet Creation</li>
                                        <li>• Key Encryption & Biometrics</li>
                                        <li>• Preset Networks (ETH, BSC, TRON)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sprint 2 */}
                        <div
                            className="w-full md:w-[341.33px] h-auto md:h-[272px]  rounded-xl p-6 flex flex-col justify-between relative overflow-hidden"
                            style={{
                                backgroundColor: '#F8F8F9',
                                clipPath: typeof window !== 'undefined' && window.innerWidth >= 768 ? 'polygon(80px 0, 100% 0, 100% 100%, 0 100%, 0 80px)' : 'polygon(60px 0, 100% 0, 100% 100%, 0 100%, 0 60px)'
                            }}
                        >
                            <div className="w-full mb-4 md:mb-0">
                                <div className="text-xl md:text-[24px] leading-[28px] tracking-[0] text-right" style={{ fontFamily: 'Lora', fontWeight: 600, color: '#717680' }}>
                                    Sprint 2
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="text-base md:text-[18px] leading-[24px] tracking-[0.01em] font-medium text-gray-700">
                                    <div className="font-bold mb-2">Transactions & Fiat</div>
                                    <ul className="space-y-1 text-base md:text-[18px] leading-[24px] tracking-[0.01em] pl-1.5">
                                        <li>• EIP-712 Signing</li>
                                        <li>• Fee Estimation & Tx History</li>
                                        <li>• Fiat Pricing (USD/VND)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sprint 3 */}
                        <div
                            className="w-full md:w-[341.33px] h-auto md:h-[272px] rounded-xl p-6 flex flex-col justify-between relative overflow-hidden"
                            style={{
                                clipPath: typeof window !== 'undefined' && window.innerWidth >= 768 ? 'polygon(80px 0, 100% 0, 100% 100%, 0 100%, 0 80px)' : 'polygon(60px 0, 100% 0, 100% 100%, 0 100%, 0 60px)',
                                backgroundImage: 'url(/sprint/sprint3-bg.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            {/* Fallback gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 -z-10"></div>

                            {/* SVG overlay */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: 'url(/sprint/group.svg)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            ></div>

                            <div className="w-full mb-4 md:mb-0 relative z-10">
                                <div className="text-xl md:text-[24px] leading-[28px] tracking-[0] text-white text-right" style={{ fontFamily: 'Lora', fontWeight: 600 }}>
                                    Sprint 3
                                </div>
                            </div>

                            <div className="w-full relative z-10">
                                <div className="text-base md:text-[18px] leading-[24px] tracking-[0.01em] font-medium text-white">
                                    <div className="font-bold mb-2">Onboarding & Basics</div>
                                    <ul className="space-y-1 text-base md:text-[18px] leading-[24px] tracking-[0.01em] pl-1.5">
                                        <li>• Push Notifications</li>
                                        <li>• UI & Address Book</li>
                                        <li>• UAT & Launch by Week 6</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}