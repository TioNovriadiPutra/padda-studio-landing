import { Card, Navbar } from "@interfaces/page";

export const navbarData: Navbar[] = [
  {
    title: "About Us",
    toWeb: 876,
    toMobile: 1013.5,
  },
  {
    title: "Studios",
  },
  {
    title: "T & C",
  },
  {
    title: "Feeds",
  },
];

export const cardData: Card[] = [
  {
    icon: require("@assets/images/photographer.png"),
    title: "Skilled Photographer",
    desc: "Our studio is home to skilled photographers who combine creativity and expertise to deliver exceptional results every time.",
  },
  {
    icon: require("@assets/images/stair.png"),
    title: "State-of-The-Art Equipment",
    desc: "Our advanced equipment guarantees precision, clarity, and stunning results for every photoshoot.",
  },
  {
    icon: require("@assets/images/house.png"),
    title: "Cozy Studio Space",
    desc: "Our studio offers a warm and cozy atmosphere, making every photoshoot a comfortable and enjoyable experience.",
  },
];
