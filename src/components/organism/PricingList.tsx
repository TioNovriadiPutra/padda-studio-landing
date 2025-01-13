import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { PriceListType } from "@interfaces/page";
import { PriceItem, PricingListNavbar } from "@components/molecule";
import { useSetRecoilState } from "recoil";
import { pricingPageState, pricingSectionState } from "@stores/page";
import { useIsFocused } from "@react-navigation/native";

type Props = {
	isMobile: boolean;
	listData: PriceListType[];
};

const PricingList = ({ isMobile, listData }: Props) => {
	const setPricingSection = useSetRecoilState(pricingSectionState);
	const setPricingPage = useSetRecoilState(pricingPageState);

	const flatlistRef = useRef<FlatList | null>(null);

	const isFocused = useIsFocused();

	const onHandleSetData = (height: number, index: number) => {
		setPricingSection((prev: any) => ({
			...prev,
			[index]: height,
		}));
	};

	const onHandleScroll = (index: number) => {
		if (flatlistRef) {
			flatlistRef.current?.scrollToIndex({ index, animated: true });
		}
	};

	useEffect(() => {
		if (isFocused) {
			setPricingPage(0);

			if (flatlistRef) {
				flatlistRef.current?.scrollToIndex({ index: 0, animated: true });
			}
		}
	}, [isFocused]);

	return (
		<View style={isMobile ? styles.containerMobile : styles.containerWeb}>
			{isMobile && <PricingListNavbar onScroll={onHandleScroll} />}

			{isMobile ? (
				<FlatList
					ref={flatlistRef}
					data={listData}
					horizontal
					showsHorizontalScrollIndicator={false}
					scrollEnabled={false}
					keyExtractor={(_, index) => index.toString()}
					renderItem={({ item, index }) => (
						<PriceItem
							itemData={item}
							index={index}
							onSetData={onHandleSetData}
							isMobile={true}
						/>
					)}
				/>
			) : (
				listData.map((item, index) => {
					return (
						<PriceItem
							key={index.toString()}
							itemData={item}
							index={index}
							onSetData={onHandleSetData}
							isMobile={false}
						/>
					);
				})
			)}
		</View>
	);
};

export default PricingList;

const styles = StyleSheet.create({
	containerWeb: {
		paddingBottom: 157,
	},
	containerMobile: {
		paddingBottom: 34,
	},
});
