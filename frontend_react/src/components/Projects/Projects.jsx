import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Feld from '../../assets/Feld.jpg';
import Scherer from '../../assets/Scherer.jpg';
import Elektro from '../../assets/elektro.png';
import Haser from '../../assets/haser.jpeg';
import Aff_Mehrfam from '../../assets/projects/Aff_Mehrfam.jpg';
import Jettingen_Doppelhaus from '../../assets/projects/Jettingen_Doppelhaus.JPG';
import Magstadt_Doppelhaus from '../../assets/projects/Magstadt_Doppelhaus.jpg';
import Mönchberg_Reihenhaus from '../../assets/projects/Mönchberg_Reihenhaus.jpg';
import Rottenburg_Doppelhaus from '../../assets/projects/Rottenburg_Doppelhaus.JPG';
import AppWrap from '../../wrapper/AppWrap';
import './Projects.scss';
import SingleProject from './SingleProject';

const fakeData =[{key: 0, lightMode: true, backgroundColor:"#E6EFF8", img:Aff_Mehrfam, headText: "Mehrfamilienhaus in Affstätt", pText:"Ein schönes Mehrfamilienhaus in Affstätt mit schönen Blick und "},
{key: 1,lightMode: false, backgroundColor:"#A69CAC", img:Jettingen_Doppelhaus,headText: "Doppelhaus in Jettingen", pText:"sadnono sdf"},
{key: 2,lightMode: false, backgroundColor:"#3B4C5D", img:Magstadt_Doppelhaus,headText: "Doppelhaus in Magstadt", pText:"sadnono   ss sdf"},
{key: 3,lightMode: false, backgroundColor:"#161B33", img:Mönchberg_Reihenhaus,headText: "Drei Reihenhäuser in Mönchberg", pText:"sadnono   ss sdf"},
{key: 4,lightMode: true, backgroundColor:"#E6EFF8", img:Rottenburg_Doppelhaus,headText: "Doppelhaus in Rottenburg", pText:"sadnono   ss sdf"},
]

function Projects() {
  const [index, setIndex] = useState(0)  

  function nextStep() {
    if (index === fakeData.length - 1) {
      setIndex(0)
      return
    }
    setIndex(index + 1)
  }

  function prevStep() {
    if (index === 0) {
      setIndex(fakeData.length - 1)
      return
    }
    setIndex(index - 1)
  }
  return (
    <div className='banner_container'>
      <div className='project_wrapper' style={{ transform: `translate(-${index * 100/fakeData.length}%)`
     }}>
      {fakeData.map(project => 
      <SingleProject key={project.key}lightMode={project.lightMode} 
      backgroundColor={project.backgroundColor} 
      img={project.img}
      headText={project.headText} 
      pText={project.pText}
      />
      )}
      </div>
      <IconButton className='prevButton navButtons' onClick={prevStep} 
      style={{color:  fakeData[index].lightMode ? "gray" : "white", borderColor:  fakeData[index].lightMode ? "gray" : "white"}} >
        <ArrowBackIosIcon/>
      </IconButton>
      <IconButton className='nextButton navButtons' onClick={nextStep} 
      style={{color:  fakeData[index].lightMode ? "gray" : "white", borderColor:  fakeData[index].lightMode ? "gray" : "white"}}>
        <ArrowForwardIosIcon/>
      </IconButton>
       <div className="activeNavOption_container">
        <div className="activeNavOption_wrapper">
        {fakeData.map(data => 
        data.key == index ?
        <div key={data.key} className="activeNavOption" style={{backgroundColor:"white"}}/>
        : <div key={data.key} className="activeNavOption"/>
        )}
      </div>
      </div>
      <div className="partner_section">
        <h2>Besuchen Sie auch unsere Partner!</h2>
        <div>
          <img src={Elektro} alt="elektro yer logo" className="elektro"/>
          {[Scherer, Haser, Feld, Scherer, Haser, Feld, Scherer, Haser, Scherer, Feld, Scherer].map(partner => 
            <img src={partner} alt={`${partner} logo`} className="partner"/>
            )}
    
        </div>
      </div>
    </div>
  )
}

export default AppWrap(Projects, 'Projekte', 'project')