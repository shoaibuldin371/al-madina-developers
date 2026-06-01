import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import Location from "@/components/Location";

export const metadata = {
  title: "Contact Al Madina Developers | Zaamin City Lahore",
  description: "Get in touch with Al Madina Developers. Find our office location, contact numbers, and send us a message for real estate inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Al Madina Developers" 
        subtitle="We're here to help you with all your real estate needs. Reach out to us today."
      />
      <div className="py-10">
        <Contact />
        <Location />
      </div>
    </>
  );
}
