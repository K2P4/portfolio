/** @format */

import * as React from "react";
import { Card, CardContent } from "../Components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../Components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const SkillPage = () => {
	return (
		<div className="ContainerResponsive select-none gap-14 sm:gap-0 flex flex-col justify-center   ">
			<h1 className="text-yellow-400     sm:ms-10 sm:mb-10   mt-60 sm:mt-0  text-2xl  sm:text-3xl header border-b-2 sm:w-[13%] border-b-yellow-400 pb-1">
				Skill-Set
			</h1>

			<Carousel
				plugins={[
					Autoplay({
						delay: 2000,
					}),
				]}
				className="  mt-10 sm:mt-16 flex  justify-center mx-auto  w-full  items-center ">
				<CarouselContent className="    flex    items-center    gap-20 mx-auto  sm:gap-16 w-[90%] sm:w-[20%] ">
					<CarouselItem className="  sm:ms-10 shadow-[#2c173b] hover:rotate-2 hover:opacity-75 hover:transition-transform duration-1000 w-full h-full sm:w-[50%]  hover:bg-[#1d0531] flex flex-col items-center gap-3  shadow-lg rounded-lg  px-3 py-4 sm:h-[200px]  ">
						<img
							className="mx-auto text-center sm:h-32   object-cover   sm:w-32 "
							src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
							alt=""
						/>

						<h1 className="text-xl mx-auto font-semibold   font-mono tracking-wide text-yellow-400 text-center">
							HTML5
						</h1>
					</CarouselItem>
					<CarouselItem className="  mx-auto sm:ms-10 shadow-[#2c173b] hover:rotate-2 hover:opacity-75 hover:transition-transform duration-1000 w-full h-full sm:w-[50%]  hover:bg-[#1d0531] flex flex-col items-center gap-3  shadow-lg rounded-lg  px-3 py-4 sm:h-[200px]   ">
						<img
							className="mx-auto text-center sm:h-32   object-cover   sm:w-32 "
							src="https://cdn-icons-png.flaticon.com/128/732/732190.png"
							alt=""
						/>

						<h1 className="text-xl mx-auto font-semibold   font-mono tracking-wide text-yellow-400 text-center">
							CSS
						</h1>
					</CarouselItem>{" "}
					<CarouselItem className="  shadow-[#2c173b] hover:rotate-2 hover:opacity-75 hover:transition-transform duration-1000 w-[50%]  hover:bg-[#1d0531] flex flex-col items-center gap-3  shadow-lg rounded-lg  px-3 py-4  h-[200px]  ">
						<img
							className="mx-auto text-center h-32  object-cover   w-32 "
							src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
							alt=""
						/>

						<h1 className="text-xl mx-auto font-semibold   font-mono tracking-wide text-yellow-400 text-center">
							JAVASCRIPT
						</h1>
					</CarouselItem>
					<CarouselItem className="  shadow-[#2c173b] hover:rotate-2 hover:opacity-75 hover:transition-transform duration-1000 w-[50%]  hover:bg-[#1d0531] flex flex-col items-center gap-3  shadow-lg rounded-lg  px-3 py-4  h-[200px]  ">
						<img
							className="mx-auto text-center h-32  object-cover   w-32 "
							src="https://cdn-icons-png.flaticon.com/128/1126/1126012.png"
							alt=""
						/>

						<h1 className="text-xl mx-auto font-semibold   font-mono tracking-wide text-yellow-400 text-center">
							REACT
						</h1>
					</CarouselItem>
					<CarouselItem className="  shadow-[#2c173b] hover:rotate-2 hover:opacity-75 hover:transition-transform duration-1000 w-[50%]  hover:bg-[#1d0531] flex flex-col items-center gap-3  shadow-lg rounded-lg  px-3 py-4  h-[200px]  ">
						<img
							className="mx-auto text-center h-32  object-cover   w-32 "
							src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png"
							alt=""
						/>

						<h1 className="text-xl mx-auto font-semibold   font-mono tracking-wide text-yellow-400 text-center">
							BOOTSTRAP
						</h1>
					</CarouselItem>
					<CarouselItem className="  shadow-[#2c173b] hover:rotate-2 hover:opacity-75 hover:transition-transform duration-1000 w-[50%]  hover:bg-[#1d0531] flex flex-col items-center gap-3  shadow-lg rounded-lg  px-3 py-4  h-[200px]  ">
						<img
							className="mx-auto text-center h-32  object-cover   w-42 "
							src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-512x307-1v56l8ed.png"
							alt=""
						/>

						<h1 className="text-xl mx-auto font-semibold   font-mono tracking-wide text-yellow-400 text-center">
							TAILWINDCSS
						</h1>
					</CarouselItem>
					<CarouselItem className="  shadow-[#2c173b] hover:rotate-2 hover:opacity-75 hover:transition-transform duration-1000 w-[50%]  hover:bg-[#1d0531] flex flex-col items-center gap-3  shadow-lg rounded-lg  px-3 py-4  h-[200px]  ">
						<img
							className="mx-auto text-center h-32  object-cover   w-32 "
							src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
							alt=""
						/>

						<h1 className="text-xl mx-auto font-semibold   font-mono tracking-wide text-yellow-400 text-center">
							GIT HUB
						</h1>
					</CarouselItem>
					<CarouselItem className="  shadow-[#2c173b] hover:rotate-2 hover:opacity-75 hover:transition-transform duration-1000 w-[50%]  hover:bg-[#1d0531] flex flex-col items-center gap-3  shadow-lg rounded-lg  px-3 py-4  h-[200px]  ">
						<img
							className="mx-auto text-center h-32  object-cover   w-32 "
							src="https://cdn-icons-png.flaticon.com/128/3094/3094456.png"
							alt=""
						/>

						<h1 className="text-xl mx-auto font-semibold   font-mono tracking-wide text-yellow-400 text-center">
							API
						</h1>
					</CarouselItem>
					<CarouselItem className="  shadow-[#2c173b] hover:rotate-2 hover:opacity-75 hover:transition-transform duration-1000 w-[50%]  hover:bg-[#1d0531] flex flex-col items-center gap-3  shadow-lg rounded-lg  px-3 py-4  h-[200px]  ">
						<img
							className="mx-auto text-center h-32  object-cover   w-32 "
							src="https://cdn-icons-png.flaticon.com/128/5968/5968705.png"
							alt=""
						/>

						<h1 className="text-xl mx-auto font-semibold   font-mono tracking-wide text-yellow-400 text-center">
							FIGMA
						</h1>
					</CarouselItem>
					<CarouselItem className="  shadow-[#2c173b] hover:rotate-2 hover:opacity-75 hover:transition-transform duration-1000 w-[50%]  hover:bg-[#1d0531] flex flex-col items-center gap-3  shadow-lg rounded-lg  px-3 py-4  h-[200px]  ">
						<img
							className="mx-auto text-center h-32  object-cover   w-32 "
							src="https://cdn-icons-png.flaticon.com/128/5968/5968332.png"
							alt=""
						/>

						<h1 className="text-xl mx-auto font-semibold   font-mono tracking-wide text-yellow-400 text-center">
							PHP
						</h1>
					</CarouselItem>

					<CarouselItem className="  shadow-[#2c173b] hover:rotate-2 hover:opacity-75 hover:transition-transform duration-1000 w-[50%]  hover:bg-[#1d0531] flex flex-col items-center gap-3  shadow-lg rounded-lg  px-3 py-4  h-[200px]  ">
						<img
							className="mx-auto text-center h-32  object-cover   w-32 "
							src="https://icon.icepanel.io/Technology/svg/Laravel.svg"
							alt=""
						/>

						<h1 className="text-xl mx-auto font-semibold   font-mono tracking-wide text-yellow-400 text-center">
							Laravel
						</h1>
					</CarouselItem>
				</CarouselContent>

				<CarouselPrevious className="sm:flex hidden bg-[#2c173b] duration-300 hover:bg-[#37174e] hover:border-[#37174e] border-[#2c173b]" />
				<CarouselNext className="sm:flex hidden bg-[#2c173b] duration-300 hover:bg-[#37174e] hover:border-[#37174e] border-[#2c173b]" />
			</Carousel>
		</div>
	);
};

export default SkillPage;
