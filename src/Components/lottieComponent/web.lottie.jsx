/** @format */

import React from "react";
import Lottie from "lottie-react";
import webdeveloperJson from "../../lottie/webdeveloper.json";

const webLottie = () => {
	return (
		<div>
			<Lottie
				className="   w-full "
				animationData={webdeveloperJson}
				loop={true}
			/>
		</div>
	);
};

export default webLottie;
