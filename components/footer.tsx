import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-900 text-neutral-800 dark:text-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-300 dark:border-gray-700">
        {/* Brand Section */}
        <div>
         <Image
            src="/Shutter-Club.png"
            alt="Shutter Club Logo"
            width={130}
            height={50}
            priority
            />
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Find the best photographers for your special moments — from weddings to creative portraits.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-sky-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
            <li><Link href="/refunds" className="hover:underline">Refunds & Returns</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Stay in the loop with new photographers, stories, and offers.
          </p>
          <div className="flex mt-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 text-sm rounded-l bg-gray-100 dark:bg-neutral-800 border border-gray-300 dark:border-gray-600 text-neutral-800 dark:text-white focus:outline-none"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-500 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action + Copyright */}
      <div className="text-center ">
        {/* <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight">
          Let’s <span className="font-semibold">Collaborate</span>
        </h2> */}
        <p className="text-sm mt-4 text-gray-500 dark:text-gray-500 pb-4">
          &copy; {new Date().getFullYear()} Shutter Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
