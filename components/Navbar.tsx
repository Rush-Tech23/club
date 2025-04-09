// "use client";
// import { useState } from "react";
import Link from "next/link";
// import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Theme from "./theme";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/50 dark:bg-neutral-900/60 backdrop-blur-md shadow-lg transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/Shutter-Club.png" 
              alt="Shutter Club Logo"
              width={130}  
              height={50}  
              priority
            />
          </Link>

          {/* Desktop Links */}
         {/* Right side nav items */}
<div className="flex items-center space-x-4">
  <div className="hidden md:flex items-center space-x-6">
    <Theme />
    <Link 
      href="/login" 
      className="bg-blue-500 dark:bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-600 dark:hover:bg-blue-700 transition"
    >
      Login
    </Link>
  </div>

  {/* Mobile: Theme + small login button */}
  <div className="flex md:hidden items-center space-x-3">
    <Theme />
    <Link 
      href="/login" 
      className="text-blue-500 dark:text-blue-400 text-sm font-medium underline"
    >
      Login
    </Link>

    {/* Hamburger menu button */}
    {/* <button 
      className="text-gray-800 dark:text-white"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
    </button> */}
  </div>
</div>


          {/* Mobile Menu Button */}
          {/* <button 
            className="md:hidden text-gray-800 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {/* <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white/40 dark:bg-gray-800/60 backdrop-blur-lg transition-transform duration-300 shadow-md ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-6 py-4">
          <Link 
            href="/login" 
            className="block text-center bg-blue-500 dark:bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-600 dark:hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
