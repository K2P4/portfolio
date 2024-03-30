/** @format */

import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";

const BottomComponent = () => {
	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div className="w-full h-[50%] py-4  flex flex-col gap-5 justify-center projectBox shadow-xl   shadow-[purple]   opacity-95 ">
			<h1 className="flex items-center  mx-auto gap-1 text-xl text-yellow-400  header font-bold tracking-widest  ">
				KP{" "}
				<span>
					<DiCodeigniter className=" w-4 " />
				</span>
			</h1>

			<div className="">
				<ul className="flex justify-center items-center space-x-9 cardFont">
					<li
						onClick={() => scrollToSection("about")}
						className="text-gray-300 select-none transition-transform  tracking-wide  hover:border-b hover:border-yellow-400 duration-700 hover:text-yellow-400  font-medium ">
						About
					</li>
					<li
						onClick={() => scrollToSection("client")}
						className="text-gray-300 transition-transform tracking-wide  hover:border-b hover:border-yellow-400 duration-700 hover:text-yellow-400  font-medium ">
						Reviews
					</li>
					<li
						onClick={() => scrollToSection("project")}
						className="text-gray-300 transition-transform tracking-wide  hover:border-b hover:border-yellow-400 duration-700 hover:text-yellow-400  font-medium ">
						Projects
					</li>
					<li
						onClick={() => scrollToSection("home")}
						className="text-gray-300 transition-transform tracking-wide  hover:border-b hover:border-yellow-400 duration-700 hover:text-yellow-400  font-medium ">
						Resume
					</li>
					<li
						onClick={() => scrollToSection("service")}
						className="text-gray-300 transition-transform tracking-wide  hover:border-b hover:border-yellow-400 duration-700 hover:text-yellow-400  font-medium ">
						Service
					</li>
				</ul>
			</div>
			<div className="flex gap-7 items-center justify-center   mt-4">
				<a href="https://www.facebook.com/profile.php?id=100077023871140&mibextid=LQQJ4d">
					<FaFacebookF className="bg-gray-300 rounded-full h-8 p-1 w-8   active:scale-95  " />
				</a>
				<a href="https://www.instagram.com/vik83124?igsh=MWdtMmphc3hodjBucg%3D%3D&utm_source=qr">
					<AiFillInstagram className="bg-gray-300 rounded-full h-8 p-1 w-8   active:scale-95  " />
				</a>
				<a
					href="					https://www.linkedin.com/in/phyo-thura-199215278/
">
					<FaLinkedinIn className="bg-gray-300 rounded-full h-8 p-1 w-8   active:scale-95  " />
				</a>
				<a href="https://github.com/K2P4">
					<FaGithub className="bg-gray-300 rounded-full h-8 p-1 w-8   active:scale-95  " />
				</a>
			</div>
		</div>
	);
};

export default BottomComponent;
