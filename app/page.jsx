import Hero from "@/components/Hero";
import FeaturedZaaminProjects from "@/components/FeaturedZaaminProjects";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import FeaturedProperties from "@/components/FeaturedProperties";
import InstallmentPlans from "@/components/InstallmentPlans";
import Gallery from "@/components/Gallery";
import FeaturedVideos from "@/components/FeaturedVideos";
import Link from "next/link";

export const metadata = {
  title: "Al Madinah Developers | Zaamin City Projects Official Sales Partner",
  description: "Explore Al-Madina Orchard and Al-Madina Garden with Al Madinah Developers, official sales partner of Zaamin City projects.",
};

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Featured Zaamin City Projects (Official Sales Partner Focus) */}
      <FeaturedZaaminProjects />

      {/* 3. Featured Video Showcases */}
      <FeaturedVideos />

      {/* 4. Company Overview */}
      <About />

      {/* 5. Featured Properties Preview */}
      <FeaturedProperties limit={3} />

      {/* 6. Services Preview */}
      <Services />

      {/* 7. Why Choose Us */}
      <WhyChooseUs />

      {/* 8. Stats Section */}
      <section className="py-16 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 to-[#1E293B] pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-serif font-bold text-gold mb-2">100%</p>
              <p className="text-sm text-gray-300 font-semibold uppercase tracking-wider">LDA Compliant Options</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif font-bold text-gold mb-2">Gated</p>
              <p className="text-sm text-gray-300 font-semibold uppercase tracking-wider">Community Security</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif font-bold text-gold mb-2">5-Year</p>
              <p className="text-sm text-gray-300 font-semibold uppercase tracking-wider">Easy Installment Plans</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif font-bold text-gold mb-2">LHR & KSR</p>
              <p className="text-sm text-gray-300 font-semibold uppercase tracking-wider">Primary Project Sites</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Easy Booking & Installment Plans */}
      <InstallmentPlans />

      {/* 10. Customer Trust Section */}
      <section className="py-20 bg-white relative overflow-hidden border-t border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-2 block">
            Unwavering Credibility
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-12">
            Your Secure Real Estate Partner
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "LDA Approved Projects", desc: "All offered developments are fully compliant with local regulations, shielding your assets from legal risks." },
              { title: "Gated Community Security", desc: "Equipped with state-of-the-art surveillance systems, perimeter boundary walls, and active security personnel." },
              { title: "Transparent Documentation", desc: "Direct registry transfers, absolute transparency, and clear trace records for all land transactions." },
              { title: "Rapid Infrastructure Growth", desc: "Under construction road layouts, electrical lines, water supplies, and public parks progressing daily." }
            ].map((trust, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xl font-bold mx-auto mb-4">✓</div>
                <h3 className="text-lg font-bold text-navy mb-2">{trust.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{trust.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Gallery Preview */}
      <Gallery limit={4} />

      {/* 12. Contact CTA */}
      <section className="py-20 bg-gradient-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full opacity-5 blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-3 block">
            Get Free Consultation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Ready to Start Your Property Journey?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Speak directly with our premier real estate consultants. We provide absolute guides, visits, and documentation support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-gold text-white font-semibold rounded-md shadow-lg shadow-gold/20 hover-lift text-center cursor-pointer"
            >
              Contact Us Now
            </Link>
            <a
              href="https://wa.me/923001332279?text=Hello%20Al%20Madina%20Developers%2C%20I%20am%20interested%20in%20your%20property%20services.%20Please%20share%20more%20details."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white border border-white/20 font-semibold rounded-md hover:bg-white/20 shadow-sm transition-all hover-lift text-center cursor-pointer"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
