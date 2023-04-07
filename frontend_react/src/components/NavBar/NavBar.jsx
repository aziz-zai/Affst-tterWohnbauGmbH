import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { Link } from 'react-scroll';
import logo from '../../assets/AWB-Nav_logo.png';

import './NavBar.scss';

const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.5
    },
  },
};
const NavBar = ({scrollNav}) => {
  const [toggle, setToggle] = useState(false)
  const [hoverStyles, setHoverStyles] = useState({backgroundColor: scrollNav? "rgba(29, 29, 29, 0.85)" :"rgba(255, 255, 255, 0.85)"});

  const baseStyles = {
    backgroundColor: scrollNav? "rgba(29, 29, 29, 0.85)" :"rgba(255, 255, 255, 0.85)",
  };

  return (
    <nav className="app__navbar">
      <motion.div className="app__navbar_container"
       style={{ ...baseStyles, ...hoverStyles }} onMouseOver={() => setHoverStyles({ backgroundColor: scrollNav? "rgba(29, 29, 29)":"rgba(255, 255, 255)" })} onMouseOut={() => setHoverStyles({})}>
      <Link activeClass="active"
        to={'Home'}
        spy={true}className="app__navbar-logo">
        <div className="app__navbar_logo_text" style={{color: scrollNav? "white" :"black"}}>
          Affstätter <br/> Wohnbau GmbH
        </div>
        <img src={logo} alt="logo" />
      </Link>
      <ul className="app__navbar-links">
        {['Home', 'Projekte', 'Angebote', 'Kontakt', 'Überuns'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <Link activeClass="active"
        to={item}
        spy={true}
        style={{color: scrollNav? "white" :"black"}}
        className={"app__navbar-link-item"}
        >{item}</Link>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div whileInView={{x: [300, 0]}} transition={{duration: 0.85, ease: 'easeOut'}}>
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
              {['Home', 'Projekte', 'Angebote', 'Kontakt', 'ÜberUns'].map((item) => (
                <li className="app__flex p-text" key={`link-${item}`} >
                  <Link activeClass="active"
        to={item}
        spy={true}
        className="app__navbar-link-item"
        style={{color: scrollNav? "white" :"black"}}>{item}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
        </motion.div>
    </nav>
  )
}

export default NavBar
