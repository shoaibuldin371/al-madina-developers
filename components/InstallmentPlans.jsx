"use client";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { usePostHog } from 'posthog-js/react';

export default function InstallmentPlans() {
  const { installmentPlans, contact } = siteData;
  const posthog = usePostHog();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="plans" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-gold/10 border-t border-gray-100 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="w-12 h-[2px] bg-gold"></span>
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              Investment
            </span>
            <span className="w-12 h-[2px] bg-gold"></span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-6">
            Easy Booking & Installment Plans
          </h2>
          <p className="text-gray-600 text-lg">
            Invest in your future with our flexible payment plans. We offer easy monthly installments for prime residential and commercial plots.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {installmentPlans.map((plan) => (
            <motion.div 
              variants={itemVariants}
              key={plan.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gold/20 flex flex-col group hover-lift-lg"
            >
              {/* Flyer Container */}
              <div className="relative h-[500px] sm:h-[600px] w-full bg-white p-4">
                <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/0 transition-colors z-10 pointer-events-none"></div>
                <Image
                  src={plan.image}
                  alt={plan.title}
                  fill
                  className="object-contain drop-shadow-md group-hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-8 bg-gradient-navy text-white text-center border-t-4 border-gold">
                <h3 className="text-2xl font-bold mb-3 text-gold">
                  {plan.title}
                </h3>
                <p className="text-gray-300 mb-6 max-w-md mx-auto">
                  {plan.details}
                </p>
                <a
                  href="https://wa.me/923001332279?text=Hello%20Al%20Madina%20Developers%2C%20I%20am%20interested%20in%20your%20property%20services.%20Please%20share%20more%20details."
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => posthog?.capture('whatsapp_clicked', { button_location: 'installment_plans', plan_title: plan.title, brand_name: 'Al Madina Developers' })}
                  aria-label={`Get Booking Details for ${plan.title}`}
                  className="inline-block px-8 py-3 bg-gradient-gold text-white font-semibold rounded shadow-lg shadow-gold/20 hover-lift transition-all"
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
