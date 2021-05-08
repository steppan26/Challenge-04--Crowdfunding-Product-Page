import React from 'react';
import './Modal.css';
import iconCloseModal from '../images/icon-close-modal.svg';
import PledgeSection from '../Components/PledgeSection';

const Modal = (props) => {
    const modal = document.getElementById("modal")
    if(!props.show){
        modal.style.display = "none";
    }

    const handleToUpdate = props.handleToUpdate;

    return(
        <div className="modalContainer" id="modal">
            <hr className="modalBackground" />
            <div className="card">
                <div className="modalHeader">
                    <h1>Back this project</h1>
                    <img src={iconCloseModal} alt="close modal button" onClick={handleToUpdate}/>
                </div>
                <p>Want to support us in bringing Mastercraft Bamboo Monitor Rise out in the world?</p>
                <PledgeSection
                    title = "Bamboo Stand"
                    subtitle= "Pledge $25 or more"
                    text = "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
                    value = "101"
                />
                <PledgeSection
                    title = "Black Edition Stand"
                    subtitle= "Pledge $75 or more"
                    text = "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."
                    value = "64"
                />
                <PledgeSection
                    title = "Mahogany Special Edition"
                    subtitle= "Pledge $200 or more"
                    text = "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included."
                    value = "0"
                />
            </div>
        </div>
    );
}

export default Modal;