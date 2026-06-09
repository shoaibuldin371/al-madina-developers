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
          <div className="lg:w-1/3 p-10 bg-gradient-navy text-white flex flex-col justify-center relative overflow-hidden">
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
                  <p className="text-gray-300 leading-relaxed group-hover:text-gold transition-colors">{contact.officeLocation}</p>
                </div>
              </a>
              
              <a 
                href={`tel:+92${contact.primaryNumber.replace(/\s+/g, "").replace(/^0/, "")}`}
                className="flex items-start group cursor-pointer"
              >
                <PhoneIcon className="w-6 h-6 text-gold group-hover:text-gold mr-4 flex-shrink-0 mt-1 transition-colors" />
                <div>
                  <h4 className="font-semibold text-white group-hover:text-gold transition-colors mb-1">Call & WhatsApp</h4>
                  <span className="text-gray-300 group-hover:text-gold transition-colors block">
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
                  <span className="text-gray-300 group-hover:text-gold transition-colors block break-all">
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
                  <span className="text-gray-300 group-hover:text-gold transition-colors block">
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
                className="inline-flex items-center justify-center w-full py-4 bg-gradient-gold text-white font-bold rounded-md shadow-lg shadow-gold/20 hover-lift transition-all uppercase tracking-wider text-sm"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Map Image Placeholder Side */}
          <div className="lg:w-2/3 relative min-h-[400px]">
            <iframe
              title="Google Maps Location"
              src={`https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent("Zaamin City Lahore")}&key=YOUR_API_KEY_HERE`} // Note: A real API key would be needed here for production, but using an iframe or map image is fine. Using an iframe with generic Zaamin city view or static map placeholder.
              className="absolute inset-0 w-full h-full object-cover"
              style={{ border: 0, filter: "grayscale(20%)" }}
              loading="lazy"
              allowFullScreen
            ></iframe>
            {/* Fallback to cover the map with a nice placeholder if API fails or for generic display */}
            <div className="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center text-gray-500 z-10" style={{ backgroundImage: "url('/assets/al-madinah/site-map.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
               <div className="absolute inset-0 bg-navy/70 backdrop-blur-[4px]"></div>
               <motion.div 
                 whileHover={{ scale: 1.05 }}
                 className="relative z-20 text-center p-10 glass-dark rounded-2xl max-w-sm border border-gold/20 shadow-2xl"
               >
                 <MapPinIcon className="w-16 h-16 text-gold mx-auto mb-4" />
                 <h3 className="text-white text-2xl font-bold mb-2 font-serif">Zaamin City, Lahore</h3>
                 <p className="text-gray-300 mb-8">Main Boulevard, C Block, Office No. 21</p>
                 <a 
                   href={contact.googleMapsSearch}
                   target="_blank"
                   rel="noreferrer"
                   className="inline-block px-8 py-3 bg-gradient-gold text-white rounded font-medium shadow-lg shadow-gold/20 hover-lift transition-all"
                 >
                   Get Directions
                 </a>
               </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
