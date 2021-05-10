import React, {Component} from 'react';
import './Modal.css';
import iconCloseModal from '../images/icon-close-modal.svg';
import PledgeSection from '../Containers/PledgeSection';

class Modal extends Component {
    constructor(){
        super()
        this.state={
            AboutPledgeSection: {},
            ModalPledgeSection:[]
        }
    }

    componentDidMount(){
        //Create an array of all pledgeSections and set to state after load in order to loop through them later
        this.setState({AboutPledgeSection: document.getElementById("modal").getElementsByClassName("pledgeSection")})
        this.setState({ModalPledgeSection: this.state.ModalPledgeSection.concat(Array.from(document.getElementById("modal").getElementsByClassName("pledgeSection")))})
    }

    updatePledgeExtension = (e) =>{
        //set pledgeExtension and <hr> to hide so only one may be viewable at a time
        this.state.ModalPledgeSection.forEach((x)=>{
            x.children[5].style.display = "none"
            x.children[4].style.display = "none"
            x.classList.remove("pledgeSectionSelected");
        })
        if (e.target.checked){
            e.target.parentElement.parentElement.parentElement.children[5].style.display = "block"
            e.target.parentElement.parentElement.parentElement.children[4].style.display = "block"
            e.target.parentElement.parentElement.parentElement.classList.add("pledgeSectionSelected")
            const elementPosition = e.target.parentElement.offsetTop - 150
            window.scrollTo({
                top: `${elementPosition}`,
                left: 0,
                behavior: 'smooth'
              });
        }
    }

    render(){
        return(
            <div className="modalContainer" id="modal">
                <hr className="modalBackground" />
                <div className="card">
                    <div className="modalHeader">
                        <h1>Back this project</h1>
                        <img src={iconCloseModal} alt="close modal button" onClick={this.props.handleToUpdate}/>
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
                        onChange = {this.updatePledgeExtension}
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
                        onChange = {this.updatePledgeExtension}
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
                        onChange = {this.updatePledgeExtension}

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
                        onChange = {this.updatePledgeExtension}

                    />
                </div>
            </div>
        );
    }
}

export default Modal;