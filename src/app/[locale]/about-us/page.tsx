import React from "react";
import Image from "next/image";
import { ArrowRight, Shield, Zap, Globe, Layers, TrendingUp, Cpu, Smartphone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "./components/HeroSection";
import ProblemsWeSolveSection from "./components/ProblemsWeSolveSection";
import CoreFeatureSection from "./components/CoreFeatureSection";
import WhyAllInOneSection from "./components/WhyAllInOneSection";
import RoadMapSection from "./components/RoadMapSection";
import CallToActionSection from "./components/CallToActionSection";

const AboutUsPage = () => {
   return (
      <div className="bg-white text-slate-900 max-w-[1440px] mx-auto lg:min-h-screen font-sans selection:bg-[#FF6F2C]/20">
         <HeroSection />
         <ProblemsWeSolveSection />
         <CoreFeatureSection />
         <WhyAllInOneSection />
         <RoadMapSection />
         <CallToActionSection />
      </div>
   );
};

export default AboutUsPage;
