import { Image, ScrollView, StyleSheet, View } from "react-native";
import React, { MutableRefObject } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@themes/colors";
import { Pricing1Header, Section5List } from "@components/molecule";
import { pricingButtonData } from "@utils/constant/page";

type Props = {
	isMobile: boolean;
	scrollRef: MutableRefObject<ScrollView | null>;
};

const Pricing1 = ({ isMobile, scrollRef }: Props) => {
	return (
		<View style={isMobile ? styles.containerMobile : styles.containerWeb}>
			<Image
				source={require("@assets/images/pricing1.png")}
				style={[
					styles.bg,
					isMobile ? styles.containerMobile : styles.containerWeb,
				]}
			/>

			<LinearGradient
				colors={[colors["Neutral-950"], "transparent"]}
				locations={[0, 1]}
				start={{ x: 0.5, y: 1 }}
				end={{ x: 0.5, y: 0 }}
				style={[
					styles.content,
					isMobile ? styles.contentMobile : styles.contentWeb,
				]}
			>
				<Pricing1Header isMobile={isMobile} />

				{!isMobile && (
					<Section5List
						trigger
						data={pricingButtonData}
						type="short"
						scrollRef={scrollRef}
					/>
				)}
			</LinearGradient>
		</View>
	);
};

export default Pricing1;

const styles = StyleSheet.create({
	containerWeb: {
		height: 578,
	},
	containerMobile: {
		height: 452,
	},
	content: {
		flex: 1,
		justifyContent: "center",
	},
	contentWeb: {
		paddingHorizontal: 120,
		gap: 50,
	},
	contentMobile: {
		paddingHorizontal: 14,
	},
	bg: {
		position: "absolute",
		width: "100%",
	},
});
