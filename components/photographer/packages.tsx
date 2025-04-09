"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const packages = [
  {
    title: "Basic Package",
    price: "₹9,999",
    features: ["2-Hour Session", "30 Edited Photos", "1 Location", "Online Delivery"],
    bestFor: "Personal Shoots / Portraits"
  },
  {
    title: "Wedding Package",
    price: "₹29,999",
    features: ["Full-Day Coverage", "Unlimited Photos", "Album Included", "Drone Shots"],
    bestFor: "Weddings / Pre-Wedding"
  },
  {
    title: "Premium Package",
    price: "₹49,999",
    features: ["2 Days Coverage", "Cinematic Video", "Premium Album", "Social Media Edits"],
    bestFor: "Destination / Luxury Weddings"
  },
];

const Packages = () => {
  return (
    <section className=" bg-gray-100 dark:bg-neutral-950">
      <div className="py-16 px-4 max-w-[1200px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl text-center font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Packages & Pricing
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Choose the plan that fits your special day</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-6 flex flex-col"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{pkg.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{pkg.bestFor}</p>
              <div className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">{pkg.price}</div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 flex-1">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Book Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
