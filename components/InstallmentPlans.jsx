"use client";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { usePostHog } from 'posthog-js/react';

export default function InstallmentPlans({ hideHeader = false }) {
  const { installmentPlans } = siteData;
  const posthog = usePostHog();

  const bookingSteps = [
    {
      step: "01",
      title: "Choose Property",
      desc: "Select your preferred plot size (3.5, 5, 8, or 10 Marla) in our premium gated societies.",
      icon: "🔍"
    },
    {
      step: "02",
      title: "Schedule Visit",
      desc: "Coordinate a free, daily guided tour of Kasur and Lahore project sites with our consultants.",
      icon: "📅"
    },
    {
      step: "03",
      title: "Select Installment Plan",
      desc: "Choose an easy payment plan starting from 25% down payment and up to 5-year easy schedules.",
      icon: "💳"
    },
    {
      step: "04",
      title: "Secure Booking",
      desc: "Submit legal documents, finalize deeds, and secure direct ownership files transparently.",
      icon: "🔑"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="plans" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-gold/10 border-t border-gray-100 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {!hideHeader && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="w-12 h-[2px] bg-gold"></span>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                Investment Plans
              </span>
              <span className="w-12 h-[2px] bg-gold"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-6">
              Easy Booking & Installment Plans
            </h2>
            <p className="text-gray-600 text-lg">
              Invest in your future with our flexible payment structures. We offer easy monthly installments for prime residential and commercial plots.
            </p>
          </motion.div>
        )}

        {/* Timeline booking process - Zameen inspired */}
        <div className="mb-24 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-gold uppercase tracking-wider bg-gold/10 px-3 py-1.5 rounded-full border border-gold/20">
              Simple 4-Step Booking Process
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop timeline */}
            <div className="hidden md:block absolute top-12 left-1/8 right-1/8 h-[2px] bg-gold/25 z-0"></div>
            {/* Connecting line for mobile timeline */}
            <div className="block md:hidden absolute left-1/2 top-10 bottom-24 w-[2px] bg-gold/25 z-0 -translate-x-1/2"></div>
            
            {bookingSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center relative z-10 group"
              >
                {/* Step Circle */}
                <div className="w-20 h-20 rounded-2xl bg-white border border-gray-150 shadow-md group-hover:border-gold group-hover:shadow-gold/20 transition-all duration-300 flex items-center justify-center text-3xl mb-6 relative">
                  {step.icon}
                  <span className="absolute -top-2 -right-2 bg-navy text-gold text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border border-gold/30">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-[220px] font-light">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Installment Flyers Grid */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-gold uppercase tracking-wider bg-gold/10 px-3 py-1.5 rounded-full border border-gold/20">
            Payment Plan Flyer Downloads
          </span>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {installmentPlans.map((plan) => (
            <motion.div 
              variants={itemVariants}
              key={plan.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col group hover-lift-lg h-full"
            >
              {/* Flyer Container */}
              <div className="relative aspect-[3/4] w-full bg-slate-50 p-4 border-b border-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/0 transition-colors z-10 pointer-events-none"></div>
                <Image
                  src={plan.image}
                  alt={plan.title}
                  fill
                  className="object-contain drop-shadow-md group-hover:scale-[1.02] transition-transform duration-75"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Text content details - readable on all devices */}
              <div className="p-8 bg-gradient-navy text-white text-center border-t-4 border-gold flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gold">
                    {plan.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-xs leading-relaxed max-w-md mx-auto font-light">
                    {plan.details}
                  </p>
                </div>
                <a
                  href={`https://wa.me/923001332279?text=Hello%20Al%20Madinah%20Developers%2C%20I%20am%20interested%20in%20obtaining%20booking%20details%20for%20the%20${encodeURIComponent(plan.title)}.`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => posthog?.capture('whatsapp_clicked', { button_location: 'installment_plans', plan_title: plan.title, brand_name: 'Al Madina Developers' })}
                  aria-label={`Get Booking Details for ${plan.title}`}
                  className="inline-block w-full py-3 bg-gradient-gold text-white font-bold rounded shadow-lg shadow-gold/20 hover-lift transition-all text-xs uppercase tracking-wider cursor-pointer"
                >
                  Get Booking Details
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
