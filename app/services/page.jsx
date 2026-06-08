import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import Link from "next/link";
import { ArrowRightIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { siteData } from "@/data/siteData";

export const metadata = {
  title: "Our Services | Al Madina Developers",
  description: "Explore our real estate services in Zaamin City Lahore, including residential plots, houses for sale/rent, commercial property investment, and expert property consultation.",
};

export default function ServicesPage() {
  const { services, contact } = siteData;

  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive property solutions customized to your residential, commercial, and investment needs in Lahore."
      />
      
      {/* 1. Services Grid Section (Clickable cards scroll down) */}
      <div className="bg-white py-10">
        <div className="container mx-auto px-4 max-w-7xl text-center mb-8">
          <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider">
            Click on any service card below to view its benefits and pricing details
          </p>
        </div>
        <Services hideHeader={true} />
      </div>

      {/* 2. Detailed Service Information Sections */}
      <div className="border-t border-gray-100">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section 
              id={service.id} 
              key={service.id}
              className={`py-20 md:py-28 scroll-mt-24 ${isEven ? 'bg-gray-50' : 'bg-white'}`}
            >
              <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                  
                  {/* Text Column */}
                  <div className="lg:w-1/2">
                    <span className="text-gold font-semibold uppercase tracking-wider text-xs mb-3 block">
                      Service Details
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={`https://wa.me/923001332279?text=Hello%20Al%20Madina%20Developers%2C%20I%20am%20inquiring%20about%20details%20for%20${encodeURIComponent(service.title)}.`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-gold text-white font-semibold rounded-md shadow-lg shadow-gold/20 hover-lift text-center text-sm"
                      >
                        Contact for Details
                      </a>
                      <a
                        href={`tel:+92${contact.primaryNumber.replace(/\s+/g, "").replace(/^0/, "")}`}
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy border border-gray-200 font-semibold rounded-md hover:border-gold shadow-sm transition-all hover-lift text-center text-sm"
                      >
                        <PhoneIcon className="w-4 h-4 mr-2 text-gold" />
                        Call Consultant
                      </a>
                    </div>
                  </div>

                  {/* Benefits checklist Card Column */}
                  <div className="lg:w-1/2 w-full">
                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-[100px] pointer-events-none group-hover:scale-110 transition-transform"></div>
                      
                      <h3 className="text-xl font-bold text-navy mb-6 flex items-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-gold mr-3"></span>
                        Key Features & Benefits
                      </h3>
                      
                      <ul className="space-y-4">
                        {service.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start">
                            <span className="w-6 h-6 rounded-full bg-gold/10 text-gold flex items-center justify-center font-bold text-xs mr-3 mt-1 flex-shrink-0">✓</span>
                            <span className="text-gray-700 text-sm md:text-base leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 3. Premium Footer CTA Section */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full opacity-5 blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-3 block">
            Expert Guidance
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Looking for Custom Property Guidance?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Our professional consultants are here. Whether you are searching for plots, ready houses, commercial plazas, or customized installment terms in Zaamin City Lahore, we have you covered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-gold text-white font-semibold rounded-md shadow-lg shadow-gold/20 hover-lift text-center"
            >
              Get in Touch
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
            <a
              href={`tel:+92${contact.primaryNumber.replace(/\s+/g, "").replace(/^0/, "")}`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white border border-white/20 font-semibold rounded-md hover:bg-white/20 shadow-sm transition-all hover-lift text-center"
            >
              <PhoneIcon className="w-4 h-4 mr-2 text-gold" />
              Call {contact.primaryNumber}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
