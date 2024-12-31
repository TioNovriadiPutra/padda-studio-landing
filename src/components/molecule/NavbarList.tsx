import { StyleSheet, View } from "react-native";
import React from "react";
import { navbarData } from "@utils/constant/page";
import { NavbarItem } from "@components/atom";

const NavbarList = () => {
	return (
		<View style={styles.container}>
			{navbarData.map((item, index) => (
				<NavbarItem key={index.toString()} itemData={item} />
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
