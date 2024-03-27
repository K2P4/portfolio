/** @format */

import React from "react";
import { LuDot } from "react-icons/lu";

const ServicePage = () => {
	return (
		<div>
			<div className="ContainerResponsive flex  flex-col justify-center  ">
				<h1 className="mx-auto  my-10 header tracking-wider text-2xl text-gray-300 gap-2 flex justify-center w-full">
					My <span className="text-yellow-400">Services</span>
				</h1>

				<div className="flex  gap-7">
					<div className="w-[30%] shadow  bg-[#280147] hover:bg-[#29004b]  px-1 cardFont  py-4  h-[385px] rounded-lg border-gray-500 ">
						<img
							className=" w-[100px]  object-cover mx-auto"
							src="https://cdn-icons-png.flaticon.com/128/1197/1197511.png"
							alt=""
						/>

						<h1 className="text-xl  h-14 mx-auto text-center mt-3 text-yellow-400 tracking-wide header font-semibold">
							Interactive frontend development{" "}
						</h1>

						<div className="  flex flex-col  text-justify     gap-2  items-start   mt-4 ">
							<div className="flex  items-center">
								<LuDot className="text-3xl   text-yellow-400" />
								<p className=" text-md tracking-wide font-medium text-gray-400">
									Creation of responsive websites.
								</p>
							</div>

							<div className="flex   items-center">
								<LuDot className="text-3xl   text-yellow-400" />
								<p className=" text-md tracking-wide font-medium text-gray-400">
									HTML, CSS , Javascript & React .
								</p>
							</div>

							<div className="flex  items-start ">
								<LuDot className="text-4xl   text-yellow-400" />
								<p className=" text-md  font-medium text-gray-400">
									Website Performance & accessibility optimization .
								</p>
							</div>

							<div className="flex  items-center">
								<LuDot className="text-3xl   text-yellow-400" />
								<p className=" text-md tracking-wide font-medium text-gray-400">
									Other Service & Activities
								</p>
							</div>
						</div>
					</div>
					<div className="w-[30%] shadow  bg-[#29004b] hover:bg-[#280147]  px-1 cardFont  py-4  h-[385px] rounded-lg border-gray-500 ">
						<img
							className=" w-[100px]  object-cover mx-auto"
							src="https://cdn-icons-png.flaticon.com/128/8606/8606660.png"
							alt=""
						/>

						<h1 className="text-xl   h-14 mx-auto tracking-wider  text-center mt-3 text-yellow-400  header font-semibold">
							Maintenance & techinical support
						</h1>

						<div className="  flex flex-col  text-justify    gap-2  items-start   mt-4 ">
							<div className="flex  items-center">
								<LuDot className="text-3xl   text-yellow-400" />
								<p className=" text-md tracking-wide font-medium text-gray-400">
									Regular website updates .
								</p>
							</div>

							<div className="flex  items-center">
								<LuDot className="text-3xl   text-yellow-400" />
								<p className=" text-md tracking-wide font-medium text-gray-400">
									Website performance tracking .
								</p>
							</div>

							<div className="flex  items-start ">
								<LuDot className="text-3xl  tracking-wide   text-yellow-400" />
								<p className=" text-md  font-medium text-gray-400">
									24 / 7 support .
								</p>
							</div>

							<div className="flex  ">
								<LuDot className="text-4xl   text-yellow-400" />
								<p className=" text-md  tracking-wide font-medium text-gray-400">
									Technical issue resolution & bug fixing .
								</p>
							</div>
						</div>
					</div>

					<div className="w-[30%] shadow  bg-[#29004b] hover:bg-[#280147]  px-1 cardFont  py-4  h-[385px] rounded-lg border-gray-500 ">
						<img
							className=" w-[100px]  object-cover mx-auto"
							src="https://cdn-icons-png.flaticon.com/128/4834/4834806.png"
							alt=""
						/>

						<h1 className="text-xl mx-auto  h-14 text-center mt-3 text-yellow-400 tracking-wide header font-semibold">
							Creative Graphic Design
						</h1>

						<div className="  flex flex-col  text-justify    gap-2  items-start   mt-4 ">
							<div className="flex  items-center">
								<LuDot className="text-3xl   text-yellow-400" />
								<p className=" text-md tracking-wide font-medium text-gray-400">
									Visual identity & Logo .
								</p>
							</div>

							<div className="flex  items-center">
								<LuDot className="text-3xl   text-yellow-400" />
								<p className=" text-md tracking-wide font-medium text-gray-400">
									Printed materials design .
								</p>
							</div>

							<div className="flex  items-center">
								<LuDot className="text-3xl   text-yellow-400" />
								<p className=" text-md tracking-wide font-medium text-gray-400">
									UI/UX Interface design .
								</p>
							</div>

							<div className="flex  items-center">
								<LuDot className="text-3xl   text-yellow-400" />
								<p className=" text-md tracking-wide font-medium text-gray-400">
									Creation of efficient UI workflows .
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicePage;

// <li className="flex font-medium items-center   text-md tracking-wide text-gray-400">
// 								<LuDot className=" text-5xl text-yellow-400 " />
// 								Creation of responsive websites.
// 							</li>
// 							<li className="flex font-medium items-center  text-md text-gray-400">
// 								<LuDot className=" text-5xl text-yellow-400 " />
// 								HTML, CSS , Javascript & React .
// 							</li>
// 							<li className="flex items-center  text-md text-gray-400">
// 								<LuDot className=" text-5xl text-yellow-400 " />
// 								Website Performance & accessibility optimization .
// 							</li>
