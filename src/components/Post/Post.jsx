import React from 'react'; 

import { Link, useLoaderData } from 'react-router-dom';
const Post = () => {
  
    const post= useLoaderData();
    console.log(post)
    return (
        <div>
            we are here
            {post.length}
        </div>
    );
};

export default Post;