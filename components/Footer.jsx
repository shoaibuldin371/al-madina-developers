import Image from "next/image";
import { siteData } from "@/data/siteData";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const { company, contact, services } = siteData;
  const displayYear = "2026";

  return (
    <footer className="bg-navy text-gray-300 pt-20 border-t-[6px] border-gold relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
          {/* Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-14 h-14 bg-white rounded-full overflow-hidden border-2 border-gold flex-shrink-0">
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-white leading-tight tracking-wide">
                  Al Madina
                </span>
                <span className="text-xs text-gold font-medium uppercase tracking-[0.2em]">
                  Developers
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              {company.aboutShort}
            </p>
            <div className="pt-4">
              <a
                href={contact.facebookLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-gold text-white transition-all duration-300 shadow-sm hover:shadow-gold/30 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://al-madina-developers.vercel.app/#home" target="_blank" rel="noopener noreferrer" className="hover:text-gold hover:translate-x-1 transition-all duration-300 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2 group-hover:bg-gold transition-colors"></span> Home
                </a>
              </li>
              <li>
                <a href="https://al-madina-developers.vercel.app/#about" target="_blank" rel="noopener noreferrer" className="hover:text-gold hover:translate-x-1 transition-all duration-300 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2 group-hover:bg-gold transition-colors"></span> About Us
                </a>
              </li>
              <li>
                <a href="https://al-madina-developers.vercel.app/#services" target="_blank" rel="noopener noreferrer" className="hover:text-gold hover:translate-x-1 transition-all duration-300 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2 group-hover:bg-gold transition-colors"></span> Services
                </a>
              </li>
              <li>
                <a href="https://al-madina-developers.vercel.app/#properties" target="_blank" rel="noopener noreferrer" className="hover:text-gold hover:translate-x-1 transition-all duration-300 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2 group-hover:bg-gold transition-colors"></span> Featured Properties
                </a>
              </li>
              <li>
                <a href="https://al-madina-developers.vercel.app/#plans" target="_blank" rel="noopener noreferrer" className="hover:text-gold hover:translate-x-1 transition-all duration-300 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2 group-hover:bg-gold transition-colors"></span> Installment Plans
                </a>
              </li>
              <li>
                <a href="https://al-madina-developers.vercel.app/#gallery" target="_blank" rel="noopener noreferrer" className="hover:text-gold hover:translate-x-1 transition-all duration-300 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2 group-hover:bg-gold transition-colors"></span> Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Our Services</h4>
            <ul className="space-y-3 text-sm">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a 
                    href={`https://al-madina-developers.vercel.app/#${service.id}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-gold hover:translate-x-1 transition-all duration-300 inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 mr-2 group-hover:bg-gold transition-colors"></span> {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" />
                <a 
                  href="https://al-madina-developers.vercel.app/#contact" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors leading-relaxed"
                >
                  {contact.officeLocation}
                </a>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                <a href="tel:03001332279" className="text-gray-400 hover:text-white transition-colors">
                  03001332279
                </a>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                <a href="mailto:almadinaaestate@gmail.com" className="text-gray-400 hover:text-white transition-colors break-all">
                  almadinaaestate@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="py-6 border-t border-white/10 text-center text-sm text-gray-500 flex justify-center items-center">
          <p>© {displayYear} {company.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
