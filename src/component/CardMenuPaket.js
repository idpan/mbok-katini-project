import React from "react";
import styled from "styled-components";
import ayam_bakar from "../assets/images/hero_image.png";
import Button from "./Button";
export default function CardMenuPaket() {
  const Wrapper = styled.div`
    max-width: 26.5rem;
    border: none;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    @media (min-width: 768px) {
      max-width: 36rem;
    }
  `;
  const Title = styled.h5`
    font-weight: 700;
    color: var(--text-second-color);
    font-size: 2.2rem;
    @media (min-width: 768px) {
      font-size: 2.6rem;
      margin-bottom: 15px;
    }
  `;
  // margin-bottom: 10px;
  const CardBody = styled.div`
    padding: 10px 20px 20px;
    @media (min-width: 768px) {
      padding: 30px 30px 40px;
    }
  `;
  const CardText = styled.p`
    font-size: 1rem;
    color: var(--text-dark-color);
    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  `;
  const Price = styled.p`
    font-size: 1.4rem;
    font-weight: 500;
    @media (min-width: 768px) {
      font-size: 1.8rem;
      margin-bottom: 50px;
    }
  `;
  // margin-bottom: 30px;
  return (
    <Wrapper className="card">
      <img src={ayam_bakar} className="card-img-top" alt="..." />
      <CardBody className="text-center">
        <Title className="card-title">Nasi Kotak 1 </Title>
        <CardText className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <Price>Rp. 99.000</Price>
        <Button>Pesan Sekarang</Button>
      </CardBody>
    </Wrapper>
  );
}
