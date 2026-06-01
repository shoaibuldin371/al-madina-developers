"use client";
import { motion } from "framer-motion";

export default function PageHeader({ title, subtitle }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-navy overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full opacity-10 blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-gold mx-auto mt-8 rounded-full"
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
