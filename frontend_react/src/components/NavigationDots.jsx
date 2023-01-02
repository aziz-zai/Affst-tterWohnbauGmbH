/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';
import { Link } from 'react-scroll';

const NavigationDots = ({ active }) => (
  <div className="app__navigation-wrapper">
  <div className="app__navigation">
    {['Home', 'Projekte', 'Angebote', 'Kontakt', 'UeberUns'].map((item, index) => (
      <Link
        activeClass="active"
        to={item}
        spy={true}
        offset={-100}
        className="app__navigation-dot"
      />
    ))}
  </div>
  </div>
);

export default NavigationDots;