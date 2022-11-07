import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Button from "./Button";
const Wrapper = styled.div`
  width: 26.5rem;
  height: fit-content;
  border: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media (min-width: 768px) {
    max-width: 36rem;
  }
`;
const ImageWrapper = styled.div`
  height: 200px;
  overflow: hidden;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;

    object-fit: cover;
    display: block;
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
    margin-bottom: 30px;
  }
`;
export default function CardMenuPaket(props) {
  // margin-bottom: 30px;
  return (
    <Wrapper>
      <ImageWrapper>{props.image}</ImageWrapper>
      <CardBody className="text-center">
        <Title className="card-title">{props.title} </Title>
        <CardText className="card-text">{props.bodyText}</CardText>
        <Price>Rp {props.price.toLocaleString("id-ID")}</Price>
        <Link to="#">
          <Button>Pesan Sekarang</Button>
        </Link>
      </CardBody>
    </Wrapper>
  );
}
