import React from 'react'
import pizza from '../assets/images/pizza_banner.png'
import button from './elements/button'

function Banner() {
    return (
        <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between">
            <div className="banner-description w-full md:w-1/2 p-3" >
                <h2 className="mb-6 text-4xl font-bold text-white">
                    Food ordering Made Easy
                </h2>
                <p className="font-semibold text-lg text-red-600 py-2">
                    Get Started Today!
                </p>
                <div className="btn-container">
                    <button className='bg-yellow-400 text-white p-2 rounded-lg font-bold hover:bg-yellow-400'>Order Now</button>
                    <a href="/menu" className='text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3'>
                        See Menu
                    </a>
                </div>
            </div>
            <div className="banner-image w-full md:w-1/2 p-3 flex justify-end">
                <img src={pizza} alt="banner" className='max-h-95' />
            </div>
        </div>
    )
}

export default Banner
