import React from 'react';
import { Contact, NavigationDots } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  const currentYear = new Date().getFullYear()
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <Contact />
      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <p className="p-text">@{currentYear} YER</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;