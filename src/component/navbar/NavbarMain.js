import React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import "./navbar.css";
import logotype from "../../assets/images/mbok-katini-logotype.png";
import {
  HamburgerMenu,
  InstagramIcon,
  TiktokIcon,
  GrabfoodIcon,
  GofoodIcon,
} from "../../utility/init";
import PersonalInfo from "../PersonalInfo";
import Sosmed from "../Sosmed";
import Partners from "../Partners";
export default function NavbarMain() {
  const [show, setShow] = useState(true);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <img src={logotype} alt="mbok-katini-logotype" />
        </div>
        <div
          className="navbar-toggle"
          onClick={function () {
            if (show == true) return setShow(false);
            if (show == false) return setShow(true);
          }}
        >
          <HamburgerMenu />
        </div>
        <div
          className="navbar-collapse"
          style={show ? { display: "block" } : { display: "none" }}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link to="/paket">Paket</Link>
            </li>
            <li className="nav-item dropdown">
              <button className="dropdown-toggle">Kontak</button>
              <div className="dropdown-menu">
                <PersonalInfo className="dropdown-item" />
                <Sosmed className="dropdown-item" />
                <Partners className="dropdow-item" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
