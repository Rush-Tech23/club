import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";
import { TextAnimate } from "./magicui/text-animate";

const testimonials = [
  {
    name: "Amit Sharma",
    location: "Mumbai, India",
    review: "The best photographer I’ve ever worked with! Highly professional and creative.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Sneha Kapoor",
    location: "Delhi, India",
    review: "Captured the perfect moments at my wedding. Absolutely loved the experience!",
    rating: 4,
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Rohan Verma",
    location: "Bangalore, India",
    review: "Superb work! Very friendly and delivers high-quality images.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Priya Iyer",
    location: "Chennai, India",
    review: "Amazing photography skills. The pictures turned out perfect!",
    rating: 4,
    img: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const TestimonialCard = ({
  name,
  location,
  review,
  rating,
  img,
}: {
  name: string;
  location: string;
  review: string;
  rating: number;
  img: string;
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 w-80 mx-3 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl">
      <Image
        src={img}
        alt={name}
        width={80}
        height={80}
        className="rounded-full mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
        {name}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{location}</p>

      <div className="flex justify-center mt-2">
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
      </div>

      <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">{review}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="relative w-full py-12 bg-gray-100 dark:bg-gray-900 px-4">
      <div className="max-w-[1200px] mx-auto relative">
        <div className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">
          <TextAnimate animation="blurIn" as="h1">
            ⭐ Testimonials & Ratings
          </TextAnimate>
        </div>

        {/* Fade effect */}
        <div className="absolute top-0 bottom-0 left-0 w-12 z-10 bg-gradient-to-r from-gray-100 dark:from-gray-900 to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 z-10 bg-gradient-to-l from-gray-100 dark:from-gray-900 to-transparent pointer-events-none" />

        <Marquee pauseOnHover className="w-full">
          <div className="flex items-center gap-6 px-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonials;
