"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/siteData";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { usePostHog } from 'posthog-js/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { company, contact } = siteData;
  const posthog = usePostHog();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "glass shadow-lg py-3" : "bg-white/95 backdrop-blur-sm py-4 md:py-5 border-b border-gray-100/50"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-full border-2 border-gold flex-shrink-0 shadow-sm">
            <Image
              src={company.logo}
              alt={company.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 48px, 56px"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-bold text-navy leading-tight">
              Al Madina Developers
            </span>
            
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-navy hover:text-gold transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/923001332279?text=Hello%20Al%20Madina%20Developers%2C%20I%20am%20interested%20in%20your%20property%20services.%20Please%20share%20more%20details."
            target="_blank"
            rel="noreferrer"
            onClick={() => posthog?.capture('whatsapp_clicked', { button_location: 'navbar_desktop', contact_number: '+923001332279', brand_name: 'Al Madina Developers' })}
            aria-label="Contact via WhatsApp"
            className="px-5 py-2.5 text-sm font-semibold text-navy border-2 border-navy rounded-full hover:bg-navy hover:text-white transition-all duration-300 flex items-center hover-lift group"
          >
            <svg className="w-4 h-4 mr-2 text-[#25D366] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Contact Us
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+923001332279"
            onClick={() => posthog?.capture('call_clicked', { button_location: 'navbar_desktop', contact_number: '+923001332279', brand_name: 'Al Madina Developers' })}
            aria-label="Call Now"
            className="flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-gold rounded-full shadow-lg shadow-gold/30 hover:shadow-gold/50 transition-all hover-lift"
          >
            <PhoneIcon className="w-4 h-4 mr-2" />
            Call Now
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-navy hover:text-gold transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full glass shadow-xl border-t border-gray-100 overflow-hidden"
          >
            <div className="py-4 px-4 flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-base font-medium text-navy hover:text-gold block py-2 border-b border-gray-200/50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col space-y-3 pt-2"
              >
                <a
                  href="https://wa.me/923001332279?text=Hello%20Al%20Madina%20Developers%2C%20I%20am%20interested%20in%20your%20property%20services.%20Please%20share%20more%20details."
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => posthog?.capture('whatsapp_clicked', { button_location: 'navbar_mobile', contact_number: '+923001332279', brand_name: 'Al Madina Developers' })}
                  aria-label="Contact via WhatsApp"
                  className="w-full flex justify-center items-center px-4 py-3 text-sm font-medium text-navy border border-navy rounded-md"
                >
                  <svg className="w-5 h-5 mr-2 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Contact Us
                </a>
                <a
                  href="tel:+923001332279"
                  onClick={() => posthog?.capture('call_clicked', { button_location: 'navbar_mobile', contact_number: '+923001332279', brand_name: 'Al Madina Developers' })}
                  aria-label="Call Now"
                  className="w-full flex justify-center items-center px-4 py-3 text-sm font-medium text-white bg-gradient-gold rounded-md"
                >
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
