import { ScrollView, StyleSheet } from "react-native";
import React, { MutableRefObject, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { currentRouteState } from "@stores/page";
import { useIsFocused } from "@react-navigation/native";
import {
	Pricing1,
	PricingList,
	SectionFooter,
	SpecialOffer,
} from "@components/organism";
import useMedia from "@hooks/useMedia";
import { colors } from "@themes/colors";
import {
	priceListData,
	specialOfferData,
	specialOfferMobData,
} from "@utils/constant/page";

type Props = {
	scrollRef: MutableRefObject<ScrollView | null>;
};

const Pricing = ({ scrollRef }: Props) => {
	const setCurrentRoute = useSetRecoilState(currentRouteState);

	const { isMobile } = useMedia();
	const isFocused = useIsFocused();

	useEffect(() => {
		if (isFocused) {
			setCurrentRoute("Pricing");
		}
	}, [isFocused]);

	return (
		<ScrollView ref={scrollRef} style={styles.container}>
			<Pricing1 isMobile={isMobile} scrollRef={scrollRef} />

			<SpecialOffer
				isMobile={isMobile}
				offerData={isMobile ? specialOfferMobData : specialOfferData}
			/>

			<PricingList isMobile={isMobile} listData={priceListData} />

			<SectionFooter scrollRef={scrollRef} isMobile={isMobile} />
		</ScrollView>
	);
};

export default Pricing;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors["Neutral-50"],
	},
});
