import React from 'react';
import Logo from '../assets/lightLogo.svg'; // Update with your actual logo path
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#520075] text-white px-[5%] py-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Socials */}
        <div className="flex flex-col items-start gap-6">
          <img src={Logo} alt="Bachelor Homes logo" className="h-25" />
          <div className="flex gap-4">
            <a href="#" className="bg-white text-[#520075] p-2 rounded"><FaFacebookF size={20}/></a>
            <a href="#" className="bg-white text-[#520075] p-2 rounded"><FaTwitter size={20}/></a>
            <a href="#" className="bg-white text-[#520075] p-2 rounded"><FaLinkedinIn size={20}/></a>
            <a href="#" className="bg-white text-[#520075] p-2 rounded"><FaInstagram size={20}/></a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-bold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Team</a></li>
            <li><a href="#" className="hover:underline">Partner with us</a></li>
            <li><a href="#" className="hover:underline">Blogs</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="font-bold mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">T&C</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-white border-t border-white/30 pt-4">
        <p>
          Copyright © 2025 | All Rights Reserved by coding w0rld Pvt Ltd. | ♡ Sonu Kumar Verma ♡
        </p>
      </div>
    </footer>
  );
};

export default Footer;
