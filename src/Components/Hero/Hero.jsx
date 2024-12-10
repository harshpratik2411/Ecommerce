import React from 'react'
import image1 from '../../assets/hero/img1.png'
import image2 from '../../assets/hero/img2.png'
import image3 from '../../assets/hero/img3.png' 
import image4 from '../../assets/hero/img4.png'
import  Slider from "react-slick"





const ImageList = [ 
    {
    id:1,
    img: image1, 
    title: 'upto 50 percent off',
    },
    {
    id:2,
    img: image2, 
    title: 'upto 30 percent off',
    },
    {
    id:3,
    img: image3, 
    title: 'upto 20 percent off',
    },

    {id:4,
    img: image4, 
    title: 'upto 20 percent off',
    },
]
const Hero = () => {  
   var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 800,
      SlideToScroll: 1,
      AutoplaySpeed: 4000,
      AutoPlay: true,
      PauseOnHover: false,
      PauseOn: false,
   }

  return (
    <div className='relative overflow-hidden min-h-[500px] sm-w-[60px] bg-gray-100 flex  justify-center
    items-center dark:bg-gray-950 text-white duration-200'> 
        {/* backgroundv pattern  */}
        <div className=' h-[600px] w-[600px] bg-primary/40  absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>

        </div> 
         {/* Hero section */} 
         <div className='container pb-8 sm:pb-0'> 
              <slider>     
         <div>
           <div className='grid grid-cols-1 sm:grid-cols-2'>
            {/* text content section  */}  
              <div className='flex flex-col justify-center gap-4 sm:pt-0 text-center sm:text-left  order-2 sm:order-1'>
                <h1 className='text-black  dark:text-white text-5xl sm:text-6xl font-bold'>Lorem ipsum dolor sit.</h1>
                <p className='text-black dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, explicabo?</p>  
                <div>
                    <button className='bg-gradient-to-r bg-primary to-secondary hover:scale-105 duration200 rounded-3xl'>
                        Order now
                    </button>
                </div>
              </div>
            {/* image content section  */} 
              <div className='order-1 sm:order-2'>
                <div className='relative z-10'>
                   <img src={image4} alt="" className='h-[300px]w-[300px] sm:h-[450px] sm:w-[450px]
                   sm:scale-125 mx-auto'/>
                </div>
              </div>
           </div> 
          </div>
           </slider>   
         </div>
    </div>
  )
}

export default Hero