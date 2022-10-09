import React, { useRef, useState } from "react";
// Import Swiper React components
import CardMenuAlacart from "../component/CardMenuAlacart";
import CarouselCard from "../component/CarouselCard";
import styled from "styled-components";
import SectionMenuPaket from "../layout/SectionMenuPaket";
import bg from "../assets/images/ilustration/istockphoto-672229008-1024x1024.jpg";

const Wrapper = styled.div`
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
`;
export default function sandbox() {
  const menu = [1, 2, 3, 4, 5];
  return (
    <Wrapper>
      <SectionMenuPaket
        className="coba"
        title="Menu Favorit"
        description="pilihan paket menu untuk acara anda"
      />
    </Wrapper>
  );
}

// <CarouselCard
//   breakpoints={{
//     0: {
//       slidesPerView: 1,
//     },
//     481: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 3,
//     },
//     1440: {
//       slidesPerView: 4,
//     },
//   }}
// >
//   {menu.map((el) => {
//     return <CardMenuAlacart />;
//   })}
// </CarouselCard>;
// {
// }
