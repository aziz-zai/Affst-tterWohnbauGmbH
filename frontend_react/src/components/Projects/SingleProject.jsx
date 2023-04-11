import React from 'react';
import house from '../../assets/build_house4.jpeg';
import './Projects.scss';


function SingleProject({backgroundColor, headText, pText, lightMode}) {

  return (
    <div  className="container_projects" style={{backgroundColor:backgroundColor}}>
      <div className="container_inner_project">
      <div className="container_left-side" >
        <h2 style={{color:lightMode ? "#353531" : "#ffffff"}}>{headText}</h2>
        <p style={{color:lightMode ? "#353531" : "#ffffff"}}>{pText}</p>
        <button style={{backgroundColor:lightMode ? "#353531" : "#ffffff" , color:lightMode ? "#ffffff" : "#353531" }}>Mehr lesen!</button>
      </div>
      <div className="container_right-side">
          <img src={house} alt="Bild von einem Projekt von uns"/>
      </div>
      </div>
    </div>
  )
}

export default SingleProject