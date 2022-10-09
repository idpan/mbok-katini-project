import React from "react";
import { useState } from "react";
import styled from "styled-components";
import CardMenuPaket from "../component/CardMenuPaket";
import PageTemplate from "../layout/PageTemplate";

import dataMenu from "../../data/menu_alacart.json";
import { NavFilter, MenuWrapper } from "../layout/MenuLayout";
const Wrapper = styled.div`
  padding-top: 90px;
  .menu-container {
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    justify-content: center;
    justify-items: center;
    grid-row-gap: 60px;
    grid-column-gap: 20px;
  }
`;
export default function Paket() {
  const [category, setCategory] = useState("minum");
  const menu = dataMenu;
  console.log(menu);
  const all = Object.values(menu).flat();
  console.log(all);

  return (
    <PageTemplate>
      <Wrapper>
        <NavFilter>
          {Object.keys(menu).map((element) => {
            return (
              <label
                htmlFor={element + "-radio"}
                onClick={() => {
                  setCategory(element);
                }}
                id={element + "-label"}
              >
                <input name="category" id={element + "-radio"} type="radio" />
                <span className="">{element}</span>
              </label>
            );
          })}
        </NavFilter>
        <MenuWrapper className=" menu-container my-container">
          {/* {props.children} */}
          {dataMenu[category].map((element) => {
            return (
              <CardMenuPaket
                image={element.img}
                title={element.name}
                bodyText={element.description}
                price={element.price}
              />
            );
          })}
        </MenuWrapper>
      </Wrapper>
    </PageTemplate>
  );
}
