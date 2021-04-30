import React, { Component } from 'react';
import NavMenu from '../Components/NavMenu';
import Logo from '../images/logo.svg';
import HamburgerImg from '../images/icon-hamburger.svg';
import CloseMenuImg from '../images/icon-close-menu.svg';
import './Navbar.css';

class Navbar extends Component{

    constructor(){
        super()
        this.state = {
            isMenuOpen: false
        }

    }

    menuClicked = () =>{
        let isMenuOpen = this.state.isMenuOpen;
        const navMenuVisibility = document.getElementById("menuIcon");
        const navBar = document.getElementById("navBar");

        if(isMenuOpen === true){
            console.log("closed");
            navMenuVisibility.style.display = "none";
            navBar.style.backgroundColor = "transparent";
            this.setState({isMenuOpen: false})
        } else {
            console.log("open");
            navMenuVisibility.style.display = "flex";
            navBar.style.backgroundColor = "linear-gradient(to bottom, rgba(0, 0, 0, 0.89)0% 40%, hsla(0,0,0,0))";
            this.setState({isMenuOpen: true})
        }
        return;

    }

    render(){
        let MenuImg = HamburgerImg;
        if(this.state.isMenuOpen === true){
            MenuImg = CloseMenuImg;
        } else {
            MenuImg = HamburgerImg;
        }

        return(
            <nav id="navBar">
                <img src={Logo} alt="crowdfund logo" className="logo" />
                <img src={MenuImg} id="MenuIcon" alt="menu icon" className="menuIcon" onClick={this.menuClicked} />
                <NavMenu />
            </nav>
        );
    }
}

export default Navbar;