import PageHeader from "@/components/PageHeader";
import Gallery from "@/components/Gallery";

export const metadata = {
  title: "Project Gallery | Al Madina Developers",
  description: "View our project gallery, construction updates, and completed properties in Zaamin City Lahore.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader 
        title="Project Gallery" 
        subtitle="Take a visual tour of our successful projects and ongoing developments."
      />
      <div className="py-10">
        <Gallery />
      </div>
    </>
  );
}
