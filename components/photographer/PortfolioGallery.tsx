'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type GalleryImage = {
  src: string;
  alt: string;
  colSpan?: number;
  rowSpan?: number;
};

const images: GalleryImage[] = [
  { src: '/katrina.jpg', alt: 'Wedding Moment', colSpan: 2, rowSpan: 2 },
  { src: '/cat.jpg', alt: 'Portrait in Nature' },
  { src: '/urban.jpg', alt: 'Urban Style' },
  { src: '/golden.jpg', alt: 'Golden Hour', colSpan: 2 },
  { src: '/bg.jpg', alt: 'Black & White' },
  { src: '/candid.jpg', alt: 'Candid Smile', rowSpan: 2 },
  { src: '/model.jpg', alt: 'Fashion Shoot' },
  { src: '/studio-portrait.jpg', alt: 'Studio Portrait' },
  { src: '/gallery3.jpg', alt: 'Sunset Vibes', colSpan: 2 },
  { src: '/street.jpg', alt: 'Street Moments' },
  // { src: '/extra5.jpg', alt: 'Smiling Bride', colSpan: 2, rowSpan: 2 },
];

const PhotoGallery = () => {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <section className=" dark:bg-gray-900 py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl text-center font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
           Portfolio Gallery
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]"
          style={{ gridAutoFlow: 'dense' }}
        >
          {images.map((image, idx) => {
            const colSpan = image.colSpan ?? 1;
            const rowSpan = image.rowSpan ?? 1;

            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer"
                style={{
                  gridColumn: `span ${colSpan}`,
                  gridRow: `span ${rowSpan}`,
                }}
                onClick={() => setSelected(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-medium text-lg">{image.alt}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Modal View */}
      {selected && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-4 max-w-3xl w-full relative"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected.src}
              alt={selected.alt}
              width={1000}
              height={700}
              className="rounded-xl w-full object-cover"
            />
            <p className="text-center text-gray-800 dark:text-white mt-4 text-lg font-semibold">
              {selected.alt}
            </p>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded-full text-sm"
            >
              ✕ Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default PhotoGallery;
