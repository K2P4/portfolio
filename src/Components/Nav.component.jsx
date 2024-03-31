/** @format */

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ContactPage, HomePage, ProjectPage, ServicePage } from "../Page";
import AboutPage from "../Page/About.page";
import { useNavigate } from "react-router-dom";
import { DiCodeigniter } from "react-icons/di";
import SkillPage from "../Page/Skill.page";

import ClientComponent from "./Client.component";
import BottomComponent from "./Bottom.component";

const NavComponent = () => {
	const [toggle, settoggle] = useState(false);
	const [isFixed, setIsFixed] = useState(false);
	const nav = useNavigate();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 500) {
				setIsFixed(true);
			} else {
				setIsFixed(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handelCloseMenu = () => {
		nav("/");
		settoggle(!toggle);
	};

	const toggleMenu = () => {
		settoggle(!toggle);
	};

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div className="">
			<div className="sm:w-[80%] w-[85%]  h-full mx-auto ">
				<div
					className={` ${
						isFixed &&
						"fixed top-0 left-0  w-full    px-16   ps-9 sm:ps-32  sm:px-32  mx-auto bg-[#200435]  duration-500     z-10 "
					} flex   py-5 justify-between items-center`}>
					<h1
						onClick={() => nav("/")}
						className="flex  select-none items-center gap-0 sm:gap-1 text-xl text-yellow-400  header font-bold tracking-widest  ">
						KP{" "}
						<span>
							<DiCodeigniter className=" w-4 " />
						</span>
					</h1>

					{/* toggle menu */}
					{toggle && (
						<div className="fixed  duration-700   animate__animated  animate__bounceInLeft  top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform  bg-white w-64 dark:bg-gray-800">
							<h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
								Menu
							</h5>
							<button
								type="button"
								className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
								<svg
									className="w-3 h-3"
									onClick={handelCloseMenu}
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 14">
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
									/>
								</svg>
							</button>
							<div className="py-4 overflow-y-auto">
								<ul className="space-y-2 font-medium">
									<li>
										<a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
											<svg
												className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 22 21">
												<path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
												<path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
											</svg>
											<span className="ms-3">Dashboard</span>
										</a>
									</li>
									<li>
										<a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="currentColor"
												className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
												<path
													fillRule="evenodd"
													d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
													clipRule="evenodd"
												/>
											</svg>

											<span className="flex-1 ms-3 whitespace-nowrap">
												Collections
											</span>
										</a>
									</li>

									<li>
										<a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
											<svg
												className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 20 18">
												<path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
											</svg>
											<span className="flex-1 ms-3 whitespace-nowrap">Men</span>
										</a>
									</li>
									<li>
										<a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
											<svg
												className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 20 18">
												<path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
											</svg>
											<span className="flex-1 ms-3 whitespace-nowrap">
												Women
											</span>
										</a>
									</li>

									<li>
										<a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
											<svg
												className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 18 16">
												<path
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
												/>
											</svg>
											<span className="flex-1 ms-3 whitespace-nowrap">
												Sign Out
											</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					)}

					{/* navigation bar for sm */}
					<div className=" hidden sm:flex">
						<ul className="flex   space-x-7">
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

					{/* navigation menu */}
					<div className="flex sm:hidden   text-center">
						<button
							className=" text-xl  flex  text-yellow-500  tracking-wide items-center font-bold "
							type="button"
							data-drawer-target="drawer-navigation"
							data-drawer-show="drawer-navigation"
							aria-controls="drawer-navigation">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								onClick={toggleMenu}
								className="w-7 h-7">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						</button>
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
