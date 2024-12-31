import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { Navbar } from "@interfaces/page";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import Animated, {
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";

type Props = {
	itemData: Navbar;
};

const NavbarItem = ({ itemData }: Props) => {
	const buttonAnim = useSharedValue(0);

	const barAnimatedStyle = useAnimatedStyle(() => {
		const width = interpolate(buttonAnim.value, [0, 1], [0, 100]);

		return {
			width: `${width}%`,
		};
	});

	const onHoverIn = () => {
		buttonAnim.value = withTiming(1, { duration: 200 });
	};

	const onHoverOut = () => {
		buttonAnim.value = withTiming(0, { duration: 200 });
	};

	return (
		<Pressable onHoverIn={onHoverIn} onHoverOut={onHoverOut}>
			<Text style={styles.title}>{itemData.title}</Text>

			<Animated.View style={[styles.bar, barAnimatedStyle]} />
		</Pressable>
	);
};

export default NavbarItem;

const styles = StyleSheet.create({
	title: {
		fontFamily: fonts.Helvetica,
		fontSize: 16,
		fontWeight: 400,
		lineHeight: 18.4,
		color: colors["Neutral-400"],
	},
	bar: {
		position: "absolute",
		height: 2,
		backgroundColor: colors["Neutral-400"],
		bottom: -6,
	},
});
