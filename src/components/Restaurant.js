import React from 'react'
import Cards from './Cards'

const Restaurant = () => {
    return (
        <>
            <div className='max-w-[1200px] mx-auto'>
                <div className='flex my-3 items-center justify-between'>
                    <div className='text-[25px] font-bold'>Top restaurant chains in Noida</div>
                </div>
                <div className='flex'>
                    <Cards />

                </div>
            </div>
        </>
    )
}

export default Restaurant