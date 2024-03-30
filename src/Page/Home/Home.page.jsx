/** @format */

import React from "react";
import { WebLottie } from "../../Components";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const HomePage = () => {
	const downloadCV = () => {
		// Replace 'your_cv.pdf' with the path to your CV file
		const url = "../../../public/Phyo Thura.png";
		const link = document.createElement("a");
		link.href = url;
		link.setAttribute("download", "Phyo Thura.png"); // Change the filename as necessary
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
	return (
		<div
			id="home"
			className="w flex  justify-between align-middle items-center ContainerResponsive ">
			<div className=" animate__animated animate__slideInLeft duration-1000 w-[50%] ">
				<h1 className="text-yellow-400 text-2xl header font-bold tracking-widest">
					Hello ! I'm <span className="text-gray-300 font-bold">KP</span>
				</h1>

				<h1 className="text-yellow-400 my-2 text-2xl header font-bold tracking-widest">
					Junior Web Frontend-Developer
				</h1>

				<p className=" mt-5 text-md w-[80%] text-gray-300 font-medium tracking-wide leading-8">
					To Be a Web Developer is so amazing career . I can help everyone build
					their business. it such happiness for me.So let me to help you !
				</p>

				<div className="flex mt-9 items-center gap-4 ">
					<button className="  cardFont font-bold  bg-[#ffcc23]   rounded-lg px-7 active:scale-95 hover:bg-yellow-300 duration-500 py-2">
						Hire Me
					</button>

					<button
						onClick={downloadCV}
						className=" cardFont font-medium  border border-[#ffcc23]  text-yellow-400   rounded-lg px-5 active:scale-95 hover:bg-[#ffcc23] hover:text-black  transition-transform  duration-500 py-2">
						Download CV
					</button>
				</div>

				<div className="flex gap-5  mt-7">
					<FaFacebookF className="bg-yellow-400  rounded-full h-8 p-1 w-8   active:scale-95  " />
					<AiFillInstagram className="bg-yellow-400  rounded-full h-8 p-1 w-8   active:scale-95  " />
					<FaLinkedinIn className="bg-yellow-400  rounded-full h-8 p-1 w-8   active:scale-95  " />
					<FaGithub className="bg-yellow-400  rounded-full h-8 p-1 w-8   active:scale-95  " />
				</div>
			</div>

			<div className="w-[50%] animate__animated animate__slideInRight duration-1000">
				<WebLottie />
			</div>
		</div>
	);
};

export default HomePage;
