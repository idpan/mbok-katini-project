import React from "react";
import CopySection from "../layout/CopySection";
import Hero from "../layout/Hero";
import "../style/about.css";
import PageTemplate from "../layout/PageTemplate";
import SectionMenuAlacart from "../layout/SectionMenuAlacart";
import SectionMenuPaket from "../layout/SectionMenuPaket";
import mainLogo from "../assets/images/mbok-katini-logobatch.png";
import styled from "styled-components";
import topDesktop from "../assets/images/ilustration/top-desktop.svg";
import topMobile from "../assets/images/ilustration/top-mobile.svg";
import bottomDesktop from "../assets/images/ilustration/bottom-desktop.svg";
import bottomMobile from "../assets/images/ilustration/bottom-mobile.svg";
export default function index() {
  const Wrapper = styled.div`
    .top {
      background-image: url(${topMobile});

      background-position: top left;
    }
    .bottom {
      background-image: url(${bottomMobile});
      background-position: bottom right;
    }
    .top,
    .bottom {
      height: 150px;
      background-repeat: no-repeat;
      background-size: cover;
    }
    section {
      background: #faf2d8;
      }
    }
  `;

  return (
    <PageTemplate>
      <Hero />
      <CopySection />
      <section className="my-contaier pt-5 pb-5">
        <SectionMenuAlacart
          title="Menu Favorit"
          description="deskripsi disinideskripsi disinideskripsi disini"
        />
      </section>
      <Wrapper>
        <div className="top"></div>
        <section className="ilustration-container my-contaier pt-5 ">
          <SectionMenuPaket
            title="Menu Favorit"
            description="pilihan paket menu untuk acara anda"
          />
        </section>
        <div className="bottom"></div>
      </Wrapper>

      <section className="my-contaier pt-5 pb-5">
        <SectionMenuPaket
          title="Menu Favorit"
          description="pilihan paket menu untuk acara anda"
        />
      </section>
      <section className="about-section">
        <div className="my-container black-layer ">
          <div className="about-container">
            <img className="about-logo" src={mainLogo} alt="main-logo" />
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </p>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}
