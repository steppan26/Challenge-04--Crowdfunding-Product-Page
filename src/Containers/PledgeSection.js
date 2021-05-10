import React from 'react';
import './PledgeSection.css';
import Button from '../Components/Button';
import RadioButton from '../Components/RadioButton';
import PledgeExtension from '../Components/PledgeExtension.js';

const PledgeSection = (props) => {
    let pledgeValue = "";
    let leftText = " left"

    if(props.valueSize <= 0){
        pledgeValue = "";
        leftText = "";
    } else {
        pledgeValue = props.value;
        leftText = " left"
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
                    <h4 className="PledgeValue" style={{fontSize:props.valueSize}}>{pledgeValue}</h4>
                    <h5> {leftText}</h5>
                </div>
                <Button className="btnPledge"
                    display ={props.btnDisplay}
                    bgColor='var(--clr-primary-cyan)'
                    textColor='white'
                    fontSize = '1em'
                    linkId={props.linkId}
                    >{props.btnText}
                </Button>
                <hr className="pledgeDivider"/>
                <PledgeExtension
                    ExtensionDisplay = {props.extensionDisplay}
                />
            </div>
        );
}

export default PledgeSection;