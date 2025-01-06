import { StyleSheet } from "react-native";

export const fonts = {
	Helvetica: "Helvetica",
	Playfair: "Playfair",
};

export const fontStyle = StyleSheet.create({
	H1: {
		fontFamily: fonts["Playfair"],
		fontSize: 86,
		fontWeight: "900",
		lineHeight: 84,
	},
	H2: {
		fontFamily: fonts["Playfair"],
		fontSize: 40,
		fontWeight: "900",
		lineHeight: 40,
	},
	H3: {
		fontFamily: fonts["Playfair"],
		fontSize: 32,
		fontWeight: "900",
		lineHeight: 32,
	},
	Subtitle: {
		fontFamily: fonts["Helvetica"],
		fontSize: 14,
		fontWeight: "500",
		lineHeight: 28,
	},
	SubtitleLight: {
		fontFamily: fonts["Helvetica"],
		fontSize: 20,
		fontWeight: "300",
		lineHeight: 28,
	},
	SubtitleReg: {
		fontFamily: fonts["Helvetica"],
		fontSize: 32,
		fontWeight: "400",
		lineHeight: 31.36,
	},
	Button: {
		fontFamily: fonts["Helvetica"],
		fontSize: 14,
		fontWeight: "500",
		lineHeight: 16,
	},
	BodyXL: {
		fontFamily: fonts["Helvetica"],
		fontSize: 40,
		fontWeight: "400",
		lineHeight: 40,
	},
	BodyL: {
		fontFamily: fonts["Helvetica"],
		fontSize: 24,
		fontWeight: "700",
		lineHeight: 34,
	},
	BodyMBold: {
		fontFamily: fonts["Helvetica"],
		fontSize: 18,
		fontWeight: "700",
		lineHeight: 21,
	},
	BodyMLight: {
		fontFamily: fonts["Helvetica"],
		fontSize: 18,
		fontWeight: "300",
		lineHeight: 22,
	},
	BodySBold: {
		fontFamily: fonts["Helvetica"],
		fontSize: 16,
		fontWeight: "700",
		lineHeight: 20,
	},
	BodySReg: {
		fontFamily: fonts["Helvetica"],
		fontSize: 16,
		fontWeight: "400",
		lineHeight: 20,
	},
	BodyXS: {
		fontFamily: fonts["Helvetica"],
		fontSize: 14,
		fontWeight: "400",
		lineHeight: 20,
	},
});
