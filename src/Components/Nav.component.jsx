/** @format */

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ContactPage, HomePage, ProjectPage, ServicePage } from "../Page";
import AboutPage from "../Page/About.page";
import { DiCodeigniter } from "react-icons/di";
import SkillPage from "../Page/Skill.page";

import ClientComponent from "./Client.component";
import BottomComponent from "./Bottom.component";

const NavComponent = () => {
	const [isFixed, setIsFixed] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 500) {
				setIsFixed(true);
			} else if (window.scrollY >=  4900) {
				setIsFixed(false);
			} 
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div className="">
			<div className="w-[80%]  h-full mx-auto ">
				<div
					className={`flex ${
						isFixed &&
						"fixed top-0 left-0 w-full   px-32  mx-auto bg-[#200435]  duration-500     z-10 "
					}  py-5 justify-between items-center`}>
					<h1 className="flex items-center gap-1 text-xl text-yellow-400  header font-bold tracking-widest  ">
						KP{" "}
						<span>
							<DiCodeigniter className=" w-4 " />
						</span>
					</h1>

					<div className="">
						<ul className="flex  space-x-7">
							<li
								onClick={() => scrollToSection("home")}
								className=" text-gray-400  tracking-wide select-none hover:text-yellow-400  font-medium   hover:border-b transition-transform  duration-500  hover:border-b-yellow-400  active:text-yellow-500   ">
								Home
							</li>
							<li
								onClick={() => scrollToSection("about")}
								className=" text-gray-400  tracking-wide select-none hover:text-yellow-400  font-medium   hover:border-b  transition-transform  duration-500  hover:border-b-yellow-400  active:text-yellow-500   ">
								About
							</li>
							<li
								onClick={() => scrollToSection("service")}
								className=" text-gray-400  tracking-wide select-none hover:text-yellow-400  font-medium   hover:border-b  transition-transform  duration-500  hover:border-b-yellow-400  active:text-yellow-500   ">
								Service
							</li>
							<li
								onClick={() => scrollToSection("project")}
								className=" text-gray-400  tracking-wide select-none hover:text-yellow-400  font-medium   hover:border-b transition-transform  duration-500  hover:border-b-yellow-400  active:text-yellow-500   ">
								Project
							</li>
							<li
								onClick={() => scrollToSection("contact")}
								className=" text-gray-400  tracking-wide select-none hover:text-yellow-400  font-medium   hover:hover:border-b  transition-transform  duration-500  hover:border-b-yellow-400  active:text-yellow-500   ">
								<NavLink to="/">Contact</NavLink>
							</li>
						</ul>
					</div>
				</div>

				<HomePage />

				<AboutPage />

				<ServicePage />
				<SkillPage />

				<ProjectPage />

				<ClientComponent />

				<ContactPage />
			</div>
			<BottomComponent />
		</div>
	);
};

export default NavComponent;
