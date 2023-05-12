import React  from 'react';  
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData, useParams} from 'react-router-dom'; 


const Jobdetails = ({jobsDetails}) => {
  const {id} = useParams()
  console.log(id);
console.log(jobsDetails);
 
  
    return (
        <div>
             wedwre
        </div>
    );
};

export default Jobdetails;