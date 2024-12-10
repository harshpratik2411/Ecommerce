import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from '../DarkMode';
import { FaCaretDown } from 'react-icons/fa6';

// Menu data
const Menu = [
  { id: 1, name: "Home", link: "#" },
  { id: 2, name: "Top rated", link: "#Services" },
  { id: 3, name: "Kids wear", link: "#" },
  { id: 4, name: "Mens wear", link: "#" },
  { id: 5, name: "Electronics", link: "#" },
];

const DropdownLinks = [
  { id: 1, name: "Trending", links: "/#" },
  { id: 2, name: "Best selling", links: "/#" },
  { id: 3, name: "Top products", links: "/#" },
  { id: 4, name: "Gadgets", links: "/#" },
  { id: 5, name: "Top rated", links: "/#" },
];

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

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
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 
                rounded-full border-gray-300 px-2 py-1 focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
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
          {Menu.map((data) => (
            <li key={data.id}>
              <a href={data.link} className="text-gray-800 inline-block px-4 dark:text-white hover:text-primary duration-200">
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple dropdown links */} 
          <li
            className='group relative cursor-pointer'
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            <a href="#"
              className='text-blue-500 flex items-center gap-[2px] py-2 hover:text-primary duration-200'
            >
              Trending products
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </a>
            <div className={`absolute ${dropdownOpen ? 'block' : 'hidden'} z-10 w-[150px] rounded-md bg-white text-black shadow-lg`}>
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a href={data.links} className=' w-full block px-4 py-2 hover:bg-gray-100 hover:text-primary'>
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
