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
		<div className=" ContainerResponsive flex flex-col  gap-20 justify-center sm:gap-16  ">
			<h1 className=" text-yellow-400 mt-10  text-2xl header font-bold tracking-wide ">
				Client & Reviews
			</h1>

			<div
				id="client"
				className={`flex items-center ${
					showAnimation &&
					"  animate__animated  transition-opacity   animate__slideInLeft duration-1000 "
				} justify-center   gap-4`}>
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
						className="   object-cover ring-2 ring-purple-950    text-center mx-auto  h-24 w-24 rounded-full     shadow-md shadow-[#2d183f]     opacity-95  "
						src="https://i.ibb.co/7KqJZ62/Phyo.jpg"
						alt=""
					/>
					<h1 className=" text-gray-300  my-2 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
						Phyo Thura
					</h1>

					<div className="flex gap-3 items-center  justify-center">
						{stars.map((item) => (
							<FaStar
								className="text-yellow-500  shadow-lg    h-7 w-7"
								key={item.length}
							/>
						))}
					</div>

					<p className="h-20 text-justify  text-gray-400 leading-6  my-4 px-2  mx-auto tracking-wide cardFont ">
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
					className="h-[440px] py-3 px-3 shadow-gray-950 rounded-lg  w-[32%] shadow-md bg-[#23053a]  ">
					<img
						className="   object-cover  ring-2 ring-purple-950    text-center mx-auto  h-24 w-24 rounded-full     shadow-md shadow-[#2d183f]     opacity-95  "
						src="https://i.ibb.co/WWFHfFn/Aye.jpg"
						alt=""
					/>

					<h1 className=" text-gray-300  my-2 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
						Aye Yadanar Kyaw
					</h1>

					<div className="flex gap-3 items-center  justify-center">
						{stars.map((item) => (
							<FaStar
								className="text-yellow-500  shadow-lg    h-7 w-7"
								key={item.length}
							/>
						))}
					</div>

					<p className="h-20 text-justify  text-gray-400 leading-6  my-4 px-2  mx-auto   tracking-wide transform-cpu cardFont ">
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
					className="h-[400px] py-3 px-3 shadow-gray-950 rounded-lg  w-[30%] shadow-md bg-[#23053a]  ">
					<img
						className="   object-cover ring-2 ring-purple-950    text-center mx-auto  h-24 w-24 rounded-full     shadow-md shadow-[#2d183f]     opacity-95  "
						src="https://i.ibb.co/S79zrVy/Khin-Moh.jpg"
						alt=""
					/>

					<h1 className=" text-gray-300  my-2 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
						Khin Moh Moh San
					</h1>

					<div className="flex gap-3 items-center  justify-center">
						{stars.map((item) => (
							<FaStar
								className="text-yellow-500  shadow-lg    h-7 w-7"
								key={item.length}
							/>
						))}
					</div>

					<p className="h-20 text-justify  text-gray-400 leading-6  my-4 px-2  mx-auto tracking-wide cardFont ">
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
