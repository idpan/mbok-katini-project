import React from "react";
import IconWithText from "./IconWithText";
import {
  InstagramIcon,
  TiktokIcon,
  GrabfoodIcon,
  GofoodIcon,
  WhatsappIcon,
  EmailIcon,
  LocationIcon,
} from "../utility/init";
export default function Contact({ className }) {
  const style = `
  .contact{
    font-size:1.2rem;
    min-width:200px;
  }

  .label{
    font-size:1rem;
    color: #b0b0b0;
  }
  .divide{
   
    background:#646464;
    height: 2px;
    
  }
  `;
  document.body.onclick = (e) => {
    console.log(e.target);
  };
  console.log();
  // *{border: 1px solid white}
  return (
    <div className={className + " " + "w-75 mx-auto  contact  text-center"}>
      <style>{style}</style>
      <hr className=" divide d-md-none " />
      <div className="personal-info gap-4  my-4 d-flex flex-column align-items-center ">
        <a className="my-nav-link" to="#">
          <IconWithText text="0821-555-858">
            <WhatsappIcon />
          </IconWithText>
        </a>
        <a className="my-nav-link" to="#">
          <IconWithText text="email@email.com">
            <EmailIcon />
          </IconWithText>
        </a>
        <a className="my-nav-link" to="#">
          <IconWithText className="my-nav-link" text="alamat tempat ini">
            <LocationIcon />
          </IconWithText>
        </a>
      </div>
      <hr className=" divide " />
      <div className="sosmed my-4 hstack justify-content-center gap-4">
        <a className="my-nav-link" to="#">
          <InstagramIcon />
        </a>
        <a className="my-nav-link" to="#">
          <TiktokIcon />
        </a>
      </div>
      <p className=" label ">tersedia juga di :</p>
      <div className="partner hstack justify-content-center gap-3">
        <a className="my-nav-link" to="#">
          <GrabfoodIcon />
        </a>
        <a className="my-nav-link" to="#">
          <GofoodIcon />
        </a>
      </div>
    </div>
  );
}
