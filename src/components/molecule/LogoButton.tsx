import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const LogoButton = () => {
	return (
		<Pressable>
			<Image
				source={require("@assets/images/mainLogo.png")}
				style={styles.logo}
			/>
		</Pressable>
	);
};

export default LogoButton;

const styles = StyleSheet.create({
	logo: {
		width: 131,
		height: 36,
	},
});
