import React from 'react';
import './Bookmark.css';
import Button from './Button'

const Bookmark = (props) =>{

    return(
        <div id="bookmarkBtn" onClick={props.onClick}>
            <Button className="btnBookmark"
                    bgColor='whitesmoke'
                    textColor='#2F2F2F'
                    fontSize='1.1em'
                    >
                    Bookmark
                </Button>
            <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" className="bookmarkLogo">
                <g  id="bookmarkBtnColor" fill="none" fillRule="evenodd">
                    <circle
                        fill="#2F2F2F"
                        cx="28"
                        cy="28"
                        r="28"
                    />
                    <path
                        fill="#B1B1B1"
                        d="M23 19v18l5-5.058L33 37V19z"
                    />
                </g>
            </svg>
        </div>
    );
}

export default Bookmark;