import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll';
import Logo from '../../src/assets/logo.png';


import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-gradient-to-r from-blue-500 to-purple-500 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
        <Link className='cursor-pointer' to='/'><img src={Logo} alt="Your Logo" className="w-auto h-12 mr-4 sm:h-12" /></Link>
          
        </div>
        <div className='hidden md:flex pr-4'>
        <ul className='hidden md:flex'>
          <li className='text-white hover:text-gray-200 cursor-pointer'><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='text-white hover:text-gray-200 cursor-pointer'><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='text-white hover:text-gray-200 cursor-pointer'><Link to="support" smooth={true} offset={-50} duration={500}>Program</Link></li>
          <li className='text-white hover:text-gray-200 cursor-pointer'><Link to="platforms" smooth={true} offset={-100} duration={500}>Blog</Link></li>
          <li className='text-white hover:text-gray-200 cursor-pointer'><Link to="pricing" smooth={true} offset={-50} duration={500}>Testimonials</Link></li>
          <li className='text-white hover:text-gray-200 cursor-pointer'><Link to="pricing" smooth={true} offset={-50} duration={500}>FAQ</Link></li>
          <li className='text-white hover:text-gray-200 cursor-pointer'><Link to="pricing" smooth={true} offset={-50} duration={500}>Contact</Link></li>
          </ul>
          <button className='px-8 py-3'>Appointment</button>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>

        <div className='flex flex-col my-4'>
            <button className='px-8 py-3'>Appointment</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
