import './App.css';
import React, { Component } from 'react';
import Navbar from './Containers/Navbar';
import LandingCard from './Components/LandingCard.js';
import DataInfoCard from './Components/DataInfoCard.js';
import AboutProjectCard from './Components/AboutProjectCard.js';
import Modal from './Containers/Modal.js';


class App extends Component{

  constructor(){
      super()
      this.state = {
        dollarsBacked : 89914,
        totalBackers : 5007,
        daysLeft : 56,
        projectTargetValue : 100000,
        modalIsOpen: false
      }
    }

  componentDidMount(){
    //convert values from state into $dollar value
    const progressBar = document.getElementById("progressBar");
    let dollarsBackedValue = Number(this.state.dollarsBacked);
    let progressBarPercent = (100*(dollarsBackedValue / this.state.projectTargetValue)) + "%";
    progressBar.style.width = progressBarPercent;

    // add eventlistener to buttons on the About Project page
    const aboutProjectElements = Array.from(document.getElementById("aboutProject").children);
    aboutProjectElements.forEach((x, i) => {
      if (i >=3){
        x.children[3].addEventListener("click", (x) => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          document.getElementById("modal").style.display = "block"
          this.setState({modalIsOpen: true})
        })
      }
    });
  }

  closeModal = () => {
    document.getElementById("modal").style.display = "none";
    this.setState({
      modalIsOpen: false
    })
  }

  render(){
    return(
      <div id="App" className="defaultTheme mobile">
        <Navbar />
        <article className="articleWrapper">
          <LandingCard />
          <DataInfoCard {...this.state} />
          <AboutProjectCard />
          <Modal show={this.state.modalIsOpen} handleToUpdate={this.closeModal} />
        </article>
      </div>
    )
  }
}

export default App;
