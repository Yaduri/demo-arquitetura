import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutArchitect from "@/components/AboutArchitect";
import PortfolioGrid from "@/components/PortfolioGrid";
import BeforeAfter from "@/components/BeforeAfter";
import Simulator from "@/components/Simulator";
import Methodology from "@/components/Methodology";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import DiagnosticForm from "@/components/DiagnosticForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-japi-warm text-japi-charcoal flex flex-col relative selection:bg-japi-forest selection:text-white">
      {/* Top sticky navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About & Architect Philosophy */}
      <AboutArchitect />

      {/* Selected Works Portfolio */}
      <PortfolioGrid />

      {/* Interactive Before & After (3D vs Real Construction) */}
      <BeforeAfter />

      {/* Interactive Project Simulator & Calculator */}
      <Simulator />

      {/* 5-Step Methodology */}
      <Methodology />

      {/* Social Proof & Press */}
      <Testimonials />

      {/* FAQ Accordion */}
      <Faq />

      {/* Diagnostic & Intake Form */}
      <DiagnosticForm />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp VIP Button */}
      <FloatingWhatsApp />
    </main>
  );
}
