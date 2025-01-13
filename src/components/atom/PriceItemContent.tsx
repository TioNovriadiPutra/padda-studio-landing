import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PackageType } from "@interfaces/page";
import { fonts, fontStyle } from "@themes/fonts";
import { colors } from "@themes/colors";
import Animated, {
	interpolateColor,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";
import { AnimatedPressable } from "@utils/constant/animated";

type Props = {
	contentData: PackageType[];
	isMobile: boolean;
};

const PriceItemContent = ({ contentData, isMobile }: Props) => {
	return (
		<View style={[styles.container, !isMobile && styles.containerWeb]}>
			{contentData.map((item, index) => {
				const buttonAnim = useSharedValue(0);

				const containerAnimatedStyle = useAnimatedStyle(() => {
					const borderColor = interpolateColor(
						buttonAnim.value,
						[0, 1],
						[colors["Neutral-200"], colors["Accent-600"]]
					);

					return {
						borderColor,
					};
				});

				const buttonAnimatedStyle = useAnimatedStyle(() => {
					return {
						opacity: buttonAnim.value,
					};
				});

				const labelAnimatedStyle = useAnimatedStyle(() => {
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
					<View
						key={index.toString()}
						style={[styles.box, isMobile ? styles.boxMobile : styles.boxWeb]}
					>
						<View style={styles.header}>
							<Text
								style={[
									!isMobile && fontStyle["BodyL"],
									styles.name,
									isMobile && styles.nameMobile,
								]}
							>
								{item.name}
							</Text>

							<Text
								style={[
									!isMobile && fontStyle["BodyL"],
									styles.price,
									isMobile && styles.nameMobile,
								]}
							>
								{item.price}
							</Text>
						</View>

						<View style={styles.detail}>
							{item.details.map((item2, index2) => (
								<View key={index2.toString()} style={styles.list}>
									<View
										style={[
											styles.circle,
											isMobile ? styles.circleMobile : styles.circleWeb,
										]}
									/>

									<Text
										style={[
											!isMobile && fontStyle["BodyMLight"],
											styles.label,
											isMobile && styles.labelMobile,
										]}
									>
										{item2}
									</Text>
								</View>
							))}
						</View>

						<AnimatedPressable
							style={[styles.button, containerAnimatedStyle]}
							onHoverIn={onHoverIn}
							onHoverOut={onHoverOut}
						>
							<Animated.Text
								style={[
									fontStyle["BodyMBold"],
									styles.buttonLabel,
									labelAnimatedStyle,
								]}
							>
								Sample Photo
							</Animated.Text>

							<Animated.View style={[styles.backdrop, buttonAnimatedStyle]} />
						</AnimatedPressable>
					</View>
				);
			})}
		</View>
	);
};

export default PriceItemContent;

const styles = StyleSheet.create({
	container: {
		gap: 40,
	},
	containerWeb: {
		flexDirection: "row",
	},
	box: {
		flex: 1,
		borderWidth: 1,
		borderColor: colors["Neutral-200"],
		borderRadius: 24,
		gap: 24,
	},
	boxWeb: {
		padding: 32,
	},
	boxMobile: {
		paddingHorizontal: 24,
		paddingVertical: 32,
	},
	header: {
		alignItems: "center",
		gap: 14,
	},
	name: {
		textAlign: "center",
		color: colors["Neutral-950"],
	},
	nameMobile: {
		fontFamily: fonts["Helvetica"],
		fontSize: 20,
		fontWeight: "700",
		lineHeight: 28,
	},
	price: {
		textAlign: "center",
		color: colors["Neutral-600"],
	},
	detail: {
		gap: 5,
	},
	list: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
	circle: {
		borderRadius: 50,
		backgroundColor: colors["Neutral-800"],
	},
	circleWeb: {
		width: 6,
		height: 6,
	},
	circleMobile: {
		width: 4,
		height: 4,
	},
	label: {
		color: colors["Neutral-800"],
	},
	labelMobile: {
		fontFamily: fonts["HelveticaLight"],
		fontSize: 16,
		lineHeight: 19.66,
	},
	button: {
		paddingVertical: 10,
		alignItems: "center",
		borderWidth: 1,
		borderRadius: 100,
	},
	buttonLabel: {
		zIndex: 999,
	},
	backdrop: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		borderRadius: 100,
		backgroundColor: colors["Accent-600"],
		zIndex: 998,
	},
});
