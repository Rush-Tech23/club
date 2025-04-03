import { MapPin } from "lucide-react";
import Image from "next/image";
import { TextAnimate } from "./magicui/text-animate";

const cities = [
  { name: "Pune", count: "500+", image: "/pune.jpg" },
  { name: "Mumbai", count: "450+", image: "/mumbai.jpg" },
  { name: "Delhi", count: "422+", image: "/red-fort.jpg" },
  { name: "Bangalore", count: "350+", image: "/bangalore.jpg" },
  { name: "Hyderabad", count: "230+", image: "/hyderabad.jpg" },
  { name: "Chennai", count: "100+", image: "/chennai.jpg" },
];

export default function TopLocations() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-3xl font-bold text-center flex items-center justify-center gap-2 text-gray-800 dark:text-white">
        <MapPin className="w-8 h-8 text-blue-600 dark:text-blue-400 pt-1" />
        <TextAnimate animation="blurIn" as="h1">
          Top Locations
          </TextAnimate>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 gap-8 mt-8">
          {cities.map((city, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-500 transform hover:scale-105 bg-white dark:bg-gray-800"
            >
              <Image
                src={city.image}
                alt={city.name}
                width={350}
                height={250}
                className="w-full h-44 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                placeholder="blur"
                blurDataURL="/placeholder.svg"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 opacity-80 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                <h3 className="text-xl font-semibold drop-shadow-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {city.name}
                </h3>
                <p className="text-sm mt-1 drop-shadow-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {city.count} Photographers
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
