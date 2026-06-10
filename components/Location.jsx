"use client";
import { siteData } from "@/data/siteData";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Location({ hideHeader = false }) {
  const { contact } = siteData;

  return (
    <section id="location" className="py-20 md:py-28 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {!hideHeader && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-2 block">
              Our Headquarters
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-6">
              Visit Our Office
            </h2>
            <p className="text-gray-600 text-lg">
              We are conveniently located in Zaamin City, Lahore. Drop by for a cup of tea and a discussion about your property goals.
            </p>
          </motion.div>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row gap-0 rounded-3xl overflow-hidden bg-white shadow-2xl border border-gray-100"
        >
          {/* Map/Contact Info Side */}
          <div className="lg:w-1/3 p-10 bg-navy text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-2xl font-bold font-serif mb-8 text-gold relative z-10">Al Madina Developers</h3>
            
            <div className="space-y-8 relative z-10">
              <a 
                href={contact.googleMapsSearch}
                target="_blank"
                rel="noreferrer"
                className="flex items-start group cursor-pointer"
              >
                <MapPinIcon className="w-6 h-6 text-gold group-hover:text-gold mr-4 flex-shrink-0 mt-1 transition-colors" />
                <div>
                  <h4 className="font-semibold text-white group-hover:text-gold transition-colors mb-1">Office Address</h4>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gold transition-colors text-sm">{contact.officeLocation}</p>
                </div>
              </a>
              
              <a 
                href={`tel:+92${contact.primaryNumber.replace(/\s+/g, "").replace(/^0/, "")}`}
                className="flex items-start group cursor-pointer"
              >
                <PhoneIcon className="w-6 h-6 text-gold group-hover:text-gold mr-4 flex-shrink-0 mt-1 transition-colors" />
                <div>
                  <h4 className="font-semibold text-white group-hover:text-gold transition-colors mb-1">Call & WhatsApp</h4>
                  <span className="text-gray-300 group-hover:text-gold transition-colors block text-sm">
                    {contact.primaryNumber}
                  </span>
                </div>
              </a>

              <a 
                href={`mailto:${contact.email}`} 
                className="flex items-start group cursor-pointer"
              >
                <EnvelopeIcon className="w-6 h-6 text-gold group-hover:text-gold mr-4 flex-shrink-0 mt-1 transition-colors" />
                <div>
                  <h4 className="font-semibold text-white group-hover:text-gold transition-colors mb-1">Email</h4>
                  <span className="text-gray-300 group-hover:text-gold transition-colors block break-all text-sm">
                    {contact.email}
                  </span>
                </div>
              </a>
              
              <a 
                href={contact.messengerLink} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-start group cursor-pointer"
              >
                <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-gold group-hover:text-gold mr-4 flex-shrink-0 mt-1 transition-colors" />
                <div>
                  <h4 className="font-semibold text-white group-hover:text-gold transition-colors mb-1">Messenger</h4>
                  <span className="text-gray-300 group-hover:text-gold transition-colors block text-sm">
                    {contact.messengerName}
                  </span>
                </div>
              </a>
            </div>

            <div className="mt-12 relative z-10">
              <a
                href={contact.googleMapsSearch}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full py-4 bg-gradient-gold text-white font-bold rounded-md shadow-lg shadow-gold/20 hover-lift transition-all uppercase tracking-wider text-xs cursor-pointer"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Interactive Map Side */}
          <div className="lg:w-2/3 relative min-h-[450px] bg-slate-100">
            <iframe
              title="Al Madina Developers Google Map Location"
              src="https://maps.google.com/maps?q=Office%20No.%2021,%20C%20Block,%20Main%20Boulevard,%20Zaamin%20City,%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              style={{ filter: "contrast(1.02) saturate(0.98)" }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
