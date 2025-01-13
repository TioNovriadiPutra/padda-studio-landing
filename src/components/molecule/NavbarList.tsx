import { StyleSheet, View } from "react-native";
import React from "react";
import { navbarData } from "@utils/constant/page";
import { NavbarItem } from "@components/atom";
import { NavigationContainerRefWithCurrent } from "@react-navigation/native";
import { RootStackParamList } from "@interfaces/navigation";

type Props = {
	navigationRef: NavigationContainerRefWithCurrent<RootStackParamList>;
};

const NavbarList = ({ navigationRef }: Props) => {
	return (
		<View style={styles.container}>
			{navbarData.map((item, index) => (
				<NavbarItem
					key={index.toString()}
					itemData={item}
					navigationRef={navigationRef}
				/>
			))}
		</View>
	);
};

export default NavbarList;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		gap: 64,
	},
});
