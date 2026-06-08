import PageHeader from "@/components/PageHeader";
import Gallery from "@/components/Gallery";
import Link from "next/link";
import { ArrowRightIcon, PhoneIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Project Gallery | Al Madina Developers",
  description: "View our project gallery, luxury houses, residential plots, and infrastructure maps in Zaamin City Lahore.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader 
        title="Project Gallery" 
        subtitle="Take a visual tour of our successful projects, map updates, and ongoing property developments."
      />
      
      {/* Gallery Section */}
      <Gallery hideHeader={true} />

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 text-navy relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-3 block">
            Guided Site Visits
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-navy">
            Want to See These Properties in Person?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            We organize daily guided tours of Zaamin City Lahore for families and investors. Book your slot today, and one of our dedicated property consultants will guide you through the on-ground developments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-navy text-white font-semibold rounded-md shadow-lg shadow-navy/20 hover-lift text-center"
            >
              Book Site Visit
              <ArrowRightIcon className="w-4 h-4 ml-2 text-gold" />
            </Link>
            <a
              href="https://wa.me/923001332279?text=Hello%20Al%20Madina%20Developers%2C%20I%20want%20to%20book%20a%20site%20visit."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-navy border border-gray-200 font-semibold rounded-md hover:border-gold shadow-sm transition-all hover-lift text-center"
            >
              WhatsApp Agent
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
