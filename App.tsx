import { View, Text } from "react-native";
import React from "react";
import { RecoilRoot } from "recoil";
import AppNav from "AppNav";

const App = () => {
	return (
		<RecoilRoot>
			<AppNav />
		</RecoilRoot>
	);
};

export default App;
