"use client";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { usePostHog } from 'posthog-js/react';

export default function FeaturedProperties({ limit }) {
  const properties = limit ? siteData.featuredProperties.slice(0, limit) : siteData.featuredProperties;
  const { featuredProperties, contact } = siteData;
  const posthog = usePostHog();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-20 md:py-28 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12"
        >
          <div className="max-w-2xl mb-6 md:mb-0">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-2 block">
              Exclusive Listings
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-4">
              Featured Property Opportunities
            </h2>
            <p className="text-gray-600 text-lg">
              Explore selected property options, investment plans, and project updates from Al Madina Developers.
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/923001332279?text=Hello%20Al%20Madina%20Developers%2C%20I%20am%20interested%20in%20your%20property%20services.%20Please%20share%20more%20details."
            target="_blank"
            rel="noreferrer"
            onClick={() => posthog?.capture('cta_clicked', { button_location: 'featured_properties', brand_name: 'Al Madina Developers' })}
            aria-label="Inquire on WhatsApp"
            className="px-6 py-3 bg-gradient-navy text-white font-medium rounded-md hover:shadow-lg transition-all whitespace-nowrap"
          >
            Inquire on WhatsApp
          </motion.a>
        </motion.div>



        {/* UI Filter Pills (Design Element) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-gray-200"
        >
          {['All Properties', 'Plots', 'Houses', 'Commercial', 'Installment Plans', 'Zaamin City'].map((pill, idx) => (
            <button key={idx} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${idx === 0 ? 'bg-navy text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-gold hover:text-navy'}`}>
              {pill}
            </button>
          ))}
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {properties.map((property) => (
            <motion.div 
              variants={itemVariants}
              key={property.id} 
              onClick={() => posthog?.capture('property_card_clicked', { property_title: property.title, brand_name: 'Al Madina Developers' })}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full group hover-lift-lg hover:border-gold/30 cursor-pointer"
            >
              {/* Image Container with object-contain to preserve flyer text */}
              <div className="relative h-72 w-full bg-gray-50 p-2 overflow-hidden border-b border-gray-100">
                <div className="absolute inset-0 bg-navy/5 group-hover:bg-navy/20 transition-colors z-10 pointer-events-none duration-500"></div>
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-contain group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1.5 bg-gradient-gold text-white text-xs font-bold uppercase tracking-wider rounded shadow-md backdrop-blur-sm border border-white/20">
                    {property.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow relative">
                <h3 className="text-xl font-bold text-navy mb-3 line-clamp-2">
                  {property.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {property.details}
                </p>
                
                <div className="pt-4 border-t border-gray-100 mt-auto flex justify-between items-center">
                  <span className="text-sm font-semibold text-navy">
                    {contact.primaryNumber}
                  </span>
                  <div className="flex space-x-2">
                    <motion.a
                      whileHover={{ scale: 1.1, backgroundColor: "#D4AF37", color: "white" }}
                      href="tel:+923001332279"
                      onClick={(e) => {
                        e.stopPropagation();
                        posthog?.capture('call_clicked', { button_location: 'property_card', property_title: property.title, brand_name: 'Al Madina Developers' });
                      }}
                      className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-navy transition-colors"
                      title="Call Now"
                      aria-label="Call Now"
                    >
                      <PhoneIcon className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1, backgroundColor: "#25D366", color: "white" }}
                      href="https://wa.me/923001332279?text=Hello%20Al%20Madina%20Developers%2C%20I%20am%20interested%20in%20your%20property%20services.%20Please%20share%20more%20details."
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        posthog?.capture('whatsapp_clicked', { button_location: 'property_card', property_title: property.title, brand_name: 'Al Madina Developers' });
                      }}
                      className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#25D366] transition-colors"
                      title="WhatsApp"
                      aria-label="Contact via WhatsApp"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
