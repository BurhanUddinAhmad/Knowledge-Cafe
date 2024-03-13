import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({addToBook, addReadingTime}) => {
    
    return (
        <div className="md:w-1/3">
           <h3 className="text-blue-600 bg-slate-200 rounded-md py-3 text-2xl font-semibold border-[1px] border-blue-300 text-center">Reading Time: <span> {addReadingTime} </span> mins</h3>

           <div className="bg-slate-200 rounded-md my-3 p-4 ">
            <h3 className="font-bold text-xl text-[#3a3a3a] "> Bookmarked Blogs: {addToBook.length} </h3>
            { addToBook.map((toBookmark, idx) => <Bookmark
                key={idx}
                bookmark={toBookmark}
            ></Bookmark>) }
           </div>
        </div>
    );
};


Bookmarks.propTypes = {
    addToBook: PropTypes.array,
    addReadingTime: PropTypes.number
}
export default Bookmarks;