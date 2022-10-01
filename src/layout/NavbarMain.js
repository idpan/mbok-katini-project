import React from "react";
import { Link } from "gatsby";
import logotype from "../assets/images/mbok-katini-logotype.png";
import { HamburgerMenu } from "../utility/init";
import Contact from "../component/Contact";
import * as style from "../style/component/navbar.module.css";
export default function NavbarMain() {
  return (
    <nav
      className={
        style.navbar +
        " " +
        "my-container dark-color navbar navbar-expand-md fixed-top justify-content-between "
      }
    >
      <Link className="navbar-brand" to="/">
        <img height="32" src={logotype} alt="logotype" />
      </Link>

      <button
        className="btn navbar-toggler  "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <HamburgerMenu />
      </button>
      <div
        className={
          style.navbar_nav +
          " " +
          "justify-content-end  navbar-collapse collapse"
        }
        id="navbarNav"
      >
        <div className="pt-5 pb-5  navbar-nav gap-5 align-items-center">
          <a
            className={style.nav_link + " " + "my-nav-link "}
            aria-current="page"
            href="/"
          >
            Home
          </a>
          <a className={style.nav_link + " " + " my-nav-link "} href="/menu">
            Menu
          </a>
          <a className={style.nav_link + " " + "my-nav-link "} href="/paket">
            Paket
          </a>
          <div className="d-md-none w-100">
            <Contact />
          </div>
          <div className="dropdown d-none d-md-block  ">
            <div
              className={style.nav_link + " dropdown-toggle  "}
              data-bs-toggle="dropdown"
              href="#"
              id="navbarDarkDropdownMenuLink"
              role="button"
              aria-expanded="false"
            >
              <span className="my-nav-link">Kontak</span>
            </div>
            <div
              className="dropdown-menu pb-5 pt-3  dropdown-menu-end bg-dark mt-5  "
              aria-labelledby="navbarDarkDropdownMenuLink"
            >
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
