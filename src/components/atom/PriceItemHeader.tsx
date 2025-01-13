import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { PriceHeaderType } from "@interfaces/page";
import { LinearGradient } from "expo-linear-gradient";
import { fonts, fontStyle } from "@themes/fonts";
import { colors } from "@themes/colors";

type Props = {
	headerData: PriceHeaderType;
	isMobile: boolean;
};

const PriceItemHeader = ({ headerData, isMobile }: Props) => {
	return (
		<View
			style={[
				styles.container,
				isMobile ? styles.containerMobile : styles.containerWeb,
			]}
		>
			<Image
				source={headerData.image}
				style={[
					styles.bg,
					isMobile ? styles.containerMobile : styles.containerWeb,
				]}
			/>

			<LinearGradient
				colors={["rgba(0, 0, 0, 0.06)", "rgba(0, 0, 0, 0.7)"]}
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				style={[
					styles.content,
					isMobile ? styles.contentMobile : styles.contentWeb,
				]}
			>
				<Image
					source={require("@assets/images/logoSmall.png")}
					style={styles.logo}
				/>

				<Text
					style={[styles.name, isMobile ? styles.nameMobile : styles.nameWeb]}
				>
					{headerData.name}
				</Text>

				<Text
					style={[
						isMobile ? fontStyle["BodyMLight"] : fontStyle["SubtitleLight"],
						styles.desc,
					]}
				>
					{headerData.desc}
				</Text>
			</LinearGradient>
		</View>
	);
};

export default PriceItemHeader;

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	containerWeb: {
		height: 399,
	},
	containerMobile: {
		height: 380,
	},
	content: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	contentWeb: {
		paddingHorizontal: 202,
	},
	contentMobile: {
		paddingHorizontal: 14,
	},
	logo: {
		width: 30,
		height: 36,
	},
	bg: {
		position: "absolute",
		width: "100%",
	},
	name: {
		textAlign: "center",
		color: colors["Neutral-50"],
		marginBottom: 24,
	},
	nameWeb: {
		fontFamily: fonts["Playfair"],
		fontSize: 68,
		fontWeight: "900",
		lineHeight: 66.64,
	},
	nameMobile: {
		fontFamily: fonts["Playfair"],
		fontSize: 48,
		fontWeight: "900",
		lineHeight: 47.04,
	},
	desc: {
		textAlign: "center",
		color: colors["Neutral-50"],
	},
});
