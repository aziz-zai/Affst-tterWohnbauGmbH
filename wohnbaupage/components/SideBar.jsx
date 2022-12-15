import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

export default function SideBar({ isOpen, toggle }) {
  return (
    <>
      <div
        className={isOpen ? "SideBarContainerOpen" : "SideBarContainerClosed"}
      >
        <div className="SideBarIcon">
          <CloseIcon onClick={toggle} />
        </div>
        <div className="SideBarWrapper">
          <div className="SideBarProfile"></div>
          <div className="SideBarMenu">
            <Link to="/" onClick={toggle} className="SideBarLink">
              Home
            </Link>
            <Link to="/Buckets" onClick={toggle} className="SideBarLink">
              Buckets
            </Link>
            <Link to="/About" onClick={toggle} className="SideBarLink">
              About
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}