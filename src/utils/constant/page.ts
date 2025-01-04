import { Card, Navbar, Studio } from "@interfaces/page";
import { ImageSourcePropType } from "react-native";

export const navbarData: Navbar[] = [
  {
    title: "About Us",
    toWeb: 9999,
    toMobile: 9999,
  },
  {
    title: "Studios",
    toWeb: 3078,
    toMobile: 3187.45,
  },
  {
    title: "T & C",
    toPath: "TC",
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

export const studioButtonData: string[] = [
  "ALEXANDRIA",
  "CYCLORAMA",
  "HELENA",
  "TEMATIK JAPAN",
  "MAKEUP ROOM",
];

export const studioData: Studio[] = [
  {
    name: "ALEXANDRIA",
    desc: `Discover a room atmosphere that combines modern simplicity and classic touches. The room's elegant design and minimalist decoration create the perfect setting for your various creative needs. This space is ready to accommodate your vision with a versatile backdrop and lighting designed for the best results.`,
    image: require("@assets/images/alexandria.png"),
    pax: 6,
    pricePerHour: 145,
    pricePer3Hous: 350,
  },
  {
    name: "CYCLORAMA",
    desc: `A cyclorama is a large, concave curtain or wall that is positioned at the back of the stage to create a background. It is often used with special lighting to create the illusion of open space, sky, or great distance. The word "cyclorama" comes from the Greek words kyklos, meaning circle, and orama, meaning view.`,
    image: require("@assets/images/cyclorama.png"),
    pax: 10,
    pricePerHour: 200,
    pricePer3Hous: 550,
  },
  {
    name: "HELENA",
    desc: `Java sparrow is a popular cage bird, and has been introduced in a large number of other countries. Both Padda species are threatened by trapping for the cage bird trade. Many taxonomists now place this genus in Lonchura with the mannikins and munias.`,
    image: require("@assets/images/helena.png"),
    pax: 6,
    pricePerHour: 145,
    pricePer3Hous: 350,
  },
  {
    name: "TEMATIK JAPAN",
    desc: `Java sparrow is a popular cage bird, and has been introduced in a large number of other countries. Both Padda species are threatened by trapping for the cage bird trade. Many taxonomists now place this genus in Lonchura with the mannikins and munias.`,
    image: require("@assets/images/tematikJapan.png"),
    pax: 6,
    pricePerHour: 150,
    pricePer3Hous: 350,
  },
  {
    name: "MAKEUP ROOM",
    desc: `An exclusive makeup room with a large round glass and lights at several points that make you comfortable in preparing yourself to have photographs with pleasure. This room is also equipped with air conditioner and a closed changing room so you can keep your privacy in preparing yourself.`,
    image: require("@assets/images/makeupRoom.png"),
    pax: 6,
    sharing: 50,
    private: 350,
  },
];

export const carouselData: ImageSourcePropType[] = [
  require("@assets/images/slide1.png"),
  require("@assets/images/slide2.png"),
  require("@assets/images/slide3.png"),
  require("@assets/images/slide4.png"),
  require("@assets/images/slide5.png"),
];
