import {motion} from 'framer-motion'
import {FaCircleCheck} from 'react-icons/fa6'

import Lottie from 'lottie-react'
import React from 'react'
import {Link} from 'react-scroll'
import heroAnim from '../../assets/aff.json'
import house from '../../assets/build_house1.jpeg'
import house1 from '../../assets/build_house2.jpeg'
import house2 from '../../assets/build_house3.jpeg'
import house3 from '../../assets/build_house4.jpeg'
import AppWrap from '../../wrapper/AppWrap'
import './Home.scss'
const container = {
  hidden: {opacity: 1, scale: 0},
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: {y: 20, opacity: 0},
  visible: {
    y: 0,
    opacity: 1,
  },
}

const textVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}
const Home = () => {
  return (
    <div className="app__hero-section">
      <div className="app__hero-text">
        <motion.div variants={textVariants} initial="hidden" animate="visible">
          <h5>WER SIND WIR?</h5>
          <h2>
            Der Schlüssel für Ihr <b className="text-gradient">Zuhause!</b>{' '}
          </h2>
          <p>
            Von der <b style={{color: '#ff8000'}}>Beratung</b>, über die{' '}
            <b style={{color: '#ff8000'}}>Planung</b> bis zur{' '}
            <b style={{color: '#ff8000'}}>Ausführung</b> - alles aus einer Hand. Über den Bau von
            hochwertigen Mehrfamilienhäusern, Doppel-, Reihen- und Einfamilienhäusern hinaus haben
            wir bereits mehrere Wohn- und Geschäftsgebäude errichtet.
          </p>
          <div>
            <Link to="Projekte">
              <button>Mehr erfahren!</button>
            </Link>
          </div>
          <div class="container_hero">
            <div class="item">
              <FaCircleCheck color="#ff8000"></FaCircleCheck>
              <p>100% Zuverlässig</p>
            </div>
            <div class="item">
              <FaCircleCheck color="#ff8000"></FaCircleCheck>
              <p>100% Qualität</p>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="app__hero-house"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <Lottie animationData={heroAnim} />
      </motion.div>
    </div>
  )
}

export default AppWrap(Home, 'Home', 'home')
