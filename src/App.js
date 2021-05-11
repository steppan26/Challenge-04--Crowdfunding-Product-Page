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
        modalIsOpen: true,
        btnLinkID: []
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
        x.children[3].addEventListener("click", (e) => {
          this.buttonClicked(e)
        })
      }
    });
    this.createStateBtnArray()
  }

  buttonClicked(e){
    let linkId = this.getLinkId(e);
    const modalPledgeSectionSelected = document.getElementById("modal").getElementsByClassName("pledgeSection")[linkId];
    modalPledgeSectionSelected.children[0].children[0].children[0].checked = true;
    this.openModal();
    console.log(this.state.btnLinkID)
  }

  createStateBtnArray(){
    //Loop through each button to check if they containt a className "linkiD"
    // followed by a number, up to the length of the total number of buttons
    const buttonsList = Array.from(document.getElementsByClassName("btn"))
    const buttonsListLength = document.getElementsByClassName("btn").length

    let buttonsStateArray = []
    buttonsList.forEach((button) =>{

      for(let i = 0; i < buttonsListLength + 1; i++){
        if(button.classList.contains("linkID"+String((i+1)))){
          console.log("linkID"+String((i+1)))
          buttonsStateArray[i] = false;
        }
      }
    });
    this.setState({btnLinkID: buttonsStateArray}) //creates the state array for btnLinksID using above function
  }

  getLinkId(event){
    let linkID = 0;

    for(let i = 1; i < this.state.btnLinkID.length + 1; i++){
      if(event.target.classList.contains("linkID"+i)){
      linkID = i-1;
      }
      }
    return linkID;
  }

  scrollToElement(element){
    const elementPosition = element.children[0];
    console.log(elementPosition)
    window.scrollTo({
      top: `${elementPosition}`,
      left: 0,
      behavior: 'smooth'
    })
  }

  openModal = () => {
    document.getElementById("modal").style.display = "block";
    this.setState({
      modalIsOpen: true
    })
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
          <Modal show={this.state.modalIsOpen} handleToUpdate={this.closeModal} activeSection={this.state.btnLinkID}/>
        </article>
      </div>
    )
  }
}

export default App;
