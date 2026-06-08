"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, MagnifyingGlassPlusIcon } from "@heroicons/react/24/outline";
import { usePostHog } from 'posthog-js/react';

export default function Gallery({ limit, hideHeader = false }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const posthog = usePostHog();

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "projects", label: "Projects & Maps" },
    { id: "properties", label: "Property Views" },
    { id: "office", label: "Our Office" },
    { id: "updates", label: "Recent Updates" },
  ];

  // Flatten the categorized gallery images
  const allImages = Object.entries(siteData.galleryImages).flatMap(([cat, imgs]) =>
    imgs.map((img) => ({ ...img, category: cat }))
  );

  // Filter images based on active tab and limit
  const displayedImages = limit
    ? allImages.slice(0, limit)
    : activeCategory === "all"
    ? allImages
    : allImages.filter((img) => img.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-navy text-white relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold rounded-full opacity-5 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="w-12 h-[2px] bg-gold"></span>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                Visual Portfolio
              </span>
              <span className="w-12 h-[2px] bg-gold"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-white">
              Project Gallery
            </h2>
            <p className="text-gray-300 text-lg">
              Take a visual tour of our LDA-approved developments, on-ground sites, luxury ready houses, and team updates.
            </p>
          </motion.div>
        )}

        {/* Category Tabs (Only displayed on full Gallery Page - limit is null) */}
        {!limit && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-12 pb-6 border-b border-white/10"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  posthog?.capture('gallery_tab_changed', { category_id: cat.id, brand_name: 'Al Madina Developers' });
                }}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-gold text-white shadow-md shadow-gold/20"
                    : "bg-white/5 text-gray-300 border border-white/10 hover:border-gold hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        )}

        {/* Dynamic Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory} // Reset animation when tab changes
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]"
        >
          {displayedImages.map((img, index) => {
            // Make some items span 2 rows or 2 cols to create a dynamic masonry-style grid
            let spanClass = "";
            if (!limit) {
              if (index === 0 && displayedImages.length > 2) spanClass = "md:col-span-2 md:row-span-2";
              else if ((index === 3 || index === 7) && displayedImages.length > index) spanClass = "md:row-span-2";
              else if (index === 6 && displayedImages.length > index) spanClass = "md:col-span-2";
            } else {
              // Simpler spans for homepage preview
              if (index === 0) spanClass = "md:col-span-2 md:row-span-2";
            }

            return (
              <motion.div
                variants={itemVariants}
                key={img.src}
                onClick={() => {
                  setSelectedImage(img.src);
                  posthog?.capture('gallery_image_clicked', { image_url: img.src, brand_name: 'Al Madina Developers' });
                }}
                className={`relative rounded-xl overflow-hidden group cursor-pointer ${spanClass} bg-slate-900 shadow-lg hover:shadow-gold/20 hover:z-10`}
              >
                <div className="absolute inset-0 border border-white/10 rounded-xl z-20 pointer-events-none group-hover:border-gold/50 transition-colors duration-500"></div>
                <Image
                  src={img.src}
                  alt={img.alt || `Gallery Image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-0.5">{img.category || "Property"}</p>
                  <p className="text-sm text-white font-medium line-clamp-1">{img.alt}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10 backdrop-blur-[2px]">
                  <MagnifyingGlassPlusIcon className="w-8 h-8 text-gold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="text-white font-medium text-xs tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    Expand View
                  </span>
                  <p className="text-gray-300 text-[10px] text-center px-4 mt-2 max-w-[200px] line-clamp-2">{img.alt}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {limit && (
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-gold text-white font-semibold rounded-md shadow-lg shadow-gold/20 hover-lift hover:scale-105 transition-all text-center"
            >
              View Full Gallery
            </Link>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors z-[101] bg-black/50 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <XMarkIcon className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl h-[80vh] bg-transparent rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged gallery view"
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
