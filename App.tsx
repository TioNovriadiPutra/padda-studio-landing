import React from "react";
import { RecoilRoot } from "recoil";
import AppNav from "AppNav";
import { inject } from "@vercel/analytics";

const App = () => {
	inject();

	return (
		<RecoilRoot>
			<AppNav />
		</RecoilRoot>
	);
};

export default App;
