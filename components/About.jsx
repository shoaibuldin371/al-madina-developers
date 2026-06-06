"use client";
import { siteData } from "@/data/siteData";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function About() {
  const { company, contact } = siteData;

  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full opacity-5 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy rounded-full opacity-5 blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative glass p-10 md:p-14 rounded-3xl shadow-xl border border-gray-100 hover-lift text-center"
        >
          {/* Gold Accent Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gold rounded-b-full"></div>

          <div className="flex flex-col items-center mb-6">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-3">
              About The Company
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy leading-tight">
              About <span className="text-gradient">Al Madina Developers</span>
            </h2>
          </div>

          <div className="prose prose-lg text-gray-600 mb-10 mx-auto">
            <p className="mb-4">
              Welcome to <strong>Al Madina Developers</strong>, your go-to
              destination for dream homes and expert property guidance. We help clients
              explore residential plots, houses, rental properties, commercial
              opportunities, and investment options with confidence.
            </p>
            <p>
              Our focus is to provide clear communication, trusted property guidance, and
              professional support from inquiry to decision. Whether you are looking to
              buy, sell, rent, or invest, our team is here to help you turn your dream
              into an address.
            </p>
          </div>

          {/* Feature Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-left">
            {['Trusted Guidance', 'Zaamin City Focus', 'Investment Support', 'Client First Approach'].map((feature, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                key={idx} 
                className="flex items-center justify-center space-x-2 bg-gray-50/50 px-3 py-3 rounded-lg border border-gray-100 shadow-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                <span className="text-sm font-medium text-navy text-center">{feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/923001332279?text=Hello%20Al%20Madina%20Developers%2C%20I%20am%20interested%20in%20your%20property%20services.%20Please%20share%20more%20details."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-navy text-white font-medium rounded-md shadow-lg shadow-navy/20 group hover-lift"
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
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-navy border border-gray-200 font-medium rounded-md hover:border-gold shadow-sm transition-colors group"
            >
              Visit Office
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
