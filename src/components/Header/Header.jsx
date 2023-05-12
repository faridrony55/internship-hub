import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';

const Header = () => {
    const [open,setOpen] = useState(false);

    const routes = [
         
        {
            id:1,
            name:'Statictis',
            path:'/statictis'
        },
        {
            id:4,
            name:'Applied jobs',
            path:'/job-details'
        },
        {
          id:20,
          name:'alljobs',
          path:'/alljobs'
        },
        {
            id:5,
            name:'Blogs',
            path:'/blogs'
        } 
    ]
    return (
        <nav className="   sticky top-0 z-10   bg-gradient-to-r   from-blue-50 to-gray-50">
  <div className="mx-auto   max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        
        <button onClick={()=>setOpen(!open)} type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> 
        
         {open === false? 
            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            : <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
         
         } 
           
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center ">
          <Link to="./"><h1 className=' font-black text-2xl '>Internship</h1></Link>
           
        </div>
        <div className="hidden grow sm:ml-6 sm:block">
          <div className="flex justify-center space-x-4">

            {
                routes.map(route=> <Nav key={route.id} route={route}></Nav>)
            }
             
          </div>
        </div>
      </div> 

        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"> 
        <div className="relative ml-3">
          <div>
             <button className=' bg-gradient-to-l from-blue-400 to-purple-400 text-white py-3 px-7 rounded-md'>Start Applying</button>
          </div> 
        </div>
      </div>

    </div>
  </div>

  
  <div className={`sm:hidden ${open?'':'hidden'} absolute w-full bg-white `} id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
            {
                routes.map(route=> <Nav key={route.id} route={route}></Nav>)
            }
 
    </div>
  </div>
</nav>
    );
};

export default Header;