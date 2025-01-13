import { ScrollView, StyleSheet, View } from "react-native";
import React, { MutableRefObject } from "react";
import { Section5Box } from "@components/atom";
import { ButtonListType } from "@interfaces/page";

type Props = {
	trigger: boolean;
	data: ButtonListType[];
	type: "long" | "short";
	scrollRef: MutableRefObject<ScrollView | null>;
};

const Section5List = ({ trigger, data, type, scrollRef }: Props) => {
	return (
		<View style={[styles.container, { gap: type === "long" ? 64 : 34 }]}>
			{data.map((item, index) => (
				<Section5Box
					key={index.toString()}
					itemData={item}
					trigger={trigger}
					index={index}
					scrollRef={scrollRef}
				/>
			))}
		</View>
	);
};

export default Section5List;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		flexWrap: "wrap",
		flexDirection: "row",
	},
});
