


import AboutBio from "@/components/photographer/about";
// import AvailabilityCalendar from "@/components/photographer/AvailabilityCalendar";
import ClientReviews from "@/components/photographer/ClientReviews";
import ContactCard from "@/components/photographer/Contact-card";
import Packages from "@/components/photographer/packages";
import PhotographerProfile from "@/components/photographer/PhotographerProfile";
import PhotoGallery from "@/components/photographer/PortfolioGallery";
// import PortfolioGallery from "@/components/photographer/PortfolioGallery";
import RecentShoots from "@/components/photographer/recentshoots";
import ServicesOffered from "@/components/photographer/ServicesOffered";

const PhotographerPage = () => {
  // You can fetch data dynamically here using params or server-side functions
  const photographer = {
    name: "Rahul Sharma",
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
  // const portfolioItems = [
  //   {
  //     src: "/download (1).jpeg",
  //     title: "Sunset Wedding",
  //     description: "Beautiful golden hour wedding photography at the beach",
  //     category: "Wedding",
  //     likes: 124,
  //     comments: 18
  //   },
  //   {
  //     src: "/model.jpg",
  //     title: "Fashion Shoot",
  //     description: "High-fashion editorial shoot in the city",
  //     category: "Fashion",
  //     likes: 200,
  //     comments: 45
  //   },
  //   {
  //     src: "/images.jpeg",
  //     title: "Wedding Event",
  //     description: "Capturing the essence of corporate gatherings",
  //     category: "Event",
  //     likes: 89,
  //     comments: 12
  //   },
  //   {
  //     src: "/studio4.jpg",
  //     title: "Portrait Session",
  //     description: "Intimate portrait session with natural light",
  //     category: "Portrait",
  //     likes: 150,
  //     comments: 25
  //   },
  // ]
  const Bio = "Hi! I’m Rahul, a passionate wedding and lifestyle photographer with over 8 years of experience capturing unforgettable moments. I blend creativity with storytelling to deliver timeless images you'll cherish forever."

  return (
    <div className="px-4 py-10 space-y-12 mt-10 dark:bg-gray-900 bg-gray-100">
      <PhotographerProfile {...photographer} />
      {/* <Tags tags={photographer.tags} /> */}
      <AboutBio
        bio={Bio}
      />
      <PhotoGallery/>
      <RecentShoots />
      <ServicesOffered />
      <Packages />
      <ClientReviews />
      <div className="flex">
      <ContactCard contact={photographer.contact} />
      
      </div>
    </div>
  );
};

export default PhotographerPage;
