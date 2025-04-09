'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const services = [
  'Wedding Photography',
  'Pre-Wedding Shoot',
  'Candid Photography',
  'Event Coverage',
  'Fashion Photography',
  'Product Shoot',
  'Baby Shoot',
  'Real Estate Photography',
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ServicesOffered = () => {
  return (
    <section className="px-4 py-14 md:px-16 bg-gray-100 dark:bg-neutral-950">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-5xl mx-auto text-center"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
           Services Offered
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-3 bg-white dark:bg-neutral-900 shadow-md hover:shadow-lg transition-all rounded-2xl p-5"
            >
              <CheckCircle className="text-green-600 dark:text-green-400" size={26} />
              <span className="text-lg font-medium text-gray-800 dark:text-gray-100">
                {service}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesOffered;
