import { StyleSheet, View } from "react-native";
import React from "react";
import { SpecialOfferFooter, SpecialOfferHeader } from "@components/atom";
import { SpecialOfferType } from "@interfaces/page";

type Props = {
	isMobile: boolean;
	offerData: SpecialOfferType;
};

const SpecialOfferContent = ({ isMobile, offerData }: Props) => {
	return (
		<View style={styles.container}>
			<SpecialOfferHeader
				isMobile={isMobile}
				packageName={offerData.package}
				price={offerData.price}
				pax={offerData.pax}
			/>

			<SpecialOfferFooter
				isMobile={isMobile}
				desc={offerData.desc}
				optional={offerData.optional}
			/>
		</View>
	);
};

export default SpecialOfferContent;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 32,
	},
});
