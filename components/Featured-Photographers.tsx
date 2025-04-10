"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Briefcase, MapPin, Star, ArrowRight, Heart } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";
import * as framerMotion from "framer-motion";
import { useRouter } from "next/navigation";
const { motion } = framerMotion;

const featuredPhotographers = [
  {
    id: 1,
    name: "Dhanajay Mane",
    studio: "Banvabanavi Studio",
    category: "Wedding Photographer",
    image: "/studio1.jpg",
    rating: 4.8,
    location: "Shrirangpur India",
    experience: "10+ years",
    portfolioCount: 126,
  },
  {
    id: 2,
    name: "Manmohan Gandhi",
    studio: "Congress Studio",
    category: "Fashion Photographer",
    image: "/studio2.jpg",
    rating: 4.9,
    location: "Peth Naka, Sangli, India",
    experience: "8 years",
    portfolioCount: 87,
  },
  {
    id: 3,
    name: "Harshad Mehta",
    studio: "Scam Studio",
    category: "Event Photographer",
    image: "/studio3.jpg",
    rating: 4.7,
    location: "College corner, Sangli, India",
    experience: "12 years",
    portfolioCount: 195,
  },
  {
    id: 4,
    name: "Kasturba Singh",
    studio: "Charkha Studio",
    category: "Portrait Photographer",
    image: "/studio4.jpg",
    rating: 4.6,
    location: "FC road, Pune, India",
    experience: "7 years",
    portfolioCount: 64,
  },
  {
    id: 5,
    name: "Savlya Kumbhar",
    studio: "Kumbhar Studio",
    category: "Product Photographer",
    image: "/studio5.jpg",
    rating: 4.9,
    location: "Svargalok, India",
    experience: "9 years",
    portfolioCount: 102,
  },
  {
    id: 6,
    name: "Columbus Gama",
    studio: "Amerigo Studio",
    category: "Food Photographer",
    image: "/studio6.jpg",
    rating: 4.8,
    location: "Cape Of Good Hope, South Africa",
    experience: "6 years",
    portfolioCount: 73,
  },
];

const FeaturedPhotographers = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [viewType, setViewType] = useState<'grid' | 'magazine' | 'minimal'>('grid');
  const router = useRouter();

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-yellow-500 text-yellow-500" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-4 h-4">
          <Star className="absolute w-4 h-4 text-yellow-500" />
          <div className="absolute w-2 h-4 overflow-hidden">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          </div>
        </div>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300 dark:text-gray-600" />);
    }

    return stars;
  };

  const handleClick = () => {
    router.push("/photographers");
  };

  const renderGridCards = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredPhotographers.map((photographer) => (
        <motion.div
          key={photographer.id}
          className="group relative overflow-hidden rounded-xl shadow-md bg-white dark:bg-neutral-800 transition-colors"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setHoveredId(photographer.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="relative w-full h-56 overflow-hidden">
            <Image
              src={photographer.image}
              alt={photographer.name}
              width={350}
              height={250}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
              <div>
                <p className="text-white font-semibold">{photographer.category}</p>
                <div className="flex gap-1 mt-1">
                  {renderStars(photographer.rating)}
                </div>
              </div>
              <motion.button
                onClick={handleClick}
                className="bg-white text-gray-900 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          <div className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{photographer.name}</h3>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{photographer.studio}</p>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold px-2 py-1 rounded">
                {photographer.portfolioCount} works
              </div>
            </div>

            <div className="mt-3 space-y-1">
              <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                {photographer.location}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                Experience: {photographer.experience}
              </p>
            </div>

            <motion.button
              onClick={handleClick}
              className="mt-4 w-full py-2 px-4 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg flex items-center justify-center gap-2 group-hover:bg-blue-600 group-hover:text-white transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Profile
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
          <BorderBeam duration={8} size={100} className={hoveredId === photographer.id ? "opacity-100" : "opacity-0"} />
        </motion.div>
      ))}
    </div>
  );

  const renderMagazineCards = () => (
    <div className="space-y-8">
      {featuredPhotographers.map((photographer, index) => (
        <motion.div
          key={photographer.id}
          className="group flex flex-col md:flex-row gap-6 bg-white dark:bg-neutral-900 rounded-xl shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
            <Image
              src={photographer.image}
              alt={photographer.name}
              width={500}
              height={350}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white dark:bg-neutral-900 rounded-full shadow-lg p-2">
              <div className="flex gap-1">{renderStars(photographer.rating)}</div>
            </div>
            <div className="absolute bottom-4 left-4 bg-blue-600 text-white font-medium px-3 py-1 rounded-full text-sm">
              {photographer.category}
            </div>
          </div>

          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{photographer.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{photographer.studio}</p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <MapPin className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                  {photographer.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Briefcase className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                  {photographer.experience}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Wedding", "Portrait", "Fashion", "Event"].map((tag, idx) =>
                  idx % 4 === index % 4 ? (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ) : null
                )}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {photographer.portfolioCount} portfolio works
              </div>
              <motion.button
                onClick={handleClick}
                className="py-2 px-4 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Profile
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderMinimalCards = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {featuredPhotographers.map((photographer) => (
        <motion.div
          key={photographer.id}
          className="group relative flex flex-col items-center text-center"
          whileHover={{ y: -5 }}
        >
          <div className="relative w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-white dark:border-gray-700 shadow-lg">
            <Image
              src={photographer.image}
              alt={photographer.name}
              width={150}
              height={150}
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-blue-600/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ opacity: 1 }}
              onClick={handleClick}
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </motion.div>
          </div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">{photographer.name}</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{photographer.category}</p>
          <div className="flex gap-0.5">{renderStars(photographer.rating).slice(0, 5)}</div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="py-12 bg-gray-100 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">Featured Photographers</h2>

          <div className="flex gap-2 bg-white dark:bg-neutral-900 p-1 rounded-lg shadow-sm">
            {["grid", "magazine", "minimal"].map((type) => (
              <button
                key={type}
                onClick={() => setViewType(type as typeof viewType)}
                className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                  viewType === type
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={viewType}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {viewType === "grid" && renderGridCards()}
          {viewType === "magazine" && renderMagazineCards()}
          {viewType === "minimal" && renderMinimalCards()}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPhotographers;
