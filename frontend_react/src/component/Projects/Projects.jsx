import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import {IconButton} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {useSwipeable} from 'react-swipeable'
import Elektro from '../../assets/elektro.png'
import ACAR from '../../assets/partner/p_acar.jpg'
import ADIL from '../../assets/partner/p_adil.jpg'
import Bucher from '../../assets/partner/p_bucher.jpg'
import Dittus from '../../assets/partner/p_dittus.jpg'
import Eberhardt from '../../assets/partner/p_eberhardt.jpg'
import Feld from '../../assets/partner/p_feld.jpg'
import Haser from '../../assets/partner/p_haser.jpg'
import Nestle from '../../assets/partner/p_nestle.jpg'
import Scherer from '../../assets/partner/p_scherer.jpg'
import Straub from '../../assets/partner/p_straub.jpg'
import Unal from '../../assets/partner/p_unal.jpg'
import Aff_Mehrfam from '../../assets/projects/Aff_Mehrfam.jpg'
import Jettingen_Doppelhaus from '../../assets/projects/Jettingen_Doppelhaus.JPG'
import Magstadt_Doppelhaus from '../../assets/projects/Magstadt_Doppelhaus.jpg'
import Mönchberg_Reihenhaus from '../../assets/projects/Mönchberg_Reihenhaus.jpg'
import Rottenburg_Doppelhaus from '../../assets/projects/Rottenburg_Doppelhaus.JPG'
import AppWrap from '../../wrapper/AppWrap'
import './Projects.scss'
import SingleProject from './SingleProject'

const fakeData = [
  {
    key: 0,
    lightMode: false,
    backgroundColor: '#4B3B40',
    img: Aff_Mehrfam,
    headText: 'Mehrfamilienhaus in Affstätt',
    pText: '',
  },
  {
    key: 1,
    lightMode: false,
    backgroundColor: '#82735C',
    img: Jettingen_Doppelhaus,
    headText: 'Doppelhaus in Jettingen',
    pText: '',
  },
  {
    key: 2,
    lightMode: false,
    backgroundColor: '#9DB17C',
    img: Magstadt_Doppelhaus,
    headText: 'Doppelhaus in Magstadt',
    pText: '',
  },
  {
    key: 3,
    lightMode: false,
    backgroundColor: '#6C698D',
    img: Mönchberg_Reihenhaus,
    headText: 'Drei Reihenhäuser in Mönchberg',
    pText: '',
  },
  {
    key: 4,
    lightMode: false,
    backgroundColor: '#C6878F',
    img: Rottenburg_Doppelhaus,
    headText: 'Doppelhaus in Rottenburg',
    pText: '',
  },
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
  const handleSwipe = (direction) => {
    if (direction === 'left') {
      // Swipe left, go to the next image
      nextStep()
    } else if (direction === 'right') {
      // Swipe right, go to the previous image
      prevStep()
    }
  }
  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
  })
  return (
    <div className="banner_container">
      <div
        {...handlers}
        className="project_wrapper"
        style={{transform: `translate(-${(index * 100) / fakeData.length}%)`}}
      >
        {fakeData.map((project) => (
          <SingleProject
            key={project.key}
            lightMode={project.lightMode}
            backgroundColor={project.backgroundColor}
            img={project.img}
            headText={project.headText}
            pText={project.pText}
            fakeData={fakeData}
            index={index}
          />
        ))}
      </div>
      <div className="activeNavOption_container">
        <div className="activeNavOption_wrapper">
          {fakeData.map((data) =>
            data.key == index ? (
              <div key={data.key} className="activeNavOption" style={{backgroundColor: 'white'}} />
            ) : (
              <div key={data.key} className="activeNavOption" />
            )
          )}
        </div>
      </div>
      <IconButton
        className="prevButton navButtons"
        onClick={prevStep}
        style={{
          color: fakeData[index].lightMode ? 'gray' : 'white',
          borderColor: fakeData[index].lightMode ? 'gray' : 'white',
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        className="nextButton navButtons"
        onClick={nextStep}
        style={{
          color: fakeData[index].lightMode ? 'gray' : 'white',
          borderColor: fakeData[index].lightMode ? 'gray' : 'white',
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
      <div className="partner_section">
        <h2>Besuchen Sie auch unsere Partner!</h2>
        <div>
          <a href="https://www.elektro-yer.de/">
            <img src={Elektro} alt="elektro yer logo" className="elektro" />
          </a>
          {[ACAR, ADIL, Bucher, Dittus, Eberhardt, Feld, Haser, Nestle, Scherer, Straub, Unal].map(
            (partner) => (
              <img key={partner} src={partner} alt={`${partner} logo`} className="partner" />
            )
          )}
        </div>
      </div>
    </div>
  )
}
export default AppWrap(Projects, 'Projekte', 'project')
