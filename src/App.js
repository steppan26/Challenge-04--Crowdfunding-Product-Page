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
        pledgesRemaining: [101,64,0],
        bookmarkIsOn: false,
        progressBarFill: 0,
      }
    }

  componentDidMount(){
    this.setProgressBar()
    this.createStateLinkBtnsArrayAndEventListener()
    this.createPledgeSubmitBtns()
    this.createPledgeConfirmationBtn()
    this.setBookmarkClickEvent()
  }

  setProgressBar(){
    //convert values from state into $dollar value
    let progressBarValue = (100*(Number(this.state.dollarsBacked / this.state.projectTargetValue)))
    //stop bar from displaying further than 100%
    if(progressBarValue >= 100){
      progressBarValue = 100
    }
    this.setState({progressBarFill: progressBarValue})
  }

  createStateLinkBtnsArrayAndEventListener(){
    // add eventlistener to buttons on the About Project page
    const btnsArray = Array.from(document.getElementsByClassName("btn"))
    let linkedBtns = [];

    btnsArray.forEach((btn) =>{
      for(let i = 1; i < btnsArray.length + 1; i++){
        if(btn.classList.contains("linkID"+i)){
            btn.addEventListener("click", (e) => this.pledgeBtnEvent(e) )
          linkedBtns.push(btn)
        }
      }
    })
    this.setState({linkedBtnsArray: linkedBtns})
  }

  pledgeBtnEvent(e){
    const arrayIndex = this.getLinkId(e) -1
    if(arrayIndex >= 1){
      if(this.state.pledgesRemaining[arrayIndex-1] > 0){
        this.buttonClicked(e)
      }
    } else {
      this.buttonClicked(e)
    }
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

  createPledgeConfirmationBtn(){
    const closePledgeConfirmationBtn = document.getElementsByClassName("btnPledgeConfirmed")[0]
    closePledgeConfirmationBtn.addEventListener("click", ()=>{
      document.getElementById("pledgeConfirmation").style.display = "none"
      return;
    })
  }

  setBookmarkClickEvent(){
    const bookmarkIcon = document.getElementById("bookmarkBtn")
    bookmarkIcon.removeEventListener("click", (e) => this.pledgeBtnEvent(e) )
    bookmarkIcon.addEventListener("click", () =>{
      if(!this.state.bookmarkIsOn){
        document.getElementById("bookmarkBtnColor").children[0].style.fill = "var(--clr-secondary-cyan)"
        document.getElementById("bookmarkBtnColor").parentElement.previousSibling.innerHTML = "Bookmarked"
        document.getElementById("bookmarkBtnColor").parentElement.previousSibling.style.color = "var(--clr-secondary-cyan)"
      } else {
        document.getElementById("bookmarkBtnColor").children[0].style.fill = "#2F2F2F"
        document.getElementById("bookmarkBtnColor").parentElement.previousSibling.innerHTML = "Bookmark"
        document.getElementById("bookmarkBtnColor").parentElement.previousSibling.style.color = "#2F2F2F"

      }
      let bookmarkNewState = !this.state.bookmarkIsOn
      this.setState({bookmarkIsOn: bookmarkNewState})
    })
  }


  buttonClicked(e){
    let linkId = this.getLinkId(e);
    const modalPledgeSectionSelectedRadio = document.getElementById("modal").getElementsByClassName("pledgeSection")[linkId-1].children[0].children[0].children[0];
    modalPledgeSectionSelectedRadio.checked = true;
    this.openModal()
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
    selectedPledgeSection.children[4].style.display = "flex" //display the <hr> element
    selectedPledgeSection.children[5].style.display = "flex" //display the "lower section" element
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
    //Retrieve user-inputed value and assign to inputValue
    const inputValue = e.target.parentElement.getElementsByClassName("pledgeInputBox")[0].children[0].children[0].value;
    //get active pledge section position in pledgeSection array then once found add its index
    //to pledgeSectionIndex. This index value can then be used to obtain correct values in
    //the relevant state arrays
    let pledgeSectionIndex = 0
    const pledgeSectionArray = Array.from(document.getElementById("modal").getElementsByClassName("pledgeSection"))
    pledgeSectionArray.forEach((pledgeSection, index) =>{
      if(pledgeSection.classList.contains("pledgeSectionSelected")){
        pledgeSectionIndex = index
      }
    })

    const minimumPledge = pledgeValues[pledgeSectionIndex];
    if(!parseInt(inputValue)){
      // alert("Please input a whole number greater than "+ minimumPledge)
      e.target.parentElement.getElementsByClassName("pledgeInputBox")[0].children[0].children[0].value = ""
    } else if (inputValue >= minimumPledge){
      this.sumbitPledge(inputValue)
      e.target.parentElement.getElementsByClassName("pledgeInputBox")[0].children[0].children[0].value = ""
      //reduce number of pledges remaining, for corresponding state, by 1
      let pledgeArray = this.state.pledgesRemaining
      const pledgeIndex = pledgeSectionIndex-1;
      let newValue = pledgeArray[pledgeIndex] - 1;
      pledgeArray[pledgeIndex] = newValue;

      this.setState({pledgesRemaining: pledgeArray})
    } else {
      // alert("You must pledge at least $"+minimumPledge)
      e.target.parentElement.getElementsByClassName("pledgeInputBox")[0].children[0].children[0].value = ""

    }
  }

  sumbitPledge(pledgeValue){
    document.getElementById("pledgeConfirmation").style.display = "flex" //Display the modal thanking the user for their pledge
    this.closeModal() //close the modal which displays the different pledge options

    //add the pledged amount to the total dollars backed and update state
    let newTotal = this.state.dollarsBacked + parseInt(pledgeValue);
    this.setState({dollarsBacked: newTotal})

    //increase number of backers in state by 1
    let newBackersTotal = this.state.totalBackers + 1
    this.setState({totalBackers: newBackersTotal})

    //update the progress bar
    this.setProgressBar()
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
    document.getElementById("modal").style.display = "flex";
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

    const headerClicked = (e) =>{
      e.target.parentElement.children[0].children[0].checked = !e.target.parentElement.children[0].children[0].checked
      if(e.target.parentElement.children[0].children[0].checked){
        this.sectionSelected(e.target.parentElement.children[0].children[0])
      } else {
        this.hideAllExtensions()
      }
    }

    const updatePledgeExtension = (radioEvent) =>{
      if(radioEvent.target.checked){
        this.sectionSelected(radioEvent.target)
      } else {
        this.hideAllExtensions()
      }
    }

    return(
      <div id="App" className="defaultTheme">
        <Navbar />
        <article className="articleWrapper">
          <LandingCard />
          <DataInfoCard {...this.state} />
          <AboutProjectCard pledgeValues={this.state.pledgeValues} pledgesRemaining={this.state.pledgesRemaining}/>
          <Modal
          show={this.state.modalIsOpen}
          handleToUpdate={this.closeModal}
          activeSection={updatePledgeExtension}
          pledgeValues={this.state.pledgeValues}
          pledgesRemaining={this.state.pledgesRemaining}
          headerClicked = {headerClicked}
          />
          <PledgeReceived />
        </article>
      </div>
    )
  }
}

export default App;
