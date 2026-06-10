"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePostHog } from 'posthog-js/react';
import { BuildingOffice2Icon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function FeaturedZaaminProjects() {
  const posthog = usePostHog();

  const projects = [
    {
      title: "Al-Madina Orchard",
      label: "Primary Featured Project",
      developer: "Developed by Zaamin City",
      description: "Developed by Zaamin City. Al Madinah Developers proudly serves as the official sales partner.",
      location: "Kasur Bypass, Kasur",
      badge: "Primary Featured Project",
      image: "/assets/al-madinah/472097917_122122903346595661_5990143530882313701_n.jpg",
      link: "/projects?location=kasur&type=plot",
      whatsappText: "Hello Al Madinah Developers, I am interested in inquiring about Al-Madina Orchard by Zaamin City.",
    },
    {
      title: "Al-Madina Garden",
      label: "Second Featured Project",
      developer: "Developed by Zaamin City",
      description: "Developed by Zaamin City. Al Madinah Developers proudly serves as the official sales partner.",
      location: "Main Bypass, Kasur",
      badge: "Second Featured Project",
      image: "/assets/al-madinah/480162649_122128096406595661_7555021955625685651_n.jpg",
      link: "/projects?location=kasur&type=plot",
      whatsappText: "Hello Al Madinah Developers, I am interested in inquiring about Al-Madina Garden by Zaamin City.",
    },
  ];

  return (
    <section id="featured-zaamin-projects" className="py-20 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="w-12 h-[2px] bg-gold"></span>
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              Featured Zaamin City Projects
            </span>
            <span className="w-12 h-[2px] bg-gold"></span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-6">
            Featured Zaamin City Projects
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Al Madinah Developers proudly serves as the official sales partner of Zaamin City projects, offering premium gated residential plots and installment rates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col hover-lift-lg group"
            >
              {/* Image Container with Badge */}
              <div className="relative h-64 sm:h-72 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
                
                {/* Floating Badges */}
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                  <span className="px-3 py-1.5 bg-gradient-gold text-white text-xs font-bold uppercase tracking-wider rounded shadow-md border border-white/20">
                    {project.badge}
                  </span>
                  <span className="px-3 py-1 bg-navy text-white text-[10px] font-bold uppercase tracking-wider rounded shadow-md w-max border border-white/10">
                    Official Sales Partner
                  </span>
                </div>
              </div>

              {/* Details Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-gold uppercase tracking-wider">
                    {project.developer}
                  </span>
                  <BuildingOffice2Icon className="w-5 h-5 text-gold" />
                </div>

                <h3 className="text-2xl font-bold font-serif text-navy mb-2 group-hover:text-gold transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-xs text-gray-500 mb-4 flex items-center">
                  📍 {project.location}
                </p>

                <p className="text-gray-600 leading-relaxed mb-8 text-sm font-light">
                  {project.description}
                </p>

                {/* Zameen-style Actions */}
                <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-4 border-t border-gray-50">
                  <Link
                    href={project.link}
                    onClick={() => posthog?.capture('project_details_clicked', { project_title: project.title, brand_name: 'Al Madina Developers' })}
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-navy hover:bg-gold text-white font-semibold rounded-lg transition-colors text-center text-xs uppercase tracking-wider group/btn cursor-pointer shadow-sm"
                  >
                    View Details
                    <ArrowRightIcon className="w-3.5 h-3.5 ml-2 text-gold group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href={`https://wa.me/923001332279?text=${encodeURIComponent(project.whatsappText)}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => posthog?.capture('whatsapp_clicked', { button_location: 'featured_zaamin_projects', project_title: project.title, brand_name: 'Al Madina Developers' })}
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold rounded-lg transition-colors text-center text-xs uppercase tracking-wider cursor-pointer shadow-sm"
                  >
                    WhatsApp Inquiry
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
