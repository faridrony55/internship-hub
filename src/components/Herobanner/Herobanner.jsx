import React from 'react';
import bannerImg from "../../assets/P3OLGJ1.png"

const Herobanner = () => {
    const textGradient = {
        backgroundImage: "linear-gradient(to right,#3b82f6,#6804eb)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text"
    }
    return (
        <header className='bg-gradient-to-r   from-blue-50 to-gray-50'>
                <div className='mx-auto   max-w-7xl px-2 sm:px-6 lg:px-8 max-md:px-5'>
                    <div className='grid grid-cols-2 max-md:grid-cols-1 items-center'>
                        <div className='max-md:py-8 max-md:text-center'>
                            <h1 className=' text-7xl font-black   leading-tight max-md:text-3xl max-md:text-center'>One Step <br/> Closer To Your <b style={textGradient}>Dream Job</b></h1>
                            <p className='my-3 text-lg max-md:text-base'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                            <button className=' max-md:text-md bg-gradient-to-l from-blue-400 to-purple-400 text-white py-3 px-7 rounded-md'>Get Started</button>
                        </div>
                        <div className='flex justify-end max-md:justify-center'>
                            <img src={bannerImg} alt="" className='max-md:w-8/12' />
                        </div>
                    </div>
                </div>
            </header>
    );
};

export default Herobanner;