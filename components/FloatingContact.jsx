"use client";
import { useState, useEffect } from "react";
import { siteData } from "@/data/siteData";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { usePostHog } from 'posthog-js/react';

export default function FloatingContact() {
  const { contact } = siteData;
  const posthog = usePostHog();
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      // Trigger when we are within 250px of the bottom of the page
      setIsNearBottom(docHeight - (scrollTop + windowHeight) < 250);
    };

    window.addEventListener("scroll", handleScroll);
    // Call once initially to set correct state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3 pointer-events-none">
      {/* Call Button */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="pointer-events-auto"
      >
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200, damping: 10 }}
          href="tel:+923001332279"
          onClick={() => posthog?.capture('call_clicked', { button_location: 'floating_contact', contact_number: '+923001332279', brand_name: 'Al Madina Developers' })}
          className={`w-12 h-12 md:w-14 md:h-14 bg-navy text-white rounded-full flex items-center justify-center shadow-lg group border border-white/20 relative transition-all duration-300 ${
            isNearBottom ? 'opacity-40 hover:opacity-100 scale-90 hover:scale-100' : 'opacity-100 hover:scale-105'
          }`}
          aria-label="Call Now"
        >
          <PhoneIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
          <span className="absolute right-full mr-3 bg-navy text-white text-xs font-semibold px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block glass-dark shadow-xl">
            Call Us
          </span>
        </motion.a>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
        className="pointer-events-auto"
      >
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 10 }}
          href="https://wa.me/923001332279?text=Hello%20Al%20Madina%20Developers%2C%20I%20am%20interested%20in%20your%20property%20services.%20Please%20share%20more%20details."
          target="_blank"
          rel="noreferrer"
          onClick={() => posthog?.capture('whatsapp_clicked', { button_location: 'floating_contact', contact_number: '+923001332279', brand_name: 'Al Madina Developers' })}
          className={`w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg group border border-white/20 relative transition-all duration-300 ${
            isNearBottom ? 'opacity-40 hover:opacity-100 scale-90 hover:scale-100' : 'opacity-100 hover:scale-105'
          }`}
          aria-label="WhatsApp"
        >
          {/* Subtle pulse effect */}
          {!isNearBottom && (
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#25D366] rounded-full z-0"
            ></motion.div>
          )}
          <svg className="w-6 h-6 md:w-7 md:h-7 relative z-10 drop-shadow-md text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="absolute right-full mr-3 bg-[#25D366] text-white text-xs font-semibold px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block shadow-xl">
            WhatsApp Us
          </span>
        </motion.a>
      </motion.div>
    </div>
  );
}
