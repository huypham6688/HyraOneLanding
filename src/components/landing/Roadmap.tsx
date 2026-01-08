"use client"

export function Roadmap() {
    return (
        <section className="py-24 bg-black text-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-black text-center mb-16 italic uppercase tracking-tighter">Development Sprint Plan</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Sprint 1 */}
                    <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl hover:bg-gray-800 transition-colors h-full">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="font-bold text-lg text-purple-400">SPRINT 1</span>
                        </div>
                        <h3 className="font-bold text-xl leading-snug mb-4">Onboarding & Basics</h3>
                        <ul className="text-gray-400 space-y-2 text-sm">
                            <li>• Login/Register & Wallet Creation</li>
                            <li>• Key Encryption & Biometrics</li>
                            <li>• Preset Networks (ETH, BSC, TRON)</li>
                        </ul>
                    </div>

                    {/* Sprint 2 */}
                    <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl hover:bg-gray-800 transition-colors h-full">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="font-bold text-lg text-blue-400">SPRINT 2</span>
                        </div>
                        <h3 className="font-bold text-xl leading-snug mb-4">Transactions & Fiat</h3>
                        <ul className="text-gray-400 space-y-2 text-sm">
                            <li>• EIP-712 Signing</li>
                            <li>• Fee Estimation & Tx History</li>
                            <li>• Fiat Pricing (USD/VND)</li>
                        </ul>
                    </div>

                    {/* Sprint 3 */}
                    <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl hover:bg-gray-800 transition-colors h-full">
                        <div className="font-bold text-green-400 mb-4 text-lg">SPRINT 3</div>
                        <h3 className="font-bold text-xl leading-snug mb-4">Polish & Go-Live</h3>
                        <ul className="text-gray-400 space-y-2 text-sm">
                            <li>• Push Notifications</li>
                            <li>• I18n & Address Book</li>
                            <li>• UAT Launch by Week 6</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
