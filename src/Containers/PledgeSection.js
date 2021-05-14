import React from 'react';
import './PledgeSection.css';
import Button from '../Components/Button';
import RadioButton from '../Components/RadioButton';
import PledgeExtension from '../Components/PledgeExtension.js';

const PledgeSection = (props) => {
    let backersValue = "";
    let leftText = " left";
    let subtitle = "";
    let btnText = props.btnText
    let btnColor = 'var(--clr-primary-cyan)'
    let cardOpacity = "100%"
    let radioState = false
    let className = "pledgeSection " + props.className

    if(props.backersValueSize <= 0){
        backersValue = "";
        leftText = "";
    } else {
        backersValue = props.backersValue;
        leftText = " left"
    }

    if (props.pledgeValue === 0){
        subtitle = "";
    } else {
        const pledgeValue = parseInt(props.pledgeValue)
        subtitle = "Pledge $"+ pledgeValue + " or more";
    }

    if(props.backersValue === 0){
        btnText = "Out of Stock"
        btnColor = 'var(--clr-dark-gray)'
        cardOpacity = "50%"
        radioState = true
    } else {
        btnColor = 'var(--clr-primary-cyan)'
        radioState = false
    }

    return(
        <div>
                <div className={className}
                    style={{opacity: cardOpacity}}>
                    <div className="pledgeSectionHeader" style={{headerOrder: `${props.order}`}}>
                        <RadioButton
                            name="pledgeRadio"
                            display={props.radioDisplay}
                            onChange={props.onChange}
                            disabled={radioState}
                            />
                        <h2 onClick={props.headerClicked}>{props.title}</h2>
                        <h3>{subtitle}</h3>
                    </div>
                    <p className="pledgeText" style={{textOrder: `${props.order}`}}>{props.text}</p>
                    <div className="valueWrapper" style={{priceOrder: `${props.order}`}}>
                        <h4 className="pledgeValue" style={{fontSize:props.valueSize}}>{backersValue}</h4>
                        <h5> {leftText}</h5>
                    </div>
                    <Button className="btnPledge"
                        display ={props.btnDisplay}
                        bgColor={btnColor}
                        textColor='white'
                        fontSize = '1em'
                        linkId={props.linkId}
                        >{btnText}
                    </Button>
                    <hr className="pledgeDivider"/>
                    <PledgeExtension
                        ExtensionDisplay = {props.extensionDisplay}
                    />
                </div>
        </div>
    );
}

export default PledgeSection;