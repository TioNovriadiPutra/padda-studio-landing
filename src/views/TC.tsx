import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { currentRouteState } from "@stores/page";
import { useIsFocused } from "@react-navigation/native";

const TC = () => {
	const setCurrentRoute = useSetRecoilState(currentRouteState);

	const isFocused = useIsFocused();

	useEffect(() => {
		if (isFocused) {
			setCurrentRoute("TC");
		}
	}, [isFocused]);

	return (
		<View>
			<Text>TC</Text>
		</View>
	);
};

export default TC;

const styles = StyleSheet.create({});
