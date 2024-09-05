import React from 'react'

const Cards = () => {
    return (
        <>
            <div className='max-w-[1200px] mx-auto'>
                <div className="relative w-64 p-4 bg-white rounded-lg shadow-md">
                    {/* Discount Badge */}
                    <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-tr-lg rounded-bl-lg">
                        10% OFF
                    </div>

                    {/* Card Image */}
                    <img
                        src="resimg/res1.png"
                        alt="Product"
                        className="w-full h-40 object-cover rounded-lg"
                    />

                    {/* Card Content */}
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">Chinese Wok</h3>
                        <p className="text-gray-600 mt-2">Chinese, Asian, Tibetan</p>
                        <div className="mt-4">
                            <span className="text-xl font-bold text-gray-900">$40.00</span>
                            <span className="text-sm line-through text-gray-500 ml-2">$60.00</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className='max-w-[1200px] mx-auto'>
                <div className="relative w-64 p-4 bg-white rounded-lg shadow-md">
                    {/* Discount Badge */}
                    <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-tr-lg rounded-bl-lg">
                        20% OFF
                    </div>

                    {/* Card Image */}
                    <img
                        src="resimg/res2.png"
                        alt="Product"
                        className="w-full h-40 object-cover rounded-lg"
                    />

                    {/* Card Content */}
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">Burger King</h3>
                        <p className="text-gray-600 mt-2">Burgers, American</p>
                        <div className="mt-4">
                            <span className="text-xl font-bold text-gray-900">$50.00</span>
                            <span className="text-sm line-through text-gray-500 ml-2">$70.00</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className='max-w-[1200px] mx-auto'>
                <div className="relative w-64 p-4 bg-white rounded-lg shadow-md">
                    {/* Discount Badge */}
                    <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-tr-lg rounded-bl-lg">
                        20% OFF
                    </div>

                    {/* Card Image */}
                    <img
                        src="resimg/res3.png"
                        alt="Product"
                        className="w-full h-40 object-cover rounded-lg"
                    />

                    {/* Card Content */}
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">Kwality Walls Ice Cream</h3>
                        <p className="text-gray-600 mt-2">Deserts, Ice-cream</p>
                        <div className="mt-4">
                            <span className="text-xl font-bold text-gray-900">$20.00</span>
                            <span className="text-sm line-through text-gray-500 ml-2">$40.00</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className='max-w-[1200px] mx-auto'>
                <div className="relative w-64 p-4 bg-white rounded-lg shadow-md">
                    {/* Discount Badge */}
                    <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-tr-lg rounded-bl-lg">
                        30% OFF
                    </div>

                    {/* Card Image */}
                    <img
                        src="resimg/res4.png"
                        alt="Product"
                        className="w-full h-40 object-cover rounded-lg"
                    />

                    {/* Card Content */}
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">Subway</h3>
                        <p className="text-gray-600 mt-2">Salads, Snacks, Beverages</p>
                        <div className="mt-4">
                            <span className="text-xl font-bold text-gray-900">$70.00</span>
                            <span className="text-sm line-through text-gray-500 ml-2">$100.00</span>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Cards