import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import { LogoButton, NavbarList } from "@components/molecule";
import { CustomButton } from "@components/atom";
import Animated, {
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";

const Navbar = () => {
	const navbarAnim = useSharedValue(0);

	const navbarAnimatedStyle = useAnimatedStyle(() => {
		const translateY = interpolate(navbarAnim.value, [0, 1], [-64, 0]);
		const opacity = interpolate(navbarAnim.value, [0, 1], [0, 1]);

		return {
			transform: [{ translateY }],
			opacity,
		};
	});

	useEffect(() => {
		navbarAnim.value = withTiming(1, { duration: 1500 });
	}, []);

	return (
		<Animated.View style={[styles.container, navbarAnimatedStyle]}>
			<LogoButton />

			<NavbarList />

			<CustomButton
				type="empty"
				label="BOOKING NOW"
				icon={require("@assets/images/arrow.png")}
			/>
		</Animated.View>
	);
};

export default Navbar;

const styles = StyleSheet.create({
	container: {
		height: 64,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.15,
		shadowColor: colors.Black,
		shadowRadius: 12,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 80,
		zIndex: 999,
		backgroundColor: colors["Neutral-50"],
	},
});
