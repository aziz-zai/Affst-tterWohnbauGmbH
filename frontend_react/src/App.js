import React, {useEffect, useState} from 'react'
import './App.scss'
import ScrollToTopFab from './ScrollToTop'
import {client} from './client'
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
  const [Test, setTest] = useState([])
  const [Mehr, setMehr] = useState([])
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 1200) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  const getServerSideProps = async () => {
    const query = '*[_type == "wohnbau"]'
    const wohnbauData = await client.fetch(query)

    const mehrfamilienQuery = '*[_type == "mehrfamilien"]'
    const mehrfamilienData = await client.fetch(mehrfamilienQuery)

    setTest(wohnbauData)
    setMehr(mehrfamilienData)
  }

  useEffect(() => {
    getServerSideProps()
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
      {console.log('data', Test, Mehr)}
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
