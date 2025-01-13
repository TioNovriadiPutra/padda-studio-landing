import { StyleSheet, View } from "react-native";
import React from "react";
import { PriceListType } from "@interfaces/page";
import {
	PriceItemContent,
	PriceItemFooter,
	PriceItemHeader,
} from "@components/atom";
import { WIDTH } from "@themes/sizing";

type Props = {
	itemData: PriceListType;
	index: number;
	onSetData: (height: number, index: number) => void;
	isMobile: boolean;
};

const PriceItem = ({ itemData, index, onSetData, isMobile }: Props) => {
	return (
		<View
			style={[
				styles.container,
				isMobile ? styles.containerMobile : styles.containerWeb,
			]}
			onLayout={(event) => {
				const { height } = event.nativeEvent.layout;
				onSetData(height, index);
			}}
		>
			<PriceItemHeader headerData={itemData.header} isMobile={isMobile} />

			<PriceItemContent contentData={itemData.packages} isMobile={isMobile} />

			<PriceItemFooter
				tcData={itemData.tc}
				notes={itemData.notes}
				superNotes={itemData.superNotes}
				isMobile={isMobile}
			/>
		</View>
	);
};

export default PriceItem;

const styles = StyleSheet.create({
	container: {
		gap: 60,
	},
	containerWeb: {
		paddingHorizontal: 120,
		paddingTop: 100,
	},
	containerMobile: {
		width: WIDTH,
		paddingHorizontal: 14,
		paddingTop: 40,
	},
});
