import React from "react";
import styled from "styled-components";
import ShapeHeroBottom from "../component/ShapeHeroBottom";
import imageHero from "../assets/images/hero_image.png";
const Wrapper = styled.div`
padding-top:80px;
position: relative;
z-index:-50;
background:var(--text-second-color) ;
background-image:linear-gradient(to right, black   ,transparent );
height:500px;
.header-text{
  padding-left:20px;
  h1{
    color: var(--main-color);
    font-weight:800;
    font-size:1.6rem;
    width:15rem;
  }
  p{
    color: var(--text-light-color);
    width:23rem;
    font-size:1.1rem;
  }
}
.mask{
  position:absolute;
  z-index:-20;
  top: 0;
  right: 0;
  bottom: 0;
  img{
    object-fit:cover;
    height: 100%;
    
  }
}
@media screen and (min-width:768px){
  background-size:contain;
  background-position-x:right ;
  height: 600px;
  
  .mask{
    -webkit-mask-image: linear-gradient(to left,black,black, transparent);
    mask-image: linear-gradient(to left,black,black, transparent);
  }
  .header-text{
    h1{
      font-size:4.8rem;
      width:48rem;
    }
    p{
      font-size:2rem;
      width:48rem;
    }
  }
  @media screen and (min-width:1200px){
    .header-text{
      padding-top:50px; 
      padding-left:300px;
    }
  }`;
const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -10;
  background-image: linear-gradient(
    to bottom,
    black 10%,
    transparent,
    transparent
  );
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
// background: red;
export default function Hero() {
  return (
    <Wrapper className="hero">
      <div className="header-text">
        <h1>Warung Makan Mbok Katini</h1>
        <p>Menjual makanan enak dengan harga merakyat</p>
      </div>
      <Layer />
      <div className="mask">
        <img src={imageHero} alt="imagehero" />
      </div>
      <ShapeHeroBottom />
    </Wrapper>
  );
}