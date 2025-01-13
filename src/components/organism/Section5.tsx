import { ScrollView, StyleSheet, View } from "react-native";
import React, { MutableRefObject, useEffect } from "react";
import { colors } from "@themes/colors";
import { fontStyle } from "@themes/fonts";
import { Section5List } from "@components/molecule";
import Animated, {
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";
import { studioButtonData } from "@utils/constant/page";

type Props = {
	trigger: boolean;
	isMobile: boolean;
	scrollRef: MutableRefObject<ScrollView | null>;
};

const Section5 = ({ trigger, isMobile, scrollRef }: Props) => {
	const textAnim = useSharedValue(0);

	const titleAnimatedStyle = useAnimatedStyle(() => {
		const translateX = interpolate(textAnim.value, [0, 1], [-50, 0]);

		return {
			transform: [{ translateX }],
			opacity: textAnim.value,
		};
	});

	const descAnimatedStyle = useAnimatedStyle(() => {
		const translateX = interpolate(textAnim.value, [0, 1], [50, 0]);

		return {
			transform: [{ translateX }],
			opacity: textAnim.value,
		};
	});

	useEffect(() => {
		if (trigger && textAnim.value === 0) {
			textAnim.value = withTiming(1, { duration: 1000 });
		}
	}, [trigger]);

	return (
		<View
			style={[
				styles.container,
				isMobile ? styles.containerMobile : styles.containerWeb,
			]}
		>
			<Animated.Text
				style={[
					isMobile ? fontStyle["H3"] : fontStyle["H2"],
					styles.title,
					titleAnimatedStyle,
				]}
			>
				Transform your vision into reality with our fully-equipped, versatile
				studio space available for rent.
			</Animated.Text>

			<Animated.Text
				style={[
					isMobile ? fontStyle["BodySReg"] : fontStyle["SubtitleLight"],
					styles.desc,
					isMobile ? styles.descMobile : styles.descWeb,
					descAnimatedStyle,
				]}
			>
				Our studio offers a variety of spaces to meet your unique needs, from
				intimate settings for portrait sessions to larger, open areas perfect
				for events and group shoots. Whether you’re looking for a minimalist
				backdrop, a well-lit space for product photography, or a more creative,
				themed environment, we have the perfect studio for you. Each space is
				designed with flexibility in mind, allowing you to create the ideal
				atmosphere for your shoot. With different sizes and styles to choose
				from, you’ll find the perfect setting to bring your vision to life.
			</Animated.Text>

			{!isMobile && (
				<Section5List
					trigger={trigger}
					data={studioButtonData}
					type="long"
					scrollRef={scrollRef}
				/>
			)}
		</View>
	);
};

export default Section5;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors["Neutral-950"],
		alignItems: "center",
	},
	containerWeb: {
		height: 584,
		paddingHorizontal: 120,
		paddingVertical: 100,
	},
	containerMobile: {
		minHeight: 611,
		paddingHorizontal: 14,
		paddingVertical: 64,
	},
	title: {
		textAlign: "center",
		color: colors["Neutral-50"],
		marginBottom: 64,
	},
	desc: {
		textAlign: "center",
		color: colors["Neutral-50"],
	},
	descWeb: {
		marginBottom: 60,
		fontWeight: "normal",
		fontSize: 20,
	},
	descMobile: {
		fontWeight: "light",
	},
});
