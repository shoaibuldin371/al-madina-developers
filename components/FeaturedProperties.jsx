"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import { PhoneIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { usePostHog } from 'posthog-js/react';

export default function FeaturedProperties({ limit, hideHeader = false }) {
  const [selectedCategory, setSelectedCategory] = useState("All Properties");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const { featuredProperties, contact } = siteData;
  const posthog = usePostHog();

  // Apply category filtering based on selected filter pill
  let baseProperties = featuredProperties;
  if (selectedCategory === "Plots") {
    baseProperties = featuredProperties.filter(
      p => p.title?.toLowerCase().includes("plot") || p.details?.toLowerCase().includes("plot")
    );
  } else if (selectedCategory === "Houses") {
    baseProperties = featuredProperties.filter(
      p => p.title?.toLowerCase().includes("house") || 
           p.title?.toLowerCase().includes("villa") || 
           p.title?.toLowerCase().includes("home") || 
           p.title?.toLowerCase().includes("portion") ||
           p.details?.toLowerCase().includes("house") || 
           p.details?.toLowerCase().includes("villa") || 
           p.details?.toLowerCase().includes("home") || 
           p.details?.toLowerCase().includes("portion")
    );
  } else if (selectedCategory === "Commercial") {
    baseProperties = featuredProperties.filter(
      p => p.category === "commercial" || p.title?.toLowerCase().includes("commercial") || p.details?.toLowerCase().includes("commercial")
    );
  } else if (selectedCategory === "Installment Plans") {
    baseProperties = featuredProperties.filter(
      p => p.badge?.toLowerCase().includes("installment") || 
           p.details?.toLowerCase().includes("installment") || 
           p.title?.toLowerCase().includes("installment") ||
           p.badge?.toLowerCase().includes("plan") || 
           p.details?.toLowerCase().includes("plan") || 
           p.title?.toLowerCase().includes("plan")
    );
  } else if (selectedCategory === "Zaamin City") {
    baseProperties = featuredProperties.filter(
      p => p.location?.toLowerCase().includes("zaamin") || 
           p.title?.toLowerCase().includes("zaamin") || 
           p.details?.toLowerCase().includes("zaamin") ||
           p.location?.toLowerCase().includes("lahore") || 
           p.title?.toLowerCase().includes("lahore") || 
           p.details?.toLowerCase().includes("lahore")
    );
  }

  const properties = limit ? baseProperties.slice(0, limit) : baseProperties;

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
    <section id="properties" className="py-20 md:py-28 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-7xl">
        {!hideHeader && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              className="px-6 py-3 bg-gradient-navy text-white font-medium rounded-md hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
            >
              Inquire on WhatsApp
            </motion.a>
          </motion.div>
        )}

        {/* UI Filter Pills */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-gray-200"
        >
          {['All Properties', 'Plots', 'Houses', 'Commercial', 'Installment Plans', 'Zaamin City'].map((pill) => (
            <button 
              key={pill} 
              onClick={() => {
                setSelectedCategory(pill);
                posthog?.capture('filter_pills_clicked', { filter_value: pill, brand_name: 'Al Madina Developers' });
              }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === pill 
                  ? 'bg-gold text-white shadow-md' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gold hover:text-navy'
              }`}
            >
              {pill}
            </button>
          ))}
        </motion.div>

        {/* Listings Grid */}
        <motion.div 
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {properties.map((property) => (
            <motion.div 
              variants={itemVariants}
              key={property.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full group hover-lift-lg hover:border-gold/30"
            >
              {/* Image Container with Badge */}
              <div className="relative h-64 w-full bg-slate-50 p-2 overflow-hidden border-b border-gray-100">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-contain group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-gradient-gold text-white text-xs font-bold uppercase tracking-wider rounded shadow-md border border-white/20">
                    {property.badge}
                  </span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-gold mb-1 block">
                  {property.category} Property
                </span>
                <h3 className="text-xl font-bold text-navy mb-2 line-clamp-2">
                  {property.title}
                </h3>
                <p className="text-xs text-gray-500 mb-4 flex items-center">
                  📍 {property.location}
                </p>
                <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-2">
                  {property.details}
                </p>
                
                {/* Price highlight box */}
                <div className="mb-6 py-2.5 px-4 bg-gray-50 rounded-lg border border-gray-100 flex justify-between items-center">
                  <span className="text-xs text-gray-500 font-semibold uppercase">Pricing</span>
                  <span className="font-bold text-navy text-sm">{property.price}</span>
                </div>

                {/* Zameen-style Actions Bar */}
                <div className="grid grid-cols-3 gap-2 mt-auto">
                  <button
                    onClick={() => {
                      setSelectedProperty(property);
                      posthog?.capture('property_card_details_clicked', { property_title: property.title, brand_name: 'Al Madina Developers' });
                    }}
                    className="py-2.5 bg-gray-100 text-navy font-semibold rounded text-xs hover:bg-navy hover:text-white transition-colors cursor-pointer text-center"
                  >
                    Details
                  </button>
                  <a
                    href={`tel:+92${contact.primaryNumber.replace(/\s+/g, "").replace(/^0/, "")}`}
                    onClick={() => posthog?.capture('call_clicked', { button_location: 'property_card_homepage', property_title: property.title, brand_name: 'Al Madina Developers' })}
                    className="py-2.5 bg-navy text-white font-semibold rounded text-xs hover:bg-gold transition-colors text-center flex items-center justify-center gap-1 cursor-pointer"
                  >
                    Call
                  </a>
                  <a
                    href={`https://wa.me/92${contact.primaryWhatsApp.replace(/\s+/g, "").replace(/^0/, "")}?text=Hello%20Al%20Madina%20Developers%2C%20I%20am%20interested%20in%20inquiring%20about%20details%20for%20${encodeURIComponent(property.title)}.`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => posthog?.capture('whatsapp_clicked', { button_location: 'property_card_homepage', property_title: property.title, brand_name: 'Al Madina Developers' })}
                    className="py-2.5 bg-[#25D366] text-white font-semibold rounded text-xs hover:bg-opacity-90 transition-all text-center flex items-center justify-center gap-1"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {limit && (
          <div className="text-center mt-12">
            <Link 
              href="/projects" 
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-navy text-white font-semibold rounded-md shadow-lg shadow-navy/20 hover-lift hover:scale-105 transition-all text-center cursor-pointer"
            >
              Explore All Properties
            </Link>
          </div>
        )}
      </div>

      {/* Details Modal Popup */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProperty(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-100 flex flex-col relative max-h-[90vh]"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 bg-navy/10 hover:bg-navy/20 text-navy p-2 rounded-full z-10 transition-colors cursor-pointer"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              
              {/* Modal Body */}
              <div className="overflow-y-auto">
                <div className="relative h-80 w-full bg-slate-100 p-2">
                  <Image
                    src={selectedProperty.image}
                    alt={selectedProperty.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 640px"
                  />
                </div>
                
                <div className="p-8">
                  <span className="px-3 py-1 bg-gold/15 text-gold text-xs font-bold uppercase tracking-wider rounded-md inline-block mb-3">
                    {selectedProperty.badge}
                  </span>
                  
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy mb-4">
                    {selectedProperty.title}
                  </h2>
                  
                  <div className="space-y-4 mb-8">
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {selectedProperty.details}
                    </p>
                    
                    <div className="border-t border-b border-gray-100 py-4 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-semibold">Location</p>
                        <p className="text-navy font-bold text-sm">{selectedProperty.location}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-semibold">Category</p>
                        <p className="text-navy font-bold text-sm capitalize">{selectedProperty.category}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-semibold">Price</p>
                        <p className="text-gold font-bold text-sm">{selectedProperty.price}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-semibold">Contact Agent</p>
                        <p className="text-navy font-bold text-sm">{contact.primaryNumber}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={`https://wa.me/923001332279?text=Hello%20Al%20Madina%20Developers%2C%20I%20am%20interested%20in%20inquiring%20about%20${encodeURIComponent(selectedProperty.title)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-3.5 bg-[#25D366] text-white text-center font-semibold rounded-md shadow-lg shadow-[#25D366]/20 hover-lift text-sm cursor-pointer"
                    >
                      Send Inquiry on WhatsApp
                    </a>
                    <a
                      href={`tel:+92${contact.primaryNumber.replace(/\s+/g, "").replace(/^0/, "")}`}
                      className="flex-grow py-3.5 bg-navy text-white text-center font-semibold rounded-md shadow-lg shadow-navy/20 hover-lift text-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <PhoneIcon className="w-4 h-4 text-gold" />
                      Call Direct Line
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
