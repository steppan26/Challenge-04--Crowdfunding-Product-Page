import React from 'react';
import './Modal.css';
import iconCloseModal from '../images/icon-close-modal.svg';
import PledgeSection from '../Containers/PledgeSection';

const Modal = (props) => {

    const sectionSelected = (radioElement) =>{
        hideAllExtensions()
        showSelectedExtensionSection(radioElement)
    }

    const updatePledgeExtension = (e) =>{
        hideAllExtensions()
        showSelectedExtensionSection(e.target)
    }

    const hideAllExtensions = () =>{
        //set pledgeExtension and <hr> to hide so only one may be viewable at a time
        const pledgeSectionArray = Array.from(document.getElementById("modal").getElementsByClassName("pledgeSection"));
        pledgeSectionArray.forEach((x)=>{
            x.children[5].style.display = "none"
            x.children[4].style.display = "none"
            x.classList.remove("pledgeSectionSelected");
        })
    }

    const showSelectedExtensionSection = (radioElement) =>{
        if (radioElement.checked){
            const selectedPledgeSection = radioElement.parentElement.parentElement.parentElement;
            selectedPledgeSection.children[4].style.display = "block" //display the <hr> element
            selectedPledgeSection.children[5].style.display = "block" //display the "lower section" element
            selectedPledgeSection.classList.add("pledgeSectionSelected") // add className with different CSS styles to show highlighted section
            const elementPosition = radioElement.parentElement.offsetTop - 150 //align the element to the middle of the viewport
            console.log(radioElement)
            window.scrollTo({
                top: `${elementPosition}`,
                left: 0,
                behavior: 'smooth'
              });
        }
    }

    // const radioBtnArray = document.getElementById("modal").getElementsByClassName("radio")
    // console.log(radioBtnArray)
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
                    title = "Pledge with no reward"
                    subtitle= ""
                    text = "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates.via email."
                    value = ""
                    valueSize = "0"
                    btnDisplay = "none"
                    radioDisplay = "inline"
                    btnText = "Continue"
                    onChange = {updatePledgeExtension}
                />
                <PledgeSection
                    title = "Bamboo Stand"
                    subtitle= "Pledge $25 or more"
                    text = "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
                    value = "101"
                    valueSize = "1.5em"
                    btnDisplay = "none"
                    radioDisplay = "inline"
                    btnText = "Continue"
                    onChange = {updatePledgeExtension}
                />
                <PledgeSection
                    title = "Black Edition Stand"
                    subtitle= "Pledge $75 or more"
                    text = "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."
                    value = "64"
                    valueSize = "1.5em"
                    btnDisplay = "none"
                    radioDisplay = "inline"
                    btnText = "Continue"
                    onChange = {updatePledgeExtension}

                />
                <PledgeSection
                    title = "Mahogany Special Edition"
                    subtitle= "Pledge $200 or more"
                    text = "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included."
                    value = "0"
                    valueSize = "1.5em"
                    btnDisplay = "none"
                    radioDisplay = "inline"
                    btnText = "Continue"
                    onChange = {updatePledgeExtension}

                />
            </div>
        </div>
    );

}

export default Modal;