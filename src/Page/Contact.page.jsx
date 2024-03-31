/** @format */

import React, { useEffect, useState } from "react";

import { Label } from "../Components/ui/label";
import { Button } from "../Components/ui/button";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const ContactPage = () => {
	const [showAnimation, setShowAnimation] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const serviceComponent = document.getElementById("contact");
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

	const initailValue = {
		email: "",
		name: "",
		typing: "",
	};

	const handleSubmit = async (value, action) => {
		console.log(value);

	action.reset();
	};

	const validationSchema = yup.object({
		email: yup
			.string()
			.required("email is required")
			.email("invalid email format"),
		name: yup
			.string()
			.required("name is required")
			.min("name is must be 2 letter at least "),
	});

	return (
		<div className="ContainerResponsive flex  gap-4  mt-40 sm:gap-14 flex-col justify-center">
			<div className="header  flex items-center flex-col mx-auto ">
				<h1 className=" text-md text-yellow-400 tracking-wide my-1">Contact</h1>
				<h1 className=" sm:text-2xl text-xl text-gray-300  ">
					I Want to Hear from you
				</h1>
			</div>

			<div
				id="contact"
				className="flex flex-col gap-6 sm:gap-0 sm:flex-row    items-start">
				<div
					className={`sm:w-[50%] w-full ${
						showAnimation &&
						"animate__animated animate__slideInLeft duration-1000"
					} flex flex-col gap-6 sm:gap-7 mt-5 `}>
					<div className="flex sm:items-start items-center   gap-8 sm:gap-5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="sm:w-6 w-7 h-7 text-yellow-400  sm:h-6">
							<path
								fillRule="evenodd"
								d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
								clipRule="evenodd"
							/>
						</svg>

						<p className="text-gray-400 font-medium     text-pretty  sm:text-base text-sm cardFont w-full  sm:w-[72%] tracking-wide ">
							No .644 , (Za) Ward, Eaindra 5 th Street,North Okkalapa
							Township,Yangon.
						</p>
					</div>

					<div className="flex items-center  gap-7  sm:gap-5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className=" w-6 text-yellow-400 h-6">
							<path
								fillRule="evenodd"
								d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
								clipRule="evenodd"
							/>
						</svg>

						<p className="text-gray-400  font-medium  cardFont w-full text-md sm:text-base   sm:w-[72%] tracking-wider sm:tracking-wide ">
							+95 9968213232
						</p>
					</div>

					<div className="flex items-center gap-7  sm:gap-5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="sm:w-6 w-7 h-7 text-yellow-400 sm:h-6">
							<path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
							<path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
						</svg>

						<p className="text-gray-400  font-medium sm:text-base text-md tracking-wider sm:tracking-wide cardFont w-full sm:w-[72%]  ">
							pthuya381@gmail.com
						</p>
					</div>
				</div>

				<div
					className={` cardFont ${
						showAnimation &&
						"animate__animated animate__slideInRight duration-1000"
					}w-full sm:w-[50%]`}>
					<Formik
						validateOnChange={false}
						validateOnBlur={false}
						validationSchema={validationSchema}
						initialValues={initailValue}
						onSubmit={handleSubmit}>
						{({ isSubmitting, handleChange, handleBlur, values }) => (
							<>
								<Form className="flex flex-col gap-3">
									<div className="">
										<input
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.name}
											className="mt-1 px-10 py-3 sm:px-3 sm:p-5 rounded-md  w-full  focus:outline-none  bg-[#23053a] focus:border-2  focus:border-[#280642]  ring-transparent focus:ring-transparent text-sm "
											name="name"
											type="name"
											id="name"
											placeholder="Your name"
										/>

										<ErrorMessage
											component={"p"}
											name="name"
											className="text-red-500 text-sm font-medium"
										/>
									</div>

									<div className="">
										<input
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.email}
											className="mt-1 px-10 py-3 sm:px-3 sm:p-5 rounded-md  w-full  focus:outline-none  bg-[#23053a] focus:border-2  focus:border-[#280642]  ring-transparent focus:ring-transparent text-sm "
											name="email"
											type="email"
											id="email"
											placeholder="Your email"
										/>

										<ErrorMessage
											component={"p"}
											name="password"
											className="text-red-500 text-sm font-medium"
										/>
									</div>

									<div className="">
										<input
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.typing}
											className="mt-1 text-gray-300   px-3  pb-12 rounded-md  w-full  focus:outline-none h-[120px] focus:border-2  focus:border-[#280642]   bg-[#23053a]  ring-transparent focus:ring-transparent text-sm "
											name="typing"
											type="text"
											id="typing"
											placeholder="Typing your message here... "
										/>

										<ErrorMessage
											component={"p"}
											name="typing"
											className="text-red-500 text-sm font-medium"
										/>
									</div>

									<Button
										disabled={isSubmitting}
										type="submit"
										className="text-black ms-auto cardFont  active:scale-95 sm:mt-5  mt-3 bg-yellow-500 sm:w-[30%]  hover:bg-yellow-500 rounded-lg   text-center  font-semibold">
										{isSubmitting ? (
											<Loader2 className=" mr-2 h-4 w-4 animate-spin" />
										) : (
											<> Send Message</>
										)}
									</Button>
								</Form>
							</>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
