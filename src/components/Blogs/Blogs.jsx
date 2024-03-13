import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({addBookmark, addTime }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[]);

    return (
        <div className="md:w-2/3">
            {/* <h3>Blogs: {blogs.length} </h3> */}
            {
             blogs.map(post => <Blog 
                key={blogs.id} 
                blogPost={post}
                addToBookmark = {addBookmark}
                readingTime = {addTime}
            ></Blog> )
            }
        </div>
    );
};

Blogs.propTypes = {
    addBookmark: PropTypes.func,
    addTime: PropTypes.func
}

export default Blogs;