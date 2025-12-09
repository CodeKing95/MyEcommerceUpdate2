import React from 'react';
import Img1 from '../assets/Top/iphone.png';
import Img2 from '../assets/Top/G2.jpg';
import Img3 from '../assets/Top/MOTOR.jpg';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "iPhone 17",
    description: "Most powerful iPhone ever",
    price: 1299, // 👈 ADD PRICE
  },
  {
    id: 2,
    img: Img2,
    title: "Google Pixel 10 Pro",
    description: "Powered by Google",
    price: 1099,
  },
  {
    id: 3,
    img: Img3,
    title: "Motorola G100 Iridescent Ocean",
    description: "Love the Ocean",
    price: 899,
  },
];

const TopProducts = () => {
  const dispatch = useDispatch();

  const handleOrderNow = (product: any) => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <div className='container'>
      {/* Header section */}
      <div className='text-left mb-24'>
        <p data-aos='fade-up' className='text-sm text-primary'>
          Top Rated Products for you
        </p>
        <h1 data-aos='fade-up' className='text-3xl font-bold'>
          Best Products
        </h1>
        <p data-aos='fade-up' className='text-xs text-gray-400'>
          See our best product...
        </p>
      </div>

      {/* Body section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
        {ProductsData.map((data) => (
          <div
            key={data.id}
            data-aos='zoom-in'
            className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80
              relative shadow-xl duration-300 group max-w-[300px]'
          >
            {/* image section */}
            <div className='h-[100px]'>
              <img
                src={data.img}
                alt={data.title}
                className='max-w-[140px] block mx-auto transform -translate-y-20
                group-hover:scale-105 duration-300 drop-shadow-md'
              />
            </div>

            {/* details section */}
            <div className='p-4 text-center'>
              {/* star rating */}
              <div className='w-full flex items-center justify-center gap-1'>
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
              </div>

              <h1 className='text-xl font-bold'>{data.title}</h1>
              <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>
                {data.description}
              </p>
              <p className='font-semibold mt-2 text-primary text-lg'>
                ${data.price}
              </p>

              {/* Order now button with addToCart */}
              <button
                onClick={() => handleOrderNow(data)}
                className='bg-primary hover:scale-105 duration-300 
                text-white py-1 px-4 rounded-full mt-4 
                group-hover:bg-white group-hover:text-primary'
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
