import { ImageSourcePropType } from "react-native";
import { RootStackParamList } from "./navigation";

export type Navbar = {
	title: string;
	toWeb?: number;
	toMobile?: number;
	toPath?: keyof RootStackParamList;
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

export type TCText = {
	text: string;
	type: "bold" | "regular";
};
