'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const BookingPhotographer = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submit (API call or toast)
    console.log('Booking submitted:', form);
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-gray-100 dark:bg-gray-800 p-8 md:p-10 rounded-3xl shadow-xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-6"
        >
          📅 Book a Session
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: 'Your Name', name: 'name', type: 'text' },
            { label: 'Phone Number', name: 'phone', type: 'tel' },
            { label: 'Preferred Date', name: 'date', type: 'date' },
          ].map((field, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.1 }}
            >
              <label className="block text-gray-700 dark:text-gray-300 mb-1 font-medium">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={form[field.name as keyof typeof form]}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
        
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            Confirm Booking
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default BookingPhotographer;
