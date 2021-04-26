import './App.css';
import React, { Component } from 'react';
import Navbar from './Containers/Navbar';
import LandingCard from './Components/LandingCard.js';
import DataInfoCard from './Containers/DataInfoCard.js';


class App extends Component{

  constructor(){
      super()
      this.state = {}
    }

  render(){
    return(
      <div id="App" className="defaultTheme mobile">
        <Navbar />
        <article className="articleWrapper">
          <LandingCard />
          <DataInfoCard />
        </article>
      </div>
    )
  }
}

export default App;
