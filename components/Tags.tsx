import Marquee from "react-fast-marquee";
import { TextAnimate } from "./magicui/text-animate";
import { Camera } from "lucide-react";

const categories = [
  "Wedding Photography",
  "Fashion Photography",
  "Event Photography",
  "Portrait Photography",
  "Product Photography",
  "Wildlife Photography",
  "Travel Photography",
  "Food Photography",
  "Newborn Photography",
];

const TagCard = ({ name }: { name: string }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl px-8 py-4 text-lg font-semibold text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 cursor-pointer transition-all hover:shadow-xl hover:scale-105">
      {name}
    </div>
  );
};

const Tags = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="   flex flex-col items-center justify-center">
        <div className="text-3xl font-bold text-gray-800 dark:text-white text-center flex mb-8 gap-2 px-1">
        <Camera className="w-9 h-9 text-blue-600 dark:text-blue-400 px-1" />
          <TextAnimate animation="blurIn" as="h1">
             Photography Categories
          </TextAnimate>
        </div>

        {/* Marquee Effect for Scrolling Tags */}
        <Marquee pauseOnHover className="[--duration:15s]">
          <div className="flex gap-x-8 p-4">
            {categories.map((category, index) => (
              <TagCard key={index} name={category} />
            ))}
          </div>
        </Marquee>

        <Marquee direction="right" pauseOnHover className="[--duration:15s]">
          <div className="flex gap-x-8 p-4">
            {categories.map((category, index) => (
              <TagCard key={`reverse-${index}`} name={category} />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Tags;
