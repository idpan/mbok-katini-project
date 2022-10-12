import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CopySection from "../layout/CopySection";
import Hero from "../layout/Hero";
import "../style/about.css";
import PageTemplate from "../layout/PageTemplate";
import SectionMenu from "../layout/SectionMenu";
import mainLogo from "../assets/images/mbok-katini-logobatch.png";
import styled from "styled-components";
import topMobile from "../assets/images/ilustration/top-mobile.svg";
import bottomMobile from "../assets/images/ilustration/bottom-mobile.svg";
import { MENU_API } from "../constant";
import CardMenuAlacart from "../component/CardMenuAlacart";
import CardMenuPaket from "../component/CardMenuPaket";
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
export default function Index() {
  const [featuredMenuAlacart, setFeaturedMenuAlacart] = useState([]);
  const [nasiBoxMenu, setNasiBoxMenu] = useState([]);
  const [tumpengMenu, setTumpengMenu] = useState([]);
  useEffect(() => {
    fetch(MENU_API)
      .then((res) => res.json())
      .then((data) => {
        setFeaturedMenuAlacart(
          data.alacart.filter((el) => {
            return el.is_featured == true;
          })
        );
        setNasiBoxMenu(data.nasi_box);
        setTumpengMenu(data.tumpeng);
      });
  }, []);
  return (
    <PageTemplate>
      <Hero />
      <CopySection />
      {/* alacart menu */}
      <section className="my-contaier pt-5 pb-5">
        <SectionMenu
          title="Menu Favorit"
          description="deskripsi disinideskripsi disinideskripsi disini"
        >
          {featuredMenuAlacart.map((menu, id) => {
            return (
              <CardMenuAlacart
                key={id}
                image={menu.image}
                title={menu.name}
                bodyText={menu.description}
              />
            );
          })}
        </SectionMenu>
      </section>
      {/* nasi box */}
      <Wrapper>
        <div className="top"></div>
        <section className="ilustration-container my-contaier pt-5 ">
          <SectionMenu
            title="Menu Favorit"
            description="pilihan paket menu untuk acara anda"
          >
            {nasiBoxMenu.map((menu, id) => {
              return (
                <CardMenuPaket
                  key={id}
                  image={menu.image}
                  title={menu.name}
                  bodyText={menu.description}
                  price={menu.price}
                />
              );
            })}
          </SectionMenu>
        </section>
        <div className="bottom"></div>
      </Wrapper>
      {/* tumpeng */}
      <section className="my-contaier pt-5 pb-5">
        <SectionMenu
          title="Menu Favorit"
          description="pilihan paket menu untuk acara anda"
        >
          {tumpengMenu.map((menu, id) => {
            return (
              <CardMenuPaket
                key={id}
                image={menu.image}
                title={menu.name}
                bodyText={menu.description}
                price={menu.price}
              />
            );
          })}
        </SectionMenu>
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
