import React from 'react';
import schloss from '../../assets/schloss1.jpg';
import './Projects.scss';


function SingleProject({backgroundColor, headText, pText, lightMode}) {
    const primaryColor = lightMode ? "#353531" : "#ffffff";
    const btnColor = lightMode ? "#ffffff" :  "#353531";
  return (
    <div  className="container_projects" style={{backgroundColor:backgroundColor, color:primaryColor}}>
      <div className="container_inner_project">
      <div className="container_left-side">
        <h2>{headText}</h2>
        <p>{pText}</p>
        <button style={{backgroundColor:{primaryColor}}}>Mehr lesen!</button>
      </div>
      <div className="container_right-side">
        <div className="image-wrapper">
          <img src={schloss} alt="Bild von einem Projekt von uns"/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SingleProject