import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Main from './Main';
import Impressum from './component/Impressum/Impressum.jsx';
import { useCookieBanner } from './component/cookieConsent'; // Importiere deinen Cookie Consent Hook
import PrivacyPolicy from './PrivacyPolicy.js';

const App = () => {
  // Verwende den Cookie Banner Hook
  const userPref = useCookieBanner({ lang: 'de', privacyPolicyUrl: '/Datenschutzerklärung' });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main userPref={userPref} />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/Datenschutzerklärung" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
