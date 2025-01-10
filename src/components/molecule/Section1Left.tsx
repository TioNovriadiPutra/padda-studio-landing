import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fontStyle } from "@themes/fonts";
import { colors } from "@themes/colors";
import { Section1Action } from "@components/atom";
import Animated from "react-native-reanimated";
import useSection1Left from "@hooks/useSection1Left";

type Props = {
	isMobile: boolean;
};

const Section1Left = ({ isMobile }: Props) => {
	const { titleAnimatedStyle, descAnimatedStyle } = useSection1Left();

	return (
		<View style={!isMobile && styles.container}>
			<Animated.View style={[styles.titleContainer, titleAnimatedStyle]}>
				<Text
					style={[
						fontStyle["H1"],
						styles.title,
						isMobile ? styles.titleMobile : styles.titleWeb,
					]}
				>
					Capture Life's Best Moments –{" "}
					<Text
						style={[styles.secondTitle, isMobile && styles.secondTitleMobile]}
					>
						Frame Your Story with Us
					</Text>
				</Text>
			</Animated.View>

			<Animated.Text
				style={[
					isMobile ? fontStyle["BodySReg"] : fontStyle["SubtitleLight"],
					styles.desc,
					descAnimatedStyle,
				]}
			>
				Whether it’s a special occasion or everyday beauty, we’re here to craft
				images that capture your story with creativity and care.
			</Animated.Text>

			<Section1Action isMobile={isMobile} />
		</View>
	);
};

export default Section1Left;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	titleContainer: {
		paddingBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: colors["Border"],
		marginBottom: 24,
	},
	title: {
		color: colors["Neutral-950"],
	},
	titleWeb: {
		fontWeight: "normal",
	},
	titleMobile: {
		fontSize: 48,
		fontWeight: "light",
		lineHeight: 47.04,
	},
	secondTitle: {
		fontWeight: "bold",
	},
	secondTitleMobile: {
		fontStyle: "italic",
	},
	desc: {
		color: colors["Neutral-700"],
		marginBottom: 40,
	},
});
