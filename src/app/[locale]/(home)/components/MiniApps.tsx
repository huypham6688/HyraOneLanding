export function MiniApps() {
    return (
        <section className="relative bg-white">
            {/* White Container - responsive padding */}
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-[88px] py-12 md:py-16 lg:py-24">
                {/* Orange Background Container - responsive sizing */}
                <div
                    className="w-full max-w-[1264px] h-auto min-h-[300px] sm:min-h-[350px] md:h-[400px] lg:h-[437px] mx-auto rounded-[24px] md:rounded-[30px] lg:rounded-[36px] relative overflow-hidden"
                    style={{
                        backgroundImage: "url('/mini-app/bg.svg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    {/* Fallback gradient if image doesn't load */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 -z-10"></div>

                    {/* Stripe overlay effect */}
                    <div className="absolute inset-0 flex opacity-30">
                        {[...Array(12)].map((_, i) => (
                            <div
                                key={i}
                                className="flex-1 bg-gradient-to-b from-white/10 to-transparent"
                                style={{ marginLeft: '2px' }}
                            />
                        ))}
                    </div>

                    {/* Content inside orange container - responsive */}
                    <div className="relative z-10 h-full flex flex-col items-center justify-start pt-8 sm:pt-12 md:pt-14 lg:pt-16 px-4 sm:px-6 md:px-8 pb-8 md:pb-0">
                        <h2 className="w-full max-w-[578px] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight lg:leading-[56px] tracking-[-0.05em] text-white text-center capitalize mb-4 md:mb-6">
                            Mini Apps & Partners
                        </h2>
                        <p className="w-full max-w-[728px] text-base sm:text-lg md:text-[20px] leading-relaxed md:leading-[26px] tracking-[0.02em] text-white/95 text-center px-4">
                            Embed AIRTRADI (web-first), eSIM and hotel booking partners integrated directly into your wallet. One ecosystem for all your needs.
                        </p>
                    </div>
                </div>

                {/* Cards Grid - responsive layout */}
                <div className="relative -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-[155px] z-20">
                    <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-4 sm:gap-5 md:gap-6 max-w-[1200px] mx-auto px-4 sm:px-0">
                        {/* Card 1 - eSIM Hyra */}
                        <div className="bg-white rounded-[20px] md:rounded-[24px] overflow-hidden shadow-xl w-full max-w-[362px] md:w-[362px] h-auto md:h-[466px]">
                            <div className="h-full flex flex-col items-center">
                                {/* Text Section */}
                                <div className="w-full max-w-[343px] flex flex-col gap-[6px] mt-6 md:mt-[36px] px-4">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                                        eSIM Hyra
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-500 text-center">
                                        Kết nối toàn cầu dễ dàng
                                    </p>
                                </div>

                                {/* Image Section */}
                                <div className="w-full max-w-[314px] h-[250px] sm:h-[280px] md:h-[308px] rounded-[17.79px] border-[0.89px] border-white/20 flex items-center justify-center mt-auto mb-6 md:mb-8 overflow-hidden mx-4">
                                    <img
                                        src="/mini-app/esim.svg"
                                        alt="eSIM Hyra"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Card 2 - Aitradi */}
                        <div className="bg-white rounded-[20px] md:rounded-[24px] overflow-hidden shadow-xl w-full max-w-[362px] md:w-[362px] h-auto md:h-[466px]">
                            <div className="h-full flex flex-col items-center">
                                {/* Image Section */}
                                <div className="w-full max-w-[314px] h-[250px] sm:h-[280px] md:h-[308px] rounded-[17.79px] border-[0.89px] border-white/20 relative overflow-hidden mt-6 md:mt-8 mx-4">
                                    <img
                                        src="/mini-app/aitradi.svg"
                                        alt="Aitradi"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Text Section */}
                                <div className="w-full max-w-[343px] flex flex-col gap-[6px] mt-auto mb-6 md:mb-[36px] px-4">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                                        Aitradi
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-500 text-center">
                                        Kết nối toàn cầu dễ dàng
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 - Booking Flight */}
                        <div className="bg-white rounded-[20px] md:rounded-[24px] overflow-hidden shadow-xl w-full max-w-[362px] md:w-[362px] h-auto md:h-[466px]">
                            <div className="h-full flex flex-col items-center">
                                {/* Text Section */}
                                <div className="w-full max-w-[343px] flex flex-col gap-[6px] mt-6 md:mt-[36px] px-4">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                                        Booking Flight
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-500 text-center">
                                        Kết nối toàn cầu dễ dàng
                                    </p>
                                </div>

                                {/* Image Section */}
                                <div className="w-full max-w-[314px] h-[250px] sm:h-[280px] md:h-[308px] rounded-[17.79px] border-[0.89px] border-white/20 flex items-center justify-center relative overflow-hidden mt-auto mb-6 md:mb-8 mx-4">
                                    <img
                                        src="/mini-app/flight.svg"
                                        alt="Booking Flight"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}