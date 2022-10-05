import React from "react";
import styled from "styled-components";
import ShapeHeroBottom from "../component/ShapeHeroBottom";

export default function Hero() {
  const Wrapper = styled.div`
margin-top:80px;
position: relative;
  background: #e5e5e5;
  height:450px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width:768px){
      .hero{height: 600px }
`;
  return (
    <Wrapper className="hero">
      <p>Hero</p>
      <ShapeHeroBottom />
    </Wrapper>
  );
}
