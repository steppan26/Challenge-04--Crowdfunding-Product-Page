import React from 'react';
import PledgeSection from '../Containers/PledgeSection';
import './AboutProjectCard.css';

const AboutProjectCard = (props) => {
    return(
        <div className="card aboutProject" id="aboutProject">
            <h1>About this project</h1>
            <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing the monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
            <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
            <PledgeSection className="pledgeSection"
                title = "Bamboo Stand"
                pledgeValue= {props.pledgeValues[1]}
                text = "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
                backersValue = {props.pledgesRemaining[0]}
                radioDisplay = "none"
                btnText = "Select Reward"
                linkId = "2"
            />
            <PledgeSection className="pledgeSection"
                title = "Black Edition Stand"
                pledgeValue= {props.pledgeValues[2]}
                text = "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."
                backersValue = {props.pledgesRemaining[1]}
                radioDisplay = "none"
                btnText = "Select Reward"
                linkId = "3"
            />
            <PledgeSection className="pledgeSection"
                title = "Mahogany Special Edition"
                pledgeValue= {props.pledgeValues[3]}
                text = "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included."
                backersValue = {props.pledgesRemaining[2]}
                radioDisplay = "none"
                btnText = "Select Reward"
                linkId = "4"
            />
        </div>
    );
}

export default AboutProjectCard;