import Link from "next/link";
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
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
          {/* Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={company.logoDark}
                  alt="Al Madinah Developers Logo"
                  fill
                  className="object-contain"
                  sizes="64px"
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
            <div className="pt-4 flex items-center space-x-3">
              <a
                href={contact.facebookLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-gold text-white transition-all duration-300 shadow-sm hover:shadow-gold/30 hover:-translate-y-1"
                aria-label="Al Madina Estate & Builders Facebook"
                title="Al Madina Estate & Builders Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href={contact.facebookLink2}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-gold text-white transition-all duration-300 shadow-sm hover:shadow-gold/30 hover:-translate-y-1"
                aria-label="Al-Madinah Orchard Kasur Facebook"
                title="Al-Madinah Orchard Kasur Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://wa.me/923001332279"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366] text-white transition-all duration-300 shadow-sm hover:shadow-[#25D366]/30 hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-gold hover:translate-x-1 transition-all duration-300 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2 group-hover:bg-gold transition-colors"></span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold hover:translate-x-1 transition-all duration-300 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2 group-hover:bg-gold transition-colors"></span> About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold hover:translate-x-1 transition-all duration-300 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2 group-hover:bg-gold transition-colors"></span> Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gold hover:translate-x-1 transition-all duration-300 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2 group-hover:bg-gold transition-colors"></span> Featured Properties
                </Link>
              </li>
              <li>
                <Link href="/installment-plans" className="hover:text-gold hover:translate-x-1 transition-all duration-300 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2 group-hover:bg-gold transition-colors"></span> Installment Plans
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold hover:translate-x-1 transition-all duration-300 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2 group-hover:bg-gold transition-colors"></span> Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold hover:translate-x-1 transition-all duration-300 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2 group-hover:bg-gold transition-colors"></span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Our Services</h4>
            <ul className="space-y-3 text-sm">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services#${service.id}`} 
                    className="hover:text-gold hover:translate-x-1 transition-all duration-300 inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 mr-2 group-hover:bg-gold transition-colors"></span> {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <Link 
                  href="/contact" 
                  className="flex items-start text-gray-400 hover:text-white transition-colors leading-relaxed group cursor-pointer"
                >
                  <MapPinIcon className="w-5 h-5 text-gold group-hover:text-white mr-3 flex-shrink-0 mt-0.5 transition-colors" />
                  <span>{contact.officeLocation}</span>
                </Link>
              </li>
              <li className="flex items-center">
                <a 
                  href={`tel:+92${contact.primaryNumber.replace(/\s+/g, "").replace(/^0/, "")}`} 
                  className="flex items-center text-gray-400 hover:text-white transition-colors group cursor-pointer"
                >
                  <PhoneIcon className="w-5 h-5 text-gold group-hover:text-white mr-3 flex-shrink-0 transition-colors" />
                  <span>{contact.primaryNumber}</span>
                </a>
              </li>
              <li className="flex items-center">
                <a 
                  href={`mailto:${contact.email}`} 
                  className="flex items-center text-gray-400 hover:text-white transition-colors group cursor-pointer"
                >
                  <EnvelopeIcon className="w-5 h-5 text-gold group-hover:text-white mr-3 flex-shrink-0 transition-colors" />
                  <span className="break-all">{contact.email}</span>
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
