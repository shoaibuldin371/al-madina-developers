"use client";
import { siteData } from "@/data/siteData";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const { whyChooseUs } = siteData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 md:py-28 bg-gray-50 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/3"
          >
            <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-2 block">
              Our Advantages
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-6 leading-tight">
              Why Choose Al Madina Developers
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              We stand out in the property market by providing focused expertise, clear communication, and a commitment to helping you make the best property decisions.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-gold relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-[100px] pointer-events-none"></div>
              <p className="text-navy font-medium italic">
                &ldquo;Turning dreams into addresses with trust and professional guidance.&rdquo;
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div 
                variants={itemVariants}
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all flex group hover-lift-lg hover:shadow-xl hover:border-gold/30"
              >
                <div className="flex-shrink-0 mr-5">
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shadow-inner group-hover:bg-gradient-gold transition-all duration-300 transform group-hover:rotate-12">
                    <CheckCircleIcon className="w-7 h-7 text-gold group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
