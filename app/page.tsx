// ./app/page.tsx
"use client";

import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/BenefitsSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TrustEvidenceSection from "../components/TrustEvidenceSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FinalCTASection from "../components/FinalCTASection";
import FAQSection from "../components/FAQSection";
import SiteFooter from "../components/SiteFooter";
import FormModal from "../components/FormModal";

export default function HomePage() {
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  type ModalFormData = {
    email: string;
    role?: string;
    city?: string;
    contactConsent: boolean;
  };

  const [formData, setFormData] = useState<ModalFormData>({
    email: "",
    role: "",
    city: "",
    contactConsent: false,
  });

  const handleCTAClick = (location: "hero" | "final") => {
    if (typeof window !== "undefined") {
      window.dataLayer?.push({ event: "cta_click", location });
    }
    setShowForm(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      window.dataLayer?.push({
        event: "form_submit",
        role: formData.role,
        city: formData.city,
        utm_source: params.get("utm_source"),
        utm_medium: params.get("utm_medium"),
        utm_campaign: params.get("utm_campaign"),
        utm_term: params.get("utm_term"),
      });
    }

    setShowSuccess(true);
    setTimeout(() => {
      setShowForm(false);
      setShowSuccess(false);
    }, 3000);
  };

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const pct = (window.scrollY / (max || 1)) * 100;
      if (pct >= 50) {
        window.dataLayer?.push({ event: "scroll_depth_50" });
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <HeroSection onCTA={() => handleCTAClick("hero")} />
      <BenefitsSection />
      <HowItWorksSection />
      <TrustEvidenceSection />
      <TestimonialsSection />
      <FinalCTASection onCTA={() => handleCTAClick("final")} />
      <FAQSection />
      <SiteFooter />
      <FormModal
        open={showForm}
        onClose={() => setShowForm(false)}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleFormSubmit}
        showSuccess={showSuccess}
      />
    </div>
  );
}
