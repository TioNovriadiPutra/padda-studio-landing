import { ImageSourcePropType, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import Animated, {
	Easing,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";

type Props = {
	isMobile: boolean;
	images: ImageSourcePropType[];
};

const SpecialOfferImage = ({ isMobile, images }: Props) => {
	const imageAnim = useSharedValue(0);

	useEffect(() => {
		const interval = setInterval(() => {
			imageAnim.value = (imageAnim.value + 1) % images.length;
		}, 3000);

		return () => clearInterval(interval);
	}, [imageAnim]);

	return (
		<View style={!isMobile && styles.containerWeb}>
			{images.map((item, index) => {
				const animatedStyle = useAnimatedStyle(() => ({
					opacity: withTiming(imageAnim.value === index ? 1 : 0, {
						duration: 1000,
						easing: Easing.out(Easing.ease),
					}),
				}));

				return (
					<Animated.Image
						key={index.toString()}
						source={item}
						style={[
							styles.image,
							isMobile ? styles.imageMobile : styles.containerWeb,
							animatedStyle,
							{ zIndex: index },
						]}
					/>
				);
			})}
		</View>
	);
};

export default SpecialOfferImage;

const styles = StyleSheet.create({
	containerWeb: {
		width: 460,
		height: 460,
	},
	containerMobile: {
		width: 332,
		height: 332,
	},
	image: {
		position: "absolute",
	},
	imageMobile: {
		width: "100%",
		height: undefined,
		aspectRatio: 332 / 332,
		resizeMode: "contain",
	},
});
