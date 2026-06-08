import PageHeader from "@/components/PageHeader";
import InstallmentPlans from "@/components/InstallmentPlans";
import Link from "next/link";
import { CheckCircleIcon, ArrowRightIcon, PhoneIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Easy Installment Plans | Al Madina Developers",
  description: "Learn about our flexible property installment plans in Zaamin City Lahore. Discover the benefits of buying residential and commercial plots on installments.",
};

export default function InstallmentPlansPage() {
  const benefits = [
    {
      title: "Low Down Payments",
      description: "Book your dream plot with a low initial booking payment (from 25%) and start your journey towards ownership immediately.",
    },
    {
      title: "Flexible 5-Year Tenure",
      description: "Spread your remaining balance over easy monthly or quarterly installment schedules extending up to 5 years.",
    },
    {
      title: "Guaranteed Land Security",
      description: "All installment properties are located in gated, LDA-approved communities like Zaamin City, offering secure titles and rapid development.",
    },
    {
      title: "High Investment Returns",
      description: "Buying plots on installments allows you to lock in today's property prices while enjoying high capital appreciation as development proceeds.",
    },
  ];

  return (
    <>
      <PageHeader 
        title="Easy Installment Plans" 
        subtitle="Secure your family's future with our flexible, interest-free property payment structures."
      />

      {/* Benefits Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-2 block">
              Why Choose Installments?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-6">
              Benefits of Our Installment Plans
            </h2>
            <p className="text-gray-600 text-lg">
              We make real estate investment accessible and stress-free by offering payment structures that adapt to your financial capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-gold/30 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex-shrink-0 mr-5">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-gold group-hover:bg-gradient-gold group-hover:text-white transition-colors duration-300">
                    <CheckCircleIcon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Payment Schedules Section */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-2 block">
              Flexible Booking Schedules
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">
              Standard Plot Payment Schedules
            </h2>
            <p className="text-gray-600 text-lg">
              Explore typical 5-year installment breakdown guides for residential and commercial plots in Al-Madina Orchard Kasur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                size: "3.5 Marla Residential",
                type: "Residential Plot",
                location: "Al-Madina Orchard, Kasur",
                downPayment: "25% Down Payment",
                installments: "60 Monthly Iqsaat",
                period: "5 Years Period",
                tag: "Most Affordable",
                features: ["LDA approved society", "Near Central Park", "Boundary wall security"],
              },
              {
                size: "5 Marla Residential",
                type: "Residential Plot",
                location: "Al-Madina Orchard, Kasur",
                downPayment: "25% Down Payment",
                installments: "60 Monthly Iqsaat",
                period: "5 Years Period",
                tag: "Popular Pick",
                features: ["Prime location blocks", "Sewerage system ready", "Mosque & school access"],
              },
              {
                size: "10 Marla Residential",
                type: "Residential Plot",
                location: "Al-Madina Orchard, Kasur",
                downPayment: "25% Down Payment",
                installments: "60 Monthly Iqsaat",
                period: "5 Years Period",
                tag: "Premium Size",
                features: ["On-ground possession", "Wide boulevard access", "Modern parks view"],
              },
              {
                size: "3 Marla Commercial",
                type: "Commercial Plot",
                location: "Al-Madina Orchard, Kasur",
                downPayment: "25% Down Payment",
                installments: "60 Monthly Iqsaat",
                period: "5 Years Period",
                tag: "High Yield",
                features: ["Main bypass road bypass", "High footfall sector", "Ideal for shops & retail"],
              },
            ].map((plan, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl shadow-md border-t-4 border-gold border-x border-b border-gray-100 p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover-lift relative"
              >
                {plan.tag && (
                  <span className="absolute -top-3.5 right-4 bg-navy text-gold text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-gold/30 shadow-sm">
                    {plan.tag}
                  </span>
                )}
                <div>
                  <span className="text-xs text-gray-500 uppercase font-medium">{plan.type}</span>
                  <h3 className="text-xl font-bold text-navy mt-1 mb-2">{plan.size}</h3>
                  <p className="text-xs text-gold font-semibold mb-4 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {plan.location}
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-xl space-y-2.5 mb-6 text-sm">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-500 text-xs">Booking Advance</span>
                      <span className="font-bold text-navy text-xs">{plan.downPayment}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-500 text-xs">Installment Plan</span>
                      <span className="font-bold text-navy text-xs">{plan.installments}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-xs">Tenure Duration</span>
                      <span className="font-bold text-navy text-xs">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-8">
                    {plan.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-center text-xs text-gray-600 gap-2">
                        <span className="w-4 h-4 rounded-full bg-gold/10 text-gold flex items-center justify-center font-bold text-[9px] flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <a
                    href={`https://wa.me/923001332279?text=Hello%20Al%20Madina%20Developers%2C%20I%20am%20interested%20in%20details%20for%20the%20${encodeURIComponent(plan.size)}%20installment%20plan.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold rounded-md transition-colors gap-1.5 shadow-sm shadow-[#25D366]/20"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Booking
                  </a>
                  <a
                    href="tel:+923001332279"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-white text-navy border border-gray-200 hover:border-gold text-xs font-bold rounded-md transition-colors gap-1.5"
                  >
                    Call Consultant
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installment Plans Cards Section */}
      <InstallmentPlans hideHeader={true} />

      {/* Consultation CTA Section */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full opacity-5 blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-3 block">
            Custom Payments
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Looking for a Customized Payment Plan?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            We understand every investor&apos;s budget is unique. Contact our team to design a customized down payment and installment schedule tailored specifically to your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-gold text-white font-semibold rounded-md shadow-lg shadow-gold/20 hover-lift text-center"
            >
              Request Consultation
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
            <a
              href="https://wa.me/923001332279?text=Hello%20Al%20Madina%20Developers%2C%20I%20am%20interested%20in%20a%20customized%20installment%20plan.%20Please%20guide%20me."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white border border-white/20 font-semibold rounded-md hover:bg-white/20 shadow-sm transition-all hover-lift text-center"
            >
              WhatsApp Details
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
