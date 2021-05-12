import React from 'react';
import './LandingCard.css'
import Logo from '../images/logo-mastercraft.svg';
import Button from '../Components/Button';
import Bookmark from '../Components/Bookmark';

const LandingCard = () => {

    return(
        <div className="landingCard card">
            <img src= {Logo} alt="mastercraft logo" className="masterclassLogo" />
            <h2>Mastercraft Bamboo Monitor Riser</h2>
            <p>A beautiful handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className="btnsSection">
                <Button className="btnCta"
                    bgColor='var(--clr-primary-cyan)'
                    textColor='white'
                    fontSize='1em'
                    linkId = "1"
                    >
                    Back this project
                </Button>
                <Bookmark />
            </div>

        </div>
    );
}

export default LandingCard;