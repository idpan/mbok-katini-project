import React from "react";
import styled from "styled-components";
import ShapeHeroBottom from "../component/ShapeHeroBottom";
import imageHero from "../assets/images/hero_image.png";
const Wrapper = styled.div`

position: relative;
background: #000;

height:500px;
display: flex;
justify-content: center;
align-items: center;
.mask{
  position:absolute;
  top: 0;
  left: 0;
  right:500px;
  bottom: 0;
  background-image:linear-gradient(to bottom, black ,transparent  ,transparent );
  
}
@media screen and (min-width:768px){
  background-size:contain;
  background-position-x:right ;
  height: 600px;
  img{
    margin-left:-50px; 
  }
  .mask{
    -webkit-mask-image: linear-gradient(to right,white, transparent);
    mask-image: linear-gradient(to right,white, transparent);
  }
   background-position:left;
  `;
export default function Hero() {
  return (
    <Wrapper className="hero">
      <div className="mask">
        <img src={imageHero} alt="imagehero" />
      </div>
      <ShapeHeroBottom />
    </Wrapper>
  );
}
