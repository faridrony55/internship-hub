import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({route}) => {
    return (
        <Link to={route.path} className="block sm:inline font-medium   text-black   hover:text-dark rounded-md px-3 py-2 text-lg  ">{route.name}</Link>
       
    );
};

export default Nav;

 