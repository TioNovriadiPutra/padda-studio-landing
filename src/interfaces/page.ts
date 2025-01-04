import { ImageSourcePropType } from "react-native";

export type Navbar = {
  title: string;
  toWeb?: number;
  toMobile?: number;
};

export type Card = {
  icon: ImageSourcePropType;
  title: string;
  desc: string;
};

export type Studio = {
  name: string;
  desc: string;
  pax: number;
  image: ImageSourcePropType;
  pricePerHour?: number;
  pricePer3Hous?: number;
  sharing?: number;
  private?: number;
};
