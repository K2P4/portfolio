LP/** @format */

import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Keyboard, Autoplay, Pagination } from "swiper/modules";
import "../../node_modules/swiper/swiper-bundle.min.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
	const [isHovered, setIsHovered] = useState(false);
	const nav = useNavigate();
	const [hover, setHovered] = useState(false);
	const [showAnimation, setShowAnimation] = useState(false);

	const [toggleHover, setToggleHover] = useState(false);

	const hanldeProject = (path) => {
		nav(path);
	};

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
		<div className="flex flex-col gap-14  sm:gap-10 justify-center ContainerResponsive">
			<div className="flex justify-between items-center ">
				<h1 className="sm:text-2xl text-xl tracking-wide text-yellow-400 header">
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
				}  h-[360px]  sm:h-[430px] flex-row mySwiper items-center  `}
				spaceBetween={30}
				slidesPerView={1} // Default slidesPerView
				breakpoints={{
					768: {
						slidesPerView: 3, // slidesPerView for screens wider than 768px
					},
				}}
				pagination={{ clickable: true }}
				centeredSlides={true}
				autoplay={{
					delay: 3500,
					disableOnInteraction: false,
				}}
				keyboard={{
					enabled: true,
				}}
				modules={[Keyboard, Autoplay, Pagination]}>

				<SwiperSlide className="  w-full sm:h-[455px]     sm:w-[35%] ">
					<motion.div
						whileHover={{
							opacity: 0.7,
							scale: 1.02,

							boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
						}}
						className=" rounded-lg shadow-md shadow-gray-950 bg-[#23053a]  "
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}>
						<img
							className="   object-center  w-full  h-[55%]   rounded-2xl rounded-b-sm shadow-md shadow-[#2d183f]     opacity-95  "
							src="https://i.ibb.co/fN0ydCg/Screenshot-2024-12-04-190659.png"
							alt=""
						/>

						<h1 className=" text-yellow-400 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
							Zoya Blog
						</h1>

						<p className="h-20 text-sm sm:text-base text-gray-400 my-4 px-2  mx-auto tracking-wider cardFont text-center">
							Zoya blog website is blog content website inspire from react project library.It has more content blogs on this website. 
						</p>

						<button className="  select-pointer    textgray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
							<a target="_blank" href="https://zoya-blog.vercel.app/">
								View Project
							</a>
						</button>
					</motion.div>
				</SwiperSlide>
				<SwiperSlide className="  w-full sm:h-[455px]     sm:w-[35%] ">
					<motion.div
						whileHover={{
							opacity: 0.7,
							scale: 1.02,

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

						<p className="h-20 text-sm sm:text-base text-gray-400 my-4 px-2  mx-auto tracking-wider cardFont text-center">
							Sneaker shopping cart website wtih colorful responsive design .
						</p>

						<button className="  select-pointer    textgray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
							<a  target="_blank" href="https://nikke-chi.vercel.app/">View Project</a>
						</button>
					</motion.div>
				</SwiperSlide>

				<SwiperSlide className=" w-full sm:h-[455px]     sm:w-[35%]">
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

						<p className=" h-20 text-sm sm:text-base text-gray-400 my-4 px-2  mx-auto tracking-wider cardFont text-center">
							That it's my student react shopping cart project with fetching
							data api from fakestore api .
						</p>

						<button className="  select-pointer   textgray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
							<a target="_blank" href="https://main--kop-shoppingcart.netlify.app/">
								View Project
							</a>
						</button>
					</motion.div>
				</SwiperSlide>

				<SwiperSlide className="  w-full sm:h-[455px]     sm:w-[35%]">
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

						<p className="h-20 text-sm sm:text-base text-gray-400 my-4 px-2  mx-auto tracking-wider cardFont text-center">
							You can create, update,delete,manage and print products in this
							app . and also calulate product price.
						</p>

						<button className=" select-pointer   textgray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
							<a target="_blank" href="https://invoice-app-nu-pearl.vercel.app/">
								View Project
							</a>
						</button>
					</motion.div>
				</SwiperSlide>

				<SwiperSlide className=" w-full sm:h-[455px]     sm:w-[35%]">
					<motion.div
						whileHover={{
							opacity: 0.7,
							scale: 1.04,
							boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
						}}
						className="  m-auto rounded-lg  shadow-gray-950   shadow-md bg-[#23053a]  "
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}>
						<img
							className="    object-cover  w-full  h-[54%]   rounded-2xl rounded-b-sm shadow-md shadow-[#2d183f]     opacity-95  "
							src="https://i.ibb.co/DkZLLsS/Japanese-Meal.png"
							alt=""
						/>

						<h1 className=" text-yellow-400 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
							Japanese Meal
						</h1>

						<p className=" h-20 text-xs leading-6 sm:text-base text-gray-400 my-4 px-2  mx-auto tracking-wider cardFont text-center">
							You can find and Investigate about japanese meals and also learn
							cooking recipe japanese style in this website.
						</p>

						<button className=" select-pointer  textgray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
							<a target="_blank" href="https://kop-japanese-meals.netlify.app/">View Project</a>
						</button>
					</motion.div>
				</SwiperSlide>

				<SwiperSlide className=" w-full sm:h-[455px]     sm:w-[35%]">
					<motion.div
						whileHover={{
							opacity: 0.7,
							scale: 1.04,
							boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
						}}
						className="  m-auto rounded-lg  shadow-gray-950   shadow-md bg-[#23053a]  "
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}>
						<img
							className="   object-cover  w-full  h-[54%]   rounded-2xl rounded-b-sm shadow-md shadow-[#2d183f]     opacity-95  "
							src="https://i.ibb.co/02Rt1BG/Screenshot-2024-06-27-195000.png"
							alt=""
						/>

						<h1 className=" text-yellow-400 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
							CONTACT APP
						</h1>

						<p className=" h-20 text-xs leading-6 sm:text-base text-gray-400 my-4 px-2  mx-auto tracking-tight cardFont text-center">
							You can save data contact information and also update delete
							contact data . Before do it, you need to register and sign in
							acount .
						</p>

						<button className="select-pointer   textgray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
							<a target="_blank" href="https://student-project-with-contact-app.vercel.app/">
								View Project
							</a>
						</button>
					</motion.div>
				</SwiperSlide>

				<SwiperSlide className="   w-full sm:h-[455px]     sm:w-[35%] ">
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
							className="   object-cover  w-full  h-[120px] sm:h-[151px] rounded-2xl rounded-b-sm shadow-md shadow-[#2d183f]     opacity-95  "
							src="https://i.ibb.co/PZMHdSz/desktop-design.jpg"
							alt=""
						/>

						<h1 className=" text-yellow-400 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
							W .
						</h1>

						<p className="h-20 text-sm sm:text-base text-gray-400 my-4 px-2  mx-auto tracking-wider cardFont text-center">
							That it's simple project with using html css javascript &
							bootstrap .
						</p>

						<button className="select-pointer      textgray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
							<a target="_blank" href="https://markyk2.netlify.app/">View Project</a>
						</button>
					</motion.div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default ProjectPage;
