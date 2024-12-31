import {
	Image,
	ImageSourcePropType,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { icons } from "@themes/sizing";
import Animated, {
	interpolate,
	interpolateColor,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";
import { AnimatedPressable } from "@utils/constant/animated";

type Props = {
	type: "black" | "white" | "empty";
	label: string;
	icon?: ImageSourcePropType;
};

const CustomButton = ({ type, label, icon }: Props) => {
	const buttonAnim = useSharedValue(0);

	const buttonAnimatedStyle = useAnimatedStyle(() => {
		const width = interpolate(buttonAnim.value, [0, 1], [0, 100]);

		return {
			width: `${width}%`,
		};
	});

	const titleAnimatedStyle = useAnimatedStyle(() => {
		const color = interpolateColor(
			buttonAnim.value,
			[0, 1],
			[colors["Neutral-800"], colors["Neutral-50"]]
		);

		return {
			color,
		};
	});

	const onHoverIn = () => {
		buttonAnim.value = withTiming(1, { duration: 200 });
	};

	const onHoverOut = () => {
		buttonAnim.value = withTiming(0, { duration: 200 });
	};

	return (
		<Pressable
			style={[styles.container, type === "empty" && styles.containerEmpty]}
			onHoverIn={onHoverIn}
			onHoverOut={onHoverOut}
		>
			<Animated.Text style={[styles.label, titleAnimatedStyle]}>
				{label}
			</Animated.Text>

			{icon && <Image source={icon} style={[icons["IconMD"], styles.icon]} />}

			<Animated.View style={[styles.backdrop, buttonAnimatedStyle]} />
		</Pressable>
	);
};

export default CustomButton;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 24,
		paddingVertical: 9,
		borderRadius: 6,
		gap: 8,
	},
	containerEmpty: {
		borderWidth: 1,
		borderColor: colors["Neutral-800"],
	},
	label: {
		fontFamily: fonts.Helvetica,
		fontSize: 14,
		fontWeight: 400,
		lineHeight: 16.1,
		zIndex: 999,
	},
	icon: {
		zIndex: 999,
	},
	backdrop: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		borderRadius: 4,
		backgroundColor: colors["Neutral-800"],
		zIndex: 998,
	},
});
