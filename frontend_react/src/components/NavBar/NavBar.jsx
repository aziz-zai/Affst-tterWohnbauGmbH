import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { Link } from 'react-scroll';
import logo from '../../assets/AWB-Nav_logo.png';

import './NavBar.scss';
const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="logo" />
        <div>
          Affstätter <br/> Wohnbau <br/> GmbH
        </div>
      </div>
      <ul className="app__navbar-links">
        {['Home', 'Projekte', 'Angebote', 'Kontakt', 'UeberUns'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <Link activeClass="active"
        to={item}
        spy={true}
        className="app__navbar-link-item">{item}</Link>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div whileInView={{x: [300, 0]}} transition={{duration: 0.85, ease: 'easeOut'}}>
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
              {['Home', 'Projekte', 'Angebote', 'Kontakt', 'UeberUns'].map((item) => (
                <li className="app__flex p-text" key={`link-${item}`}>
                  <Link activeClass="active"
        to={item}
        spy={true}
        className="app__navbar-link-item">{item}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
