import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Blogs = () => {
    const blogs= useLoaderData()
    return (
        <div>
            {blogs.map(
                blog=> <div key={blog.id} className="p-4 m-3 border">
                    <h1>{blog.title}</h1>
                    <Link to={`/post/${blog.id}`}>View more {blog.id}</Link>
                </div>
            )}
        </div>
    );
};

export default Blogs;