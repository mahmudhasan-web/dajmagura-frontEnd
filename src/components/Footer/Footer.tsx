import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Social Icons */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h1 className="text-4xl font-bold">Magura</h1>
          <div className="flex space-x-4 mt-2">
            <Link href="#" className="text-white hover:text-gray-400 text-2xl">
              <FaFacebook />
            </Link>
            <Link href="#" className="text-white hover:text-gray-400 text-2xl">
              <FaInstagram />
            </Link>
            <Link href="#" className="text-white hover:text-gray-400 text-2xl">
              <FaLinkedin />
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
       

        {/* Rights Section */}
        <div className="text-sm text-gray-200 space-y-6">
        <ul className="flex space-x-8 text-sm font-medium mb-4 md:mb-0">
          <li>
            <Link href="/" className="hover:text-gray-400">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-400">
              SERVICES
            </Link>
          </li>
          <li>
            <Link href="/testimonials" className="hover:text-gray-400">
              TESTIMONIALS
            </Link>
          </li>
        </ul>
         <h1> All rights reserved to @magura © 2024</h1>
        </div>
      </div>
    </footer>
    );
};

export default Footer;