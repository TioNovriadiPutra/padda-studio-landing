import { ScrollView, StyleSheet } from "react-native";
import React, { MutableRefObject, useEffect } from "react";
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
import { navbarData } from "@utils/constant/page";

type Props = {
	isMobile: boolean;
	scrollRef: MutableRefObject<ScrollView | null>;
};

const Section1Action = ({ isMobile, scrollRef }: Props) => {
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

	const onHandleStudio = () => {
		scrollRef.current?.scrollTo({
			y: isMobile ? navbarData[1].toMobile : navbarData[1].toWeb,
			animated: true,
		});
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

			<AppButton type="black" label="VIEW STUDIO" onClick={onHandleStudio} />
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
