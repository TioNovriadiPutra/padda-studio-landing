import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import Section1Left from "@components/molecule/Section1Left";

const Section1 = () => {
	return (
		<View style={styles.container}>
			<Section1Left />
		</View>
	);
};

export default Section1;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 876,
		backgroundColor: colors["Neutral-50"],
		flexDirection: "row",
		gap: 40,
	},
});
