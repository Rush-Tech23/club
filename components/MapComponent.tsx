"use client";

import { MapPin } from "lucide-react";
import { GoogleMaps } from "./GoogleMaps";
import { GoogleMapsWrapper } from "./GoogleMapsWrapper";

export const LOCATIONS = [
  { lat: 18.5167, lng: 73.8500 }, // Shivaji Nagar, Pune
  { lat: 18.5793, lng: 73.8143 }, // Baner, Pune
  { lat: 18.4984, lng: 73.8077 }, // Kothrud, Pune
  { lat: 18.6005, lng: 73.7650 }, // Hinjewadi, Pune
  { lat: 18.4702, lng: 73.8813 }, // Hadapsar, Pune
  { lat: 18.6394, lng: 73.7919 }, // Another location (Example)
];

export const MapComponent = () => (
  <section className="bg-gray-100 dark:bg-gray-900 py-12">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="text-3xl font-bold text-gray-800 dark:text-white text-center flex justify-center gap-1 mb-6">
        <MapPin className="w-9 h-9 text-blue-600 dark:text-blue-400 px-1" />
        Find Photographers Near You
      </div>
      <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
        <GoogleMapsWrapper>
          <GoogleMaps locations={LOCATIONS} />
        </GoogleMapsWrapper>
      </div>
    </div>
  </section>
);
