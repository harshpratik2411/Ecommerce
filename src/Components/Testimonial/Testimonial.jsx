import { data } from 'autoprefixer';
import React from 'react' 
import Slider from 'react-slick' 

  const   TestimonialData =  [
    {
      id:  1,
      name: "victor",
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam porro eveniet itaque est praesentium aspernatur illo, perspiciatis repudiandae distinctio excepturi?',
      img:'https://picsum.photos/id/239/200/300',
    },
    {
      id:  2,
      name: "Satya nadella",
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam porro eveniet itaque est praesentium aspernatur illo, perspiciatis repudiandae distinctio excepturi?',
      img:'https://picsum.photos/id/237/200/300',
    },
    {
      id:  3,
      name: "Angella White",
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam porro eveniet itaque est praesentium aspernatur illo, perspiciatis repudiandae distinctio excepturi?',
      img:'https://picsum.photos/id/240/200/300',
    },
    {
      id:  4,
      name: "Mia Malkova",
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam porro eveniet itaque est praesentium aspernatur illo, perspiciatis repudiandae distinctio excepturi?',
      img:'https://picsum.photos/seed/picsum/200/300',
    },
  ]

  
const Testimonial = () => {   
  const settings = {
    dots: true, // Show navigation dots
    arrows: false, // Disable next/prev arrows
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToScroll: 1,
    autoplay: true, // Auto play the carousel
    autoplaySpeed: 2000, // Speed of autoplay
    pauseOnHover: true, // Pause when hovering
    pauseOnFocus: true, // Pause when hovering
    CssEase:'linear', 
    responsive : [ {
       breakpoint: 10000,
       settings: {
          slidesToScroll: 1,
          slidesToShow: 3, 
          infinite:"true"
        },}, 
        {
        breakpoint: 1024,
        settings: {
           slidesToScroll: 2,
           slidesToShow: 1, 
           initialSlide:2,
        },},
       {
       breakpoint:640,
       settings: {
          slidesToScroll: 1,
          slidesToShow: 1, 
        
       },}, 
  ]

};

  return (
    <div className='py-10 mb-10'>
        <div className='container'>
            {/* header section */} 
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p className='text-sm text-primary'>What our customer are saying</p>
                    <h1 className='text-3xl sm:text-xl font-bold'>Testimonial</h1>
                    <p className='text-xs  text-gray-400 dark:text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, molestiae.</p>
                </div> 
                {/* Testimonial cards */}  
                <div data-aos="zoom-in">
               <Slider {...settings}> 
                {TestimonialData.map((data) => (  
                  <div className='my-6' >
                  <div key={data.id} 
                  className=' dark:bg-gray-800 flex flex-col  gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 dark:text-white text-l'>
                     <div className='mb-4'>  
                   <img src={data.img} alt="" 
                   className='rounded-full h-20 w-20' /> 
                   </div>  
                   <div className='text-xs dark:text-white text-gray-600'> 
                    <div className='flex  flex-col items-center gap-4 '> 
                   <p>{data.text}</p>
                   <h1 className=' dark:text-white sm:text-2xl text-2xl font-bold text-black/60 dark:text-light'>{data.name}</h1>
                  </div> 
                  </div> 
                      <p className='text-black/20 text-9xl font-serif absolute  top-0 right-0'> 
                    </p> 
                   </div>
                  </div>
                 
                ))} 
                </Slider>
                </div>
        </div>
    </div>
  )
}

export default Testimonial 