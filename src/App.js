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
        linkedBtnsArray: []
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
    const elementPosition = radioElement.parentElement.offsetTop - 200;//align the element to the middle of the viewport
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
          <AboutProjectCard />
          <Modal show={this.state.modalIsOpen} handleToUpdate={this.closeModal} activeSection={updatePledgeExtension}/>
        </article>
      </div>
    )
  }
}

export default App;
