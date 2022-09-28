import React from "react";
import { Link } from "gatsby";
import { EmailIcon, WhatsappIcon, LocationIcon } from "../utility/init";
export default function PersonalInfo({ className }) {
  return (
    <div className={className}>
      <Link>
        <div className="container-between">
          <WhatsappIcon />
          <span>0855-855-855</span>
        </div>
      </Link>
      <Link>
        <div className="container-between">
          <EmailIcon />
          <span>email@email.com</span>
        </div>
      </Link>
      <Link>
        <div className="container-between">
          <LocationIcon />
          <span>Alamat warung mbok katini</span>
        </div>
      </Link>
    </div>
  );
}
