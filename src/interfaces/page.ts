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
