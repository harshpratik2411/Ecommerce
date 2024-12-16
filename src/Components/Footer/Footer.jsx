import React from 'react';
import Footerlogo from '../../assets/Footerlogo/Foot.jpg'; // Ensure path is correct 
import {
     FaFacebook,
     FaInstagram,
     FaLinkedin,
     FaLocationArrow,
     FaMobileAlt, 
     FaGithub ,
     FaApple,
   }   from "react-icons/fa"



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
  // Console log the image URL to check if it’s correct
  console.log(Footerlogo);

  return (
    <div style={BannerImg} className="text-black mb-20">
      <div  data-aos="zoom-in"
       className="container h-96 ">
        <div className="flex justify-between items-center">
          {/* Company details */}
          <div className='py-8 px-4'>
            <h1  
             className='sm:text-3xl text-3xl font-bold sm:text-left text-justify gap-6 pb-44' 
              >Shopsy</h1> 
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Laboriosam, error eos rerum accusamus cupiditate recusandae.
            </p>
          </div>

          {/* Footer links */} 
          <div> 
          <div data-aos="zoom-in"
           className='grid grid-cols-2  col-span-2 pv-44 gap-15 pt-4 md:pl-10'> 
            <h1 className='sm:text-1xl text-2xl font-bold sm:text-left text-justify mb-3'>
              Important Links
            </h1>
            <ul className="flex  flex-col gap-3 "> 
              {FooterLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="hover:text-primary cursor-pointer hover:translate-x-1 duration-300  text-black p-10 text-l font-semibold  "> 
                    {link.title}
                  </a>
                </li>
              ))}
            </ul> 
          </div>
        </div>   
          {/* <div> 
          <div className='grid grid-cols-2  col-span-2 pv-44 gap-15 pt-4 md:pl-10'> 
            <h1 className='sm:text-1xl text-xl font-bold sm:text-left text-justify mb-3'>
              Important Links
            </h1>
            <ul className="flex  flex-col gap-3 "> 
              {FooterLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="hover:text-primary cursor-pointer hover:translate-x-1 duration-300  text-black p-10 text-l font-semibold  "> 
                    {link.title}
                  </a>
                </li>
              ))}
            </ul> 
          </div>
        </div>    */}
          {/* social Links */}  
          <div>
              <div className='flex items-center gap-6 mt-1 px-6'>
                <a href="#">
               <FaInstagram  className="text-3xl"/>
                </a> 
                <a href="#">
               <FaFacebook  className="text-3xl"/>
                </a> 
                <a href="#">
               <FaLinkedin  className="text-3xl"/>
                </a> 
                <a href="#">
               <FaGithub  className="text-3xl"/>
                </a> 
                <a href="#">
               <FaApple  className="text-3xl"/>
                </a> 
              </div>
                
          <div className='mt-6'>
             <div className='flex items-center gap-6  '
            >< FaLocationArrow className='text-2xl'/> 
            <p>Varanasi ,Uttar pradesh</p>
              
              </div> 
             <div className=' text-right flex  items-center gap-8 mt-3 px-2 '
            >< FaMobileAlt className='text-2xl'/> 
            <p >+91 1234567890</p>
              
              </div>
           </div> 
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Footer;
