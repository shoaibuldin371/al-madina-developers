"use client";
import { motion } from "framer-motion";

export default function PromoVideo() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-12 h-[2px] bg-gold"></span>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                Special Project
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-6 leading-tight">
              ✨ AL-MADINA ORCHARD ✨
            </h2>
            
            <div className="space-y-4 mb-8 text-gray-700 text-lg">
              <p className="font-medium text-xl text-navy">🏡 Premium Living in Kasur</p>
              
              <ul className="space-y-3 mt-6">
                <li className="flex items-center gap-3">
                  <span className="text-xl">📍</span>
                  <span>3.5 | 5 | 8 | 10 Marla Plots</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-xl">💰</span>
                  <span>Booking From 25%</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-xl">📅</span>
                  <span>Easy 5-Year Installments</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-xl">🌳</span>
                  <span>Grand Central Park</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-xl">🛡️</span>
                  <span>Gated Community & 24/7 Security</span>
                </li>
              </ul>
              
              <div className="pt-6 mt-8 border-t border-gray-200">
                <p className="font-serif italic text-xl text-navy mb-6">&ldquo;Your Home. Your Future. Our Promise.&rdquo;</p>
                <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 inline-block transform hover:-translate-y-1 transition-transform">
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1 font-semibold">📞 Book Now!</p>
                  <a href="https://wa.me/923001332279" target="_blank" rel="noreferrer" className="text-3xl font-bold text-gold hover:text-navy transition-colors flex items-center gap-2">
                    0300-1332279
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Video Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 w-full flex justify-center relative z-10"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <video 
                className="w-full max-h-[80vh] object-cover rounded-xl"
                controls
                autoPlay
                muted
                loop
                playsInline
                poster="/assets/al-madinah/al-madinah-logo-dark.png"
              >
                <source src="/assets/al-madinah/Al-Madina.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-gold rounded-full opacity-10 blur-3xl -z-10 translate-x-1/4"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-navy rounded-full opacity-10 blur-3xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
