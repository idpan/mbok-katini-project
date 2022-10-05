import React from "react";
import { useState } from "react";
import styled from "styled-components";
import CardMenuAlacart from "../component/CardMenuAlacart";
import PageTemplate from "../layout/PageTemplate";
const menu = {
  all: [
    {
      name: "ayam",
      category: "makanan",
      img: "tumpeng.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quasi ut earum velit at sit modi et exercitationem vero pariatur?",
    },
    {
      name: "ayam",
      category: "makanan",
      img: "tumpeng.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quasi ut earum velit at sit modi et exercitationem vero pariatur?",
    },
  ],
  minuman: [
    {
      name: "ayam",
      category: "makanan",
      img: "tumpeng.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quasi ut earum velit at sit modi et exercitationem vero pariatur?",
    },
    {
      name: "ayam",
      category: "makanan",
      img: "tumpeng.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quasi ut earum velit at sit modi et exercitationem vero pariatur?",
    },
    {
      name: "ayam",
      category: "makanan",
      img: "tumpeng.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quasi ut earum velit at sit modi et exercitationem vero pariatur?",
    },
  ],
  makanan: [
    {
      name: "ayam",
      category: "makanan",
      img: "tumpeng.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quasi ut earum velit at sit modi et exercitationem vero pariatur?",
    },
  ],
};
export default function Menu() {
  const Wrapper = styled.div`
    height: 200vh;
    padding-top: 100px;
    .menu-container {
      justify-content: center;
      display: grid;
      grid-template-columns: repeat(auto-fill, 300px);
      justify-content: center;
      justify-items: center;
      grid-gap: 60px;
    }
  `;

  const NavFilter = styled.div`
  border: 1px solid black;
  
  .input
  `;
  const [category, setCategory] = useState("all");
  console.log(menu[category]);
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
        <div className=" menu-container my-container">
          {menu[category].map((element) => {
            return (
              <CardMenuAlacart
                title={element.name}
                bodyText={element.description}
              />
            );
          })}
        </div>
      </Wrapper>
    </PageTemplate>
  );
}
