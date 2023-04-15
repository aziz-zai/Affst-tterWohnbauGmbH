import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import React from 'react';
import { Link } from 'react-scroll';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-text">
          <div className="col-1">
            <h3>Unsere Links</h3>
            <ul className="footer-links">
              <Link to="Home" spy={true}>Home</Link>
              <Link to="Projekte" spy={true}>Projekte</Link>
              <Link to="Angebote" spy={true}>Angebote</Link>
              <Link to="Kontakt" spy={true}>Kontakt</Link>
              <Link to="Überuns" spy={true}>Über uns</Link>
            </ul>
          </div>
          <div className="col-2">
            <h3>Bilal Yer</h3>
            <p>Torgauerweg 15</p>
            <p>70599, Herrenberg</p>
            <p>Deutschladn</p>
          </div>
          <div className="col-3">
            <h3>Kontakt</h3>
            <p><PhoneInTalkIcon/> (+49)176 32936640</p>
            <p> <EmailIcon/> msy@yer.com</p>
            <p><LanguageIcon/> www.affstätter-wohnbau.de</p>
          </div>
    </div>
    <div className="footer-socials">
<LinkedInIcon/>
<InstagramIcon/>
<FacebookIcon/>
    </div>
    </div>
  );
};

export default Footer;