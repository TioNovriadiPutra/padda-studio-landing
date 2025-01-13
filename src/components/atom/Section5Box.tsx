import { ScrollView, StyleSheet, Text } from "react-native";
import React, { MutableRefObject, useEffect } from "react";
import { AnimatedPressable } from "@utils/constant/animated";
import { colors } from "@themes/colors";
import { fontStyle } from "@themes/fonts";
import Animated, {
	interpolate,
	interpolateColor,
	useAnimatedStyle,
	useSharedValue,
	withDelay,
	withTiming,
} from "react-native-reanimated";
import { ButtonListType } from "@interfaces/page";
import { useRecoilValue } from "recoil";
import { pricingSectionState } from "@stores/page";

type Props = {
	itemData: ButtonListType;
	trigger: boolean;
	index: number;
	scrollRef: MutableRefObject<ScrollView | null>;
};

const Section5Box = ({ itemData, trigger, index, scrollRef }: Props) => {
	const pricingSection = useRecoilValue(pricingSectionState);

	const sectionAnim = useSharedValue(0);
	const boxAnim = useSharedValue(0);

	const sectionAnimatedStyle = useAnimatedStyle(() => {
		const translateX = interpolate(sectionAnim.value, [0, 1], [-50, 0]);

		return {
			transform: [{ translateX }],
			opacity: sectionAnim.value,
		};
	});

	const boxAnimatedStyle = useAnimatedStyle(() => {
		const width = interpolate(boxAnim.value, [0, 1], [0, 100]);

		return {
			width: `${width}%`,
		};
	});

	const borderAnimatedStyle = useAnimatedStyle(() => {
		const borderColor = interpolateColor(
			boxAnim.value,
			[0, 1],
			[colors["Neutral-50"], colors["Accent-600"]]
		);

		return {
			borderColor,
		};
	});

	const onHandleHoverIn = () => {
		boxAnim.value = withTiming(1, { duration: 200 });
	};

	const onHandleHoverOut = () => {
		boxAnim.value = withTiming(0, { duration: 200 });
	};

	const onHandlePress = () => {
		if (itemData.to) {
			scrollRef.current?.scrollTo({
				y: itemData.to,
				animated: true,
			});
		} else {
			if (pricingSection[index] !== 0) {
				let scrollTo = pricingSection[0] + 1316;

				for (let i = 1; i < index - 1; i++) {
					scrollTo += pricingSection[i];
				}

				scrollRef.current?.scrollTo({
					y: scrollTo,
					animated: true,
				});
			}
		}
	};

	useEffect(() => {
		if (trigger && sectionAnim.value === 0) {
			sectionAnim.value = withDelay(
				300 * index,
				withTiming(1, { duration: 1000 })
			);
		}
	}, [trigger]);

	return (
		<AnimatedPressable
			style={[styles.container, sectionAnimatedStyle, borderAnimatedStyle]}
			onHoverIn={onHandleHoverIn}
			onHoverOut={onHandleHoverOut}
			onPress={onHandlePress}
		>
			<Text style={[fontStyle["Button"], styles.label]}>{itemData.label}</Text>

			<Animated.View style={[styles.backdrop, boxAnimatedStyle]} />
		</AnimatedPressable>
	);
};

export default Section5Box;

const styles = StyleSheet.create({
	container: {
		width: 156,
		alignItems: "center",
		paddingVertical: 13,
		borderWidth: 1,
		borderRadius: 6,
	},
	label: {
		color: colors["Neutral-50"],
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
