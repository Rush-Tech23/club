"use client";

import { motion } from "framer-motion";

type Props = {
  images: string[];
};

const PortfolioGallery = ({ images }: Props) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">📸 Portfolio</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Portfolio ${i + 1}`}
            className="rounded-lg object-cover w-full h-48 shadow-sm"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioGallery;
