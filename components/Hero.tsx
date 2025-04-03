"use client";

import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";
import { BackgroundLines } from "./ui/background-lines";
import { AuroraText } from "./magicui/aurora-text";


export default function Hero () {
  return (
    <>
      <BackgroundLines>
        <section
          className="relative w-full h-[100vh] flex items-center justify-center text-gray-900 dark:text-white bg-cover bg-center mt-10"
        >
          {/* Animated Grid Background */}
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[150%] skew-y-12"
            )}
          />

          {/* Content */}
          <div className="relative max-w-4xl mx-auto text-center px-4">
            <div className="text-4xl md:text-5xl font-extrabold ">
              <AuroraText>
                Find the Best Photographers Near You
              </AuroraText>
              📷
             
            </div>

            <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300">
              Discover professional photographers for weddings, events, portraits, and more.
            </p>

            {/* Search Bar */}
            <div className="mx-auto mb-10 w-full max-w-2xl mt-6">
              <div className="flex overflow-hidden rounded-lg shadow-lg">
                <input
                  type="text"
                  placeholder="Search for Photographers..."
                  className="w-full bg-gray-100 dark:bg-gray-900 px-6 py-4 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="flex items-center justify-center bg-blue-600 dark:bg-blue-500 px-6 py-4 text-white transition hover:bg-blue-700 dark:hover:bg-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </BackgroundLines>
    </>
  );
};


