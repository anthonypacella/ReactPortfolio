import React from 'react';
import '../../src/assets/styles/style.css';
import { ProjectData } from './ProjectData';
import pic from '../assets/images/FinalProjectImage.jpeg'


function Project() {
  return (
    <div className = "row projectContainer bg-dark">
      <h1>The Works of Anthony Pacella</h1>
      {
        ProjectData.map((val,key) => {
          return (
            <div  className = 'border border-light projectCard card bg-dark col-lg-4 col-md-6 portfolio-item filter-app'
            onClick={()=> {
                  window.open(val.page,'_blank')
             }}>
                <h2 className = 'text-light' key={key}>{val.title}</h2>
                <img src={pic} alt ="pic"></img>  
            <h4>{val.tech}</h4>
            </div>
          )
        })
      }
    </div>
  )
}


export default Project;