import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const Pricing1 = () => {
	return (
		<ImageBackground
			source={require("@assets/images/pricing1.png")}
			imageStyle={styles.bg}
			style={styles.container}
		>
			<Text>Pricing1</Text>
		</ImageBackground>
	);
};

export default Pricing1;

const styles = StyleSheet.create({
	container: {
		height: 578,
	},
	bg: {
		width: "100%",
	},
});
