'use client';

import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: 'Aarav Mehta',
    rating: 5,
    message: 'Absolutely stunning shots! Truly captured the emotions of our day.',
  },
  {
    name: 'Sneha Kapoor',
    rating: 4,
    message: 'Loved the editing style and color grading. Very professional work.',
  },
  {
    name: 'Ravi Kumar',
    rating: 5,
    message: 'Quick delivery and amazing attention to detail. Highly recommend!',
  },
  {
    name: 'Priya Sharma',
    rating: 4,
    message: 'The candid shots were beautiful. Would book again!',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const ClientReviews = () => {
  const averageRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <section className="px-4 py-10 md:px-16 bg-gray-100 dark:bg-neutral-950 ">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={container}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl text-center font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Ratings and Reviews from Clients
        </h2>

        <div className="mb-8">
          <p className="text-2xl font-semibold text-yellow-500 flex items-center justify-center gap-2">
            {averageRating.toFixed(1)} <FaStar /> 
          </p>
          <p className="text-muted-foreground">{reviews.length} verified reviews</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white dark:bg-neutral-900 p-5 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-2 mb-2">
                <StarRating rating={review.rating} />
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                “{review.message}”
              </p>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                — {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}
        />
      ))}
    </div>
  );
};

export default ClientReviews;
