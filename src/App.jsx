
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingtime, setReadingtime] = useState(0);

  const handleAddToBookmark = post => {
    const newBookmarks = [...bookmarks, post];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingtime + time;
    setReadingtime(newReadingTime);

    // remove from bookmarks 
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <div className='container md:max-w-6xl mx-auto'>
      <Header></Header>
      <main className='md:flex gap-10'>
        <Blogs 
         addBookmark={handleAddToBookmark}
         addTime = {handleMarkAsRead}
        ></Blogs>
        <Bookmarks
          addToBook={bookmarks}
          addReadingTime = {readingtime}
        ></Bookmarks>
      </main>
    </div>
  )
}

export default App;
