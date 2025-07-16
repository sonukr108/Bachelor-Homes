import Logo from '../assets/logo.svg'
import {Link} from 'react-router-dom'
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='border-b-2 border-gray-300 px-[8%] py-2'>
      <nav className='flex justify-between items-center'>
        <img className='h-15' src={Logo} alt="bachelor-homes logo" />
        <div className='right-part flex gap-4 font-semibold'>
          <Link className='flex items-center' to="/">Explore Residences</Link>
          <Link className='flex items-center gap-2' href="#">Know more <FaChevronDown /></Link>
          <Link to="/" className='bg-[#520075] text-white px-4 py-2 rounded-sm'>Sign in</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
