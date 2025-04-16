import { useEffect } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import HowItWorksSection from "@/components/how-it-works-section";
import AppPreviewSection from "@/components/app-preview-section";
import TestimonialsSection from "@/components/testimonials-section";
import FaqSection from "@/components/faq-section";
import DownloadSection from "@/components/download-section";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // This sets the title of the page
    document.title = "HealthBot - Your Personal Healthcare Assistant";
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <AppPreviewSection />
        <TestimonialsSection />
        <FaqSection />
        <DownloadSection />
      </main>
      <Footer />
    </motion.div>
  );
}
