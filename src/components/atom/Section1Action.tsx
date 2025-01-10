import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Animated, {
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withDelay,
	withTiming,
} from "react-native-reanimated";
import CustomButton from "./CustomButton";
import AppButton from "./AppButton";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProps } from "@interfaces/navigation";

type Props = {
	isMobile: boolean;
};

const Section1Action = ({ isMobile }: Props) => {
	const nav = useNavigation<AppNavigationProps>();

	const buttonAnim = useSharedValue(0);

	const buttonAnimatedStyle = useAnimatedStyle(() => {
		const translateY = interpolate(buttonAnim.value, [0, 1], [-50, 0]);

		return {
			transform: [{ translateY }],
			opacity: buttonAnim.value,
		};
	});

	const onHandleBook = () => {
		nav.navigate("Booking");
	};

	const onHandlePricing = () => {
		nav.navigate("Pricing");
	};

	useEffect(() => {
		buttonAnim.value = withDelay(400, withTiming(1, { duration: 1000 }));
	}, []);

	return (
		<Animated.View
			style={[
				styles.container,
				isMobile ? styles.containerMobile : styles.containerWeb,
				buttonAnimatedStyle,
			]}
		>
			<CustomButton label="BOOKING NOW" onClick={onHandleBook} />

			<AppButton type="black" label="VIEW PRICING" onClick={onHandlePricing} />
		</Animated.View>
	);
};

export default Section1Action;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	containerWeb: {
		flexDirection: "row",
		gap: 24,
	},
	containerMobile: {
		gap: 14,
	},
});
