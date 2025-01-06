import React from "react";
import { RecoilRoot } from "recoil";
import AppNav from "AppNav";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";

const App = () => {
	inject();
	injectSpeedInsights();

	return (
		<RecoilRoot>
			<AppNav />
		</RecoilRoot>
	);
};

export default App;
