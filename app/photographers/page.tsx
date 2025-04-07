


import ContactCard from "@/components/photographer/Contact-card";
import PhotographerProfile from "@/components/photographer/PhotographerProfile";
// import Tags from "@/components/photographer/Photographers- Tags";
import PortfolioGallery from "@/components/photographer/PortfolioGallery";

const PhotographerPage = () => {
  // You can fetch data dynamically here using params or server-side functions
  const photographer = {
    name: "Rohit Sharma",
    bio: "Award-winning wedding & fashion photographer with over 10 years of experience.",
    location: "Mumbai, India",
    photoUrl: "/Photographer.jpg",
    tags: ["Wedding", "Fashion", "Event"],
    gallery: [
      "/images.jpeg",
      "/download (1).jpeg",
      "/download.jpeg",
      "/model.jpg",
    ],
    contact: {
      email: "rohitphoto@example.com",
      instagram: "https://instagram.com/rohitphoto",
      website: "https://rohitportfolio.com",
    },
  };
  const portfolioItems = [
    {
      src: "/download.jpeg",
      title: "Sunset Wedding",
      description: "Beautiful golden hour wedding photography at the beach",
      category: "Wedding",
      likes: 124,
      comments: 18
    },
    {
      src:"/model.jpg",
      title: "Fashion Shoot",
      description: "High-fashion editorial shoot in the city",
      category: "Fashion",
      likes: 200,
      comments: 45
    },
    {
      src: "/images.jpeg",
      title: "Wedding Event",
      description: "Capturing the essence of corporate gatherings",
      category: "Event",
      likes: 89,
      comments: 12
    },
    {
      src: "/studio4.jpg",
      title: "Portrait Session",
      description: "Intimate portrait session with natural light",
      category: "Portrait",
      likes: 150,
      comments: 25
    },
  ]

  return (
    <div className="px-4 py-10 space-y-12 mt-10 dark:bg-gray-900 bg-gray-100">
      <PhotographerProfile {...photographer} />
      {/* <Tags tags={photographer.tags} /> */}
      <PortfolioGallery images={portfolioItems} />
      <ContactCard contact={photographer.contact} />
    </div>
  );
};

export default PhotographerPage;
