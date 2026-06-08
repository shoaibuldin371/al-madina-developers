"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { usePostHog } from 'posthog-js/react';

export default function Hero() {
  const { hero } = siteData;
  const router = useRouter();
  const posthog = usePostHog();

  const [activeTab, setActiveTab] = useState("buy"); // buy, rent
  const [location, setLocation] = useState("all"); // all, lahore, kasur
  const [propertyType, setPropertyType] = useState("all"); // all, plot, house, commercial
  const [priceRange, setPriceRange] = useState("all"); // all, under-10, 10-50, 50-100, 100-300, 300-plus

  const handleSearch = () => {
    // Track click event in PostHog
    posthog?.capture('hero_search_submitted', {
      purpose: activeTab,
      location,
      property_type: propertyType,
      price_range: priceRange,
      brand_name: 'Al Madina Developers'
    });

    // Build query parameters
    const params = new URLSearchParams();
    params.set("purpose", activeTab);
    if (location !== "all") params.set("location", location);
    if (propertyType !== "all") params.set("type", propertyType);
    if (priceRange !== "all") params.set("price", priceRange);

    // Redirect to projects page with filters
    router.push(`/projects?${params.toString()}`);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section 
      id="home" 
      className="relative w-full min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden py-16 md:py-24 lg:py-28 bg-navy text-white animate-fade-in"
    >
      {/* Background image & overlay constraints */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* On mobile: background is the hero image. On desktop: background is solid navy and the image is on the right side */}
        <div className="absolute inset-0 w-full h-full transform scale-105 opacity-30 lg:opacity-0 transition-opacity duration-500">
          <Image 
            src={hero.image}
            alt="Al Madinah Developers background banner"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-navy/90 backdrop-blur-[1px] lg:hidden"></div>
        
        {/* Decorative subtle orbs in background */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full opacity-5 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl pointer-events-none translate-y-1/2"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Search Widget */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-7/12 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Tagline */}
            <motion.span 
              variants={itemVariants}
              className="inline-block py-1.5 px-4 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-semibold tracking-widest uppercase mb-4"
            >
              Real Estate Development & Consultation
            </motion.span>
            
            {/* Main Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4 max-w-2xl"
            >
              {hero.heading}
            </motion.h1>
            
            {/* Subheading */}
            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 max-w-xl font-light leading-relaxed"
            >
              {hero.subheading}
            </motion.p>

            {/* CTA Buttons Row */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10 w-full"
            >
              <Link 
                href="/projects"
                className="px-6 py-3 bg-gradient-gold text-white font-bold rounded-lg shadow-lg shadow-gold/20 hover:shadow-gold/40 hover-lift text-center text-sm uppercase tracking-wider min-w-[170px]"
              >
                Explore Properties
              </Link>
              <Link 
                href="/contact"
                className="px-6 py-3 bg-transparent text-white border-2 border-white/20 hover:border-gold hover:text-gold rounded-lg hover-lift text-center text-sm font-semibold uppercase tracking-wider min-w-[170px]"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Zameen-style Search Widget */}
            <motion.div 
              variants={itemVariants}
              className="w-full text-left"
            >
              {/* Tabs */}
              <div className="flex space-x-1 mb-0.5 max-w-xs bg-navy/60 backdrop-blur-md rounded-t-xl p-1.5 border border-white/10 border-b-0">
                <button
                  onClick={() => setActiveTab("buy")}
                  className={`flex-1 py-2 px-4 rounded-lg text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all cursor-pointer ${
                    activeTab === "buy"
                      ? "bg-gradient-gold text-white shadow-lg shadow-gold/20"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Buy
                </button>
                <button
                  onClick={() => setActiveTab("rent")}
                  className={`flex-1 py-2 px-4 rounded-lg text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all cursor-pointer ${
                    activeTab === "rent"
                      ? "bg-gradient-gold text-white shadow-lg shadow-gold/20"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Rent
                </button>
              </div>

              {/* Form Container */}
              <div className="bg-white rounded-b-2xl rounded-tr-2xl p-6 shadow-2xl border border-gray-100 flex flex-col md:flex-row gap-4 items-end">
                {/* Location Select */}
                <div className="flex-1 w-full">
                  <label className="block text-[10px] font-bold uppercase text-navy/70 mb-1.5 tracking-wider">Location</label>
                  <select 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-navy font-semibold outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all text-xs appearance-none cursor-pointer"
                    style={{ backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath stroke='%230F172A' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E\")", backgroundPosition: "right 0.75rem center", backgroundSize: "1.25em", backgroundRepeat: "no-repeat" }}
                  >
                    <option value="all">All Locations</option>
                    <option value="lahore">Zaamin City, Lahore</option>
                    <option value="kasur">Al-Madina Orchard, Kasur</option>
                  </select>
                </div>

                {/* Property Type Select */}
                <div className="flex-1 w-full">
                  <label className="block text-[10px] font-bold uppercase text-navy/70 mb-1.5 tracking-wider">Property Type</label>
                  <select 
                    value={propertyType} 
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-navy font-semibold outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all text-xs appearance-none cursor-pointer"
                    style={{ backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath stroke='%230F172A' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E\")", backgroundPosition: "right 0.75rem center", backgroundSize: "1.25em", backgroundRepeat: "no-repeat" }}
                  >
                    <option value="all">All Types</option>
                    <option value="plot">Plots</option>
                    <option value="house">Houses</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>

                {/* Price Range Select */}
                <div className="flex-1 w-full">
                  <label className="block text-[10px] font-bold uppercase text-navy/70 mb-1.5 tracking-wider">Price Range</label>
                  <select 
                    value={priceRange} 
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-navy font-semibold outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all text-xs appearance-none cursor-pointer"
                    style={{ backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath stroke='%230F172A' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E\")", backgroundPosition: "right 0.75rem center", backgroundSize: "1.25em", backgroundRepeat: "no-repeat" }}
                  >
                    <option value="all">All Prices</option>
                    <option value="under-10">Under 10 Lac</option>
                    <option value="10-50">10 Lac to 50 Lac</option>
                    <option value="50-100">50 Lac to 1 Crore</option>
                    <option value="100-300">1 Crore to 3 Crore</option>
                    <option value="300-plus">3 Crore Plus</option>
                  </select>
                </div>

                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  className="w-full md:w-auto px-6 py-3 bg-gradient-navy hover:bg-gold text-white font-bold rounded-lg shadow-lg hover-lift flex items-center justify-center gap-1.5 cursor-pointer transition-all text-xs uppercase tracking-wider"
                >
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Find Properties
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Clean Premium Hero Image Visuals (hidden on mobile, split on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:block lg:w-5/12 w-full animate-float"
          >
            <div className="relative w-full h-[520px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group bg-navy">
              {/* Subtle hover zoom */}
              <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/0 transition-all duration-500 z-10 pointer-events-none"></div>
              <Image 
                src={hero.image}
                alt="Al Madinah Developers Premium Real Estate"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              {/* Subtle overlay accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/35 to-transparent pointer-events-none z-10"></div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Section Divider Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>
    </section>
  );
}
