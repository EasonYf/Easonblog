import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "Home", icon: ".icon-tishi" ,link: "/" },
  { text: "Blog", link: "/blog/" },
  {
    text: "前端", link: "/demo/front-end/", 
    children: [
      {
        text: "AJAX",
        link: "/demo/front-end/ajax/"
      },
      {
        text: "JavaScript",
        link: "/demo/front-end/ajax/"
      },
    ],
  },
  { text: "算法", link: "/demo/algorithm/" },

  { text: "ABOUT", link: "/projects/" },
]);
