"use client";
import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { 
  HomeModernIcon, 
  BuildingOfficeIcon, 
  MapIcon, 
  KeyIcon, 
  ChartBarIcon, 
  UserGroupIcon, 
  WrenchScrewdriverIcon, 
  StarIcon 
} from "@heroicons/react/24/outline";

export default function Services() {
  const { services } = siteData;

  // Map icons to service IDs (fallback to StarIcon if not found)
  const getIcon = (id) => {
    switch (id) {
      case "residential-plots": return <MapIcon className="w-8 h-8" />;
      case "houses-for-sale": return <HomeModernIcon className="w-8 h-8" />;
      case "houses-for-rent": return <KeyIcon className="w-8 h-8" />;
      case "commercial-properties": return <BuildingOfficeIcon className="w-8 h-8" />;
      case "investment-opportunities": return <ChartBarIcon className="w-8 h-8" />;
      case "property-consultation": return <UserGroupIcon className="w-8 h-8" />;
      case "construction-builders": return <WrenchScrewdriverIcon className="w-8 h-8" />;
      case "zaamin-city-projects": return <StarIcon className="w-8 h-8" />;
      default: return <StarIcon className="w-8 h-8" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-20 md:py-28 bg-gray-50 overflow-hidden relative">
      {/* Decorative Orbs */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-gold rounded-full opacity-5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-navy rounded-full opacity-5 blur-3xl pointer-events-none"></div>
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="w-8 h-[2px] bg-gold"></span>
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              What We Do
            </span>
            <span className="w-8 h-[2px] bg-gold"></span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-6">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive real estate solutions designed to help you find, invest, and manage properties with ease and confidence.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              variants={itemVariants}
              key={service.id} 
              className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:border-gold/50 transition-all duration-500 relative overflow-hidden hover-lift"
            >
              {/* Decorative background element on hover */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gold/10 rounded-full blur-xl group-hover:bg-gold/20 transition-all duration-500 transform group-hover:scale-150"></div>
              
              <div className="w-16 h-16 rounded-xl bg-gray-50 shadow-sm flex items-center justify-center text-navy mb-6 group-hover:bg-gradient-gold group-hover:text-white transition-all duration-500 transform group-hover:rotate-3 group-hover:scale-110 relative z-10">
                {getIcon(service.id)}
              </div>
              
              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300 relative z-10">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed transition-colors duration-300 relative z-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
