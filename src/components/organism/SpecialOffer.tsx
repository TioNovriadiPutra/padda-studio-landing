import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import {
	SpecialOfferAddOn,
	SpecialOfferContent,
	SpecialOfferImage,
} from "@components/molecule";
import { SpecialOfferType } from "@interfaces/page";

type Props = {
	isMobile: boolean;
	offerData: SpecialOfferType;
};

const SpecialOffer = ({ isMobile, offerData }: Props) => {
	return (
		<View
			style={[
				styles.container,
				isMobile ? styles.containerMobile : styles.containerWeb,
			]}
		>
			<View
				style={[
					styles.content,
					isMobile ? styles.contentMobile : styles.contentWeb,
				]}
			>
				<SpecialOfferContent isMobile={isMobile} offerData={offerData} />

				<SpecialOfferImage isMobile={isMobile} images={offerData.images} />
			</View>

			{offerData.addOn && (
				<SpecialOfferAddOn isMobile={isMobile} addOnData={offerData.addOn} />
			)}
		</View>
	);
};

export default SpecialOffer;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors["Neutral-950"],
		paddingVertical: 60,
		gap: 32,
	},
	containerWeb: {
		height: 738,
		paddingHorizontal: 120,
	},
	containerMobile: {
		height: 1081,
		paddingHorizontal: 14,
	},
	content: {
		borderBottomWidth: 1,
		borderBottomColor: colors["Neutral-700"],
	},
	contentWeb: {
		gap: 134,
		flexDirection: "row",
		alignItems: "center",
		paddingBottom: 32,
	},
	contentMobile: {
		gap: 40,
		paddingBottom: 364,
	},
});
