"use client";
import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { PhoneIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { siteData } from "@/data/siteData";
import { motion, AnimatePresence } from "framer-motion";
import { usePostHog } from 'posthog-js/react';

function ProjectsPageContent() {
  const { featuredProperties, contact } = siteData;
  const searchParams = useSearchParams();
  const posthog = usePostHog();

  const [purpose, setPurpose] = useState("all"); // all, buy, rent
  const [location, setLocation] = useState("all"); // all, lahore, kasur
  const [propertyType, setPropertyType] = useState("all"); // all, plot, house, commercial
  const [priceRange, setPriceRange] = useState("all"); // all, under-10, 10-50, 50-100, 100-300, 300-plus
  const [selectedProperty, setSelectedProperty] = useState(null);

  // Initialize filters from search parameters on mount
  useEffect(() => {
    const pParam = searchParams.get("purpose");
    const lParam = searchParams.get("location");
    const tParam = searchParams.get("type");
    const prParam = searchParams.get("price");

    if (pParam) setPurpose(pParam);
    if (lParam) setLocation(lParam);
    if (tParam) setPropertyType(tParam);
    if (prParam) setPriceRange(prParam);
  }, [searchParams]);

  // Apply filters
  const filteredProperties = featuredProperties.filter((p) => {
    // 1. Purpose (Buy vs Rent)
    if (purpose === "buy") {
      // Everything except explicitly designated rentals
      const isRent = p.title?.toLowerCase().includes("rent") || p.details?.toLowerCase().includes("rent");
      if (isRent) return false;
    } else if (purpose === "rent") {
      const isRent = p.title?.toLowerCase().includes("rent") || p.details?.toLowerCase().includes("rent");
      if (!isRent) return false;
    }

    // 2. Location (Lahore vs Kasur)
    if (location === "lahore") {
      const isLahore = p.location?.toLowerCase().includes("lahore") || p.location?.toLowerCase().includes("zaamin");
      if (!isLahore) return false;
    } else if (location === "kasur") {
      const isKasur = p.location?.toLowerCase().includes("kasur") || p.location?.toLowerCase().includes("orchard") || p.location?.toLowerCase().includes("garden");
      if (!isKasur) return false;
    }

    // 3. Property Type (Plot, House, Commercial)
    if (propertyType === "plot") {
      const isPlot = p.title?.toLowerCase().includes("plot") || p.details?.toLowerCase().includes("plot");
      if (!isPlot) return false;
    } else if (propertyType === "house") {
      const isHouse = p.title?.toLowerCase().includes("house") || p.title?.toLowerCase().includes("villa") || p.title?.toLowerCase().includes("home") || p.details?.toLowerCase().includes("house") || p.details?.toLowerCase().includes("villa") || p.details?.toLowerCase().includes("home");
      if (!isHouse) return false;
    } else if (propertyType === "commercial") {
      const isComm = p.category === "commercial" || p.title?.toLowerCase().includes("commercial") || p.title?.toLowerCase().includes("shop") || p.details?.toLowerCase().includes("commercial") || p.details?.toLowerCase().includes("shop");
      if (!isComm) return false;
    }

    // 4. Price range text matcher
    if (priceRange === "under-10") {
      const isLow = p.price?.toLowerCase().includes("25%") || p.price?.toLowerCase().includes("booking");
      if (!isLow) return false;
    } else if (priceRange === "10-50") {
      const isMed = p.price?.toLowerCase().includes("pricing") || p.price?.toLowerCase().includes("details");
      if (!isMed) return false;
    }

    return true;
  });

  const highlights = [
    {
      title: "LDA Approved Housing",
      description: "All project offerings are legally verified, protecting your capital.",
      badge: "Legal",
    },
    {
      title: "Prime Location Blocks",
      description: "Properties situated near Main Boulevard, Zaamin City Lahore.",
      badge: "Premium",
    },
    {
      title: "Possession & Development",
      description: "Immediate possession available on selected plots and blocks.",
      badge: "On-Ground",
    },
    {
      title: "Modern Amenities",
      description: "Gated security, parks, schools, hospital, and mosques.",
      badge: "Modern",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="relative py-20 bg-navy text-white overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#0a0f1d] to-[#1E293B]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <span className="inline-block py-1 px-3 bg-gold/10 text-gold border border-gold/30 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Exclusive Listings
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Property Projects & Listings
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">
            Browse premium residential plots, commercial spaces, ready houses, and investment opportunities in Zaamin City Lahore.
          </p>
        </div>
      </section>

      {/* Horizontal Zameen-style Search / Filter Bar */}
      <section className="bg-white border-b border-gray-100 py-6 sticky top-[72px] md:top-[80px] z-30 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 items-end">
            {/* Purpose Select */}
            <div>
              <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1.5 tracking-wider">Purpose</label>
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-navy font-semibold outline-none focus:border-gold text-xs cursor-pointer appearance-none"
                style={{ backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath stroke='%230F172A' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E\")", backgroundPosition: "right 0.75rem center", backgroundSize: "1em", backgroundRepeat: "no-repeat" }}
              >
                <option value="all">All Purpose</option>
                <option value="buy">Buy / Installments</option>
                <option value="rent">Rent</option>
              </select>
            </div>

            {/* Location Select */}
            <div>
              <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1.5 tracking-wider">Location</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-navy font-semibold outline-none focus:border-gold text-xs cursor-pointer appearance-none"
                style={{ backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath stroke='%230F172A' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E\")", backgroundPosition: "right 0.75rem center", backgroundSize: "1em", backgroundRepeat: "no-repeat" }}
              >
                <option value="all">All Locations</option>
                <option value="lahore">Zaamin City, Lahore</option>
                <option value="kasur">Al-Madinah Orchard & Garden (Kasur)</option>
              </select>
            </div>

            {/* Property Type Select */}
            <div>
              <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1.5 tracking-wider">Property Type</label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-navy font-semibold outline-none focus:border-gold text-xs cursor-pointer appearance-none"
                style={{ backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath stroke='%230F172A' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E\")", backgroundPosition: "right 0.75rem center", backgroundSize: "1em", backgroundRepeat: "no-repeat" }}
              >
                <option value="all">All Types</option>
                <option value="plot">Plots</option>
                <option value="house">Houses</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>

            {/* Price Select */}
            <div>
              <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1.5 tracking-wider">Price Range</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-navy font-semibold outline-none focus:border-gold text-xs cursor-pointer appearance-none"
                style={{ backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath stroke='%230F172A' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E\")", backgroundPosition: "right 0.75rem center", backgroundSize: "1em", backgroundRepeat: "no-repeat" }}
              >
                <option value="all">All Prices</option>
                <option value="under-10">Under 10 Lac</option>
                <option value="10-50">10 Lac to 50 Lac</option>
                <option value="50-100">50 Lac to 1 Crore</option>
                <option value="100-300">1 Crore to 3 Crore</option>
                <option value="300-plus">3 Crore Plus</option>
              </select>
            </div>

            {/* Clear Filters Button */}
            <div className="col-span-2 md:col-span-1">
              <button
                onClick={() => {
                  setPurpose("all");
                  setLocation("all");
                  setPropertyType("all");
                  setPriceRange("all");
                }}
                className="w-full py-2.5 bg-gray-100 text-navy font-bold rounded-lg text-xs hover:bg-gold hover:text-white transition-colors cursor-pointer text-center"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-16 bg-gray-50 min-h-[50vh]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-xs text-gray-500 font-bold mb-6 uppercase tracking-wider">
            Showing {filteredProperties.length} active listings matching criteria
          </div>

          {filteredProperties.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-md mx-auto">
              <p className="text-gray-500 text-lg font-medium">No properties found matching current criteria.</p>
              <button 
                onClick={() => {
                  setPurpose("all");
                  setLocation("all");
                  setPropertyType("all");
                  setPriceRange("all");
                }}
                className="mt-4 px-6 py-2.5 bg-navy text-white rounded font-bold text-xs hover:bg-gold transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <div 
                  key={property.id} 
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full group hover-lift hover:border-gold/20"
                >
                  {/* Property Image */}
                  <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden border-b border-gray-100">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1.5 bg-gradient-gold text-white text-[10px] font-bold uppercase tracking-wider rounded shadow-md border border-white/20">
                        {property.badge}
                      </span>
                    </div>
                  </div>

                  {/* Property Info */}
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
                    
                    {/* Price Range */}
                    <div className="mb-6 py-2.5 px-4 bg-gray-50 rounded-lg border border-gray-100 flex justify-between items-center">
                      <span className="text-xs text-gray-500 font-semibold uppercase">Pricing</span>
                      <span className="font-bold text-navy text-sm">{property.price}</span>
                    </div>

                    {/* Zameen-style Actions Bar - responsive layout to prevent mobile text overlap */}
                    <div className="flex flex-col sm:grid sm:grid-cols-3 gap-2 mt-auto">
                      <button
                        onClick={() => {
                          setSelectedProperty(property);
                          posthog?.capture('property_card_details_clicked', { property_title: property.title, brand_name: 'Al Madina Developers' });
                        }}
                        className="w-full py-2.5 bg-gray-100 text-navy font-bold rounded text-xs hover:bg-navy hover:text-white transition-colors cursor-pointer text-center"
                      >
                        View Details
                      </button>
                      <div className="grid grid-cols-2 gap-2 sm:contents">
                        <a
                          href={`tel:+92${contact.primaryNumber.replace(/\s+/g, "").replace(/^0/, "")}`}
                          onClick={() => posthog?.capture('call_clicked', { button_location: 'property_card_projects_page', property_title: property.title, brand_name: 'Al Madina Developers' })}
                          className="py-2.5 bg-navy text-white font-bold rounded text-xs hover:bg-gold transition-colors text-center flex items-center justify-center gap-1 cursor-pointer"
                        >
                          Call
                        </a>
                        <a
                          href={`https://wa.me/92${contact.primaryWhatsApp.replace(/\s+/g, "").replace(/^0/, "")}?text=Hello%20Al%20Madinah%20Developers%2C%20I%20am%20interested%20in%20inquiring%20about%20details%20for%20${encodeURIComponent(property.title)}.`}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => posthog?.capture('whatsapp_clicked', { button_location: 'property_card_projects_page', property_title: property.title, brand_name: 'Al Madina Developers' })}
                          className="py-2.5 bg-[#25D366] text-white font-bold rounded text-xs hover:bg-[#20ba5a] transition-all text-center flex items-center justify-center gap-1"
                        >
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-20 bg-white relative overflow-hidden border-t border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-2 block">
              Project Highlights
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
              Why Invest in Our Listings?
            </h2>
            <p className="text-gray-600 text-lg">
              Al Madinah Developers focuses on premium plots offering high ROI, secure titles, and superior local development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, idx) => (
              <div 
                key={idx} 
                className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group hover-lift"
              >
                <div>
                  <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full mb-4">
                    {highlight.badge}
                  </span>
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
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
                <div className="relative aspect-[16/10] w-full bg-slate-900">
                  <Image
                    src={selectedProperty.image}
                    alt={selectedProperty.title}
                    fill
                    className="object-cover"
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
                      href={`https://wa.me/923001332279?text=Hello%20Al%20Madinah%20Developers%2C%20I%20am%20interested%20in%20inquiring%20about%20${encodeURIComponent(selectedProperty.title)}.`}
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
    </>
  );
}

export default function Projects() {
  return (
    <Suspense fallback={<div className="text-center py-20 font-medium text-navy">Loading Properties...</div>}>
      <ProjectsPageContent />
    </Suspense>
  );
}
