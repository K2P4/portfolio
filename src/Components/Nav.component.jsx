/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { HomePage, ServicePage } from "../Page";
import AboutPage from "../Page/About.page";
import { DiCodeigniter } from "react-icons/di";

const NavComponent = () => {
	return (
		<div className="w-[80%]  h-full mx-auto ">
			<div className="flex  mt-6  justify-between items-center">
				<h1 className="flex items-center gap-1 text-xl text-yellow-400  header font-bold tracking-widest  ">
					KP{" "}
					<span>
						<DiCodeigniter className=" w-4 " />
					</span>
				</h1>

				<div className="">
					<ul className="flex  space-x-7">
						<li className=" text-gray-400  tracking-wide select-none hover:text-yellow-400  font-medium   hover:border-b-2 transition-transform  duration-500  hover:border-b-yellow-400  active:text-yellow-500   ">
							<NavLink to="/">Home</NavLink>
						</li>
						<li className=" text-gray-400  tracking-wide select-none hover:text-yellow-400  font-medium   hover:border-b-2 transition-transform  duration-500  hover:border-b-yellow-400  active:text-yellow-500   ">
							<NavLink to="/">About</NavLink>
						</li>
						<li className=" text-gray-400  tracking-wide select-none hover:text-yellow-400  font-medium   hover:border-b-2 transition-transform  duration-500  hover:border-b-yellow-400  active:text-yellow-500   ">
							<NavLink to="/">Project</NavLink>
						</li>
						<li className=" text-gray-400  tracking-wide select-none hover:text-yellow-400  font-medium   hover:border-b-2 transition-transform  duration-500  hover:border-b-yellow-400  active:text-yellow-500   ">
							<NavLink to="/">Resume</NavLink>
						</li>
						<li className=" text-gray-400  tracking-wide select-none hover:text-yellow-400  font-medium   hover:border-b-2 transition-transform  duration-500  hover:border-b-yellow-400  active:text-yellow-500   ">
							<NavLink to="/">Contact</NavLink>
						</li>
					</ul>
				</div>
			</div>

			<HomePage />

			<AboutPage />

			<ServicePage />
		</div>
	);
};

export default NavComponent;
