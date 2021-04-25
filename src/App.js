import './App.css';
import React, { Component } from 'react';
import Navbar from './Containers/Navbar'



class App extends Component{

  constructor(){
      super()
      this.state = {}
    }

  render(){
    return(
      <div id="App" className="defaultTheme mobile">
        <Navbar />
      </div>
    )
  }
}

export default App;
