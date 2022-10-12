import { MENU_API } from "../constant";

export let dataMenu;
fetch(MENU_API)
  .then((res) => res.json())
  .then((res) => {
    dataMenu = res;
  });
