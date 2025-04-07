"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt, FaCameraRetro, FaAward, FaStar,  } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { MdPhotoCamera } from "react-icons/md";

type Props = {
  name: string;
  bio: string;
  location: string;
  photoUrl: string;
  specialties?: string[];
  awards?: number;
  rating?: number;
  projectsCompleted?: number;
};

const PhotographerProfile = ({
  name,
  bio,
  location,
  photoUrl,
  specialties = ["Portrait", "Landscape", "Wedding"],
  awards = 5,
  rating = 4.9,
  projectsCompleted = 120,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto transition-all hover:shadow-xl"
    >
      {/* Profile Image with decorative elements */}
      <div className="relative">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative group"
        >
          <Image
            src={photoUrl}
            alt={name}
            width={200}
            height={200}
            className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-blue-500 dark:border-blue-400 group-hover:border-purple-500 transition-all duration-300"
          />
          <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-purple-300 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
        </motion.div>
        
        {/* Decorative camera icon */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute -bottom-3 -right-3 bg-blue-500 dark:bg-blue-600 p-3 rounded-full shadow-lg"
        >
          <MdPhotoCamera className="text-white text-xl" />
        </motion.div>
      </div>

      {/* Profile Content */}
      <div className="text-center md:text-left space-y-4 flex-1">
        <div>
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {name}
          </h1>
          <p className="text-blue-500 dark:text-blue-400 font-medium flex items-center justify-center md:justify-start gap-2 mt-1">
            <FaCameraRetro />
            <span>Professional Photographer</span>
          </p>
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          {bio}
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <div className="flex items-center gap-2 text-sm bg-blue-50 dark:bg-gray-700 px-3 py-1.5 rounded-full">
            <FaMapMarkerAlt className="text-blue-500" />
            <span className="text-gray-700 dark:text-gray-300">{location}</span>
          </div>

          <div className="flex items-center gap-2 text-sm bg-blue-50 dark:bg-gray-700 px-3 py-1.5 rounded-full">
            <FaAward className="text-yellow-500" />
            <span className="text-gray-700 dark:text-gray-300">{awards} Awards</span>
          </div>

          <div className="flex items-center gap-2 text-sm bg-blue-50 dark:bg-gray-700 px-3 py-1.5 rounded-full">
            <FaStar className="text-yellow-400" />
            <span className="text-gray-700 dark:text-gray-300">{rating}/5 Rating</span>
          </div>

          <div className="flex items-center gap-2 text-sm bg-blue-50 dark:bg-gray-700 px-3 py-1.5 rounded-full">
            <IoMdPhotos className="text-purple-500" />
            <span className="text-gray-700 dark:text-gray-300">{projectsCompleted}+ Projects</span>
          </div>
        </div>

        {/* Specialties */}
        <div className="pt-2">
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Specialties:</h3>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {specialties.map((specialty, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium shadow-sm"
              >
                {specialty}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all"
          >
            Book a Session
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2 bg-white dark:bg-gray-700 border border-blue-500 text-blue-500 dark:text-blue-400 rounded-full font-medium shadow-sm hover:bg-blue-50 dark:hover:bg-gray-600 transition-all"
          >
            View Portfolio
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default PhotographerProfile;