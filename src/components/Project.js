import React from 'react';
import '../../src/assets/styles/style.css';
import { ProjectData } from './ProjectData';
import pic from '../assets/images/FinalProjectImage.jpeg'


function Project() {
  return (
    <section>
          <div className = "row bg-dark projectContainer">
      <h1 className = 'text-light'>The Works of Anthony Pacella</h1>
      {
        ProjectData.map((val,key) => {
          return (
            <div  className = 'fadein rounded border border-light projectCard card bg-dark col-lg-4 col-md-4'
            onClick={()=> {
                  window.open(val.page,'_blank')
             }}>
                <h2 className = 'text-light' key={key}>{val.title}</h2>
                <img className = 'projectimage img-fluid' src={val.image} alt ="pic"></img>  
            <h4 className = 'techText'>{val.tech}</h4>
            </div>
          )
        })
      }
    </div>
    </section>

  )
}


export default Project;