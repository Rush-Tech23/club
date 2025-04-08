"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCamera, FaHeart, FaRegComment, FaRegBookmark } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";

type PortfolioItem = {
  src: string;
  title: string;
  description: string;
  category: string;
  likes: number;
  comments: number;
};

type Props = {
  images: PortfolioItem[];
};

const PortfolioGallery = ({ images }: Props) => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
            <IoMdPhotos className="text-blue-500" />
            <span>Portfolio Showcase</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Capturing moments that tell your story
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm font-medium transition-all">
            All Work
          </button>
          <button className="px-4 py-2 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-all">
            Categories
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((item, i) => (
          <motion.div
            key={i}
            className="group relative overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm line-clamp-2">{item.description}</p>
                </div>
              </div>
              <div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                {item.category}
              </div>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                  <FaCamera className="text-blue-400" />
                  <span className="text-xs">Photo Shoot</span>
                </div>
                <div className="flex gap-3">
                  <div className="flex items-center gap-1 text-sm">
                    <FaHeart className="text-red-500" />
                    <span>{item.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <FaRegComment className="text-blue-500" />
                    <span>{item.comments}</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-2 py-2 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2">
                <FaRegBookmark />
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto">
          <IoMdPhotos />
          Load More Work
        </button>
      </div>
    </div>
  );
};

export default PortfolioGallery;