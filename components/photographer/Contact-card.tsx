'use client';

import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaInstagram,
  FaGlobe,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { SiBehance } from 'react-icons/si';
import { useState } from 'react';
import { CalendarDays } from 'lucide-react';

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
    console.log('Booking submitted:', form);
  };

  const contactItems = [
    {
      icon: <FaEnvelope className="text-red-500" />,
      label: 'Email',
      value: compact ? contact.email.split('@')[0] + '@...' : contact.email,
      href: `mailto:${contact.email}`,
      color: 'hover:text-red-500',
    },
    {
      icon: <FaInstagram className="text-pink-600" />,
      label: 'Instagram',
      value: compact
        ? contact.instagram.split('/').pop()?.substring(0, 10) + '...'
        : contact.instagram.replace('https://www.instagram.com/', '@'),
      href: contact.instagram,
      color: 'hover:text-pink-600',
    },
    {
      icon: <FaGlobe className="text-blue-600" />,
      label: 'Website',
      value: compact
        ? contact.website.replace(/(^\w+:|^)\/\//, '').split('/')[0].substring(0, 12) + '...'
        : contact.website.replace(/(^\w+:|^)\/\//, ''),
      href: contact.website,
      color: 'hover:text-blue-600',
    },
    ...(contact.phone
      ? [
          {
            icon: <FaPhone className="text-green-500" />,
            label: 'Phone',
            value: contact.phone,
            href: `tel:${contact.phone}`,
            color: 'hover:text-green-500',
          },
        ]
      : []),
    ...(contact.location
      ? [
          {
            icon: <FaMapMarkerAlt className="text-purple-500" />,
            label: 'Location',
            value: compact ? contact.location.split(',')[0] : contact.location,
            href: `https://maps.google.com?q=${encodeURIComponent(contact.location)}`,
            color: 'hover:text-purple-500',
          },
        ]
      : []),
    ...(contact.behance
      ? [
          {
            icon: <SiBehance className="text-blue-800" />,
            label: 'Behance',
            value: compact
              ? contact.behance.split('/').pop()?.substring(0, 8) + '...'
              : contact.behance.replace('https://www.behance.net/', ''),
            href: contact.behance,
            color: 'hover:text-blue-800',
          },
        ]
      : []),
  ];

  return (
    <section className="w-full px-4 py-10 md:px-8 bg-muted/30 dark:bg-muted/10">
      <motion.div
        className="w-full max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100 dark:border-gray-700 grid grid-cols-1 md:grid-cols-2 gap-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Contact Info Section */}
        <div>
          <motion.h3
            className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            Get In Touch
          </motion.h3>

          <div className="space-y-4">
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className={`text-2xl p-2 bg-gray-100 dark:bg-gray-700 rounded-full ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block font-medium text-gray-700 dark:text-gray-200 transition-colors truncate ${item.color}`}
                  >
                    {item.value}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Booking Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
            <CalendarDays className='h-5 w-5'/>
             Book a Session
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: 'Your Name', name: 'name', type: 'text' },
              { label: 'Phone Number', name: 'phone', type: 'tel' },
              { label: 'Preferred Date', name: 'date', type: 'date' },
            ].map((field, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
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
      </motion.div>
    </section>
  );
};

export default ContactCard;
