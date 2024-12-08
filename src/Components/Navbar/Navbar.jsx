import React from 'react';
import Logo from '../../assets/logo.png';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from '../DarkMode';

// Menu data should be properly defined.
const Menu = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "Top rated",
    link: "#Services",
  },
  {
    id: 3,
    name: "Kids wear",
    link: "#",
  },
  {
    id: 4,
    name: "Mens wear",
    link: "#",
  },
  {
    id: 5, // Changed to a unique ID for the "crow" menu item
    name: "Electronics",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 text-white duration-300 relative z-40">
      {/* Upper Navbar */}
      <div className='bg-primary/40 py-3 sm:py-0'>
        <div className='container flex justify-between items-center'>
          <div>
            <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
              <img src={Logo} alt="Logo" className='w-10 uppercase' />
              Shopsy
            </a>
          </div>
          {/* Searchbar */}
          <div className='flex justify-between items-center gap-4'>
            <div className="flex relative group sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border-gray-300 px-2 py-1 focus:border-1 focus:border-primary"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button
              onClick={() => alert("Ordering is not available yet")}
              className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'
            >
              <span className='group-hover:block hidden transition-all duration-200'>
                Order
                <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
              </span>
            </button>
            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className='flex justify-center'>
        <ul className="flex space-x-4 gap-4">
          {
            Menu.map((data) => (
              <li key={data.id}>
                <a href={data.link} className="text-gray-800 inline-block px-4 dark:text-white hover:text-primary duration-200">{data.name}</a>
              </li>
            ))
        } 
         {/* Simple dropdown links */} 
          <li>
            <a href="#"
            className=' text-black flex items-center gap-[2px] py-2  hover:text-primary duration-200'>Trending </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
