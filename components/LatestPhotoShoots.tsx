"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {X } from "lucide-react";
import { TextAnimate } from "./magicui/text-animate";

const photoShoots = [
  { src: "/gallery1.jpg", alt: "Wedding Shoot" },
  { src: "/gallery2.jpg", alt: "Fashion Photography" },
  { src: "/gallery3.jpg", alt: "Nature Shoot" },
  { src: "/gallery4.jpg", alt: "Portrait Shoot" },
  { src: "/gallery5.jpg", alt: "Event Photography" },
  { src: "/gallery6.jpg", alt: "Commercial Shoot" },
];

export default function LatestPhotoShoots() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close lightbox with Esc key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="relative bg-gray-100 dark:bg-neutral-950 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-4xl font-bold text-gray-800 dark:text-white flex items-center justify-center gap-3">
          {/* <Camera className="w-10 h-10 text-blue-600 dark:text-blue-400 px-1" /> */}
          <TextAnimate animation="blurIn" as="h1">
          Latest Photo Shoots
          </TextAnimate>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Explore stunning photography from professionals.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {photoShoots.map((photo, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-md transition-all duration-500 hover:scale-105 cursor-pointer bg-white dark:bg-gray-800"
            onClick={() => setSelectedImage(photo.src)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={400}
              height={300}
              className="w-full h-60 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
              <p className="text-white text-lg font-semibold">{photo.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox (Full-Screen Image Preview) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-5 right-5 text-white text-3xl hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <Image
            src={selectedImage}
            alt="Selected Photo"
            width={800}
            height={600}
            className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
}
