import { StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { fontStyle } from "@themes/fonts";
import Animated, {
	interpolate,
	interpolateColor,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";
import { AnimatedPressable } from "@utils/constant/animated";

type Props = {
	type: "black" | "white" | "grey" | "emptyWhite" | "emptyBlack";
	label: string;
	onClick?: () => void;
	withAnim?: boolean;
	pressable?: boolean;
};

const AppButton = ({
	type,
	label,
	onClick,
	withAnim = true,
	pressable = true,
}: Props) => {
	const buttonAnim = useSharedValue(0);

	const containerAnimatedStyle = useAnimatedStyle(() => {
		const borderColor = interpolateColor(
			buttonAnim.value,
			[0, 1],
			[
				type === "emptyWhite" ? colors["Neutral-50"] : colors["Neutral-950"],
				colors["Accent-600"],
			]
		);

		return {
			borderColor,
		};
	});

	const buttonAnimatedStyle = useAnimatedStyle(() => {
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
		<AnimatedPressable
			style={[
				styles.container,
				{
					backgroundColor:
						type === "black"
							? colors["Neutral-950"]
							: type === "white"
							? colors["Neutral-50"]
							: type === "grey"
							? colors["Neutral-400"]
							: "none",
					borderWidth: type === "emptyWhite" || type === "emptyBlack" ? 1 : 0,
					cursor: pressable ? "pointer" : "auto",
				},
				type === "emptyWhite" || type === "emptyBlack"
					? containerAnimatedStyle
					: null,
			]}
			onPress={onClick}
			onHoverIn={
				(type === "emptyWhite" || type === "emptyBlack") && withAnim
					? onHoverIn
					: null
			}
			onHoverOut={
				(type === "emptyWhite" || type === "emptyBlack") && withAnim
					? onHoverOut
					: null
			}
		>
			<Text
				style={[
					fontStyle["Button"],
					{
						color:
							type === "white" || type === "emptyBlack"
								? colors["Neutral-950"]
								: colors["Neutral-50"],
					},
					styles.label,
				]}
			>
				{label}
			</Text>

			{type === "emptyWhite" || type === "emptyBlack" ? (
				<Animated.View style={[styles.backdrop, buttonAnimatedStyle]} />
			) : null}
		</AnimatedPressable>
	);
};

export default AppButton;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 24,
		paddingVertical: 13,
		borderRadius: 6,
	},
	label: {
		textAlign: "center",
		zIndex: 999,
	},
	backdrop: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		borderRadius: 4,
		backgroundColor: colors["Accent-600"],
		zIndex: 998,
	},
});
