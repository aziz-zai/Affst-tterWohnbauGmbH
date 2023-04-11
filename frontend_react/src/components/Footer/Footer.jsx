import React from 'react';
import { Link } from 'react-scroll';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Unsere Links</h3>
            <ul className="footer-links">
              <li><Link to="Home" spy={true}>Home</Link></li>
              <li><Link to="Projekte" spy={true}>Projekte</Link></li>
              <li><Link to="Angebote" spy={true}>Angebote</Link></li>
              <li><Link to="Kontakt" spy={true}>Kontakt</Link></li>
              <li><Link to="Überuns" spy={true}>Über uns</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Kontaktiere Uns</h3>
            <p>123 Main Street</p>
            <p>Anytown, USA</p>
            <p>(555) 555-5555</p>
          </div>
          <div className="col-md-4">
            <h3>Folge Uns</h3>
            <ul className="social-icons">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;