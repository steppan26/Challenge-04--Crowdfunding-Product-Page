import React from 'react';
import './PledgeSection.css';
import Button from '../Components/Button';
import RadioButton from '../Components/RadioButton';
import PledgeExtension from '../Components/PledgeExtension.js';

const PledgeSection = (props) => {
    const setValue = () =>{
        if(props.valueSize === 0){
            return "";
        } else {
            return "$ " + props.value;
        }
    }
        return(
            <div className="pledgeSection">
                <div className="pledgeSectionHeader">
                    <RadioButton
                        name="pledgeRadio"
                        display={props.radioDisplay}
                        onChange={props.onChange}
                        />
                    <h2>{props.title}</h2>
                    <h3>{props.subtitle}</h3>
                </div>
                <p className="pledgeText">{props.text}</p>
                <div className="valueWrapper">
                    <h4 className="PledgeValue" style={{fontSize:props.valueSize}}>{setValue}</h4>
                    <h5> left</h5>
                </div>
                <Button className="btnPledge"
                    display ={props.btnDisplay}
                    bgColor='var(--clr-primary-cyan)'
                    textColor='white'
                    fontSize = '1em'
                    >
                    {props.btnText}
                </Button>
                <hr className="pledgeDivider"/>
                <PledgeExtension
                    ExtensionDisplay = {props.extensionDisplay}
                />
            </div>
        );
}

export default PledgeSection;