import React from 'react'
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import './App.scss'
import Main from './Main'
import Impressum from './component/Impressum/Impressum.jsx' // Importieren Sie Ihre Impressum-Komponente
// Importieren Sie Ihre anderen Komponenten

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </Router>
  )
}

export default App
