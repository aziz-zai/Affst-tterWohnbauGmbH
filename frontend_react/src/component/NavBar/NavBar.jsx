import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { Link } from 'react-scroll';
import logo from '../../assets/AWB-Nav_logo.png';
import useScrollListener from '../../hooks/useScrollListener';

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
      duration: 0.3,
      ease: "easeIn",
      delay: 0.5
    },
  },
};
const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  const [navClassList, setNavClassList] = useState([])
  const scroll = useScrollListener()

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = []

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0) _classList.push('nav-bar--hidden')

    setNavClassList(_classList)
  }, [scroll.y, scroll.lastY])


  return (
    <nav className={navClassList.join(" ")}>
      <motion.div className="app__navbar_container"
       variants={navVariants}
       initial="hidden"
       animate="visible"
      >
      <Link activeClass="active"
        to={'Home'}
        spy={true}className="app__navbar-logo">
        <div className="app__navbar_logo_text">
          <h2>Affstätter <br/> Wohnbau GmbH</h2>
        </div>
        <img src={logo} alt="logo" />
      </Link>
      <ul className="app__navbar-links">
        {['Home', 'Projekte', 'Angebote', 'Kontakt', 'Überuns'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <Link activeClass="active"
        to={item}
        spy={true}
        style={{color: "black"}}
        className={"app__navbar-link-item"}
        >{item === 'Überuns' ? 'Über uns' : item}</Link>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div whileInView={{x: [300, 0]}} transition={{duration: 0.85, ease: 'easeOut'}}>
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
              {['Home', 'Projekte', 'Angebote', 'Kontakt', 'Überuns'].map((item) => (
                <li className="app__flex p-text" key={`link-${item}`} >
                  <Link activeClass="active"
        to={item}
        onClick={() => setToggle(false)}
        spy={true}
        className="app__navbar-link-item"
        style={{color: "black"}}>{item === 'Überuns' ? 'Über uns' : item}</Link>
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

