import {motion} from 'framer-motion'
import {FaCircleCheck} from 'react-icons/fa6'

import Lottie from 'lottie-react'
import React from 'react'
import {Link} from 'react-scroll'
import heroAnim from '../../assets/aff.json'
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
      <div className="app__hero-background"></div>
      <div className="app__hero-text">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="app__hero-text-wrapper"
        >
          <h2>
            Der Schlüssel für Ihr <b className="text-gradient">Zuhause!</b>{' '}
          </h2>
          <p className="hero-text-p">
            Komplettservice von <b style={{color: '#ff8000'}}>Beratung</b> bis{' '}
            <b style={{color: '#ff8000'}}>Ausführung </b>
            für hochwertige Wohnbauten, inklusive Mehrfamilien-, Doppel-, Reihen- und
            Einfamilienhäuser sowie Wohn- und Geschäftsgebäude.
          </p>
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
          <div>
            <Link to="Projekte">
              <button>Mehr erfahren!</button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AppWrap(Home, 'Home', 'home')
