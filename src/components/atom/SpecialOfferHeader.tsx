import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts, fontStyle } from "@themes/fonts";
import { colors } from "@themes/colors";
import AppButton from "./AppButton";

type Props = {
	isMobile: boolean;
	packageName: string;
	price: string;
	pax: string;
};

const SpecialOfferHeader = ({ isMobile, packageName, price, pax }: Props) => {
	return (
		<View>
			<Text
				style={[
					!isMobile && fontStyle["BodyMLight"],
					styles.header,
					isMobile && styles.headerMobile,
				]}
			>
				Special Offer
			</Text>

			<Text style={[fontStyle["H2"], styles.title]}>{packageName}</Text>

			<View style={styles.footer}>
				<AppButton
					label={price}
					type="emptyWhite"
					withAnim={false}
					pressable={false}
				/>

				<Text
					style={[
						isMobile ? fontStyle["BodyXS"] : fontStyle["BodySReg"],
						styles.desc,
					]}
				>
					{pax}
				</Text>
			</View>
		</View>
	);
};

export default SpecialOfferHeader;

const styles = StyleSheet.create({
	header: {
		color: colors["Neutral-50"],
		textDecorationLine: "underline",
		marginBottom: 8,
	},
	headerMobile: {
		fontFamily: fonts["HelveticaLight"],
		fontSize: 16,
		lineHeight: 19.66,
	},
	title: {
		color: colors["Neutral-50"],
		marginBottom: 24,
	},
	footer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 24,
	},
	desc: {
		color: colors["Neutral-50"],
	},
});
