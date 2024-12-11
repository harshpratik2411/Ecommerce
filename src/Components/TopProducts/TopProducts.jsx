import React from 'react'; 
import Img1 from '../../assets/top-pro/Img1.png'; 
import Img2 from '../../assets/top-pro/Img2.png'; 
import Img3 from '../../assets/top-pro/Img3.png'; 
import { FaStar } from 'react-icons/fa';

// Updated product data with unique IDs
const ProductsData = [ 
  {
    id: 1,
    img: Img1,  
    title: 'Casual Wear 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, totam.',
  },
  {
    id: 2,
    img: Img2,  
    title: 'Casual Wear 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, totam.',
  },
  {
    id: 3,
    img: Img3,  
    title: 'Casual Wear 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, totam.',
  },
];

const TopProducts = () => {
  return (
    <div>
      <div className='container'>
        {/* Header section */}
        <div className='text-left mb-10'>
          <p data-aos="fade-up" className='text-sm text-primary'>Top Rated Products for you</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
          <p data-aos="fade-up" className='text-xs text-gray-600'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, molestiae.
          </p>
        </div>
      </div> 

      {/* Body section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-20 md:gap-5'>
        {ProductsData.map((data) => (
          <div key={data.id} className="product-card max-w-sm w-full">
            {/* Image section */}
            <div className= "overflow-hidden image-wrapper bg-white dark:bg-gray-800 hover:bg-slate-700 shadow-xl ">
              <img 
                src={data.img} 
                alt={data.title} 
                className="object-cover w-full h-64" 
              />
            </div>

            {/* Title and Description */}
            <div className="text-center mt-4">
              <h3 className='text-xl font-semibold'>{data.title}</h3>
              <p className='text-sm text-gray-500'>{data.description}</p>
              <div className="flex justify-center mt-2">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-gray-300" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
