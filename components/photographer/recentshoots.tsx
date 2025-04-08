"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, MessageCircle, Camera, X } from "lucide-react";
import { useState } from "react";

type Shoot = {
    src: string;
    title: string;
    date: string;
    location: string;
    likes: number;
    comments: number;
    photos: string[]; // Additional images for the gallery
  };
  

  const recentShoots: Shoot[] = [
    {
      src: "/model.jpg",
      title: "City Fashion Walk",
      date: "March 25, 2025",
      location: "Bandra, Mumbai",
      likes: 132,
      comments: 20,
      photos: ["/model.jpg", "/fashion.jpg", "/studio4.jpg"],
    },
    {
      src: "/images.jpeg",
      title: "Beach Wedding",
      date: "April 2, 2025",
      location: "Juhu Beach, Mumbai",
      likes: 190,
      comments: 32,
      photos: ["/images.jpeg", "/download (1).jpeg", "/download.jpeg"],
    },
    {
      src: "/studio4.jpg",
      title: "Studio Portrait",
      date: "March 15, 2025",
      location: "Andheri Studio",
      likes: 98,
      comments: 12,
      photos: ["/studio4.jpg", "/model.jpg"],
    },
  ];

const RecentShoots = () => {
    const [selectedShoot, setSelectedShoot] = useState<Shoot | null>(null);
    const GalleryModal = ({
        photos,
        title,
        onClose,
      }: {
        photos: string[];
        title: string;
        onClose: () => void;
      }) => {
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl max-w-5xl w-full p-6 relative">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map((photo, i) => (
                  <div key={i} className="relative w-full h-56 rounded-lg overflow-hidden">
                    <Image
                      src={photo}
                      alt={`Gallery ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      };
  return (
    <section className="max-w-[1200px] mx-auto px-4 space-y-6">
      <div className="flex items-center gap-2 text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
        <Camera className="text-blue-600 dark:text-blue-400 w-7 h-7" />
        Recent Shoots
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentShoots.map((shoot, index) => (
          <motion.div
            key={index}
            onClick={() => setSelectedShoot(shoot)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <div className="relative h-52 w-full">
              <Image
                src={shoot.src}
                alt={shoot.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{shoot.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{shoot.date} • {shoot.location}</p>
              <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-300 pt-2">
                <div className="flex items-center gap-1"><Heart className="w-4 h-4 text-red-500" /> {shoot.likes}</div>
                <div className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> {shoot.comments}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {selectedShoot && (
  <GalleryModal
    photos={selectedShoot.photos}
    title={selectedShoot.title}
    onClose={() => setSelectedShoot(null)}
  />
)}
    </section>
  );
};

export default RecentShoots;
