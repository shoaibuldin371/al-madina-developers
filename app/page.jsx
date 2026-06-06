import Hero from "@/components/Hero";
import PromoVideo from "@/components/PromoVideo";
import PakArabVideo from "@/components/PakArabVideo";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import FeaturedProperties from "@/components/FeaturedProperties";
import InstallmentPlans from "@/components/InstallmentPlans";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Location from "@/components/Location";

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
      <WhyChooseUs />
      <Services />
      <FeaturedProperties />
      <InstallmentPlans />
      <Gallery />
      <Contact />
      <Location />
    </>
  );
}
