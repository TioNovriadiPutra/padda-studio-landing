import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import { TCList } from "@components/molecule";
import Animated, {
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";

type Props = {
	isMobile: boolean;
};

const TCContent = ({ isMobile }: Props) => {
	const footerAnim = useSharedValue(0);

	const footerAnimatedStyle = useAnimatedStyle(() => {
		const translateX = interpolate(footerAnim.value, [0, 1], [50, 0]);

		return {
			transform: [{ translateX }],
			opacity: footerAnim.value,
		};
	});

	useEffect(() => {
		footerAnim.value = withTiming(1, { duration: 1000 });
	}, []);

	return (
		<Animated.View
			style={[
				styles.container,
				isMobile ? styles.containerMobile : styles.containerWeb,
				footerAnimatedStyle,
			]}
		>
			<TCList isMobile={isMobile} />
		</Animated.View>
	);
};

export default TCContent;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors["Neutral-50"],
	},
	containerWeb: {
		paddingHorizontal: 120,
		paddingVertical: 40,
	},
	containerMobile: {
		paddingHorizontal: 14,
		paddingVertical: 40,
	},
});
