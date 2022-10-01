import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../style/reset.css";
import "../style/base.css";
import "../style/utility.css";
import NavbarMain from "./NavbarMain";
export default function Layout() {
  return (
    <div>
      <NavbarMain />
    </div>
  );
}
