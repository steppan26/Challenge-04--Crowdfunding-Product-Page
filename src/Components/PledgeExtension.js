import React from 'react'
import Button from './Button'
import './PledgeExtension.css'

const PledgeExtension = (props) =>{
    return(
        <div className="lowerSection" style={{display:props.ExtensionDisplay}}>
            <p>Enter your pledge</p>
            <div className="inputs">
                <span className="pledgeInputBox">
                    $ <input type="text" name="url" autoFocus />
                </span>
                <Button className="btnPledge"
                    display ="inline"
                    bgColor='var(--clr-primary-cyan)'
                    textColor='white'
                    fontSize = '0.85em'
                >Continue
                </Button>
            </div>
        </div>
    )
}
export default PledgeExtension;