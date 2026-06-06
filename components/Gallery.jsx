"use client";
import { useState } from "react";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, MagnifyingGlassPlusIcon } from "@heroicons/react/24/outline";
import { usePostHog } from 'posthog-js/react';

export default function Gallery() {
  const { galleryImages } = siteData;
  const [selectedImage, setSelectedImage] = useState(null);
  const posthog = usePostHog();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-navy text-white relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold rounded-full opacity-5 blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
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
            Take a look at our project site plans, luxury villas, commercial spaces, and available properties in our diverse portfolio.
          </p>
        </motion.div>

        {/* Premium Grid layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]"
        >
          {galleryImages.map((src, index) => {
            // Make some items span 2 rows or 2 cols to create a more dynamic gallery
            let spanClass = "";
            if (index === 0) spanClass = "md:col-span-2 md:row-span-2";
            else if (index === 3 || index === 7) spanClass = "md:row-span-2";
            else if (index === 6) spanClass = "md:col-span-2";

            return (
              <motion.div 
                variants={itemVariants}
                key={index} 
                onClick={() => {
                  setSelectedImage(src);
                  posthog?.capture('gallery_image_clicked', { image_url: src, brand_name: 'Al Madina Developers' });
                }}
                className={`relative rounded-xl overflow-hidden group cursor-pointer ${spanClass} bg-gray-800 shadow-lg hover:shadow-gold/20 hover:z-10`}
              >
                <div className="absolute inset-0 border border-white/10 rounded-xl z-20 pointer-events-none group-hover:border-gold/50 transition-colors duration-500"></div>
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 backdrop-blur-[2px]">
                  <div className="flex flex-col items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <MagnifyingGlassPlusIcon className="w-8 h-8 text-gold mb-2" />
                    <span className="text-white font-medium text-sm tracking-widest uppercase">
                      Expand
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
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
