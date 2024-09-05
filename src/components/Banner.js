import React from 'react';
import { FaAndroid, FaApple } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='max-w-[1200px] mx-auto my-3 py-4 px-4'>
            <div className="flex flex-col items-center justify-center bg-[#fcfcff] text-[#686b78] p-6 md:flex-row md:justify-between">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold mb-2">For a better experience, download the Swiggy app now</h2>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="flex items-center bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
                        <FaAndroid className="mr-2" /> Download Android App
                    </a>
                    <a href="#" className="flex items-center bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">
                        <FaApple className="mr-2" /> Download iOS App
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
