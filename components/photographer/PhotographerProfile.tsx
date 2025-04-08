'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaMapMarkerAlt, FaCameraRetro, FaAward, FaStar } from 'react-icons/fa';
import { IoMdPhotos } from 'react-icons/io';
import { MdPhotoCamera } from 'react-icons/md';

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
  specialties = ['Portrait', 'Landscape', 'Wedding'],
  awards = 5,
  rating = 4.9,
  projectsCompleted = 120,
}: Props) => {
  return (
    <section className="relative w-full bg-gradient-to-b from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 md:py-24 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {name}
          </h1>
          <p className="text-blue-500 dark:text-blue-400 font-medium flex items-center justify-center md:justify-start gap-2">
            <FaCameraRetro />
            Professional Photographer
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">{bio}</p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <Badge icon={<FaMapMarkerAlt className="text-blue-500" />} text={location} />
            <Badge icon={<FaAward className="text-yellow-500" />} text={`${awards} Awards`} />
            <Badge icon={<FaStar className="text-yellow-400" />} text={`${rating}/5 Rating`} />
            <Badge icon={<IoMdPhotos className="text-purple-500" />} text={`${projectsCompleted}+ Projects`} />
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">Specialties:</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
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

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-6">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all text-base"
            >
              Book a Session
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-white dark:bg-gray-700 border border-blue-500 text-blue-500 dark:text-blue-400 rounded-full font-medium shadow-sm hover:bg-blue-50 dark:hover:bg-gray-600 transition-all text-base"
            >
              View Portfolio
            </motion.button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative group">
            <Image
              src={photoUrl}
              alt={name}
              width={300}
              height={300}
              className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover shadow-xl border-4 border-blue-500 dark:border-blue-400 transition-all"
            />
            <div className="absolute -bottom-4 -right-4 bg-blue-500 dark:bg-blue-600 p-4 rounded-full shadow-lg">
              <MdPhotoCamera className="text-white text-2xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Reusable badge component
const Badge = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 text-sm bg-blue-50 dark:bg-gray-700 px-3 py-1.5 rounded-full">
    {icon}
    <span className="text-gray-700 dark:text-gray-300">{text}</span>
  </div>
);

export default PhotographerProfile;
