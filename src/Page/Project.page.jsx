/** @format */

import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination } from "swiper/modules";
import "../../node_modules/swiper/swiper-bundle.min.css";
import { motion } from "framer-motion";

const ProjectPage = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [hover, setHovered] = useState(false);
	const [showAnimation, setShowAnimation] = useState(false);

	const [toggleHover, setToggleHover] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const serviceComponent = document.getElementById("project");
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
		<div className="flex flex-col gap-10 justify-center ContainerResponsive">
			<div className="flex justify-between items-center ">
				<h1 className="text-2xl tracking-wide text-yellow-400 header">
					My Projects
				</h1>

				<p className="text-gray-400 text-md  tracking-wide border-b border-b-gray-400 ">
					See All
				</p>
			</div>
			<Swiper
				id="project"
				className={`w-full flex ${
					showAnimation &&
					"  animate__animated  animate__slideInRight  duration-1000 "
				}   h-[450px] flex-row mySwiper items-center  `}
				slidesPerView={3}
				spaceBetween={30}
				keyboard={{
					enabled: true,
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Keyboard, Pagination]}>
				<SwiperSlide className="  h-[455px]  w-[35%] ">
					<motion.div
						whileHover={{
							opacity: 0.7,
							scale: 1.04,

							boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
						}}
						className=" rounded-lg shadow-md shadow-gray-950 bg-[#23053a]  "
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}>
						<img
							className="   object-center  w-full  h-[55%]   rounded-2xl rounded-b-sm shadow-md shadow-[#2d183f]     opacity-95  "
							src="https://i.ibb.co/Dzs65wn/sneaker-project.png"
							alt=""
						/>

						<h1 className=" text-yellow-400 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
							Sneaker Nikee
						</h1>

						<p className="h-20 text-gray-400 my-4 px-2  mx-auto tracking-wider cardFont text-center">
							Sneaker shopping cart website wtih colorful responsive design .
						</p>

						<button className="     textgray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
							<a href="https://kp-nikeyy.netlify.app/">View Project</a>
						</button>
					</motion.div>
				</SwiperSlide>

				<SwiperSlide className=" h-[455px]  w-[35%] ">
					<motion.div
						whileHover={{
							opacity: 0.7,
							scale: 1.04,
							boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
						}}
						className="  m-auto rounded-lg shadow-gray-950   shadow-md bg-[#23053a]  "
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}>
						<img
							className="    object-cover  w-full  h-[55%]   rounded-2xl rounded-b-sm shadow-md shadow-[#2d183f]     opacity-95  "
							src="https://i.ibb.co/Kw0fHfX/Shopping-Cart.png"
							alt=""
						/>

						<h1 className=" text-yellow-400 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
							KOP Solutions
						</h1>

						<p className=" h-20 text-gray-400 my-4 px-2  mx-auto tracking-wider cardFont text-center">
							That it's my student react shopping cart project with fetching
							data api from fakestore api .
						</p>

						<button className="  textgray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
							<a href="https://main--kop-shoppingcart.netlify.app/">
								View Project
							</a>
						</button>
					</motion.div>
				</SwiperSlide>

				<SwiperSlide className=" h-[455px] w-[35%] ">
					<motion.div
						whileInView={{ opacity: 1 }}
						initial={false}
						whileHover={{
							opacity: 0.7,
							scale: 1.04,
							boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
						}}
						onMouseEnter={() => setToggleHover(true)}
						onMouseLeave={() => setToggleHover(false)}
						className=" shadow-gray-950 rounded-lg shadow-md bg-[#23053a]  ">
						<img
							className="   object-cover  w-full  h-[55%]   rounded-2xl rounded-b-sm shadow-md shadow-[#2d183f]     opacity-95  "
							src="https://i.ibb.co/vxHwcxb/Invoice-app.png"
							alt=""
						/>

						<h1 className=" text-yellow-400 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
							Invoice App
						</h1>

						<p className="h-20 text-gray-400 my-4 px-2  mx-auto tracking-wider cardFont text-center">
							You can create, update,delete,manage and print products in this
							app . and also calulate product price.
						</p>

						<button className="   textgray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
							<a href="https://kop-inoviceapp.netlify.app/">View Project</a>
						</button>
					</motion.div>
				</SwiperSlide>

				<SwiperSlide className=" h-[455px] w-[35%] ">
					<motion.div
						whileInView={{ opacity: 1 }}
						initial={false}
						whileHover={{
							opacity: 0.7,
							scale: 1.04,
							boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
						}}
						onMouseEnter={() => setToggleHover(true)}
						onMouseLeave={() => setToggleHover(false)}
						className=" shadow-gray-950 rounded-lg shadow-md bg-[#23053a]  ">
						<img
							className="    h-[145px]   object-center     w-full rounded-2xl rounded-b-sm shadow-md shadow-[#2d183f]     opacity-95  "
							src="https://i.ibb.co/DkZLLsS/Japanese-Meal.png"
							alt=""
						/>

						<h1 className=" text-yellow-400 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
							Japanese Meal
						</h1>

						<p className="h-20 text-gray-400 my-4 px-2  mx-auto tracking-wider cardFont text-center">
							You can find and Investigate about japanese meals and also learn
							cooking recipe japanese style in this website .
						</p>

						<button className="   textgray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
							<a href="https://kop-japanese-meals.netlify.app/">View Project</a>
						</button>
					</motion.div>
				</SwiperSlide>

				<SwiperSlide className="  h-[455px]  w-[35%] ">
					<motion.div
						whileHover={{
							opacity: 0.7,
							scale: 1.04,

							boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
						}}
						className=" rounded-lg shadow-md shadow-gray-950 bg-[#23053a]  "
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}>
						<img
							className="     object-center  w-full  h-[145px]   rounded-2xl rounded-b-sm shadow-md shadow-[#2d183f]     opacity-95   "
							src="https://i.ibb.co/PZMHdSz/desktop-design.jpg"
							alt=""
						/>

						<h1 className=" text-yellow-400 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
							Sneaker Nikee
						</h1>

						<p className="h-20 text-gray-400 my-4 px-2  mx-auto tracking-wider cardFont text-center">
							Sneaker shopping cart website wtih colorful responsive design .
						</p>

						<button className="     textgray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
							<a href="https://markyk2.netlify.app/">View Project</a>
						</button>
					</motion.div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default ProjectPage;
