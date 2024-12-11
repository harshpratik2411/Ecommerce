import React from 'react';
import image1 from '../../assets/hero/img1.png';
import image2 from '../../assets/hero/img2.png';
import image3 from '../../assets/hero/img3.png'; 
import image4 from '../../assets/hero/img4.png'
import Slider from "react-slick"; 

// Import slick-carousel styles (for carousel functionality)
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

// Array of images and titles
const ImageList = [ 
    {
        id: 3,
        img: image3, 
        title: 'Upto 50% Off price above $50',
    },
    {
        id: 1,
        img: image1, 
        title: 'Upto 30% Off oo Unisex items ',
    },
    {
        id: 4,
        img: image4, 
        title: 'Buy one get one free',
    },
    {
        id: 2,
        img: image2, 
        title: 'Upto  20% Off on kids ',
    },
   
];

// Hero component with carousel
const Hero = () => {
    const settings = {
        dots: true, // Show navigation dots
        arrows: false, // Disable next/prev arrows
        infinite: true, // Infinite loop
        speed: 800, // Transition speed
        slidesToScroll: 1,
        autoplay: true, // Auto play the carousel
        autoplaySpeed: 4000, // Speed of autoplay
        pauseOnHover: false, // Pause when hovering
        pauseOnFocus: true, // Pause when hovering
        CssEase:' ease-in-out',
    };

    return (
        <div className='relative overflow-hidden min-h-[500px] sm:w-full bg-gray-100 flex justify-center items-center dark:bg-gray-950 text-white duration-200'>
            {/* Background pattern */}
            <div className='h-[600px] w-[600px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div> 

            {/* Hero Section */}
            <div className='container pb-8 sm:pb-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    {/* Text content section */}
                    <div className='flex flex-col justify-center gap-4 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                        <h1  data-aos ="zoom-out"
                          data-aos-duration = '500'
                       data-aos-once = "true"   
                          className='text-black dark:text-white text-5xl sm:text-6xl font-bold'>Lorem ipsum dolor sit.</h1>
                        <p  
                        data-aos ="zoom-out"
                        data-aos-duration = '500'
                     data-aos-delay = "100"   
                     className='text-black dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, explicabo?</p>
                        <div 
                              data-aos = "fade"
                              data-aos-duration = "500"
                              data-aos-elay = "300">
                            <button className='bg-gradient-to-r bg-primary to-secondary hover:scale-105 duration-200 rounded-3xl'>
                                Order Now
                            </button>
                        </div>
                    </div>
  
                    {/* Carousel image section */}
                    <div className='order-1 sm:order-2 '>  
                      <div  data-aos ="zoom-in"
                       data-aos-once = "true"          
                      className='relative z-10'/> 
                        <Slider {...settings}>
                            {ImageList.map(image => (
                                <div key={image.id} className='relative'>
                                    <img   
                                    
                                    data-aos ="zoom-out"
                                data-aos-duration = '500'
                                  data-aos-delay = "200"   
                                        src={image.img} 
                                        alt={image.title} 
                                        className='w-full h-[300px] sm:h-[450px] object-cover mx-auto rounded-lg shadow-lg'
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-black p-4 text-center">
                                        <h3 className="text-3xl font-bold dark:text-white ">{image.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
