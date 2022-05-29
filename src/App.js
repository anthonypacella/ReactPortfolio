import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar.js";
import Hero from "./components/Hero.js";
import AboutMe from "./components/AboutMe.js";
import Projects from "./components/Project.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './assets/images/Banner.jpg'
import '../src/assets/styles/style.css'

function App() {
  return (
    <div className = 'App'>
      <Router>
          <Routes >
            <Route path = '/' element = 
              {
                <div id="hero" className="hero route bg-image" style = {{ backgroundImage: `url(${Banner})` }}>   
                  <div class = "overlay-itro"> </div>
                    <Sidebar/>
                    <Hero/>
                </div>
              }>
            </Route>
            <Route path = '/aboutme' element = {
                <div>   
                    <Sidebar/>
                    <AboutMe/>
                </div> }>
            </Route>
            <Route path = '/projects' element = {
                <div>
                    <Sidebar/>
                    <Projects/>
                </div> }>
            </Route>
          </Routes>
      </Router>
    </div>

  );
}

export default App;
