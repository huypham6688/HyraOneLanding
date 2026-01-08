import { Navbar } from "@/components/ui/Navbar"
import { Footer } from "@/components/ui/Footer"
import { Hero } from "@/components/landing/Hero"
import { Partners } from "@/components/landing/Partners"
import { SecureOnboarding } from "@/components/landing/features/SecureOnboarding"
import { NetworksAssets } from "@/components/landing/features/NetworksAssets"
import { PaymentGateway } from "@/components/landing/features/PaymentGateway"
import { MiniApps } from "@/components/landing/features/MiniApps"
import { SecuritySection } from "@/components/landing/SecuritySection"
import { Roadmap } from "@/components/landing/Roadmap"

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <Hero />
      <Partners />
      <SecureOnboarding />
      <NetworksAssets />
      <PaymentGateway />
      <MiniApps />
      <SecuritySection />
      <Roadmap />
      <Footer />
    </main>
  )
}
