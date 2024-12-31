import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Section1 } from "@components/organism";
import { colors } from "@themes/colors";

const Home = () => {
	return (
		<ScrollView style={styles.container}>
			<Section1 />
		</ScrollView>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors["Neutral-50"],
	},
});
