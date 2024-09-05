import React from 'react'

const Searchban = () => {
    return (
        <>
            <div className='max-w-[1200px] mx-auto my-5'>
                <div className="relative bg-cover bg-center h-[50] flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-3 text-center">
                        <h1 className="text-white text-[10] md:text-4xl font-bold">Explore Every Restaurant Near You</h1>
                        <p className="text-white text-lg md:text-2xl mt-4">Find Top Rated Restaurants Near You</p>
                        <button className="mt-6 px-8 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition duration-300">Explore Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Searchban