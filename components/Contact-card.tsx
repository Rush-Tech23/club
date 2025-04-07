"use client";

import { motion } from "framer-motion";

type Props = {
  contact: {
    email: string;
    instagram: string;
    website: string;
  };
};

const ContactCard = ({ contact }: Props) => {
  return (
    <motion.div
      className="border-t pt-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-2">📞 Contact</h3>
      <div className="space-y-2 text-gray-600">
        <p>
          Email:{" "}
          <a className="text-blue-600 underline" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </p>
        <p>
          Instagram:{" "}
          <a className="text-blue-600 underline" href={contact.instagram} target="_blank">
            {contact.instagram}
          </a>
        </p>
        <p>
          Website:{" "}
          <a className="text-blue-600 underline" href={contact.website} target="_blank">
            {contact.website}
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default ContactCard;
