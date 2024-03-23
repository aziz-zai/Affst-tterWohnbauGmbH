import {motion} from 'framer-motion'
import React, {useEffect, useState} from 'react'
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import {Link} from 'react-scroll'
import logo from '../../assets/AWB-Nav_logo.png'
import useScrollListener from '../../hooks/useScrollListener'

import './NavBar.scss'

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
      ease: 'easeIn',
      delay: 0.5,
    },
  },
}
const NavBar = ({scrollNav}) => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className={`app__navbar_wrapper ${scrollNav ? 'opaque' : 'transparent'}`}>
      <nav>
        <motion.div
          className={`app__navbar_container ${scrollNav ? 'opaque' : 'transparent'}`}
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          <Link activeClass="active" to={'Home'} spy={true} className="app__navbar-logo">
            <div className="app__navbar_logo_text" style={{color: scrollNav ? 'white' : 'white'}}>
              <h2>
                Affstätter <br /> Wohnbau GmbH
              </h2>
            </div>
            <img src={logo} alt="logo" />
          </Link>
          <ul className="app__navbar-links">
            {['Home', 'Projekte', 'Angebote', 'Kontakt', 'Überuns'].map((item) => (
              <li className="app__flex p-text" key={`link-${item}`}>
                <Link
                  activeClass="active"
                  to={item}
                  spy={true}
                  style={{color: scrollNav ? 'white' : 'white'}}
                  className={'app__navbar-link-item'}
                >
                  {item === 'Überuns' ? 'Über uns' : item}
                </Link>
              </li>
            ))}
          </ul>

          <div className="app__navbar-menu">
            <HiMenuAlt4 onClick={() => setToggle(true)} />

            {toggle && (
              <motion.div
                whileInView={{x: [300, 0]}}
                transition={{duration: 0.85, ease: 'easeOut'}}
              >
                <HiX onClick={() => setToggle(false)} />
                <ul className="app__navbar-links">
                  {['Home', 'Projekte', 'Angebote', 'Kontakt', 'Überuns'].map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                      <Link
                        activeClass="active"
                        to={item}
                        onClick={() => setToggle(false)}
                        spy={true}
                        className="app__navbar-link-item"
                        style={{color: scrollNav ? 'white' : 'black'}}
                      >
                        {item === 'Überuns' ? 'Über uns' : item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </motion.div>
      </nav>
    </div>
  )
}

export default NavBar
