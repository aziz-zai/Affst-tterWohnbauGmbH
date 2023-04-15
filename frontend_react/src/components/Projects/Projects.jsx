import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Feld from '../../assets/Feld.jpg';
import Scherer from '../../assets/Scherer.jpg';
import Unal from '../../assets/Unal.jpg';
import Elektro from '../../assets/elektro.png';
import Haser from '../../assets/haser.jpeg';
import AppWrap from '../../wrapper/AppWrap';
import './Projects.scss';
import SingleProject from './SingleProject';

const fakeData =[{key: 0, lightMode: true, backgroundColor:"#E6EFF8", headText: "sadsadsadas sad sad", pText:"sadsad"},
{key: 1,lightMode: false, backgroundColor:"#A69CAC", headText: "nonono fdgfd fddf", pText:"sadnono sdf"},
{key: 2,lightMode: false, backgroundColor:"#3B4C5D", headText: "nonono fdgfd fddsdsds sdsd", pText:"sadnono   ss sdf"},
{key: 3,lightMode: false, backgroundColor:"#161B33", headText: "nonono fdgfd fddsdsds sdsd", pText:"sadnono   ss sdf"},
]

function Projects() {
  const [index, setIndex] = useState(0)
  const [isOpen, setOpen] = useState(false)
  
  var menuStyling = "opacity-100";
  var landingStyling = "max-sm:opactity-0";

  useEffect(() => {
    if(isOpen){
      menuStyling ="opacity-0"
      landingStyling ="max-sm:opactity-100"
    }
    else{
       menuStyling = "opacity-100";
       landingStyling = "max-sm:opactity-0";
    }
  }, [isOpen])

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
      headText={project.headText} 
      pText={project.pText}
      />
      )}
      </div>
      <IconButton className='prevButton navButtons' onClick={prevStep}>
        <ArrowBackIosIcon/>
      </IconButton>
      <IconButton className='nextButton navButtons' onClick={nextStep}>
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