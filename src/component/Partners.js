import { Link } from "gatsby";
import React from "react";
import { GofoodIcon, GrabfoodIcon } from "../utility/init";
export default function Partners({ className }) {
  return (
    <div className={className}>
      <div className="container-between">
        <Link>
          <GofoodIcon />
        </Link>
        <Link>
          <GrabfoodIcon />
        </Link>
      </div>
    </div>
  );
}
