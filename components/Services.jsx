"use client";
import Link from "next/link";
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

export default function Services({ hideHeader = false }) {
  const { services } = siteData;

  // Map icons to service IDs (fallback to StarIcon if not found)
  const getIcon = (id) => {
    switch (id) {
      case "residential-plots": return <MapIcon className="w-8 h-8" />;
      case "houses-sale": return <HomeModernIcon className="w-8 h-8" />;
      case "houses-rent": return <KeyIcon className="w-8 h-8" />;
      case "commercial-properties": return <BuildingOfficeIcon className="w-8 h-8" />;
      case "investment": return <ChartBarIcon className="w-8 h-8" />;
      case "consultation": return <UserGroupIcon className="w-8 h-8" />;
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
    <section id="services" className="py-20 md:py-28 bg-gray-50 overflow-hidden relative">
      {/* Decorative Orbs */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-gold rounded-full opacity-5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-navy rounded-full opacity-5 blur-3xl pointer-events-none"></div>
      <div className="container mx-auto px-4 max-w-7xl">
        {!hideHeader && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
        )}

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              variants={itemVariants}
              key={service.id}
              className="group p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:border-gold/50 transition-all duration-500 relative overflow-hidden hover-lift h-full flex flex-col justify-between"
            >
              <div>
                {/* Decorative background element on hover */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gold/10 rounded-full blur-xl group-hover:bg-gold/20 transition-all duration-500 transform group-hover:scale-150"></div>
                
                <div className="w-16 h-16 rounded-xl bg-gray-50 shadow-sm flex items-center justify-center text-navy mb-6 group-hover:bg-gradient-gold group-hover:text-white transition-all duration-500 transform group-hover:rotate-3 group-hover:scale-110 relative z-10">
                  {getIcon(service.id)}
                </div>
                
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300 relative z-10">
                  {service.title
                }</h3>
                
                <p className="text-gray-600 leading-relaxed transition-colors duration-300 relative z-10 text-sm">
                  {service.description}
                </p>
              </div>
              
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-gray-100 pt-5 relative z-10">
                <Link
                  href={`/services#${service.id}`}
                  className="text-xs text-navy font-bold hover:text-gold uppercase tracking-wider transition-colors flex items-center gap-1"
                >
                  View Details <span>&rarr;</span>
                </Link>
                <a
                  href={`https://wa.me/923001332279?text=Hello%20Al%20Madina%20Developers%2C%20I%20am%20inquiring%20about%20details%20for%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold rounded-full transition-colors flex items-center gap-1.5 shadow-sm shadow-[#25D366]/20"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
