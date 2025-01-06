import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { Section2BoxList, Section2Header } from "@components/molecule";

type Props = {
	trigger: boolean;
	trigger2: boolean;
	isMobile: boolean;
	onLayout: (e: LayoutChangeEvent) => void;
};

const Section2 = ({ trigger, trigger2, isMobile, onLayout }: Props) => {
	return (
		<View
			style={[
				styles.container,
				isMobile ? styles.containerMobile : styles.containerWeb,
			]}
		>
			<Section2Header
				trigger={trigger}
				isMobile={isMobile}
				onLayout={onLayout}
			/>

			<Section2BoxList
				trigger={isMobile ? trigger2 : trigger}
				isMobile={isMobile}
			/>
		</View>
	);
};

export default Section2;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors["Neutral-950"],
		gap: 60,
	},
	containerWeb: {
		height: 1132,
		paddingHorizontal: 120,
		paddingVertical: 84,
	},
	containerMobile: {
		minHeight: 1628,
		paddingHorizontal: 14,
		paddingVertical: 64,
	},
});
