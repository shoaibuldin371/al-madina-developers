"use client";
import { siteData } from "@/data/siteData";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function About() {
  const { company, contact } = siteData;

  const features = [
    {
      title: "Trusted Guidance",
      desc: "Expert property consultation and complete legal registry verification for safe investments.",
      icon: "🛡️"
    },
    {
      title: "Zaamin City Focus",
      desc: "Official Sales Partner with deep insights and direct access to premier site inventory.",
      icon: "🏢"
    },
    {
      title: "Investment Support",
      desc: "Capital appreciation analysis, early bookings, and high-yield resale guidance.",
      icon: "📈"
    },
    {
      title: "Client First Approach",
      desc: "Guided site visits, document vetting, and zero-pressure consulting support.",
      icon: "🤝"
    },
    {
      title: "Visit Office",
      desc: "Office No. 21, C Block, Main Boulevard, Zaamin City. Get directions to visit us.",
      icon: "📍",
      isLink: true,
      href: contact.googleMapsSearch
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full opacity-5 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy rounded-full opacity-5 blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative glass p-10 md:p-14 rounded-3xl shadow-xl border border-gray-100 text-center"
        >
          {/* Gold Accent Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gold rounded-b-full"></div>

          <div className="flex flex-col items-center mb-10">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-3">
              About The Company
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy leading-tight">
              About <span className="text-gradient">Al Madinah Developers</span>
            </h2>
          </div>

          <div className="prose prose-lg text-gray-600 mb-12 mx-auto max-w-4xl text-center font-light leading-relaxed">
            <p className="mb-6">
              Welcome to <strong>Al Madinah Developers</strong>, your premier sales partner and expert property guidance consultant. We specialize in residential plots, built-to-order houses, rental villas, commercial properties, and high-appreciation investment options in Kasur and Lahore.
            </p>
            <p>
              Our core focus is delivering legally verified property registry files, customized installment terms, and daily site visits. We deal extensively in gated communities developed by Zaamin City, helping families turn their dream house locations into physical addresses with absolute trust.
            </p>
          </div>

          {/* Premium Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-left">
            {features.map((feature, idx) => {
              const CardContent = (
                <div className="h-full flex flex-col justify-between p-6 bg-gray-50/50 hover:bg-white rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all duration-300 relative group cursor-pointer">
                  <div>
                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed font-light">
                      {feature.desc}
                    </p>
                  </div>
                  {feature.isLink && (
                    <div className="mt-4 text-[10px] font-bold text-gold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Map &rarr;
                    </div>
                  )}
                </div>
              );

              return feature.isLink ? (
                <motion.a
                  key={idx}
                  href={feature.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="block col-span-1 sm:col-span-2 lg:col-span-1"
                >
                  {CardContent}
                </motion.a>
              ) : (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                >
                  {CardContent}
                </motion.div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/923001332279?text=Hello%20Al%20Madinah%20Developers%2C%20I%20am%20interested%20in%20your%20property%20services.%20Please%20share%20more%20details."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-navy text-white font-semibold rounded-md shadow-lg shadow-navy/20 group hover-lift text-sm cursor-pointer"
            >
              Contact Us
              <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-gold" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={contact.googleMapsSearch}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-navy border border-gray-200 font-semibold rounded-md hover:border-gold shadow-sm transition-colors group text-sm cursor-pointer"
            >
              Visit Office
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
