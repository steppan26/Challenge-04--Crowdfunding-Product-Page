import React from 'react';
import BookmarkLogo from '../images/icon-bookmark.svg';
import './Bookmark.css';

const Bookmark = () =>{
    return(
        <div className="bookmarkBtn">
            <img className="bookmarkImg" src={BookmarkLogo} alt='bookmark logo' width='60' />
        </div>
    );
}

export default Bookmark;