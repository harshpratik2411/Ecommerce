import { data } from 'autoprefixer';
import React from 'react' 
import Slider from 'react-slick' 

  const   TestimonialData =  [
    {
      id:  1,
      name: "victor",
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam porro eveniet itaque est praesentium aspernatur illo, perspiciatis repudiandae distinctio excepturi?',
      img:'https://picsum.photos/seed/picsum/200/300',
    },
    {
      id:  2,
      name: "Satya nadella",
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam porro eveniet itaque est praesentium aspernatur illo, perspiciatis repudiandae distinctio excepturi?',
      img:'https://picsum.photos/seed/picsum/200/300',
    },
    {
      id:  3,
      name: "Angella White",
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam porro eveniet itaque est praesentium aspernatur illo, perspiciatis repudiandae distinctio excepturi?',
      img:'https://picsum.photos/seed/picsum/200/300',
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
                    <h1 className='text-3xl font-bold'>Testimonial</h1>
                    <p className='text-xs text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, molestiae.</p>
                </div> 
                {/* Testimonial cards */}  
                <div>
               <Slider {...settings}> 
                {TestimonialData.map((data) => ( 
                  <div>

                  </div>
                 
                ))} 
                </Slider>
                </div>

        </div>
    </div>
  )
}

export default Tesrtimonial 