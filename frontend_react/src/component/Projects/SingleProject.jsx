import React from 'react';
import './Projects.scss';


function SingleProject({backgroundColor, img, headText, pText, lightMode}) {

  return (
    <div  className="container_projects" style={{backgroundColor:backgroundColor}}>
      <div className="container_inner_project">
      <div className="container_left-side" >
        <h2 style={{color:lightMode ? "#353531" : "#ffffff"}}>{headText}</h2>
        <p style={{color:lightMode ? "#353531" : "#ffffff"}}>{pText}</p>
      </div>
      <div className="container_right-side">
          <img src={img} alt="Bild von einem Projekt von uns"/>
      </div>
      </div>
      
    </div>
  )
}

export default SingleProject