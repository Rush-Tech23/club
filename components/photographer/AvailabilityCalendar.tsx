'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { format, addDays, isSameDay } from 'date-fns';

const generateDates = (numDays = 14) => {
  const today = new Date();
  return Array.from({ length: numDays }, (_, i) => addDays(today, i));
};

const AvailabilityCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const dates = generateDates();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-xl max-w-3xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
        📅 Book Your Session
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {dates.map((date) => {
          const isSelected = selectedDate && isSameDay(date, selectedDate);

          return (
            <motion.button
              key={date.toISOString()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedDate(date)}
              className={`rounded-xl px-4 py-3 font-medium text-sm transition-all shadow-sm border 
                ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg'
                    : 'bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-neutral-700 hover:bg-blue-100 dark:hover:bg-neutral-700'
                }`}
            >
              <div>{format(date, 'EEE')}</div>
              <div className="text-lg">{format(date, 'dd')}</div>
            </motion.button>
          );
        })}
      </div>

      {selectedDate && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-center"
        >
          <p className="text-base text-gray-700 dark:text-gray-300">
            Selected Date:{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              {format(selectedDate, 'eeee, MMMM do')}
            </span>
          </p>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all"
          >
            Confirm Booking
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AvailabilityCalendar;
