import React from 'react';
import './Button.css';

const Button = (props) =>{
    let buttonClassName = "btn"
    if (parseInt(props.linkId)){
        const linkIdString = String(props.linkId)
        buttonClassName = "btn linkID" + linkIdString
    }

    return(
            <h4 className={buttonClassName}
            style={{
                backgroundColor:`${props.bgColor}`,
                color:`${props.textColor}`,
                fontSize:`${props.fontSize}`,
                display:`${props.display}`
                }}
                >
                {props.children}
            </h4>
    );
}

export default Button;