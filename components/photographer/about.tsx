'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

interface AboutBioProps {
  bio: string;
}

const AboutBio = ({ bio }: AboutBioProps) => {
  return (
    <section className="px-4 py-14 md:px-16 bg-gray-100 dark:bg-gray-900 rounded-3xl shadow-inner">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          About the Photographer
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          {bio}
        </p>
      </motion.div>
    </section>
  );
};

export default AboutBio;
