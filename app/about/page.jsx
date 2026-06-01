import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import { siteData } from "@/data/siteData";

export const metadata = {
  title: "About Al Madina Developers | Real Estate Developers in Lahore",
  description: "Learn about Al Madina Developers, your trusted real estate partner in Zaamin City Lahore. We provide guidance for residential plots, commercial properties, and investments.",
};

export default function AboutPage() {
  const { contact } = siteData;
  return (
    <>
      <PageHeader 
        title="About Al Madina Developers" 
        subtitle="Your trusted destination for dream homes and expert real estate guidance."
      />
      <About />
      <WhyChooseUs />
    </>
  );
}
