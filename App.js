import React from 'react'
// import {BrowserRouter, Routes, Route } from "react-router-dom";
// import Asion from  './asion'
import Names from  './name'
import Rooting from './rooting'

class App extends React.Component {
  // constructor() {
  //   super();
  // }
  
  render() {
    return(
      <div>
        <Names/>
        <Rooting/>
      </div>
    )
    }
    
  }


export default App