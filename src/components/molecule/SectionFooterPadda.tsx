import { ScrollView, StyleSheet, View } from "react-native";
import React, { MutableRefObject } from "react";
import {
	SectionFooterInfo,
	SectionFooterLogo,
	SectionFooterNav,
} from "@components/atom";

type Props = {
	isMobile: boolean;
	scrollRef: MutableRefObject<ScrollView | null>;
};

const SectionFooterPadda = ({ isMobile, scrollRef }: Props) => {
	return (
		<View
			style={[
				styles.container,
				isMobile ? styles.containerMobile : styles.containerWeb,
			]}
		>
			<SectionFooterLogo isMobile={isMobile} />

			<SectionFooterNav isMobile={isMobile} scrollRef={scrollRef} />

			<SectionFooterInfo isMobile={isMobile} />
		</View>
	);
};

export default SectionFooterPadda;

const styles = StyleSheet.create({
	container: {
		alignItems: "flex-start",
	},
	containerWeb: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	containerMobile: {
		gap: 32,
	},
});
