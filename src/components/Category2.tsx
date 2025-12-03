import React from 'react';
import Image1 from "../assets/category/p5.png";
import Image2 from "../assets/category/x.png";
import Image3 from "../assets/category/speaker.png";


const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {/* first col */}
                   <div className='col-span-2 py-10 pl-5 bg-gradient-to-br
               from-gray-300/90 to-gray-100 text-white rounded-3xl relative h-[320px]
                flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'
                            >With</p>
                            <p className='text-4xl xl:text-5xl font-bold
                            opacity-40'>Earphone</p>
                           
                        </div>
                    </div>
                    <img src={Image1} alt="" 
                    className='w-[320px] absolute -right-4 lg:top-[40px]'/>
            </div>

                
        {/* second col */}
              <div className='py-10 pl-5 bg-gradient-to-br
               from-brandGreen to-brandGreen/90 text-white rounded-3xl relative h-[320px] 
                flex items-start'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'
                            >With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                           
                        </div>
                    </div>
                    <img src={Image2} alt="" 
                    className='w-[320px] absolute -right-4 lg:top-[40px]'/>
            </div>
        {/* third col */}
     <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue/90 to-brandBlue/70 text-white rounded-3xl relative h-[320px]
                flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'
                            >With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                         
                        </div>
                    </div>
                    <img src={Image3} alt="" className='w-[200px] absolute
                    bottom-0 right-0'/>
            </div>
        </div>
    </div>
</div>
  );
};

export default Category;