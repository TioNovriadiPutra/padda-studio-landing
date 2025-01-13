import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts, fontStyle } from "@themes/fonts";
import { colors } from "@themes/colors";

type Props = {
	isMobile: boolean;
	addOnData: string[];
};

const SpecialOfferAddOn = ({ isMobile, addOnData }: Props) => {
	return (
		<View style={styles.container}>
			{addOnData.map((item, index) => (
				<Text
					key={index.toString()}
					style={[
						!isMobile && fontStyle["BodyXS"],
						styles.desc,
						isMobile && styles.descMobile,
					]}
				>
					{item}
				</Text>
			))}
		</View>
	);
};

export default SpecialOfferAddOn;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		gap: 14,
	},
	desc: {
		textAlign: "center",
		color: colors["Neutral-50"],
	},
	descMobile: {
		fontFamily: fonts["Helvetica"],
		fontSize: 12,
		lineHeight: 20,
	},
});
