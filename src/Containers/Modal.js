import React from 'react';
import './Modal.css';
import iconCloseModal from '../images/icon-close-modal.svg';
import PledgeSection from '../Containers/PledgeSection';

const Modal = (props) => {


    return(
        <div className="modalContainer" id="modal">
            <hr className="modalBackground" />
            <div className="card">
                <div className="modalHeader">
                    <h1>Back this project</h1>
                    <img src={iconCloseModal} alt="close modal button" onClick={props.handleToUpdate}/>
                </div>
                <p>Want to support us in bringing Mastercraft Bamboo Monitor Rise out in the world?</p>
                <PledgeSection
                    className = "modalPledge"
                    title = "Pledge with no reward"
                    pledgeValue= {props.pledgeValues[0]}
                    text = "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates.via email."
                    backersValue = ""
                    backersValueSize = "0"
                    btnDisplay = "none"
                    radioDisplay = "inline"
                    btnText = "Continue"
                    onChange = {props.activeSection}
                    headerOrder = "0"
                    textOrder = "2"
                    priceOrder = "1"
                    headerClicked = {props.headerClicked}
                    valueSize = "1.25em"
                />
                <PledgeSection
                    className = "modalPledge"
                    title = "Bamboo Stand"
                    pledgeValue=  {props.pledgeValues[1]}
                    text = "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
                    backersValue = {props.pledgesRemaining[0]}
                    backersValueSize = "1.5em"
                    btnDisplay = "none"
                    radioDisplay = "inline"
                    btnText = "Continue"
                    onChange = {props.activeSection}
                    headerOrder = "0"
                    textOrder = "2"
                    priceOrder = "1"
                    headerClicked = {props.headerClicked}
                    valueSize = "1.25em"
                />
                <PledgeSection
                    className = "modalPledge"
                    title = "Black Edition Stand"
                    pledgeValue=  {props.pledgeValues[2]}
                    text = "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."
                    backersValue = {props.pledgesRemaining[1]}
                    backersValueSize = "1.5em"
                    btnDisplay = "none"
                    radioDisplay = "inline"
                    btnText = "Continue"
                    onChange = {props.activeSection}
                    headerOrder = "0"
                    textOrder = "2"
                    priceOrder = "1"
                    headerClicked = {props.headerClicked}
                    valueSize = "1.25em"
                />
                <PledgeSection
                    className = "modalPledge"
                    title = "Mahogany Special Edition"
                    pledgeValue=  {props.pledgeValues[3]}
                    text = "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included."
                    backersValue = {props.pledgesRemaining[2]}
                    backersValueSize = "1.5em"
                    btnDisplay = "none"
                    radioDisplay = "inline"
                    btnText = "Continue"
                    onChange = {props.activeSection}
                    headerOrder = "0"
                    textOrder = "2"
                    priceOrder = "1"
                    headerClicked = {props.headerClicked}
                    valueSize = "1.25em"
                />
            </div>
        </div>
    );

}

export default Modal;