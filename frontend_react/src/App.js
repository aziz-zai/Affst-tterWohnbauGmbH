import React, {useEffect, useState} from 'react'
import {client} from './client'
import NavBar from './components'

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
    <div>
      App{console.log('data', Test)}
      {console.log('data2', Mehr)}
    </div>
  )
}

export default App
