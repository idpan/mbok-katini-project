import React from "react";
import { useState } from "react";
import styled from "styled-components";
import CardMenuAlacart from "../component/CardMenuAlacart";
import MenuLayout from "../layout/MenuLayout";
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
export default function Menu(props) {
  const [category, setCategory] = useState("minum");
  const menu = dataMenu;

  const all = Object.values(menu).flat();

  return (
    <PageTemplate>
      <Wrapper className="">
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
              <CardMenuAlacart
                image={element.img}
                title={element.name}
                bodyText={element.description}
              />
            );
          })}
        </MenuWrapper>
      </Wrapper>
    </PageTemplate>
  );
}
