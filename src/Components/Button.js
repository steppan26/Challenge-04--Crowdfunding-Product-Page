import React from 'react';
import './Button.css';

const Button = (props) =>{

    return(
            <h4 className="btn"
            style={{
                backgroundColor:`${props.bgColor}`,
                color:`${props.textColor}`,
                fontSize:`${props.fontSize}`
                }}
                >
                {props.children}
            </h4>
    );
}

export default Button;