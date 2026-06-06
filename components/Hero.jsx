"use client";

import Image from "next/image";
import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { usePostHog } from 'posthog-js/react';

export default function Hero() {
  const { hero, contact } = siteData;
  const posthog = usePostHog();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-navy">
      {/* Premium CSS Gradient & Motion Blob Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-navy bg-gradient-to-br from-[#0F172A] via-[#0a0f1d] to-[#1E293B]">
        {/* Subtle decorative grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Light-weight CSS blobs */}
        <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-gold/10 rounded-full filter blur-[80px] animate-blob"></div>
        <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] bg-[#1E3A8A]/20 rounded-full filter blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[50%] right-[30%] w-[250px] h-[250px] bg-[#0284C7]/15 rounded-full filter blur-[60px] animate-blob" style={{ animationDelay: '4s' }}></div>
        
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent pointer-events-none"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <motion.div 
          className="max-w-2xl text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block py-1.5 px-4 rounded-full bg-gold/10 text-gold border border-gold/30 text-sm font-semibold tracking-wider mb-6 glass-dark"
          >
            <span className="text-gradient">PREMIUM PROPERTIES</span>
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 drop-shadow-md"
          >
            {hero.heading}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl font-light leading-relaxed"
          >
            {hero.subheading}
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://al-madina-developers.vercel.app/#properties"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                posthog?.capture('cta_clicked', { button_location: 'hero', brand_name: 'Al Madina Developers' });
              }}
              aria-label="Explore Properties"
              className="px-8 py-4 bg-gradient-gold text-white text-center font-semibold rounded-md shadow-lg shadow-gold/20 hover-lift"
            >
              Explore Properties
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/923001332279?text=Hello%20Al%20Madina%20Developers%2C%20I%20am%20interested%20in%20your%20property%20services.%20Please%20share%20more%20details."
              target="_blank"
              rel="noreferrer"
              onClick={() => posthog?.capture('whatsapp_clicked', { button_location: 'hero', contact_number: '+923001332279', brand_name: 'Al Madina Developers' })}
              aria-label="Contact via WhatsApp"
              className="px-8 py-4 bg-white/10 text-white text-center font-semibold rounded-md glass hover:bg-white/20 transition-all hover-lift"
            >
              WhatsApp Now
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+923001332279"
              onClick={() => posthog?.capture('call_clicked', { button_location: 'hero', contact_number: '+923001332279', brand_name: 'Al Madina Developers' })}
              aria-label="Call Consultant"
              className="px-8 py-4 bg-transparent text-white text-center font-semibold rounded-md border border-white/50 hover:bg-white hover:text-navy transition-all hover-lift"
            >
              Call Consultant
            </motion.a>
          </motion.div>

          <motion.div 
            motion-variants={itemVariants}
            className="pt-8 border-t border-white/20"
          >
            <p className="text-sm text-gray-300 mb-4 uppercase tracking-wider font-semibold">
              Specializing In
            </p>
            <div className="flex flex-wrap gap-3">
              {hero.trustBadges.map((badge, index) => (
                <motion.span
                  whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.15)", borderColor: "rgba(212,175,55,0.5)" }}
                  key={index}
                  className="px-4 py-1.5 bg-white/5 glass-dark border border-white/10 rounded-full text-xs text-gray-200 cursor-default transition-colors duration-300"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
