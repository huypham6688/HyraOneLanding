export function MiniApps() {
    return (
        <section className="relative bg-white">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[88px] py-12 sm:py-16 md:py-20 lg:py-24">
                <div
                    className="w-full max-w-[1264px] min-h-[320px] sm:min-h-[360px] md:min-h-[400px] lg:h-[437px] mx-auto rounded-2xl sm:rounded-3xl lg:rounded-[36px] relative overflow-hidden"
                    style={{
                        backgroundImage: "url('/mini-app/bg.svg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 -z-10"></div>

                    <div className="absolute inset-0 flex opacity-30">
                        {[...Array(12)].map((_, i) => (
                            <div
                                key={i}
                                className="flex-1 bg-gradient-to-b from-white/10 to-transparent"
                                style={{ marginLeft: '2px' }}
                            />
                        ))}
                    </div>

                    <div className="relative z-10 h-full flex flex-col items-center justify-start pt-8 sm:pt-10 md:pt-12 lg:pt-14 px-4 sm:px-6 md:px-8 pb-10 sm:pb-12 md:pb-14 lg:pb-16">
                        <h2 className="w-full max-w-[578px] font-bold text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] leading-tight sm:leading-[44px] md:leading-[52px] lg:leading-[56px] tracking-[-0.05em] text-white text-center capitalize mb-3 sm:mb-4 md:mb-5">
                            Mini Apps & Partners
                        </h2>
                        <p className="w-full max-w-[728px] text-base sm:text-lg md:text-[18px] lg:text-[20px] leading-relaxed sm:leading-[24px] md:leading-[26px] tracking-[0.02em] text-white/95 text-center">
                            Embed AIRTRADI (web-first), eSIM and hotel booking partners integrated directly into your wallet. One ecosystem for all your needs.
                        </p>
                    </div>
                </div>

                <div className="relative -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-32 xl:-mt-[155px] z-20">
                    <div className="flex flex-col lg:flex-row justify-center items-stretch gap-5 sm:gap-6 lg:gap-8 max-w-[1200px] mx-auto">
                        <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[362px] mx-auto lg:mx-0 flex flex-col">
                            <div className="flex flex-col items-center px-6 pt-8 pb-6 flex-1">
                                <div className="w-full flex flex-col gap-1.5 mb-6">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
                                        eSIM Hyra
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-500 text-center">
                                        Kết nối toàn cầu dễ dàng
                                    </p>
                                </div>

                                <div className="w-full aspect-[314/308] max-w-[314px] rounded-2xl border border-white/20 overflow-hidden mt-auto">
                                    <img
                                        src="/mini-app/esim.svg"
                                        alt="eSIM Hyra"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[362px] mx-auto lg:mx-0 flex flex-col">
                            <div className="flex flex-col items-center px-6 pt-8 pb-6 flex-1">
                                <div className="w-full aspect-[314/308] max-w-[314px] rounded-2xl border border-white/20 overflow-hidden mb-6">
                                    <img
                                        src="/mini-app/aitradi.svg"
                                        alt="Aitradi"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="w-full flex flex-col gap-1.5 mt-auto">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
                                        Aitradi
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-500 text-center">
                                        Kết nối toàn cầu dễ dàng
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[362px] mx-auto lg:mx-0 flex flex-col">
                            <div className="flex flex-col items-center px-6 pt-8 pb-6 flex-1">
                                <div className="w-full flex flex-col gap-1.5 mb-6">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
                                        Booking Flight
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-500 text-center">
                                        Kết nối toàn cầu dễ dàng
                                    </p>
                                </div>

                                <div className="w-full aspect-[314/308] max-w-[314px] rounded-2xl border border-white/20 overflow-hidden mt-auto">
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