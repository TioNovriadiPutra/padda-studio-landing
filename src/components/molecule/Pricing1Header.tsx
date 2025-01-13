import { StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { fonts, fontStyle } from "@themes/fonts";
import { colors } from "@themes/colors";
import Animated, {
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";

type Props = {
	isMobile: boolean;
};

const Pricing1Header = ({ isMobile }: Props) => {
	const headerAnim = useSharedValue(0);

	const headerAnimatedStyle = useAnimatedStyle(() => {
		const translateY = interpolate(headerAnim.value, [0, 1], [50, 0]);

		return {
			transform: [{ translateY }],
			opacity: headerAnim.value,
		};
	});

	useEffect(() => {
		headerAnim.value = withTiming(1, { duration: 1000 });
	}, []);

	return (
		<Animated.View style={[styles.container, headerAnimatedStyle]}>
			<Text
				style={[
					!isMobile && fontStyle["H1"],
					styles.title,
					isMobile && styles.titleMobile,
				]}
			>
				Offer n Package
			</Text>

			<Text
				style={[
					!isMobile && fontStyle["SubtitleLight"],
					styles.desc,
					styles.descMobile,
				]}
			>
				Whether you're looking for a quick, professional headshot, a full-day
				event coverage, or a creative session with custom backdrops, we have
				options to suit every requirement and budget. Each package includes
				high-quality editing and a selection of deliverables to ensure your
				photos are as stunning as the moments they capture.
			</Text>
		</Animated.View>
	);
};

export default Pricing1Header;

const styles = StyleSheet.create({
	container: {
		gap: 32,
	},
	title: {
		textAlign: "center",
		color: colors["Neutral-50"],
	},
	titleMobile: {
		fontFamily: fonts["Playfair"],
		fontSize: 48,
		fontWeight: "900",
		lineHeight: 47.04,
	},
	desc: {
		color: colors["Neutral-50"],
	},
	descMobile: {
		fontFamily: fonts["HelveticaLight"],
		fontSize: 16,
		lineHeight: 22.4,
	},
});
