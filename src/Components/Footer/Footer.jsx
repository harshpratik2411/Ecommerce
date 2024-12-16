import React from 'react';
import Footerlogo from '../../assets/Footerlogo/Foot.jpg'; // Ensure path is correct 
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaGithub,
  FaApple,
} from 'react-icons/fa';

// Inline style for the footer background
const BannerImg = {
  backgroundImage: `url(${Footerlogo})`, // Correct syntax for string interpolation
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
};

const FooterLinks = [
  { title: 'Home', link: '/#' },
  { title: 'About', link: '/#about' },
  { title: 'Contact', link: '/#contact' },
  { title: 'Blog', link: '/#blog' },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-black mb-20">
      <div data-aos="zoom-in" className="container py-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
          {/* Company details */}
          <div className="text-center md:text-left px-4">
            <h1 className="text-3xl font-bold text-Black">Shopsy</h1>
            <p className="text-sm text-black mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, error eos rerum accusamus cupiditate recusandae.
            </p>
          </div>

          {/* Footer links */}
          <div className="w-full md:w-1/3">
            <h1 className="text-xl font-bold text-black mb-3">Important Links</h1>
            <ul className="flex flex-col gap-3">
              {FooterLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="text-black hover:text-primary cursor-pointer hover:translate-x-1 duration-300 text-l font-semibold"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
            <div className="flex gap-6 mt-4">
              <a href="#" className="text-3xl text-black">
                <FaInstagram />
              </a>
              <a href="#" className="text-3xl text-black">
                <FaFacebook />
              </a>
              <a href="#" className="text-3xl text-black">
                <FaLinkedin />
              </a>
              <a href="#" className="text-3xl text-black">
                <FaGithub />
              </a>
              <a href="#" className="text-3xl text-black">
                <FaApple />
              </a>
            </div>

            <div className="mt-6 flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 text-black">
                <FaLocationArrow className="text-2xl" />
                <p>Varanasi, Uttar Pradesh</p>
              </div>
              <div className="mt-3 flex items-center gap-2 text-black">
                <FaMobileAlt className="text-2xl" />
                <p>+91 1234567890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
