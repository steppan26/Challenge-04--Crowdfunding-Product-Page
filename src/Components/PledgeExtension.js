import React from 'react'
import Button from './Button'
import './PledgeExtension.css'

const PledgeExtension = (props) =>{
    return(
        <div className="lowerSection" style={{display:props.ExtensionDisplay}}>
            <p>Enter your pledge</p>
            <div className="inputs">
                <span className="pledgeInputBox">
                    $ <label htmlFor="pledgeInput"><input type="text" name="pledgeInput" autoFocus /></label>
                </span>
                <Button className="btnPledge"
                    display ="inline"
                    bgColor='var(--clr-primary-cyan)'
                    textColor='white'
                    fontSize = '0.85em'
                    linkID = "0"
                >Continue
                </Button>
            </div>
        </div>
    )
}
export default PledgeExtension;