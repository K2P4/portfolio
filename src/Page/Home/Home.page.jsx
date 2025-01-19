/** @format */

import React, { useEffect, useState } from "react";
import { WebLottie } from "../../Components";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

import { FaGithub } from "react-icons/fa";

const HomePage = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const [index, setIndex] = useState(1);
	const toRotate = ["Web Frontend-Developer", "Web Backend-Developer", "UI/UX Designer"];
	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setIndex((prevIndex) => prevIndex - 1);
			setDelta(period);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setIndex(1);
			setDelta(500);
		} else {
			setIndex((prevIndex) => prevIndex + 1);
		}
	};

	const downloadCV = () => {
		// Replace 'your_cv.pdf' with the path to your CV file
		const url = "https://i.ibb.co/DkCTzph/CV-Web-Developer.png";
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
			className=" flex flex-col  h-screen   sm:h-auto justify-center sm:flex-row  sm:justify-between align-middle items-center sm:ContainerResponsive ">
			<div className="  mb-auto    mt-24  sm:mb-0    sm:mt-0 animate__animated animate__slideInLeft duration-1000 w-full sm:w-[50%] ">
				<h1 className="text-yellow-400  text-3xl sm:text-4xl header font-bold tracking-widest">
					Hello ! I'm <span className="text-gray-300 font-bold">KP</span>
				</h1>

				<h1 className="text-yellow-400 my-1 sm:my-2 text-3xl sm:text-3xl header font-bold tracking-widest">
					<span
						className="txt-rotate"
						dataPeriod="800"
						data-rotate='[ "Web Frontend-Developer", "Web Designer", "UI/UX Designer" ]'>
						<span className="wrap text">Junior {text}</span>
					</span>
				</h1>

				<p className=" mt-6 sm:mt-5 text-md  sm:text-base text-justify sm:text-pretty w-full sm:w-[80%] text-gray-300 font-medium tracking-wide  leading-6 sm:leading-8">
					To Be a Web Developer is so amazing career . I can help everyone build
					their business. it such happiness for me.So let me to help you !
				</p>

				<div className="flex mt-8   sm:justify-normal sm:mt-7 items-center gap-4 ">
					<button className=" text-md sm:text-base   cardFont font-bold  bg-[#ffcc23]   rounded-lg px-7 active:scale-95   hover:bg-yellow-300 duration-500 py-2">
						Hire Me
					</button>

					<button
						onClick={downloadCV}
						className=" text-md  sm:text-base cardFont font-medium  border border-[#ffcc23]  text-yellow-400   px-6 rounded-lg sm:px-5 active:scale-95 hover:bg-[#ffcc23] hover:text-black  transition-transform  duration-500 py-2">
						Download CV
					</button>
				</div>

				<div className="flex gap-6 sm:gap-6   mt-7">
					<a href="https://www.facebook.com/profile.php?id=100077023871140&mibextid=LQQJ4d" target="_blank">
					<FaFacebookF className="bg-yellow-400  rounded-full sm:h-9 sm:w-9  h-10 p-1 w-10   active:scale-95  " />
					</a>


					<a href="https://www.instagram.com/vik83124?igsh=MWdtMmphc3hodjBucg%3D%3D&utm_source=qr" target="_blank">
					<AiFillInstagram className="bg-yellow-400  rounded-full   sm:h-9 sm:w-9 h-10 p-1 w-10   active:scale-95  " />
					</a>

					<a href="https://discord.com/channels/1147540820203941888/1155112504146530334/1155112504146530334r" target="_blank">
					<FaDiscord className="bg-yellow-400  rounded-full  sm:h-9 sm:w-9 h-10 p-1 w-10   active:scale-95  " />
					</a>

					<a href="http://linkedin.com/in/phyothura21" target="_blank">
					<FaLinkedinIn className="bg-yellow-400  rounded-full sm:h-9 sm:w-9  h-10 p-1 w-10   active:scale-95  " />
					</a>

					<a href="https://github.com/K2P4" target="_blank">
					<FaGithub className="bg-yellow-400  rounded-full  sm:h-9 sm:w-9 h-10 p-1 w-10   active:scale-95  " />
					</a>


				</div>
			</div>

			<div className="w-full hidden sm:flex sm:w-[50%] animate__animated animate__slideInRight duration-1000">
				<WebLottie />
			</div>
		</div>
	);
};

export default HomePage;
