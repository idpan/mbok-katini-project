import React from "react";
import styled from "styled-components";
export default function CardMenuAlacart(props) {
  const Wrapper = styled.div`
    max-width: 26.5rem;
    border: none;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  `;
  const Title = styled.h5`
    font-weight: 700;
    color: var(--text-second-color);
    font-size: 2.4rem;
    margin-bottom: 10px;
  `;
  const CardBody = styled.div`
    padding: 20px;
    padding-bottom: 40px;
  `;
  const CardText = styled.p`
    font-size: 1.4rem;
    color: var(--text-dark-color);
  `;
  return (
    <Wrapper className="card">
      <img
        src={`../../static/tumpeng.png`}
        className="card-img-top"
        alt="tumpeng"
      />
      <CardBody className="text-center">
        <Title className="card-title">{props.title} </Title>
        <CardText className="card-text">{props.bodyText}</CardText>
      </CardBody>
    </Wrapper>
  );
}
