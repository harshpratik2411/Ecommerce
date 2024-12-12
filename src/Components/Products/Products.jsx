import React from 'react';
import card1 from '../../assets/womens/card1.png';
import card2 from '../../assets/womens/card2.png';
import card3 from '../../assets/womens/card3.png';
import card4 from '../../assets/womens/card4.png';
import { FaStar } from 'react-icons/fa';

const ProductsData = [
    {
        id: 1,
        img: card1,  // Correct image import
        title: "Women Ethnic",
       rating: 5.0,
       color: "white",
        aosDelay: "0"
    }, 

    {
        id: 2,
        img: card2,  // Correct image import
       title: "Women Ethnic",
       rating: 5.0,
       color: "red",
        aosDelay: "200"
    },
    {
        id: 3,
        img: card3,  // Correct image import
        title: "Women Western",
        rating: 4.0,
        color: "brown",
        aosDelay: "400"
    },
    {
        id: 4,
        img: card4,  // Correct image import
        title: "Goggles",
        rating: 4.4,
        color: "yellow",
        aosDelay: "600"
    },
    {
        id: 5,
        img: card4,  // Correct image import
        title: "Goggles",
       rating: 4.4,
        color: "pink",
        aosDelay: "800" 
    },
];

const Products = () => {
    return (
        <div className='mt-14 mb-12'>
            <div className='container'>
                {/* Header section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p className='text-sm text-primary'>Top Selling Products for you</p>
                    <h1 className='text-3xl font-bold'> Products</h1>
                    <p className='text-xs text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, molestiae.</p>
                </div>

                {/* Body section */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'> 
                        {/* Card section */}
                        {ProductsData.map((data) => (
                            <div key={data.id} data-aos="fade-up" data-aos-delay={data.aosDelay}>
                                <div className="relative transform transition-transform duration-300 ease-in-out hover:scale-110  drop-shadow-md">
                                    <img 
                                    src={data.img} 
                                    alt={data.title} 

                                        className='h-[220px] w-[150px] object-cover rounded-md' />
                                     <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-40 text-white p-2 text-center rounded-md"/> 
                                        
                                        <h3 className=" font-bold">{data.title}</h3>
                                        <p className='text-sm text-gray-600'>{data.color}</p> 
                                        <div className="flex justify-center mt-2">
                                       <FaStar className="text-yellow-500" />
                                         <FaStar className="text-yellow-500" />
                                         <FaStar className="text-yellow-500" />
                                         <FaStar className="text-yellow-500" />
                                         <FaStar className="text-gray-300" />
                                          </div>
                                        
                                          
                                        <div className="flex justify-center items-center gap-1">
                                            <span>{data.rating}</span>
                                        
                                        </div>
                                    </div>
                                </div>
                           // </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
