import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import Location from "@/components/Location";
import { ClockIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Contact Al Madina Developers | Zaamin City Lahore",
  description: "Get in touch with Al Madina Developers. Find our office location, contact numbers, and send us a message for real estate inquiries.",
};

export default function ContactPage() {
  const businessHours = [
    { days: "Monday - Thursday", hours: "09:00 AM - 07:00 PM" },
    { days: "Friday", hours: "09:00 AM - 12:30 PM, 02:30 PM - 07:00 PM (Jummah Break)" },
    { days: "Saturday", hours: "09:00 AM - 07:00 PM" },
    { days: "Sunday", hours: "Closed (Available for pre-booked appointments)" },
  ];

  return (
    <>
      <PageHeader 
        title="Contact Al Madina Developers" 
        subtitle="We're here to help you with all your real estate needs. Reach out to our team today."
      />
      
      {/* Contact Form & Quick Info */}
      <Contact hideHeader={true} />

      {/* Business Hours Section */}
      <section className="py-16 bg-white relative overflow-hidden border-t border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
            <div className="md:w-1/2">
              <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-2 block flex items-center">
                <ClockIcon className="w-5 h-5 mr-2 text-gold" />
                Timings
              </span>
              <h2 className="text-3xl font-serif font-bold text-navy mb-4">
                Office Business Hours
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Our consultancy office in Zaamin City Lahore is open six days a week. Feel free to visit us within working hours or request a pre-booked appointment for Sunday sessions.
              </p>
            </div>
            
            <div className="md:w-1/2 w-full space-y-4">
              {businessHours.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0"
                >
                  <span className="font-semibold text-navy text-sm md:text-base">{item.days}</span>
                  <span className="text-gray-600 text-xs md:text-sm text-right">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Map & Details */}
      <Location hideHeader={true} />
    </>
  );
}
