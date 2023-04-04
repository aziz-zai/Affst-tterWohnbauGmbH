import React from 'react'
import { Link } from 'react-scroll'
import logo from '../../assets/hero-logo1.svg'
import AppWrap from '../../wrapper/AppWrap'
import './Home.scss'

const Home = () => {
  return (
    <div className="app__hero-section">
        <div className="app__hero-text">
          <h5>WER SIND WIR?</h5>
          <h2>Der Schlüssel für Ihr Zuhause!</h2>
          <p>
          Von der <b>Beratung</b>, über die <b>Planung</b> bis zur <b>Ausführung</b> - alles aus einer Hand. Über den Bau von <b>hochwertigen Mehrfamilienhäusern,
          Doppel-, Reihen- und Einfamilienhäusern</b> hinaus haben wir bereits mehrere <b>Wohn- und Geschäftsgebäude</b> errichtet.
          Wir freuen uns schon, Sie von unseren Qualitäten und Vorzügen begeistern zu dürfen!
          </p>
          <div>
            <Link to="Projekte">
          <button>Mehr erfahren!</button>
            </Link>
          </div> </div>
        <div className="app__hero-logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
  )
}

export default AppWrap(Home, 'Home')
