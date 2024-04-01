/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavComponent } from "./Components";
import { HomePage } from "./Page";

const App = () => {
	return (
		<div className="ContainerResponsive  ">
			<Routes>
				<Route path="/" element={<NavComponent />} />
			</Routes>
		</div>
	);
};

export default App;
