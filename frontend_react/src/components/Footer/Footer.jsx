import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LanguageIcon from '@mui/icons-material/Language'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import React from 'react'
import {Link} from 'react-scroll'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text">
        <div className="col-1">
          <h3>Unsere Links</h3>
          <ul className="footer-links">
            <Link to="Home" spy={true}>
              Home
            </Link>
            <Link to="Projekte" spy={true}>
              Projekte
            </Link>
            <Link to="Angebote" spy={true}>
              Angebote
            </Link>
            <Link to="Kontakt" spy={true}>
              Kontakt
            </Link>
            <Link to="Überuns" spy={true}>
              Über uns
            </Link>
          </ul>
        </div>
        <div className="col-2">
          <h3>Bilal Yer</h3>
          <p>Nagolder Straße 4</p>
          <p>71131 Jettingen</p>
          <p>Deutschland</p>
        </div>
        <div className="col-3">
          <h3>Kontakt</h3>
          <p>
            <PhoneInTalkIcon /> (+49)179 5988329
          </p>
          <p>
            {' '}
            <EmailIcon /> info@affstaetterwohnbau.com
          </p>
          <p>
            <LanguageIcon /> www.affstaetterwohnbau.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
