import PropTypes from 'prop-types';
import { BsBookmarkStar } from "react-icons/bs";

const Blog = ({blogPost, addToBookmark, readingTime}) => {
    // console.log(blogPost);
    const {
        id, 
        cover, title, 
        posted_date, reading_time, 
        author, author_img, 
        hashtags
    } = blogPost;

    return (
        <div className='mb-7'>
            <div> <img className='w-full rounded-md' src={cover} alt="" /></div>

           <div className='flex justify-between items-center my-3'>
            
            {/* author details  */}
           <div className='flex items-center gap-3'>
             <div> <img className='w-14' src={author_img} alt="" /> </div>
             <div> 
                <h5 className='font-bold'> {author} </h5>
                <p className='text-gray-600'> {posted_date} </p>
             </div>
            </div> 

            <div>
                <p className='flex items-center gap-2 text-gray-500'> {reading_time} mins read 
                 <button 
                 className='text-gray-700 text-xl'
                 onClick={() => addToBookmark(blogPost)}
                 
                 > <BsBookmarkStar></BsBookmarkStar> </button>  
                </p>
            </div>
           </div>

            <h1 className='text-3xl font-bold mb-3'> {title} </h1>

            <div className='mb-2'>
                {hashtags.map((tag, idx) => <span key={idx} > #{tag} </span>)}
            </div>
            <button 
            className='mb-3 text-blue-500 hover:text-blue-400'
            onClick={ () => readingTime(id, reading_time)}
            >Mark as read</button>
            <hr />
        </div>
    );
};

Blog.propTypes = {
    blogPost: PropTypes.object.isRequired,
    addToBookmark: PropTypes.func,
    readingTime: PropTypes.func,
}
export default Blog;