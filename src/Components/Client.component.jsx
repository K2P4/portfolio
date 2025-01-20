/** @format */

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";

const ClientComponent = () => {
	const [showAnimation, setShowAnimation] = useState(false);

	const stars = [1, 2, 3, 4, 5];

	useEffect(() => {
		const handleScroll = () => {
			const serviceComponent = document.getElementById("client");
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
		<div className=" ContainerResponsive flex flex-col sm:mt-0  mt-24  gap-10 justify-center sm:gap-16  ">
			<h1 className=" text-yellow-400 mt-10  text-2xl header font-bold tracking-wide ">
				Client & Reviews
			</h1>

			<div
				id="client"
				className={`flex flex-col sm:flex-row items-center ${
					showAnimation &&
					"  animate__animated  transition-opacity   animate__slideInLeft duration-1000 "
				} justify-center  gap-5  sm:gap-4`}>
				<motion.div
					whileInView={{ opacity: 1 }}
					initial={false}
					whileHover={{
						opacity: 0.7,
						scale: 0.9,
						boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
					}}
					className="sm:h-[400px] h-[300px] py-3 px-3 shadow-gray-950 rounded-lg w-full sm:w-[30%] shadow-md bg-[#23053a]  ">
					<img
	p					className="   object-cover ring-2 ring-purple-950    text-center mx-auto    h-20 w-20 sm:h-24 sm:w-24 rounded-full     shadow-md shadow-[#2d183f]     opacity-95  "
						src="https://i.ibb.co/7pnY8Cb/min-thu-khant.jpg"
						alt=""
					/>
					<h1 className=" text-gray-300 text-md  my-2 header tracking-wider  font-semibold mx-auto text-center sm:text-xl mt-3">
						Min Thu Khant
					</h1>

					<div className="flex sm:gap-3  gap-2 items-center  justify-center">
						{stars.map((item) => (
							<FaStar
								className="text-yellow-500  shadow-lg   h-4 w-4 sm:h-7 sm:w-7"
								key={item.length}
							/>
						))}
					</div>

					<p className="h-20 text-justify text-xs sm:text-base  text-gray-400 leading-6  sm:my-4 sm:px-2  mx-auto tracking-wide cardFont ">
						Their attention to detail, creativity, and responsiveness made the
						entire process seamless and enjoyable. I highly recommend their
						services to anyone looking for a professional and stunning website.
					</p>
				</motion.div>
				<motion.div
					whileInView={{ opacity: 1 }}
					initial={false}
					whileHover={{
						opacity: 0.7,
						scale: 0.9,
						boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
					}}
					className=" sm:h-[470px]  h-[350px] py-3 px-3 shadow-gray-950 rounded-lg w-full sm:w-[30%] shadow-md bg-[#23053a]   ">
					<img
						className="   object-cover ring-2 ring-purple-950    text-center mx-auto    h-20 w-20 sm:h-24 sm:w-24 rounded-full     shadow-md shadow-[#2d183f]     opacity-95  "
						src="https://i.ibb.co/WWFHfFn/Aye.jpg"
						alt=""
					/>

					<h1 className=" text-gray-300 text-md  my-2 header tracking-wider  font-semibold mx-auto text-center sm:text-xl mt-3">
						Aye Yadanar Kyaw
					</h1>

					<div className="flex sm:gap-3  gap-2 items-center  justify-center">
						{stars.map((item) => (
							<FaStar
								className="text-yellow-500  shadow-lg   h-4 w-4 sm:h-7 sm:w-7"
								key={item.length}
							/>
						))}
					</div>

					<p className="h-20  sm:text-justify text-xs sm:text-base  text-gray-400 leading-6  sm:my-4 sm:px-2  mx-auto tracking-wide cardFont ">
						Working with KP was an absolute delight! He is not only brought our
						vision to life but also added their own creative flair, resulting in
						a website that exceeded our expectations. Their professionalism,
						attention to detail, and timely delivery make them our go-to choice
						for all future projects. Highly recommended!
					</p>
				</motion.div>

				<motion.div
					whileInView={{ opacity: 1 }}
					initial={false}
					whileHover={{
						opacity: 0.7,
						scale: 0.9,
						boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
					}}
					className="sm:h-[400px]  h-[280px] py-3 px-3 shadow-gray-950 rounded-lg w-full sm:w-[30%] shadow-md bg-[#23053a]  ">
					<img
						className="   object-cover ring-2 ring-purple-950    text-center mx-auto    h-20 w-20 sm:h-24 sm:w-24 rounded-full     shadow-md shadow-[#2d183f]     opacity-95  "
						src="https://i.ibb.co/S79zrVy/Khin-Moh.jpg"
						alt=""
					/>

					<h1 className=" text-gray-300 text-md  my-2 header tracking-wider  font-semibold mx-auto text-center sm:text-xl mt-3">
						Khin Moh Moh San
					</h1>

					<div className="flex gap-2 sm:gap-3 items-center  justify-center">
						{stars.map((item) => (
							<FaStar
								className="text-yellow-500  shadow-lg   h-4 w-4 sm:h-7 sm:w-7"
								key={item.length}
							/>
						))}
					</div>

					<p className="h-20 text-justify text-xs sm:text-base my-2  text-gray-400 leading-6  sm:my-4 sm:px-2  mx-auto tracking-wide cardFont ">
						Thanks to his hard work and dedication, our online presence has
						never looked better. Hs is very good at coding & web design . Highly
						recommend his services!
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default ClientComponent;
