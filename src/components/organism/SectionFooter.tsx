import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { MutableRefObject } from "react";
import { colors } from "@themes/colors";
import { SectionFooterPadda } from "@components/molecule";
import { fontStyle } from "@themes/fonts";

type Props = {
	isMobile: boolean;
	scrollRef?: MutableRefObject<ScrollView | null>;
};

const SectionFooter = ({ isMobile, scrollRef }: Props) => {
	return (
		<View
			style={[
				styles.container,
				isMobile ? styles.containerMobile : styles.containerWeb,
			]}
		>
			<SectionFooterPadda isMobile={isMobile} scrollRef={scrollRef} />

			<Text
				style={[
					isMobile ? fontStyle["BodyXS"] : fontStyle["BodySReg"],
					styles.copy,
				]}
			>
				All Rights Reserved, All Wrong Restored
			</Text>
		</View>
	);
};

export default SectionFooter;

const styles = StyleSheet.create({
	container: {
		paddingTop: 64,
		paddingBottom: 24,
		backgroundColor: colors["Neutral-950"],
		gap: 64,
	},
	containerWeb: {
		paddingHorizontal: 80,
	},
	containerMobile: {
		paddingHorizontal: 14,
	},
	copy: {
		color: colors["Neutral-400"],
		textAlign: "center",
	},
});
