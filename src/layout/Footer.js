import React from "react";
import styled from "styled-components";
import logoType from "../assets/images/mbok-katini-logotype.png";
import IconWithText from "../component/IconWithText";
import {
  InstagramIcon,
  TiktokIcon,
  GrabfoodIcon,
  GofoodIcon,
  WhatsappIcon,
  EmailIcon,
  LocationIcon,
} from "../utility/init";
const Wrapper = styled.footer`
  position: relative;
  background: #151515;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 70px;
  .personal-info {
    margin-bottom: 30px;
  }
  .sosmed svg {
    width: 20px;
  }
  .divider {
    background: #303030;
    height: 2px;
    width: 100%;
  }
  .partner p {
    color: var(--text-light-color);
    font-size: 1.2rem;
  }

  .attribution {
    font-size: 10px;
    bottom: 20px;
    color: #535353;
    left: 0;
    right: 0;
  }
  @media (min-width: 768px) {
    .footer-wrapper {
    }
    .footer-contact {
      gap: 30px;
      flex-direction: row-reverse;
    }
    .divider {
      height: 100px;
      width: 2px;
    }
    .attribution {
      left: 30px;
      text-align: left;
    }
  }
`;
// width: 2px;
// height: 100%;
// align-items: center;
// display: flex;
// gap: 50px;
// transform: rotate(90deg);
const LogoFooter = styled.div`
  margin-bottom: 56px;

  img {
    height: 50px;
    margin: auto;
  }
  @media (min-width: 1024px) {
    margin-bottom: 30px;
  }
`;
export default function Footer() {
  // background-image: linear-gradient(to bottom, #151515, #303030);

  return (
    <Wrapper className="my-container">
      <div className="footer-wrapper">
        <LogoFooter className="">
          <img src={logoType} alt="logotype" />
        </LogoFooter>
        <div className="footer-contact d-md-flex justify-content-md-center">
          <div className="personal-info gap-4   d-flex flex-column align-items-center align-items-md-start ">
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
          <div className="divider"></div>
          <div className="mt-5 mt-md-2">
            <div className="sosmed mb-4 hstack justify-content-center   gap-4">
              <a className="my-nav-link" to="#">
                <InstagramIcon />
              </a>
              <a className="my-nav-link" to="#">
                <TiktokIcon />
              </a>
            </div>
            <div className="partner ">
              <p className="">tersedia juga di</p>
              <div className="hstack justify-content-center gap-3">
                <a className="my-nav-link" to="#">
                  <GrabfoodIcon />
                </a>
                <a className="my-nav-link" to="#">
                  <GofoodIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="attribution position-absolute ">
          Copyright 2022 &copy; made with &#10084; by idpan.
        </div>
      </div>
    </Wrapper>
  );
}
