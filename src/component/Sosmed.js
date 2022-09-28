import { Link } from "gatsby";
import React from "react";
import { TiktokIcon, InstagramIcon } from "../utility/init";
export default function ({ className }) {
  return (
    <div className={className}>
      <div className="container-between">
        <Link to="#">
          <InstagramIcon />
        </Link>
        <Link to="#">
          <TiktokIcon />
        </Link>
      </div>
    </div>
  );
}
