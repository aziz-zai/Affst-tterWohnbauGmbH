import React, {useEffect, useState} from 'react'
import './App.scss'
import {client} from './client'
import {Home, NavBar} from './components/index'

const App = () => {
  const [Test, setTest] = useState([])
  const [Mehr, setMehr] = useState([])

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
  }, [])

  return (
    <div className="app">
      <NavBar />
      {console.log('data', Test, Mehr)}
      <Home />
      <Home />
    </div>
  )
}

export default App
