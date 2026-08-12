import Footer from "@/components/footer";

import AgencySection from "./components/agency-section";
import ClientsSection from "./components/clients-section";
import ContactSection from "./components/contact-section";
import HeroSection from "./components/hero-section";
import PortfolioSection from "./components/portfolio-section";
import SocioEnvironmentalSection from "./components/socio-environmental-section";
import WhatWeDoSection from "./components/what-we-do-section";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <div className="design-canvas w-full">
        <HeroSection />
        <AgencySection />
        <WhatWeDoSection />
        <SocioEnvironmentalSection />
        <ClientsSection />
        <PortfolioSection />
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
