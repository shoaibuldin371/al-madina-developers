import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { siteData } from "@/data/siteData";

export const metadata = {
  title: "About Al Madina Developers | Real Estate Developers in Lahore",
  description: "Learn about Al Madina Developers, your trusted real estate partner in Zaamin City Lahore. Read our company story, mission, vision, values, and meet our CEO.",
};

export default function AboutPage() {
  const { company, contact } = siteData;
  
  const values = [
    {
      title: "Our Mission",
      details: "To deliver top-tier real estate development and transparent property guidance, enabling families to own premium homes and secure high-appreciation land investments with confidence.",
      icon: "🎯",
    },
    {
      title: "Our Vision",
      details: "To become Lahore's most trusted real estate consultancy and housing development firm, renowned for integrity, premium quality living spaces, and customer happiness.",
      icon: "👁️‍🗨️",
    },
    {
      title: "Core Values",
      details: "Integrity, absolute transparency, clear legal documentation, and client-first support guide every property advice we provide and deal we conclude.",
      icon: "💎",
    },
  ];

  const trustPoints = [
    {
      title: "LDA Compliance Vetting",
      description: "We verify the regulatory status of all lands to ensure your investment is safe."
    },
    {
      title: "Zaamin City Local Experts",
      description: "As on-ground specialists, we have deep insights and first-access inventory."
    },
    {
      title: "No-Pressure Consultations",
      description: "We focus on understanding your budget and goals first before suggesting properties."
    },
    {
      title: "End-to-End Handholding",
      description: "From the initial site visit to legal registry and key transfer, we guide you at every step."
    }
  ];

  return (
    <>
      {/* Premium Hero Banner */}
      <section className="relative py-24 bg-navy text-white overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#0a0f1d] to-[#1E293B]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-gold/5 rounded-full filter blur-[80px]"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-gold/10 text-gold border border-gold/30 text-xs font-semibold tracking-wider mb-4">
            ESTABLISHED REAL ESTATE EXPERTS
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            About Al Madina Developers
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Your premier property partner in Zaamin City Lahore. Built on trust, documentation clarity, and premium lifestyle opportunities.
          </p>
        </div>
      </section>
      
      {/* Company Story & Overview */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-2 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6 leading-tight">
                Turning Property Dreams Into Physical Addresses
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  For over a decade, the founders of <strong>Al Madina Developers</strong> have been serving the property market in Lahore with dedication and transparency. Over this time, we have helped hundreds of families find plots, build custom homes, and invest in secure commercial properties.
                </p>
                <p>
                  We are based in <strong>Zaamin City Lahore</strong>, one of the city&apos;s finest and most rapidly growing gated communities. We maintain active inventory in residential plots (3.5, 5, 8, 10 Marla and 1 Kanal) and commercial spaces, along with the premier Al-Madinah Orchard by Zaamin City and Al-Madinah Gardens by Zaamin City projects, for which we are the official sales partner.
                </p>
                <p>
                  Unlike generic property portals, we provide direct on-ground consultations, guided layout tours, and direct contact with verified sellers to guarantee that every plot we list has zero dispute records.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100">
              <Image 
                src="/assets/al-madinah/Al-madinah.png"
                alt="Al Madina Developers Headquarters"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Values Grid */}
      <section className="py-20 bg-gray-50 relative overflow-hidden border-t border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover-lift text-center"
              >
                <div className="text-5xl mb-6">{val.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-navy mb-4">{val.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{val.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Why Customers Trust Us */}
      <section className="py-20 bg-gray-50 relative overflow-hidden border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-2 block">
              Professional Real Estate Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">
              Why Customers Trust Us
            </h2>
            <p className="text-gray-600 mt-4">
              Real estate transactions represent hard-earned savings. We manage every plot files and purchase with rigorous safety checks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trustPoints.map((point, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex items-start hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center font-bold text-lg mr-4 mt-0.5 flex-shrink-0">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">{point.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-white text-navy relative overflow-hidden border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-3 block">
            Ready to Begin?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-navy">
            Talk With Our Property Expert
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Whether you want to explore available plots in Zaamin City Lahore, understand file registry transfers, or book a guided visit, we are here for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-navy text-white font-semibold rounded-md shadow-lg shadow-navy/20 hover-lift text-center"
            >
              Contact Us Now
              <ArrowRightIcon className="w-4 h-4 ml-2 text-gold" />
            </Link>
            <a
              href={`https://wa.me/92${contact.primaryWhatsApp.replace(/\s+/g, "").replace(/^0/, "")}?text=Hello%20Al%20Madina%20Developers%2C%20I%20want%20to%20consult%20with%20a%20property%20expert.`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-navy border border-gray-200 font-semibold rounded-md hover:border-gold shadow-sm transition-all hover-lift text-center"
            >
              WhatsApp Property Expert
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
