import React from 'react'
import Banner from '../../assets/Website/orangebg.png'
  
const BannnerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: "400px",  // Set a specific height
    width: "100%",    // Full width
  }
  
const Subscribe = () => {
  return (
    <div  className='bg-gray-100 mb-20 dark:bg-gray-800 text-white'
     data-aos="zoom-in" 
     style={BannnerImg}
    >
        <div className=' container backdrop-blur-sm py-10'>
         <div className='space-y-6 max-w-xl mx-auto'>
            <h1 className='text-2xl !text-center  sm:text-left sm:text-4xl font-semibold '> 
               Get Notified About New Products 
            </h1> 
            <input  data-aos="fade-up"
            placeholder='Enter your email'
            className='w-full p-3'
            type="text" />
         </div>
       </div>
    </div>
  )
}

export default Subscribe