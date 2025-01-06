import { StyleSheet, View } from "react-native";
import React from "react";
import { tcData } from "@utils/constant/page";
import { TCItem } from "@components/atom";

type Props = {
	isMobile: boolean;
};

const TCList = ({ isMobile }: Props) => {
	return (
		<View style={styles.container}>
			{tcData.map((item, index) => (
				<TCItem
					key={index.toString()}
					itemData={item}
					indexData={index}
					isMobile={isMobile}
				/>
			))}
		</View>
	);
};

export default TCList;

const styles = StyleSheet.create({
	container: {
		gap: 20,
	},
});
