import Hero from "@/components/Hero";
import PromoVideo from "@/components/PromoVideo";
import PakArabVideo from "@/components/PakArabVideo";
import About from "@/components/About";
import Services from "@/components/Services";
import FeaturedProperties from "@/components/FeaturedProperties";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Al Madina Developers | Real Estate & Property Developers in Zaamin City Lahore",
  description: "Al Madina Developers helps clients explore residential plots, houses, rental properties, commercial properties, construction guidance, and investment opportunities in Zaamin City Lahore.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <PromoVideo />
      <PakArabVideo />
      <About />
      <Services />
      
      {/* Featured Projects Preview */}
      <div className="relative">
        <FeaturedProperties limit={3} />
        <div className="flex justify-center pb-20 bg-gray-50">
          <Link 
            href="/projects"
            className="inline-flex items-center px-8 py-4 bg-navy text-white font-medium rounded-md shadow-lg hover-lift hover:bg-gold transition-colors group"
          >
            View All Projects
            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-navy text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to Start Your Real Estate Journey?</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">Contact our experts today for personalized advice and premium property deals.</p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gold text-navy font-bold rounded-md shadow-lg hover-lift hover:bg-white transition-colors"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
