import React from 'react';
import Featuredjobs from '../Featuredjobs/Featuredjobs';
import Herobanner from '../Herobanner/Herobanner';
import Jobcategory from '../Jobcategory/Jobcategory'; 

const Home = () => {
 
   
    return (
        <>
            
            <Herobanner></Herobanner>
            <Jobcategory></Jobcategory>
            <Featuredjobs></Featuredjobs>

           
        </>
    );
};

export default Home;