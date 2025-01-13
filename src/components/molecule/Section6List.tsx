import { View } from "react-native";
import React from "react";
import { studioData } from "@utils/constant/page";
import { Section6Studio } from "@components/atom";

type Props = {
	scrollPos: number;
	isMobile: boolean;
};

const Section6List = ({ scrollPos, isMobile }: Props) => {
	return (
		<View>
			{studioData.map((item, index) => (
				<Section6Studio
					key={index.toString()}
					itemData={item}
					even={index % 2 === 0}
					trigger={
						isMobile
							? scrollPos >= 3598.45 + 835 * index
							: scrollPos >= 3462 + 660 * index
					}
					isMobile={isMobile}
				/>
			))}
		</View>
	);
};

export default Section6List;
