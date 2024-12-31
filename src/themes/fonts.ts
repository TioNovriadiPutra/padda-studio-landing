import { StyleSheet } from "react-native";

export const fonts = {
	Helvetica: "Helvetica",
};

export const fontStyle = StyleSheet.create({
	H1: {
		fontFamily: fonts.Helvetica,
		fontSize: 18,
		fontWeight: 700,
		lineHeight: 30,
	},
	H5: {
		fontFamily: fonts.Helvetica,
		fontSize: 13,
		fontWeight: 600,
		lineHeight: 16,
	},
});
