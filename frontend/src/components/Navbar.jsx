import { useState } from 'react';
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";
import { IoReorderThree, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className='border-b-2 border-gray-300 px-[5%] py-2 relative z-50 bg-white'>
        <nav className='flex justify-between items-center'>
          <img className='h-10 md:h-15' src={Logo} alt="bachelor-homes logo" />

          {/* Desktop Menu */}
          <div className='hidden md:flex gap-4 font-semibold'>
            <Link className='flex items-center' to="/">Explore Residences</Link>
            <Link className='flex items-center gap-2' to="#">Know more <FaChevronDown /></Link>
            <Link to="/" className='bg-[#520075] text-white px-4 py-2 rounded-sm'>Sign in</Link>
          </div>

          {/* Hamburger Icon */}
          <div
            className='md:hidden flex items-center justify-center cursor-pointer z-50'
            onClick={() => setIsOpen(true)}
          >
            <IoReorderThree size={30} />
          </div>
        </nav>
      </div>

      {/* Sidebar from Right */}
      <div className={`fixed top-0 right-0 h-full w-60 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-3">
          <button onClick={() => setIsOpen(false)}>
            <IoClose size={28} />
          </button>
        </div>
        <div className="flex flex-col gap-4 p-4 font-semibold">
          <Link to="/" onClick={() => setIsOpen(false)}>Explore Residences</Link>
          <Link to="#" onClick={() => setIsOpen(false)} className='flex items-center gap-2'>Know more <FaChevronDown /></Link>
          <Link to="/" onClick={() => setIsOpen(false)} className='bg-[#520075] text-white px-4 py-2 rounded-sm w-fit'>Sign in</Link>
        </div>
      </div>

      {/* Blurred Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-xs bg-black/10 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
