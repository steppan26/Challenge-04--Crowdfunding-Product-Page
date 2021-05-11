import React from 'react';
import Button from './Button'
import './PledgeReceived.css'
import Icon from '../images/icon-check.svg'

const PledgeReceived = (props) =>{
    return(
        <div className="card modalPledgeReceived">
            <hr className="modalBackground" />
            <div class="cardWrapper">
                <img src={Icon} alt="checkmark icon" />
                <h2>Thanks for your support!</h2>
                <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
                <Button className="btnPledgeConfirmed"
                    display ="inline"
                    bgColor='var(--clr-primary-cyan)'
                    textColor='white'
                    fontSize = '1em'
                    linkId={props.linkId}
                    >Got it!
                </Button>
            </div>
        </div>
    );
}

export default PledgeReceived;