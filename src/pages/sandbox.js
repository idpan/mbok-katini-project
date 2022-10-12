import React, { useRef, useState } from "react";
import styled from "styled-components";
import bg from "../assets/images/ilustration/istockphoto-672229008-1024x1024.jpg";
import { dataMenu } from "../utility/fetch";
const Wrapper = styled.div`
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
`;
console.log(dataMenu);
export default function sandbox() {
  return <Wrapper></Wrapper>;
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
