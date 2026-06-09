"use client";
import { useState } from "react";
import { siteData } from "@/data/siteData";
import { PhoneIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { usePostHog } from 'posthog-js/react';

export default function Contact({ hideHeader = false }) {
  const { contact } = siteData;
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success
  const posthog = usePostHog();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    posthog?.capture('contact_form_submitted', {
      property_interest: document.getElementById('interest').value,
      budget_range: document.getElementById('budget').value,
      brand_name: 'Al Madina Developers'
    });

    // Simulate frontend form submission
    setTimeout(() => {
      setFormStatus("success");
      e.target.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-1/3 w-64 h-64 bg-gold rounded-full opacity-5 blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {!hideHeader && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-2 block">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-6">
              Contact Al Madina Developers
            </h2>
            <p className="text-gray-600 text-lg">
              Ready to explore your next property opportunity? Contact our team today for personalized assistance.
            </p>
          </motion.div>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
        >
          
          {/* Form Side */}
          <div className="lg:w-3/5 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h3>
            
            {formStatus === "success" ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 text-center h-[400px] flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-500">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Thank you!</h4>
                <p>Your message has been received. Our team will contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input type="text" id="name" required className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-gray-50 focus:bg-white" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" id="phone" required className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-gray-50 focus:bg-white" placeholder="+92 300 0000000" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address (Optional)</label>
                    <input type="email" id="email" className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-gray-50 focus:bg-white" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">Property Interest</label>
                    <select id="interest" required className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-gray-50 focus:bg-white text-gray-700">
                      <option value="">Select Interest...</option>
                      <option value="Residential Plot">Residential Plot</option>
                      <option value="House for Sale">House for Sale</option>
                      <option value="House for Rent">House for Rent</option>
                      <option value="Commercial Property">Commercial Property</option>
                      <option value="Investment Opportunity">Investment Opportunity</option>
                      <option value="Zaamin City Project">Zaamin City Project</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <select id="budget" required className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-gray-50 focus:bg-white text-gray-700">
                    <option value="">Select Budget Range...</option>
                    <option value="Under 10 Lac">Under 10 Lac</option>
                    <option value="10 Lac to 50 Lac">10 Lac to 50 Lac</option>
                    <option value="50 Lac to 1 Crore">50 Lac to 1 Crore</option>
                    <option value="1 Crore to 3 Crore">1 Crore to 3 Crore</option>
                    <option value="3 Crore Plus">3 Crore Plus</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea id="message" rows="4" required className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-gray-50 focus:bg-white resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === "submitting"}
                  className="w-full py-4 bg-gradient-navy text-white font-bold rounded-md shadow-lg hover-lift transition-all focus:ring-4 focus:ring-navy/20 disabled:bg-navy/70 text-lg"
                >
                  {formStatus === "submitting" ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>

          {/* Quick Connect Side */}
          <div className="lg:w-2/5 bg-navy p-8 md:p-12 text-white relative overflow-hidden flex flex-col">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold rounded-full opacity-10 blur-3xl translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold font-serif mb-2 text-gold">Quick Connect</h3>
            <p className="text-gray-300 mb-8 text-sm">Need immediate assistance? Choose your preferred method to contact us right away.</p>

            <div className="space-y-4 flex-grow relative z-10">
              <a
                href="tel:+923001332279"
                onClick={() => posthog?.capture('call_clicked', { button_location: 'contact_section', contact_number: '+923001332279', brand_name: 'Al Madina Developers' })}
                aria-label="Call Now"
                className="flex items-center w-full p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-gold transition-colors">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Call Now</p>
                  <p className="font-bold text-lg">{contact.primaryNumber}</p>
                </div>
              </a>

              <a
                href="https://wa.me/923001332279?text=Hello%20Al%20Madina%20Developers%2C%20I%20am%20interested%20in%20your%20property%20services.%20Please%20share%20more%20details."
                target="_blank"
                rel="noreferrer"
                onClick={() => posthog?.capture('whatsapp_clicked', { button_location: 'contact_section_main', contact_number: '+923001332279', brand_name: 'Al Madina Developers' })}
                aria-label="Contact via WhatsApp"
                className="flex items-center w-full p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-[#25D366]/20 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#25D366] transition-colors">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Main WhatsApp</p>
                  <p className="font-bold text-lg">{contact.primaryWhatsApp}</p>
                </div>
              </a>
              
              <a
                href={contact.messengerLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => posthog?.capture('messenger_clicked', { button_location: 'contact_section', brand_name: 'Al Madina Developers' })}
                aria-label="Contact via Messenger"
                className="flex items-center w-full p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-[#0084FF]/20 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#0084FF]/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#0084FF] transition-colors">
                  <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Messenger</p>
                  <p className="font-bold text-lg">Al Madina Developers</p>
                </div>
              </a>

              <a
                href={`mailto:${contact.email}`}
                onClick={() => posthog?.capture('email_clicked', { button_location: 'contact_section', brand_name: 'Al Madina Developers' })}
                aria-label="Email Us"
                className="flex items-center w-full p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-[#D4AF37]/20 transition-colors group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-gold transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Email Address</p>
                  <p className="font-bold text-base break-all">{contact.email}</p>
                </div>
              </a>

              <a
                href={contact.facebookLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => posthog?.capture('facebook_clicked', { button_location: 'contact_section', page: 'estate_builders', brand_name: 'Al Madina Developers' })}
                aria-label="Visit Al Madina Estate Facebook Page"
                className="flex items-center w-full p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-[#1877F2]/20 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#1877F2]/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#1877F2] transition-colors">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Facebook Page (Main)</p>
                  <p className="font-bold text-base md:text-lg">Al Madina Estate</p>
                </div>
              </a>

              <a
                href={contact.facebookLink2}
                target="_blank"
                rel="noreferrer"
                onClick={() => posthog?.capture('facebook_clicked', { button_location: 'contact_section', page: 'orchard_kasur', brand_name: 'Al Madina Developers' })}
                aria-label="Visit Al-Madinah Orchard Facebook Page"
                className="flex items-center w-full p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-[#1877F2]/20 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#1877F2]/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#1877F2] transition-colors">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Facebook Page (Kasur)</p>
                  <p className="font-bold text-base md:text-lg">Al-Madinah Orchard</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
