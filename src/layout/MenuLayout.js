import React from "react";
import { useState } from "react";
import styled from "styled-components";
import CardMenuAlacart from "../component/CardMenuAlacart";
import PageTemplate from "./PageTemplate";

export const NavFilter = styled.div`
  padding-top: 30px;
  justify-content: center;
  display: flex;
  gap: 20px;
  input:checked + span {
    color: var(--text-main-color);
  }
  input {
    display: none;
  }
  label {
    font-size: 1.8rem;
    font-weight: 500;
    cursor: pointer;
  }
`;
export const MenuWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;
  overflow: hidden;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  justify-items: center;
  grid-row-gap: 60px;
  grid-column-gap: 20px;
`;
