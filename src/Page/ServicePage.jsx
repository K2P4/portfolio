/** @format */

import React, { useEffect, useState } from "react";
import { LuDot } from "react-icons/lu";
import "../../node_modules/animate.css/animate.min.css";
import { motion } from "framer-motion";

const ServicePage = () => {
	const [showAnimation, setShowAnimation] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [hover, setHovered] = useState(false);
	const [toggleHover, setToggleHover] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const serviceComponent = document.getElementById("service");
			if (serviceComponent) {
				const serviceComponentOffset = serviceComponent.offsetTop;
				const scrollPosition = window.scrollY + window.innerHeight;

				if (scrollPosition >= serviceComponentOffset) {
					setShowAnimation(true);
				} else {
					setShowAnimation(false);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div>
			<div
				className={`ContainerResponsive      mt-72  sm:mt-0   flex  flex-col justify-center`}>
				<h1
					className={`mx-auto  my-5 sm:my-10 header tracking-wider text-xl sm:text-2xl text-gray-300 ${
						showAnimation &&
						"  animate__animated  animate__fadeInLeftBig  duration-1000 "
					} gap-2 flex justify-center w-full`}>
					My <span className="text-yellow-400">Services</span>
				</h1>

				<div
					id="service"
					className={`flex flex-col sm:flex-row gap-2 sm:gap-3 ${
						showAnimation &&
						"  animate__animated transition-transform  animate__slideInLeft   duration-1000 "
					}`}>
					<motion.div
						whileInView={{ opacity: 1 }}
						initial={false}
						whileHover={{
							opacity: 0.7,
							scale: 1.04,
							boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
						}}
						className="sm:w-[32%]  w-full  duration-300  shadow  bg-[#210538]  hover:bg-[#23053b]  px-1 cardFont  py-4 h-[345px]  sm:h-[385px] rounded-lg border-gray-500 "
						onMouseEnter={() => setToggleHover(true)}
						onMouseLeave={() => setToggleHover(false)}>
						<img
							className=" sm:w-[100px] w-[80px]  object-cover mx-auto"
							src="https://cdn-icons-png.flaticon.com/128/1197/1197511.png"
							alt=""
						/>

						<h1 className="sm:text-xl text-lg  h-14 mx-auto text-center mt-3 text-yellow-400 tracking-wide header font-semibold">
							Interactive frontend development{" "}
						</h1>

						<div className="  flex flex-col  text-justify     gap-2  items-start   mt-4 ">
							<div className="flex  items-center">
								<LuDot className="text-3xl   text-yellow-400" />
								<p className=" text-nowrap text-sm sm:text-md tracking-wide font-medium  text-gray-300 ">
									Creation of responsive websites.
								</p>
							</div>

							<div className="flex   items-center">
								<LuDot className="text-3xl   text-yellow-400" />
								<p className="text-sm text-nowrap  tracking-wide font-medium  text-gray-300 ">
									HTML, CSS , Javascript & React .
								</p>
							</div>

							<div className="flex  items-start ">
								<LuDot className="text-3xl   text-yellow-400" />
								<p className="text-nowrap text-sm sm:text-sm md:text-md  font-medium  text-gray-300 ">
									Website Performance & accessibility optimization .
								</p>
							</div>

							<div className="flex  items-center">
								<LuDot className="text-3xl   text-yellow-400" />
								<p className="text-sm sm:text-sm md:text-md text-norwrap tracking-wide font-medium  text-gray-300 ">
									Other Service & Activities
								</p>
							</div>
						</div>
					</motion.div>
					<motion.div
						whileInView={{ opacity: 1 }}
						initial={false}
						whileHover={{
							opacity: 0.7,
							scale: 1.04,
							boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
						}}
						className="sm:w-[32%] w-full   duration-300  shadow  bg-[#210538]  hover:bg-[#23053b]  px-1 cardFont  py-4  h-[345px]  sm:h-[385px] rounded-lg border-gray-500 "
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}>
						<img
							className=" w-[80px] sm:w-[100px]  object-cover mx-auto"
							src="https://cdn-icons-png.flaticon.com/128/8606/8606660.png"
							alt=""
						/>

						<h1 className="sm:text-xl text-lg   h-14 mx-auto tracking-wider  text-center mt-3 text-yellow-400  header font-semibold">
							Maintenance & techinical support
						</h1>

						<div className="  flex flex-col  text-justify    gap-2  items-start   mt-4 ">
							<div className="flex  items-center">
								<LuDot className="text-3xl   text-yellow-400" />
								<p className="text-sm sm:text-sm md:text-md text-norwrap tracking-wide font-medium  text-gray-300 ">
									Regular website updates .
								</p>
							</div>

							<div className="flex  items-center">
								<LuDot className="text-3xl   text-yellow-400" />
								<p className="text-sm sm:text-sm md:text-md text-norwrap tracking-wide font-medium  text-gray-300 ">
									Website performance tracking .
								</p>
							</div>

							<div className="flex  items-start ">
								<LuDot className="text-3xl  tracking-wide   text-yellow-400" />
								<p className="text-sm sm:text-sm md:text-md text-norwrap font-medium  text-gray-300 ">
									24 / 7 support .
								</p>
							</div>

							<div className="flex  items-center ">
								<LuDot className="sm:text-3xl  text-3xl text-yellow-400" />
								<p className="text-sm sm:text-sm md:text-md text-norwrap tracking-wide font-medium  text-gray-300 ">
									Technical issue resolution & bug fixing.
								</p>
							</div>
						</div>
					</motion.div>

					<motion.div
						whileInView={{ opacity: 1 }}
						initial={false}
						whileHover={{
							opacity: 0.7,
							scale: 1.04,
							boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
						}}
						className="sm:w-[32%] w-full  duration-300  shadow  bg-[#210538]  hover:bg-[#23053b]  px-1 cardFont  py-4  h-[345px]  sm:h-[385px] rounded-lg border-gray-500 "
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}>
						<img
							className=" sm:w-[100px]  w-[80px] object-cover mx-auto"
							src="https://cdn-icons-png.flaticon.com/128/4834/4834806.png"
							alt=""
						/>

						<h1 className="sm:text-xl text-lg  mx-auto  h-14 text-center mt-3 text-yellow-400 tracking-wide header font-semibold">
							Creative Graphic Design
						</h1>

						<div className="  flex flex-col  text-justify    gap-2  items-start   mt-4 ">
							<div className="flex  items-center">
								<LuDot className="text-3xl   text-yellow-400" />
								<p className="text-sm sm:text-sm md:text-md text-norwraptracking-wide font-medium  text-gray-300 ">
									Visual identity & Logo .
								</p>
							</div>

							<div className="flex  items-center">
								<LuDot className="text-3xl   text-yellow-400" />
								<p className=" text-sm sm:text-sm md:text-md text-norwraptracking-wide font-medium  text-gray-300 ">
									Printed materials design .
								</p>
							</div>

							<div className="flex  items-center">
								<LuDot className="text-3xl   text-yellow-400" />
								<p className="text-sm sm:text-sm md:text-md text-norwraptracking-wide font-medium  text-gray-300 ">
									UI/UX Interface design .
								</p>
							</div>

							<div className="flex  items-center">
								<LuDot className="text-3xl   text-yellow-400" />
								<p className="text-sm sm:text-sm md:text-md text-norwrap tracking-wide font-medium  text-gray-300 ">
									Creation of efficient UI workflows .
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default ServicePage;
