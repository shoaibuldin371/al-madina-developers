import PageHeader from "@/components/PageHeader";
import FeaturedProperties from "@/components/FeaturedProperties";
import InstallmentPlans from "@/components/InstallmentPlans";

export const metadata = {
  title: "Property Projects | Al Madina Developers",
  description: "Explore our featured property projects, installment plans, and investment opportunities in Zaamin City Lahore.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader 
        title="Our Property Projects" 
        subtitle="Explore our exclusive property listings and installment plans designed for your future."
      />
      <div className="py-10">
        <FeaturedProperties />
        <InstallmentPlans />
      </div>
    </>
  );
}
