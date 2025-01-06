import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { Section6List } from "@components/molecule";

type Props = {
	scrollPos: number;
	isMobile: boolean;
};

const Section6 = ({ scrollPos, isMobile }: Props) => {
	return (
		<View
			style={[
				styles.container,
				isMobile ? styles.containerMobile : styles.containerWeb,
			]}
		>
			<Section6List scrollPos={scrollPos} isMobile={isMobile} />
		</View>
	);
};

export default Section6;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors["Neutral-50"],
	},
	containerWeb: {
		height: 3300,
	},
	containerMobile: {
		minHeight: 4175,
	},
});
