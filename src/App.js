import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <h2 className="heading" id="projects">PROJECTS</h2>
          {/* <Projects /> */}
        <h2 className="heading" id="about">ABOUT</h2>
          {/* <About /> */}
        <h2 className="heading" id="footer">LIKE WHAT YOU SEE?</h2>
          <Footer/>
      </div>
    );
  }
}

export default App;
