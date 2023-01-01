import React from 'react'
import logo from '../../assets/AWB-Logo.png'
import AppWrap from '../../wrapper/AppWrap'
import './Home.scss'

const Home = () => {
  return (
    <div className="app__hero-section">
        <div className="app_hero-text">
          <p>
            Irure velit amet ad id ex deserunt magna proident cillum sint. Culpa excepteur proident
            deserunt nulla. Mollit aliqua minim reprehenderit aliquip anim dolore nostrud anim velit
            mollit pariatur qui. Nulla ullamco sunt do amet ex eu.
          </p>
            <button>Mehr erfahren!</button>
        </div>
        <div className="app__hero-logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
  )
}

export default AppWrap(Home)
