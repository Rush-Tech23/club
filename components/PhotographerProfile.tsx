"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  location: string;
  photoUrl: string;
};

const PhotographerProfile = ({ name, bio, location, photoUrl }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row items-center gap-6"
    >
      <Image
        src={photoUrl}
        alt={name}
        width={160}
        height={160}
        className="w-40 h-40 rounded-full object-cover shadow-lg"
      />
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
        <p className="text-gray-600 mt-2">{bio}</p>
        <p className="text-sm text-gray-500 mt-1">📍 {location}</p>
      </div>
    </motion.div>
  );
};

export default PhotographerProfile;
