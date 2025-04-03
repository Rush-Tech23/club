"use client";

import Image from "next/image";
import { Briefcase, Camera, MapPin } from "lucide-react";
import { TextAnimate } from "./magicui/text-animate";
import { useTheme } from "@/app/theme-provider";
import { MagicCard } from "./magicui/magic-card";
import { BorderBeam } from "./magicui/border-beam";

const featuredPhotographers = [
  {
    id: 1,
    name: "John Doe",
    category: "Wedding Photographer",
    image: "/studio1.jpg",
    rating: 4.8,
    location: "New York, USA",
    experience: "10+ years",
  },
  {
    id: 2,
    name: "Sarah Smith",
    category: "Fashion Photographer",
    image: "/studio2.jpg",
    rating: 4.9,
    location: "Los Angeles, USA",
    experience: "8 years",
  },
  {
    id: 3,
    name: "Michael Brown",
    category: "Event Photographer",
    image: "/studio3.jpg",
    rating: 4.7,
    location: "Chicago, USA",
    experience: "12 years",
  },
  {
    id: 4,
    name: "Emily Johnson",
    category: "Portrait Photographer",
    image: "/studio4.jpg",
    rating: 4.6,
    location: "London, UK",
    experience: "7 years",
  },
  {
    id: 5,
    name: "David Williams",
    category: "Product Photographer",
    image: "/studio5.jpg",
    rating: 4.9,
    location: "Berlin, Germany",
    experience: "9 years",
  },
  {
    id: 6,
    name: "Sophia Martinez",
    category: "Food Photographer",
    image: "/studio6.jpg",
    rating: 4.8,
    location: "Paris, France",
    experience: "6 years",
  },
];

const FeaturedPhotographers = () => {
  const theme = useTheme(); // Get current theme

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-3xl font-bold text-center text-gray-800 dark:text-white flex items-center justify-center gap-2 pb-8">
          <Camera className="w-9 h-9 text-blue-600 dark:text-blue-400 px-1" />
          <TextAnimate animation="blurIn" as="h1">
            Featured Photographers
          </TextAnimate>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredPhotographers.map((photographer) => (
            <MagicCard
              key={photographer.id}
              gradientColor={theme.theme === "dark" ? "#262626" : "#D9D9D955"}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden transform transition-all hover:scale-105"
            >
              {/* Image */}
              <Image
                src={photographer.image}
                alt={photographer.name}
                width={350}
                height={250}
                className="w-full h-56 object-cover"
              />
              
              {/* Card Content */}
              <div className="p-5 cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {photographer.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {photographer.category}
                </p>

                {/* Extra Information */}
                <p className="text-sm text-gray-500 dark:text-gray-400 flex mt-1 gap-2">
                   <MapPin className="w-4 h-4 text-blue-500 dark:text-blue-400 pt-1"/>
                   {photographer.location}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 flex gap-2">
                <Briefcase className="w-4 h-4 text-blue-500 dark:text-blue-400 pt-1" />
                   Experience: {photographer.experience}
                </p>

                {/* Rating */}
                <p className="text-yellow-500 font-bold mt-2">⭐ {photographer.rating}</p>
              </div>
              <BorderBeam duration={8} size={100} />
            </MagicCard>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPhotographers;
