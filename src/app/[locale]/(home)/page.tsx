import { MiniApps } from "@/app/[locale]/(home)/components/MiniApps";
import { NetworksAssets } from "@/app/[locale]/(home)/components/NetworksAssets";
import { PaymentGateway } from "@/app/[locale]/(home)/components/PaymentGateway";
import { SecureOnboarding } from "@/app/[locale]/(home)/components/SecureOnboarding";
import { FullImageCTA } from "@/app/[locale]/(home)/components/FullImageCTA";
import { Partners } from "@/app/[locale]/(home)/components/Partners";
import { Roadmap } from "@/app/[locale]/(home)/components/Roadmap";
import { SecuritySection } from "@/app/[locale]/(home)/components/SecuritySection";
import React from "react";

const HomePage = () => {
   return (
      <>
         <Partners />
         <SecureOnboarding />
         <NetworksAssets />
         <PaymentGateway />
         <MiniApps />
         <SecuritySection />
         <Roadmap />
         <FullImageCTA />
      </>
   );
};

export default HomePage;
