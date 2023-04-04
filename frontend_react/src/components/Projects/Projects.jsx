import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import AppWrap from '../../wrapper/AppWrap';
import './Projects.scss';
import SingleProject from './SingleProject';

const fakeData =[{key: 0, lightmode: true, backgroundColor:"#161B33", headText: "sadsadsadas sad sad", pText:"sadsad"},
{key: 1,lightmode: true, backgroundColor:"#A69CAC", headText: "nonono fdgfd fddf", pText:"sadnono sdf"},
{key: 2,lightmode: true, backgroundColor:"#3B4C5D", headText: "nonono fdgfd fddsdsds sdsd", pText:"sadnono   ss sdf"},
{key: 3,lightmode: true, backgroundColor:"#E6EFF8", headText: "nonono fdgfd fddsdsds sdsd", pText:"sadnono   ss sdf"},
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
      <div className="offer_page_header">
        <h2>Unsere Angebote</h2></div>
    </div>
  )
}

export default AppWrap(Projects, 'Projekte')