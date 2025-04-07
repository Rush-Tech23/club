


import ContactCard from "@/components/Contact-card";
import PhotographerProfile from "@/components/PhotographerProfile";
import Tags from "@/components/Photographers- Tags";
import PortfolioGallery from "@/components/PortfolioGallery";

const PhotographerPage = () => {
  // You can fetch data dynamically here using params or server-side functions
  const photographer = {
    name: "Rohit Sharma",
    bio: "Award-winning wedding & fashion photographer with over 10 years of experience.",
    location: "Mumbai, India",
    photoUrl: "/photographers/rohit.jpg",
    tags: ["Wedding", "Fashion", "Event"],
    gallery: [
      "/gallery/photo1.jpg",
      "/gallery/photo2.jpg",
      "/gallery/photo3.jpg",
      "/gallery/photo4.jpg",
    ],
    contact: {
      email: "rohitphoto@example.com",
      instagram: "https://instagram.com/rohitphoto",
      website: "https://rohitportfolio.com",
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-12 mt-10">
      <PhotographerProfile {...photographer} />
      <Tags tags={photographer.tags} />
      <PortfolioGallery images={photographer.gallery} />
      <ContactCard contact={photographer.contact} />
    </div>
  );
};

export default PhotographerPage;
