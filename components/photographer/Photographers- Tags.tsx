"use client";

import { motion } from "framer-motion";

type Props = {
  tags: string[];
};

const tagVariants = {
  hidden: { opacity: 0, y: 10 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const Tags = ({ tags }: Props) => {
  return (
    <motion.div
      className="flex flex-wrap gap-3 justify-center md:justify-start"
      initial="hidden"
      animate="show"
    >
      {tags.map((tag, i) => (
        <motion.span
          key={i}
          variants={tagVariants}
          custom={i}
          className="bg-gray-100 border border-gray-200 px-4 py-2 text-sm rounded-full text-gray-700"
        >
          {tag} Photography
        </motion.span>
      ))}
    </motion.div>
  );
};

export default Tags;
