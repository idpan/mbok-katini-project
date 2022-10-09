import React from "react";
import styled from "styled-components";
import IconWithText from "./IconWithText";
import ButtonOutline from "./ButtonOutline";
import {
  InstagramIcon,
  TiktokIcon,
  GrabfoodIcon,
  GofoodIcon,
  WhatsappIcon,
  EmailIcon,
  LocationIcon,
} from "../utility/init";
const Wrapper = styled.div`
  font-size: 1.2rem;
  min-width: 200px;
  .sosmed svg {
    width: 16px;
  }
`;
const Label = styled.p`
  font-size: 1rem;
  color: #b0b0b0;
`;
const Divider = styled.hr`
  background: #646464;
  height: 2px;
`;
export default function Contact({ className }) {
  return (
    <Wrapper className={className + " " + "w-75 mx-auto  contact  text-center"}>
      <Divider className=" divide d-md-none " />
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
      <Divider className=" divide " />
      <div className="sosmed my-4 hstack justify-content-center gap-4">
        <a className="my-nav-link" to="#">
          <InstagramIcon />
        </a>
        <a className="my-nav-link" to="#">
          <TiktokIcon />
        </a>
      </div>
      <Label className=" label ">tersedia juga di :</Label>
      <div className="partner hstack justify-content-center gap-3">
        <a className="my-nav-link" to="#">
          <GrabfoodIcon />
        </a>
        <a className="my-nav-link" to="#">
          <GofoodIcon />
        </a>
      </div>
    </Wrapper>
  );
}
