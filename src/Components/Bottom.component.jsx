/** @format */

import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";

const BottomComponent = () => {
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
					<li className="text-gray-300  tracking-wide  hover:border-b hover:border-yellow-400 duration-700 hover:text-yellow-400  font-medium ">
						About
					</li>
					<li className="text-gray-300  tracking-wide  hover:border-b hover:border-yellow-400 duration-700 hover:text-yellow-400  font-medium ">
						Reviews
					</li>
					<li className="text-gray-300  tracking-wide  hover:border-b hover:border-yellow-400 duration-700 hover:text-yellow-400  font-medium ">
						Projects
					</li>
					<li className="text-gray-300  tracking-wide  hover:border-b hover:border-yellow-400 duration-700 hover:text-yellow-400  font-medium ">
						Resume
					</li>
					<li className="text-gray-300  tracking-wide  hover:border-b hover:border-yellow-400 duration-700 hover:text-yellow-400  font-medium ">
						Service
					</li>
				</ul>
			</div>
			<div className="flex gap-7 items-center justify-center   mt-4">
				<FaFacebookF className=" bg-gray-300  rounded-full h-8 p-1 w-8   active:scale-95  " />
				<AiFillInstagram className=" bg-gray-300  rounded-full h-8 p-1 w-8   active:scale-95  " />
				<FaLinkedinIn className=" bg-gray-300  rounded-full h-8 p-1 w-8   active:scale-95  " />
				<FaGithub className=" bg-gray-300  rounded-full h-8 p-1 w-8   active:scale-95  " />
			</div>
		</div>
	);
};

export default BottomComponent;
