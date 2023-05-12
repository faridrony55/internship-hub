import React from 'react';
import { Link } from 'react-router-dom';
import location from '../../assets/Icons/Location Icon.png'
import money from '../../assets/Icons/money.png'

const Jobs = ({jobs}) => {
    const textGradient = {
        backgroundImage: "linear-gradient(to right,#3b82f6,#6804eb)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text"
    }

    const {id,name,company,salary,address,picture,jobtype } = jobs;
    return (
        <div className='border py-10 px-10 rounded-lg'>
            <img src={picture} alt="" />
            <h3 className={` mt-3 text-lg font-bold `}>{name}</h3>
            <p className='my-2'>{company}</p>
            <div className={` `}>
                {
                    jobtype.map(type=> <span style={textGradient} className={` font-medium text-sm capitalize  border mr-3 border-indigo-500 rounded-md py-1 px-4 inline-block`} key={type.id}>{type.name}</span>)
                }
            </div>
            <ul className='text-sm py-4 flex items-center gap-3'>
                <li className='flex items-center'> <img src={location} alt="" /> <span>{address}</span></li>
                <li className='flex items-center'> <img src={money} alt="" /><span>{salary}</span></li>
            </ul>
            <Link to={`/job/${id}`} className=' max-md:text-md bg-gradient-to-l from-blue-400 to-purple-400 text-white py-3 px-7 rounded-md'>View Details</Link>

        </div>
    );
};

export default Jobs;