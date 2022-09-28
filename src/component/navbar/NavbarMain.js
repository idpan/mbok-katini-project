import React from "react";
import { Link } from "gatsby";
import "./navbar.css";

export default function NavbarMain() {
  return (
    <nav className="navbar">
      <div className="contaier d-flex">
        <div className="brand">
          <img src="" alt="" />
        </div>
        <div>
          <span>hamburger-menu</span>
        </div>
        <div className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/paket">Paket</Link>
            </li>
            <li>
              <button>Kotak</button>
              <div>
                <ul>
                  <li>
                    <Link>0855-55-41</Link>
                  </li>
                  <li>
                    <Link>email@email.com</Link>
                  </li>
                  <li>
                    <div className="sosmed-container">sosmed</div>
                  </li>
                  <li>
                    <div>gofood grabfood</div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
