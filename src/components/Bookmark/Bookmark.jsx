import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    return (
        <div>
            <h2 className="bg-white rounded-md p-2 mt-2"> {bookmark.title} </h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;