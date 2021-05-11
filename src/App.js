import './App.css';
import React, { Component } from 'react';
import Navbar from './Containers/Navbar';
import LandingCard from './Components/LandingCard.js';
import DataInfoCard from './Components/DataInfoCard.js';
import AboutProjectCard from './Components/AboutProjectCard.js';
import Modal from './Containers/Modal.js';
import PledgeReceived from './Components/PledgeReceived'


class App extends Component{

  constructor(){
      super()
      this.state = {
        dollarsBacked : 89914,
        totalBackers : 5007,
        daysLeft : 56,
        projectTargetValue : 100000,
        modalIsOpen: false,
        linkedBtnsArray: [],
        pledgeValues: [0,25,75,200],
      }
    }

  componentDidMount(){
    //convert values from state into $dollar value
    const progressBar = document.getElementById("progressBar");
    let dollarsBackedValue = Number(this.state.dollarsBacked);
    let progressBarPercent = (100*(dollarsBackedValue / this.state.projectTargetValue)) + "%";
    progressBar.style.width = progressBarPercent;

    // add eventlistener to buttons on the About Project page
    this.createStateLinkBtnsArrayAndEventListener()
    this.createPledgeSubmitBtns()
    const closePledgeConfirmationBtn = document.getElementsByClassName("btnPledgeConfirmed")[0]
    closePledgeConfirmationBtn.addEventListener("click", ()=>{document.getElementById("pledgeConfirmation").style.display = "none"})
  }

  createStateLinkBtnsArrayAndEventListener(){
    const btnsArray = Array.from(document.getElementsByClassName("btn"))
    let linkedBtns = [];

    btnsArray.forEach((btn) =>{
      for(let i = 1; i < btnsArray.length + 1; i++){
        if(btn.classList.contains("linkID"+i)){
          btn.addEventListener("click", (e) => {
            this.buttonClicked(e)
          })
          linkedBtns.push(btn)

        }
      }
    })
    this.setState({linkedBtnsArray: linkedBtns})
  }

  createPledgeSubmitBtns(){
    const btnsArray = Array.from(document.getElementById("modal").getElementsByClassName("btn"))
    let linkedBtns = [];

    btnsArray.forEach((btn) =>{
      for(let i = 1; i < btnsArray.length + 1; i++){
        if(btn.classList.contains("linkID"+i)){
          btn.addEventListener("click", (e) => {
            this.buttonClicked(e)
          })
          linkedBtns.push(btn)

        }
      }
    })
    this.setState({linkedBtnsArray: linkedBtns})
  }


  buttonClicked(e){
    let linkId = this.getLinkId(e);
    const modalPledgeSectionSelectedRadio = document.getElementById("modal").getElementsByClassName("pledgeSection")[linkId-1].children[0].children[0].children[0];
    modalPledgeSectionSelectedRadio.checked = true;
    this.openModal();
    this.sectionSelected(modalPledgeSectionSelectedRadio)
  }

  sectionSelected(radioElement){
    this.hideAllExtensions();
    this.showSelectedExtensionSection(radioElement);
    this.scrollToElement(radioElement)
  }

  hideAllExtensions(){
    //Hide all pledgeExtensions and <hr> sibling
    const pledgeSectionArray = Array.from(document.getElementById("modal").getElementsByClassName("pledgeSection"));
    pledgeSectionArray.forEach((x)=>{
        x.children[5].style.display = "none"
        x.children[4].style.display = "none"
        x.classList.remove("pledgeSectionSelected");
    })
  }

  showSelectedExtensionSection(radioElement){
    const selectedPledgeSection = radioElement.parentElement.parentElement.parentElement;
    selectedPledgeSection.children[4].style.display = "block" //display the <hr> element
    selectedPledgeSection.children[5].style.display = "block" //display the "lower section" element
    selectedPledgeSection.classList.add("pledgeSectionSelected") // add className with different CSS styles to show highlighted section
    this.activateInputs(selectedPledgeSection)
  }

  activateInputs(selectedPledgeSection){
    const allModalPledgeSections = Array.from(document.getElementById("modal").getElementsByClassName("pledgeSection"))
    allModalPledgeSections.forEach((x) => {
      const btn = x.getElementsByClassName("btn")[1]
      btn.removeEventListener("click", this.btnEventListner)
    })
    selectedPledgeSection.getElementsByClassName("btn")[1].addEventListener("click", (e) =>{
      this.btnEventListner(e, this.getPledgeValuesArray())
    })
  }

  btnEventListner(e, pledgeValues){
    const inputValue = e.target.parentElement.getElementsByClassName("pledgeInputBox")[0].children[0].value;
    //get active pledge section position in pledgeSection array then once found add its index
    //to pledgeSectionIndex
    let pledgeSectionIndex = 0
    const pledgeSectionArray = Array.from(document.getElementById("modal").getElementsByClassName("pledgeSection"))
    pledgeSectionArray.forEach((pledgeSection, index) =>{
      if(pledgeSection.classList.contains("pledgeSectionSelected")){
        pledgeSectionIndex = index
      }
    })
    const minimumPledge = pledgeValues[pledgeSectionIndex];
    if(!parseInt(inputValue)){
      console.log("Please input a whole number greater than "+ minimumPledge)
    } else if (inputValue >= minimumPledge){
      this.sumbitPledge(inputValue)
    } else {
      console.log("You must pledge at least $"+minimumPledge)
    }
  }

  sumbitPledge(pledgeValue){
    document.getElementById("pledgeConfirmation").style.display = "flex"
    this.closeModal()
    //add the pledged amount to the total dollars backed and update state
    let newTotal = this.state.dollarsBacked + pledgeValue;
    this.setState({dollarsBacked: newTotal})
    //increase number of backers in state by 1
    let newBackersTotal = this.state.totalBackers + 1
    this.setState({totalBackers: newBackersTotal})

  }

  getPledgeValuesArray(){
    return this.state.pledgeValues;
  }

  getLinkId(event){
    //Loop through each button to check if they containt a className "linkiD"
    // followed by a number, up to the length of the total number of buttons
    //then record the number of instances in btnsAmount
    const buttonsList = Array.from(document.getElementsByClassName("btn"))
    let linkID = 0;

    let btnsAmount = 0
    buttonsList.forEach((button) =>{
      for(let i = 0; i < buttonsList.length + 1; i++){
        if(button.classList.contains("linkID"+String((i+1)))){
          btnsAmount++
        }
      }
    });

    for(let i = 1; i < btnsAmount + 1; i++){
      if(event.target.classList.contains("linkID"+i)){
        linkID = i;
      }
    }
    return linkID;
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

  scrollToElement(radioElement){
    const elementPosition = radioElement.parentElement.offsetTop - 75;//align the element to the middle of the viewport
    window.scrollTo({
        top: `${elementPosition}`,
        left: 0,
        behavior: 'smooth'
      });
  }

  render(){

    const updatePledgeExtension = (radioEvent) =>{
      this.sectionSelected(radioEvent.target)
    }

    return(
      <div id="App" className="defaultTheme mobile">
        <Navbar />
        <article className="articleWrapper">
          <LandingCard />
          <DataInfoCard {...this.state} />
          <AboutProjectCard pledgeValues={this.state.pledgeValues}/>
          <Modal show={this.state.modalIsOpen} handleToUpdate={this.closeModal} activeSection={updatePledgeExtension} pledgeValues={this.state.pledgeValues}/>
          <PledgeReceived />
        </article>
      </div>
    )
  }
}

export default App;
