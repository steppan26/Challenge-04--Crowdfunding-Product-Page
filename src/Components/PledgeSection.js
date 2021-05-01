import React from 'react';
import './PledgeSection.css';
import Button from './Button';

const PledgeSection = (props) => {
    
    if (!props.radio){

    }
    return(
        <div className="pledgeSection">
            <input type="radio" name="pledgeOptionSelector" />
            <div class="pledgeSectionHeader">
                <h2>{props.title}</h2>
                <h3>{props.subtitle}</h3>
            </div>
            <p className="pledgeText">{props.text}</p>
            <div class="valueWrapper">
                <h4 className="PledgeValue">{props.value}</h4>
                <h5> left</h5>
            </div>
            <Button className="btnPledge"
                    bgColor='var(--clr-primary-cyan)'
                    textColor='white'
                    fontSize = '1em'
                    >
                    Select Reward
                </Button>

        </div>
    );
}

export default PledgeSection