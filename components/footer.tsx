import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand & Description */}
        <div>
          <Image
            src="/Shutter-Club.png"
            alt="Shutter Club Logo"
            width={130}
            height={50}
            priority
          />
          <p className="text-gray-400 mt-2">
            Find the best photographers for your special moments.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>
              <Link href="/about" className="hover:text-white">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-400 transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-red-500 transition">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold">Subscribe</h3>
          <p className="text-gray-400 text-sm mt-1">Get the latest updates & offers.</p>
          <div className="mt-3 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l bg-gray-800 text-white border border-gray-600 focus:outline-none"
            />
            <button className="px-4 py-2 bg-blue-600 rounded-r hover:bg-blue-500 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 text-center text-gray-400 py-4">
        © {new Date().getFullYear()} Club.Shuttercloud.In. All Rights Reserved.
      </div>
    </footer>
  );
}
