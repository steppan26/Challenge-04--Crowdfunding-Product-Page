import './App.css';
import React, { Component } from 'react';
import Navbar from './Containers/Navbar';
import LandingCard from './Components/LandingCard.js';
import DataInfoCard from './Components/DataInfoCard.js';
import AboutProjectCard from './Components/AboutProjectCard.js';


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
      // this.handleDollars = this.handleDollars.bind(this);
    }

    componentDidMount(){
      const progressBar = document.getElementById("progressBar");
      let dollarsBackedValue = Number(this.state.dollarsBacked);
      let progressBarPercent = (100*(dollarsBackedValue / this.state.projectTargetValue)) + "%";
      progressBar.style.width = progressBarPercent;
    }

  render(){
    return(
      <div id="App" className="defaultTheme mobile">
        <Navbar />
        <article className="articleWrapper">
          <LandingCard />
          <DataInfoCard {...this.state} />
          <AboutProjectCard />
        
        </article>
      </div>
    )
  }
}

export default App;
