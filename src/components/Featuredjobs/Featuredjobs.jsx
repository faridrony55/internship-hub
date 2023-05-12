import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Jobs from '../Jobs/Jobs';

const Featuredjobs = () => {
    const alljobs =useLoaderData()  
    console.log(alljobs)
   // const limitjobs = alljobs.slice(0, 4);

    return (
        <section className='featuredJob py-20 bg-gradient-to-r   from-white to-white'>
                <div className='mx-auto   max-w-7xl px-2 sm:px-6 lg:px-8 max-md:px-5'>
                    <div className="title py-10 text-center max-w-2xl m-auto">
                        <h2 className=' text-5xl font-black'>Featured Internship</h2>
                        <p className='my-3 text-md max-md:text-base'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>
                    <div className='grid grid-cols-2 max-md:grid-cols-1 items-center gap-6'> 
                            {
                                alljobs.map(jobs => 
                                    <Jobs key={jobs.id} jobs={jobs}></Jobs>      
                                )
                            } 
                    </div>
                    <div className='text-center my-6'>
                        <Link to="/alljobs" className=' max-md:text-md bg-gradient-to-l from-blue-400 to-purple-400 text-white py-3 px-7 rounded-md'>See All Jobs</Link>
                    
                    </div>
                </div>
            </section>
    );
};

export default Featuredjobs;