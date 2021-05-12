import React from 'react'
import './RadioButton.css'

const RadioButton = (props) =>{
    return(
        <label className="radio" style={{display: props.display}}>
            <input
                type="radio"
                name={props.name}
                onChange={props.onChange}
                disabled={props.disabled}
            />
            <span className="radio_control"></span>
        </label>
    );
}

export default RadioButton;