import Marquee from "react-fast-marquee";
import { TextAnimate } from "./magicui/text-animate";
import { Camera } from "lucide-react";
import Image from "next/image";

const categories = [
  { name: "Wedding Photography", image: "/tags1.jpg" },
  { name: "Fashion Photography", image: "/fashion.jpg" },
  { name: "Portrait Photography", image: "/studio4.jpg" },
  { name: "Product Photography", image: "/product.jpg" },
  { name: "Travel Photography", image: "/travel.jpg" },
  { name: "Food Photography", image: "/food.jpg" },
  { name: "Newborn Photography", image: "/newborn.jpg" },
];

const TagCard = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 transform hover:scale-105 bg-white dark:bg-gray-800 w-60 h-40">
      <Image
        src={image}
        alt={name}
        width={240}
        height={160}
        className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-110"
        placeholder="blur"
        blurDataURL="/placeholder.svg"
      />

      {/* Always visible gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 opacity-80 transition-opacity duration-500" />

      {/* Always visible text */}
      <div className="absolute inset-0 flex items-end justify-center text-center text-white p-4">
        <h3 className="text-lg font-semibold drop-shadow-md">{name}</h3>
      </div>
    </div>
  );
};

const Tags = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-[1200px] mx-auto w-full relative">
        <div className="text-3xl font-bold text-gray-800 dark:text-white text-center flex items-center justify-center mb-8 gap-2">
          <Camera className="w-9 h-9 text-blue-600 dark:text-blue-400" />
          <TextAnimate animation="blurIn" as="h1">
            Photography Categories
          </TextAnimate>
        </div>

        {/* Optional: fade effect */}
        <div className="absolute top-0 bottom-0 left-0 w-12 z-10 bg-gradient-to-r from-gray-100 dark:from-gray-900 to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 z-10 bg-gradient-to-l from-gray-100 dark:from-gray-900 to-transparent pointer-events-none" />

        <Marquee pauseOnHover className="[--duration:20s] w-full">
          <div className="flex items-center">
            {categories.map((category, index) => (
              <div key={index} className="min-w-[15rem] mx-3">
                <TagCard name={category.name} image={category.image} />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Tags;
