import React, {useEffect, useState} from 'react'
import './App.scss'
import ScrollToTopFab from './ScrollToTop'
import Footer from './component/Footer/Footer'
import {
  Contact,
  Home,
  Kontakt,
  NavBar,
  NavigationDots,
  Offers,
  Projects,
  UeberUns,
} from './component/index'
const Main = () => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 280) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])
  const currentYear = new Date().getFullYear()

  return (
    <div className="app">
      <Contact />
      <NavBar scrollNav={scrollNav} />
      <NavigationDots />
      <div className="copyright">
        <p className="p-text">@{currentYear} YER</p>
        <p className="p-text">All rights reserved</p>
      </div>
      <Home />
      <Projects />
      <Offers />
      <Kontakt />
      <UeberUns />
      <Footer />
      <ScrollToTopFab />
    </div>
  )
}

export default Main
