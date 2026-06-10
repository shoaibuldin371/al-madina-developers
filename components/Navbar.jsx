"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteData } from "@/data/siteData";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { usePostHog } from 'posthog-js/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
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
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Installment Plans", href: "/installment-plans" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-navy ${
        isScrolled ? "shadow-lg py-3" : "py-4 md:py-5 border-b border-white/10"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
        {/* Logo and Brand */}
        <Link 
          href="/"
          className="flex items-center space-x-3 group cursor-pointer"
        >
          <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
            <Image
              src={company.logo}
              alt="Al Madinah Developers Logo"
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 48px, 56px"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-bold text-white leading-tight group-hover:text-gold transition-colors duration-300">
              Al Madina Developers
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 group ${
                  isActive ? "text-gold" : "text-white/90 hover:text-gold"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1.5 left-0 h-[2px] bg-gold transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden xl:flex items-center space-x-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/923001332279?text=Hello%20Al%20Madina%20Developers%2C%20I%20am%20interested%20in%20your%20property%20services.%20Please%20share%20more%20details."
            target="_blank"
            rel="noreferrer"
            onClick={() => posthog?.capture('whatsapp_clicked', { button_location: 'navbar_desktop', contact_number: '+923001332279', brand_name: 'Al Madina Developers' })}
            aria-label="Contact via WhatsApp"
            className="px-5 py-2.5 text-sm font-semibold text-white border-2 border-white/20 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 flex items-center hover-lift group cursor-pointer"
          >
            <svg className="w-4 h-4 mr-2 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
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
            className="flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-gold rounded-full shadow-lg shadow-gold/30 hover:shadow-gold/50 transition-all hover-lift cursor-pointer"
          >
            <PhoneIcon className="w-4 h-4 mr-2" />
            Call Now
          </motion.a>
        </div>

        {/* Mobile menu button and WhatsApp shortcut */}
        <div className="flex xl:hidden items-center space-x-2">
          <a
            href="https://wa.me/923001332279?text=Hello%20Al%20Madina%20Developers%2C%20I%20am%20interested%20in%20your%20property%20services.%20Please%20share%20more%20details."
            target="_blank"
            rel="noreferrer"
            aria-label="Contact via WhatsApp"
            className="p-2 bg-[#25D366] text-white rounded-full hover:scale-105 transition-transform flex items-center justify-center shadow-md cursor-pointer"
          >
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <button
            className="p-2 text-white hover:text-gold transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Toggle menu"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm xl:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-[#0A0F1D] border-l border-white/10 shadow-2xl p-6 flex flex-col z-[100] xl:hidden overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                <Link
                  href="/"
                  className="flex items-center space-x-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="relative w-10 h-10">
                    <Image
                      src={company.logo}
                      alt="Logo"
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                  <span className="font-serif text-lg font-bold text-white leading-tight">
                    Al Madina
                  </span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white hover:text-gold transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-4 mb-8">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-base font-semibold py-2 transition-colors border-b border-white/5 flex items-center ${
                        isActive ? "text-gold" : "text-white/80 hover:text-gold"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              {/* CTA Buttons in Drawer */}
              <div className="flex flex-col space-y-4 mt-auto pt-6 border-t border-white/10">
                <a
                  href="https://wa.me/923001332279?text=Hello%20Al%20Madina%20Developers%2C%20I%20am%20interested%20in%20your%20property%20services.%20Please%20share%20more%20details."
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => posthog?.capture('whatsapp_clicked', { button_location: 'navbar_mobile_drawer', contact_number: '+923001332279', brand_name: 'Al Madina Developers' })}
                  className="w-full flex justify-center items-center px-4 py-3 text-sm font-semibold text-white border border-white/20 rounded-md bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <svg className="w-5 h-5 mr-2 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Inquiry
                </a>
                <a
                  href="tel:+923001332279"
                  onClick={() => posthog?.capture('call_clicked', { button_location: 'navbar_mobile_drawer', contact_number: '+923001332279', brand_name: 'Al Madina Developers' })}
                  className="w-full flex justify-center items-center px-4 py-3 text-sm font-semibold text-white bg-gradient-gold rounded-md transition-colors cursor-pointer"
                >
                  <PhoneIcon className="w-5 h-5 mr-2 text-white" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
