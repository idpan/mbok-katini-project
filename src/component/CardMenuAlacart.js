import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Button from "./Button";
const Wrapper = styled.div`
  width: 26.5rem;
  height: fit-content;
  border: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const ImageWrapper = styled.div`
  height: 200px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    display: block;
  }
`;
const Title = styled.h5`
  font-weight: 700;
  color: var(--text-second-color);
  font-size: 2.4rem;
  margin-bottom: 10px;
`;
const CardBody = styled.div`
  padding: 20px;
  padding-bottom: 30px;
`;
const CardText = styled.p`
  font-size: 1.4rem;
  padding-bottom: 20px;
  color: var(--text-dark-color);
`;
export default function CardMenuAlacart(props) {
  return (
    <Wrapper className="card">
      <ImageWrapper>
        <img src={`/${props.image}`} className="card-img-top" alt="tumpeng" />
      </ImageWrapper>
      <CardBody className="text-center">
        <Title className="card-title">{props.title} </Title>
        <CardText className="card-text">{props.bodyText}</CardText>
        <Link to="#">
          <Button>Pesan Sekarang</Button>
        </Link>
      </CardBody>
    </Wrapper>
  );
}
