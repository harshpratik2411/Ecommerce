import React from 'react' 
import BannerImg  from '../../assets/womens/Womens2/img.jpg'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi' 
import { GiGamepad } from 'react-icons/gi'


const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0 '>
        <div className='container'>
             <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'> 
                {/* image section */}
                <div data-aos="zoom-in">
                  <img src={BannerImg} alt="" 
                  className='max-w-[450px] h-[450px] w-full mx-auto drop-shadow-[-10px_10px_12px] object-cover'/> 
                </div> 
                {/* text details description */} 
                <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                    <h1 className='text-3xl sm:text-4xl font-bold'
                    >Summer Sale Fest, Save Upto 40% </h1> 
                    <p className='text-sm text-gray-600 tracking-wide leading-5'
                    > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, aperiam! Sequi, deleniti. Lorem ipsum dolor  repudiandae delectus,
                    </p>  
                    <div data-aos = "fade-up" className='flex items-center gap-4' >
                       <GrSecure 
                       className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400'/> 
                       <p>Quality Products</p>
                    </div> 
                <div>
                </div>  
                    <div data-aos = "fade-up" className='flex items-center gap-4'>
                     <IoFastFood  className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400'
                     /> 
                     <p>Fast Delivery</p> 
                      
                     </div> 
                    <div data-aos = "fade-up" className='flex items-center gap-4'>
                     <GiGamepad className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg- green-400'
                     />  
                      <p>Easy Payment methods</p> 
                     </div> 
                    <div data-aos = "fade-up" className='flex items-center gap-4'>
                     <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400'
                     /> 
                     <p>Get Offers</p> 
                     </div> 
                </div>
             </div> 
        </div>
    </div>
  )
}

export default Banner