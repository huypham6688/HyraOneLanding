"use client"

export function FullImageCTA() {
    return (
        <section className="bg-white">
            {/* Container - responsive */}
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[88px] py-12 md:py-16 lg:py-24">
                {/* Inner Container */}
                <div className="w-full max-w-[1264px] min-h-[400px] md:h-auto lg:h-[472px] mx-auto bg-[#F7F7F8] rounded-[24px] md:rounded-[30px] lg:rounded-[36px] px-6 sm:px-8 md:px-12 lg:px-16 py-8 md:py-12 lg:pt-[72px] lg:pb-20 overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-12 h-full max-w-full">
                        {/* Left Content */}
                        <div className="w-full lg:w-[594px] flex flex-col gap-6 md:gap-8 lg:gap-10">
                            {/* Title Section */}
                            <div className="w-full max-w-[411px] mx-auto lg:mx-0">
                                <h2 className="w-full font-bold text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] leading-tight md:leading-[52px] lg:leading-[56px] tracking-[-0.05em] capitalize mb-0 text-center lg:text-left">
                                    <span className="text-gray-900">Your </span>
                                    <span style={{ color: '#FB5F2F' }}>Device</span>
                                    <span className="text-gray-900">,</span>
                                </h2>
                                <h2 className="w-full font-bold text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] leading-tight md:leading-[52px] lg:leading-[56px] tracking-[-0.05em] capitalize mb-0 text-center lg:text-left">
                                    <span className="text-gray-900">Your </span>
                                    <span style={{ color: '#FB5F2F' }}>Power</span>
                                    <span className="text-gray-900">,</span>
                                </h2>
                                <h2 className="w-full font-bold text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] leading-tight md:leading-[52px] lg:leading-[56px] tracking-[-0.05em] capitalize text-center lg:text-left">
                                    <span className="text-gray-900">Your </span>
                                    <span style={{ color: '#FB5F2F' }}>Sovereignty</span>
                                </h2>
                            </div>

                            {/* QR Code and Download Section */}
                            <div className="w-full flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                                {/* QR Code */}
                                <div className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] bg-white rounded-[16.03px] border-[1.42px] border-gray-200 p-0 flex items-center justify-center flex-shrink-0">
                                    <img
                                        src="/scan/qr.svg"
                                        alt="QR Code"
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Download Text and Buttons */}
                                <div className="w-full sm:w-auto flex flex-col gap-4 sm:gap-6 items-center sm:items-start">
                                    <p className="w-full sm:w-auto text-base sm:text-lg md:text-[20px] leading-relaxed md:leading-[26px] tracking-[0.02em] font-normal text-center sm:text-left" style={{ color: '#646464' }}>
                                        Scan to download HYRA AI app
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                                        {/* App Store Button */}
                                        <a
                                            href="#"
                                            className="w-full sm:w-[171px] h-[60px] flex items-center justify-center gap-2 bg-white rounded-full border border-gray-200 px-3.5 py-2.5 hover:bg-gray-50 transition"
                                        >
                                            <div className="w-8 h-8 flex-shrink-0">
                                                <img
                                                    src="/scan/apple.svg"
                                                    alt="Apple"
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <span className="text-[12px] leading-[16px] tracking-[0] font-normal whitespace-nowrap" style={{ color: '#8D8D8D' }}>
                                                    Download on the
                                                </span>
                                                <span className="text-sm font-medium text-gray-900 whitespace-nowrap">App Store</span>
                                            </div>
                                        </a>

                                        {/* Google Play Button */}
                                        <a
                                            href="#"
                                            className="w-full sm:w-[171px] h-[60px] flex items-center justify-center gap-2 bg-white rounded-full border border-gray-200 px-3.5 py-2.5 hover:bg-gray-50 transition"
                                        >
                                            <div className="w-8 h-8 flex-shrink-0">
                                                <img
                                                    src="/scan/chplay.svg"
                                                    alt="Google Play"
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <span className="text-[12px] leading-[16px] tracking-[0] font-normal whitespace-nowrap" style={{ color: '#8D8D8D' }}>
                                                    Download on the
                                                </span>
                                                <span className="text-sm font-medium text-gray-900 whitespace-nowrap">Google Play</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="w-full lg:max-w-[530px] lg:w-[530px] h-[280px] sm:h-[320px] md:h-[360px] lg:h-[381.45px] rounded-[18px] md:rounded-[20px] lg:rounded-[22.01px] overflow-hidden bg-gradient-to-br from-orange-200 to-orange-300 flex-shrink-0">
                            <img
                                src="/scan/bg.svg"
                                alt="Background"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}