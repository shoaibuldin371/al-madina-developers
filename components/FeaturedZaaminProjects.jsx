"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePostHog } from 'posthog-js/react';
import { BuildingOffice2Icon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function FeaturedZaaminProjects() {
  const posthog = usePostHog();

  const projects = [
    {
      title: "Al-Madinah Orchard by Zaamin City",
      label: "Primary Featured Project",
      description: "Developed by Zaamin City. Al Madina Developers proudly serves as the official sales partner.",
      badge: "Primary Focus",
      link: "/projects?location=kasur&type=plot",
      whatsappText: "Hello Al Madina Developers, I am interested in inquiring about Al-Madinah Orchard by Zaamin City.",
    },
    {
      title: "Al-Madinah Gardens by Zaamin City",
      label: "Second Featured Project",
      description: "Developed by Zaamin City. Al Madina Developers proudly serves as the official sales partner.",
      badge: "Second Priority",
      link: "/projects?location=kasur&type=plot",
      whatsappText: "Hello Al Madina Developers, I am interested in inquiring about Al-Madinah Gardens by Zaamin City.",
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
              Official Sales Partner of Zaamin City Projects
            </span>
            <span className="w-12 h-[2px] bg-gold"></span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-6">
            Featured Zaamin City Projects
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Discover premier gated community living developed by Zaamin City. Al Madina Developers is the official sales partner offering prime residential plots and booking rates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              key={idx}
              className="bg-navy rounded-3xl p-8 md:p-10 text-white flex flex-col justify-between h-full relative overflow-hidden group hover-lift border border-white/10 shadow-xl"
            >
              {/* Gold border accent on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 rounded-3xl transition-colors duration-300 pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-[100px] pointer-events-none group-hover:scale-110 transition-transform"></div>
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3.5 py-1.5 bg-gold/20 text-gold text-xs font-bold uppercase tracking-wider rounded border border-gold/30">
                    {project.label}
                  </span>
                  <BuildingOffice2Icon className="w-8 h-8 text-gold" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold font-serif mb-4 text-white group-hover:text-gold transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-8 text-sm md:text-base font-light">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 border-t border-white/10 pt-6 mt-auto">
                <Link
                  href={project.link}
                  onClick={() => posthog?.capture('project_details_clicked', { project_title: project.title, brand_name: 'Al Madina Developers' })}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold rounded-md transition-all text-center text-sm group/btn hover-lift"
                >
                  View Inventory
                  <ArrowRightIcon className="w-4 h-4 ml-2 text-gold group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={`https://wa.me/923001332279?text=${encodeURIComponent(project.whatsappText)}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => posthog?.capture('whatsapp_clicked', { button_location: 'featured_zaamin_projects', project_title: project.title, brand_name: 'Al Madina Developers' })}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-gold hover:shadow-gold/20 text-white font-semibold rounded-md transition-all text-center text-sm hover-lift"
                >
                  WhatsApp Booking
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
