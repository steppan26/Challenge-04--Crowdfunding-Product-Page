import React from 'react';
import Button from './Button'
import './PledgeReceived.css'
import Icon from '../images/icon-check.svg'

const PledgeReceived = () =>{
    return(
        <div className="cardWrapper" id="pledgeConfirmation">
            <hr className="modalBackground" />
            <div className="card modalPledgeReceived">
                <img src={Icon} alt="checkmark icon" />
                <h3>Thanks for your support!</h3>
                <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
                <Button className="btnPledgeConfirmed"
                    display ="inline"
                    bgColor='var(--clr-primary-cyan)'
                    textColor='white'
                    fontSize = '1em'
                    >Got it!
                </Button>
            </div>
        </div>
    );
}

export default PledgeReceived;