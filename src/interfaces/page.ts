import { ImageSourcePropType } from "react-native";
import { RootStackParamList } from "./navigation";

export type Navbar = {
	title: string;
	toPath: keyof RootStackParamList;
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

export type SpecialOfferType = {
	package: string;
	price: string;
	pax: string;
	desc: string;
	optional?: string[];
	images: ImageSourcePropType[];
	addOn?: string[];
};

export type PriceListType = {
	header: PriceHeaderType;
	packages: PackageType[];
	tc: string[];
	notes?: string;
	superNotes?: string;
};

export type PriceHeaderType = {
	name: string;
	desc: string;
	image: ImageSourcePropType;
};

export type PackageType = {
	name: string;
	price: string;
	details: string[];
	url?: string;
};

export type ButtonListType = {
	label: string;
	to?: number;
};
