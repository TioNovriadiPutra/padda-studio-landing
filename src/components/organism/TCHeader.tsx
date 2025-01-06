import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import { TCHeaderDesc } from "@components/molecule";
import Animated, {
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";

type Props = {
	isMobile: boolean;
};

const TCHeader = ({ isMobile }: Props) => {
	const headerAnim = useSharedValue(0);

	const headerAnimatedStyle = useAnimatedStyle(() => {
		const translateX = interpolate(headerAnim.value, [0, 1], [-50, 0]);

		return {
			transform: [{ translateX }],
			opacity: headerAnim.value,
		};
	});

	useEffect(() => {
		headerAnim.value = withTiming(1, { duration: 1000 });
	}, []);

	return (
		<Animated.View
			style={[
				styles.container,
				isMobile ? styles.containerMobile : styles.containerWeb,
				headerAnimatedStyle,
			]}
		>
			<TCHeaderDesc isMobile={isMobile} />
		</Animated.View>
	);
};

export default TCHeader;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors["Neutral-100"],
	},
	containerWeb: {
		height: 366,
		paddingHorizontal: 120,
		paddingVertical: 100,
	},
	containerMobile: {
		height: 478,
		paddingHorizontal: 14,
		paddingVertical: 64,
	},
});
