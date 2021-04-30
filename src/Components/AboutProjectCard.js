import React from 'react';
import PledgeSection from './PledgeSection.js';
import './AboutProjectCard.css';

const AboutProjectCard = () => {
    return(
        <div className="card aboutProject">
            <h1>About this project</h1>
            <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing the monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
            <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
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
    );
}

export default AboutProjectCard;