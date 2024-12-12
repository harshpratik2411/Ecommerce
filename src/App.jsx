import React, { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero' 
import Products from './Components/Products/Products'
import AOS from 'aos';
import 'Aos/dist/aos.css';
import TopProducts from './Components/TopProducts/TopProducts';
import Banner from './Components/Bannner/Banner';



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
  <div>
   <Navbar/>
   <Hero/>  
   <Products/> 
   <TopProducts/> 
   <Banner/>
  </div>
    
   
  )
}

export default App