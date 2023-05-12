import React, {useEffect, useState} from 'react'
import './App.scss'
import ScrollToTopFab from './ScrollToTop'
import Footer from './components/Footer/Footer'
import {
  Contact,
  Home,
  Kontakt,
  NavBar,
  NavigationDots,
  Offers,
  Projects,
  UeberUns,
} from './components/index'
const App = () => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 1200) {
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

export default App
