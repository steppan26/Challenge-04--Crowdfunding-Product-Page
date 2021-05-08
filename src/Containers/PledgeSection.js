import React, {Component} from 'react';
import './PledgeSection.css';
import Button from '../Components/Button';
import RadioButton from '../Components/RadioButton';
import PledgeExtension from '../Components/PledgeExtension.js';

class PledgeSection extends Component {
    constructor(){
        super()
        this.state = {
            isSelected: false,
            display: "none"
        };
    }

    render(){
        let extensionDisplay = "none"
        const handleRadioOnChange = () =>{
            const pledgeExtensionElements = Array.from(document.getElementsByClassName("lowerSection"));
            pledgeExtensionElements.forEach((x)=>{
                extensionDisplay = "none"
            })
            if(!this.state.isSelected){
                extensionDisplay = "block"
            } else {
                extensionDisplay = "none"
            }
        }

        return(
            <div className="pledgeSection">
                <div className="pledgeSectionHeader">
                    <RadioButton
                        name="pledgeRadio"
                        display={this.props.radioDisplay}
                        onChange={handleRadioOnChange}
                        />
                    <h2>{this.props.title}</h2>
                    <h3>{this.props.subtitle}</h3>
                </div>
                <p className="pledgeText">{this.props.text}</p>
                <div className="valueWrapper">
                    <h4 className="PledgeValue" style={{fontSize:this.props.valueSize}}>{this.props.value}</h4>
                    <h5> left</h5>
                </div>
                <Button className="btnPledge"
                    display ={this.props.btnDisplay}
                    bgColor='var(--clr-primary-cyan)'
                    textColor='white'
                    fontSize = '1em'
                    >
                    {this.props.btnText}
                </Button>
                <hr className="pledgeDivider"/>
                <PledgeExtension
                    ExtensionDisplay = {extensionDisplay}
                />
            </div>
        );
    }
}

export default PledgeSection;