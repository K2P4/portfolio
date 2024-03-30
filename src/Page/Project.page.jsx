/** @format */

import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

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

	const cardAnimation = useSpring({
		transform: isHovered ? "scale(1.05)" : "scale(1)",
	});

	const secondAnimation = useSpring({
		transform: hover ? "scale(1.05)" : "scale(1)",
	});

	const thirdAnimation = useSpring({
		transform: toggleHover ? "scale(1.05)" : "scale(1)",
	});

	return (
		<div className="flex flex-col gap-8 justify-center ContainerResponsive">
			<div className="flex justify-between items-center ">
				<h1 className="text-2xl tracking-wide text-yellow-400 header">
					My Projects
				</h1>

				<p className="text-gray-400 text-md  tracking-wide border-b border-b-gray-400 ">
					See All
				</p>
			</div>
			<div
				id="project"
				className={`w-full flex ${
					showAnimation &&
					"  animate__animated  animate__slideInRight  duration-1000 "
				}  items-center gap-5 `}>
				<animated.div
					style={cardAnimation}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					className="h-[455px] rounded-lg  w-[35%] shadow-md shadow-gray-950 bg-[#23053a]  ">
					<img
						className="   object-center  w-full  h-[55%]   rounded-2xl rounded-b-sm shadow-md shadow-[#2d183f]     opacity-95  "
						src="../../public/sneaker_project.png"
						alt=""
					/>

					<h1 className=" text-yellow-400 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
						Sneaker Nikee
					</h1>

					<p className="h-20 text-gray-400 my-4 px-2  mx-auto tracking-wider cardFont text-center">
						Sneaker shopping cart website wtih colorful responsive design .
					</p>

					<button className="     textgray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
						View Project
					</button>
				</animated.div>

				<animated.div
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
					style={secondAnimation}
					className="h-[455px] rounded-lg shadow-gray-950  w-[35%] shadow-md bg-[#23053a]  ">
					<img
						className="    object-cover  w-full  h-[55%]   rounded-2xl rounded-b-sm shadow-md shadow-[#2d183f]     opacity-95  "
						src="../../public/Shopping Cart.png"
						alt=""
					/>

					<h1 className=" text-yellow-400 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
						KOP Solutions
					</h1>

					<p className=" h-20 text-gray-400 my-4 px-2  mx-auto tracking-wider cardFont text-center">
						That it's my student react shopping cart project with fetching data
						api from fakestore api .
					</p>

					<button className="  textgray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
						View Project
					</button>
				</animated.div>

				<animated.div
					style={thirdAnimation}
					onMouseEnter={() => setToggleHover(true)}
					onMouseLeave={() => setToggleHover(false)}
					className="h-[455px] shadow-gray-950 rounded-lg  w-[35%] shadow-md bg-[#23053a]  ">
					<img
						className="   object-cover  w-full  h-[55%]   rounded-2xl rounded-b-sm shadow-md shadow-[#2d183f]     opacity-95  "
						src="../../public/Invoice app.png"
						alt=""
					/>

					<h1 className=" text-yellow-400 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
						Invoice App
					</h1>

					<p className="h-20 text-gray-400 my-4 px-2  mx-auto tracking-wider cardFont text-center">
						You can create, update,delete,manage and print products in this app
						. and also calulate product price.
					</p>

					<button className="  textgray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
						View Project
					</button>
				</animated.div>
			</div>
		</div>
	);
};

export default ProjectPage;
