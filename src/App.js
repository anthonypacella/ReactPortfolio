import React from "react";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import AboutMe from "./components/AboutMe.js";
import Projects from "./components/Project.js";
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './assets/images/Banner.jpg'
import '../src/assets/styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className = 'App bg-dark'>
          <Router>
              <Routes >
                <Route path = '/' element = 
                  {
                    <div id="hero" className="hero route bg-image" style = {{ backgroundImage: `url(${Banner})` }}>   
                      <div class = "overlay-itro"> </div>
                        <Header/>
                        <Hero/>
                        <Footer/>
                    </div>
                  }>
                </Route>
                <Route path = '/aboutme' element = {
                    <div className = 'bg-dark'>   
                        <Header/>
                        <AboutMe/>
                        <Footer/>
                    </div> }>
                </Route>
                <Route path = '/projects' element = {
                    <div className = 'bg-dark'>
                        <Header/>
                        <Projects/>
                        <Footer/>
                    </div> }>
                </Route>
              </Routes>
          </Router>
        </div>  
      );
}

export default App;
