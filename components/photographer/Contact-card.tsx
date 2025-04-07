"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaInstagram, FaGlobe, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { SiBehance } from "react-icons/si";

type ContactInfo = {
  email: string;
  instagram: string;
  website: string;
  phone?: string;
  location?: string;
  behance?: string;
};

type Props = {
  contact: ContactInfo;
  compact?: boolean;
};

const ContactCard = ({ contact, compact = false }: Props) => {
  const contactItems = [
    {
      icon: <FaEnvelope className="text-red-500" />,
      label: "Email",
      value: compact ? contact.email.split('@')[0] + '@...' : contact.email,
      href: `mailto:${contact.email}`,
      color: "hover:text-red-500"
    },
    {
      icon: <FaInstagram className="text-pink-600" />,
      label: "Instagram",
      value: compact ? contact.instagram.split('/').pop()?.substring(0, 10) + '...' : 
             contact.instagram.replace("https://www.instagram.com/", "@"),
      href: contact.instagram,
      color: "hover:text-pink-600"
    },
    {
      icon: <FaGlobe className="text-blue-600" />,
      label: "Website",
      value: compact ? contact.website.replace(/(^\w+:|^)\/\//, '').split('/')[0].substring(0, 12) + '...' : 
             contact.website.replace(/(^\w+:|^)\/\//, ''),
      href: contact.website,
      color: "hover:text-blue-600"
    },
    ...(contact.phone ? [{
      icon: <FaPhone className="text-green-500" />,
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone}`,
      color: "hover:text-green-500"
    }] : []),
    ...(contact.location ? [{
      icon: <FaMapMarkerAlt className="text-purple-500" />,
      label: "Location",
      value: compact ? contact.location.split(',')[0] : contact.location,
      href: `https://maps.google.com?q=${encodeURIComponent(contact.location)}`,
      color: "hover:text-purple-500"
    }] : []),
    ...(contact.behance ? [{
      icon: <SiBehance className="text-blue-800" />,
      label: "Behance",
      value: compact ? contact.behance.split('/').pop()?.substring(0, 8) + '...' : 
             contact.behance.replace("https://www.behance.net/", ""),
      href: contact.behance,
      color: "hover:text-blue-800"
    }] : [])
  ];

  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 ${compact ? 'max-w-xs' : 'max-w-md'}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
    >
      <motion.h3 
        className={`font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 ${compact ? 'text-lg' : 'text-xl'}`}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-1.5 rounded-lg">
          <FaEnvelope className={compact ? "text-sm" : ""} />
        </span>
        {compact ? "Contact" : "Get In Touch"}
      </motion.h3>

      <div className="space-y-3">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`${compact ? 'text-xl p-1.5' : 'text-2xl p-2'} bg-gray-100 dark:bg-gray-700 rounded-full ${item.color}`}
            >
              {item.icon}
            </motion.div>
            <div className="flex-1 min-w-0">
              {!compact && <p className="text-xs text-gray-500 dark:text-gray-400">{item.label}</p>}
              <motion.a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block font-medium text-gray-700 dark:text-gray-200 transition-colors truncate ${item.color} ${compact ? 'text-sm' : ''}`}
                whileHover={{ x: 3 }}
                title={compact ? item.value : undefined}
              >
                {item.value}
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {!compact && (
        <motion.div 
          className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg text-sm font-medium shadow-sm transition-all"
          >
            Send Message on Whatsapp
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ContactCard;