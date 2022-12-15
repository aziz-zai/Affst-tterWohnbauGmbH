import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ toggle, scrollNav }) {
  return (
    <div className={scrollNav ? "navBlack" : "navTrans"}>
      <div className="navContainer">
        <Link to="/" className="navLink">
          <div className="navLogo">bucket.me</div>
        </Link>
        <div className="navMobile">
          <MenuIcon onClick={toggle} />
        </div>
        <ul className="navMenu">
          <li className="navItem">
            <Link to="/" className="navLink">
              Home
            </Link>
          </li>
          <li className="navItem">
            <Link to="/Buckets" className="navLink">
              Buckets
            </Link>
          </li>
          <li className="navItem">
            <Link to="/About" className="navLink">
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}