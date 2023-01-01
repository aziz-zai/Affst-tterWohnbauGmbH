import React from 'react'
import logo from '../../assets/hero-logo.svg'
import AppWrap from '../../wrapper/AppWrap'
import './Home.scss'

const Home = () => {
  return (
    <div className="app__hero-section">
        <div className="app__hero-text">
          <h5>WER SIND WIR?</h5>
          <h2>Der Schlüssel für Ihr Zuhause!</h2>
          <p>
            Irure velit amet ad id ex deserunt magna proident cillum sint. Culpa excepteur proident
            deserunt nulla. Mollit aliqua minim reprehenderit aliquip anim dolore nostrud anim velit
            mollit pariatur qui. Nulla ullamco sunt do amet ex eu.
          </p>
          
         
          <div>
          <button>Mehr erfahren!</button>
          </div> </div>
        <div className="app__hero-logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
  )
}

export default AppWrap(Home)
