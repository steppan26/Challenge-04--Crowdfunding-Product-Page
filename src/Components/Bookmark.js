import React from 'react';
import Button from './Button';
import BookmarkLogo from '../images/icon-bookmark.svg';
import './Bookmark.css';

const Bookmark = () =>{
    return(
        <div className="bookmarkBtn">
            <img className="bookmarkImg" src={BookmarkLogo} alt='bookmark logo' width='50' />
            {/* <Button bgColor='whitesmoke' textColor="black" className="bookmarkText">&nbsp; &nbsp; &nbsp; Bookmark</Button> */}
        </div>
    );
}

export default Bookmark;