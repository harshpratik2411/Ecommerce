import React, { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero' 
import Products from './Components/Products/Products'
import AOS from 'aos';
import 'Aos/dist/aos.css';
import TopProducts from './Components/TopProducts/TopProducts';
import Banner from './Components/Bannner/Banner'; 
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';
import Testimonial from './Components/Testimonial/Testimonial';




const App = () => { 
  React.useEffect(() => {
      AOS.init ({
        offdet:100,
        duration:800,
        easing:"ease-in-sine",
        delay:100,
      }); 
      AOS.refresh();
  }, [])
  return ( 
  <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
   <Navbar/>
   <Hero/>  
   <Products/> 
   <TopProducts/> 
   <Banner/> 
   <Subscribe/> 
   <Products/> 
   <Testimonial/> 
    <Footer/>
  </div>
    
   
  )
}

export default App