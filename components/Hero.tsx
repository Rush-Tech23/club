"use client";

import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";
import { Lexend } from 'next/font/google';
import { Search, Camera, MapPin } from "lucide-react";
import Image from "next/image";

const lexend = Lexend({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export default function Hero() {
  return (
    <section
      className={cn(
        "relative w-full min-h-screen py-12 md:py-0 flex items-center justify-center overflow-hidden bg-gradient-to-br",
        "from-white to-gray-100 dark:from-neutral-950 dark:to-neutral-950",
        lexend.className
      )}
    >
      {/* Animated Grid Background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.08}
        duration={4}
        repeatdelay={1}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "absolute inset-x-0 inset-y-[-20%] h-[140%] skew-y-6"
        )}
      />

      {/* Background Photography Image */}
      <div className="absolute inset-0 opacity-10 dark:opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 mix-blend-overlay" />
        <Image
          src="/bg.jpg"
          alt="Photography background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 z-10">
        {/* Left Content */}
        <div className="flex flex-col justify-center text-left space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-500/10 px-4 py-2 rounded-full w-fit">
            <Camera className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Photography Club</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Connect with <span className="text-blue-600 dark:text-blue-400">Professional</span> Photographers
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-400 max-w-lg">
            Discover talented photographers for your events, special moments, and creative projects in your area.
          </p>

          {/* Enhanced Search Bar */}
          <div className="relative mt-2 max-w-lg">
            <div className="backdrop-blur-md bg-white/80 dark:bg-neutral-900/80 rounded-2xl shadow-xl border border-gray-200/50 dark:border-neutral-800 p-1.5">
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 relative flex items-center p-3 md:border-r border-gray-200 dark:border-neutral-800">
                  <Search className="h-5 w-5 text-blue-500 mr-3" />
                  <input
                    type="text"
                    placeholder="Find photographers..."
                    className="w-full bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-neutral-500 focus:outline-none"
                  />
                </div>
                <div className="relative flex items-center p-3">
                  <MapPin className="h-5 w-5 text-blue-500 mr-3" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-neutral-500 focus:outline-none"
                  />
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3 font-medium">
                  Search
                </button>
              </div>
            </div>

            {/* Search Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              {["Wedding", "Portrait", "Event", "Commercial"].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:flex items-center justify-center relative">
          <div className="absolute w-64 h-64 bg-blue-500/20 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <Image
              src="/hero.jpg"
              alt="Featured photographer"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-8 bg-transparent" />
    </section>
  );
}
