import React from 'react'
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
const Main = ({userPref}) => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="app">
      <Contact />
      <NavBar />
      <NavigationDots />
      <div className="copyright">
        <p className="p-text">@{currentYear} YER</p>
        <p className="p-text">All rights reserved</p>
      </div>
      <Home />
      <Projects />
      <Offers />
      <Kontakt />
      <UeberUns userPref={userPref} />
      <Footer />
      <ScrollToTopFab />
    </div>
  )
}

export default Main
