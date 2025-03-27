/** @format */

import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Keyboard, Autoplay, Pagination } from "swiper/modules";
import "../../node_modules/swiper/swiper-bundle.min.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const nav = useNavigate();
  const [hover, setHovered] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const swiperRef = useRef(null);
  const [toggleHover, setToggleHover] = useState(false);

  

  const hanldeProject = (path) => {
    nav(path);
  };

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

  return (
    <div className="flex flex-col gap-14  sm:gap-10 justify-center ContainerResponsive">
      <div className="flex justify-between items-center ">
        <h1 className="sm:text-2xl text-xl tracking-wide text-yellow-400 header">
          My Projects
        </h1>

        <p className="text-gray-400 text-md  tracking-wide border-b border-b-gray-400 ">
          See All
        </p>
      </div>

      <Swiper
        id="project"
        className={`w-full flex ${
          showAnimation &&
          "  animate__animated  animate__slideInRight  duration-1000 "
        }  h-[430px]  sm:h-[430px] flex-row mySwiper items-center  `}
        slidesPerView={1} 
        spaceBetween={5}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        pagination={{ clickable: true }}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        modules={[Keyboard, Autoplay, Pagination]}
      >
        <SwiperSlide  style={{ width: '500px' }}  className="  w-full   sm:h-[455px]      ">
          <motion.div
            whileHover={{
              opacity: 0.7,
              scale: 1.02,

              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
            }}
            className=" rounded-lg shadow-md shadow-gray-950     h-auto lg:h-[400px] xl:h-[390px]  bg-[#23053a]  "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              className="   object-center  w-full  h-[180px]   rounded-2xl rounded-b-sm shadow-md shadow-[#2d183f]     opacity-95  "
              src="https://i.ibb.co/dLHDnF9/image.png"
              alt=""
            />

            <h1 className=" text-yellow-400 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
              The Dev Diary
            </h1>

            <p className="h-20 text-[12px] text-gray-400 my-4 px-2  mx-auto tracking-wider cardFont text-center">
              Tech update blog platform with auth,comment sections,and admin
              management. Built with Laravel,offers CRUD functions for blog
              management and user roles.
            </p>

            <button className="  select-pointer    textgray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
              <a target="_blank" href="https://blog-nu-five-62.vercel.app/">
                View Project
              </a>
            </button>
          </motion.div>
        </SwiperSlide>

        <SwiperSlide style={{ width: '500px' }}  className="  w-full  sm:h-[455px]      ">
          <motion.div
            whileHover={{
              opacity: 0.7,
              scale: 1.02,

              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
            }}
            className=" rounded-lg shadow-md shadow-gray-950    h-auto lg:h-[400px] xl:h-[390px] bg-[#23053a]  "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              className="   object-center  w-full  h-[180px]   rounded-2xl rounded-b-sm shadow-md shadow-[#2d183f]     opacity-95  "
              src="https://i.ibb.co/fN0ydCg/Screenshot-2024-12-04-190659.png"
              alt=""
            />

            <h1 className=" text-yellow-400 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
              Zoya Blog
            </h1>

            <p className="h-20 text-[12px] text-gray-400 my-4 px-2  mx-auto tracking-wider cardFont text-center">
              Travel blog website inspired by the React project,features modern
              UI design and blog content shop, allowing users to explore
              engaging travel stories and purchase related items.
            </p>

            <button className="  select-pointer    textgray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
              <a target="_blank" href="https://zoya-blog.vercel.app/">
                View Project
              </a>
            </button>
          </motion.div>
        </SwiperSlide>

        <SwiperSlide style={{ width: '500px' }} className="  w-full  sm:h-[455px]      ">
          <motion.div
            whileHover={{
              opacity: 0.7,
              scale: 1.02,

              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
            }}
            className=" rounded-lg shadow-md shadow-gray-950    h-auto lg:h-[400px] xl:h-[390px] bg-[#23053a]  "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              className="   object-center  w-full  h-[180px]   rounded-2xl rounded-b-sm shadow-md shadow-[#2d183f]     opacity-95  "
              src="https://i.ibb.co/Dzs65wn/sneaker-project.png"
              alt=""
            />

            <h1 className=" text-yellow-400 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
              Sneaker Nikee
            </h1>

            <p className="h-20 text-[12px] text-gray-400 my-4 px-2  mx-auto tracking-wider cardFont text-center">
              Online shopping cart platform for sneaker enthusiasts. Built with
              React and Redux,provides a seamless shopping experience with
              product listings, cart management, and secure checkout.
            </p>

            <button className="  select-pointer    textgray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
              <a target="_blank" href="https://nikke-chi.vercel.app/">
                View Project
              </a>
            </button>
          </motion.div>
        </SwiperSlide>

        <SwiperSlide style={{ width: '500px' }} className=" w-full  sm:h-[455px]     ">
          <motion.div
            whileHover={{
              opacity: 0.7,
              scale: 1.04,
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
            }}
            className="  m-auto rounded-lg shadow-gray-950 h-auto lg:h-[400px] xl:h-[390px]  shadow-md bg-[#23053a]  "
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
              className="    object-cover  w-full  h-[180px]   rounded-2xl rounded-b-sm shadow-md shadow-[#2d183f]     opacity-95  "
              src="https://i.ibb.co/Kw0fHfX/Shopping-Cart.png"
              alt=""
            />

            <h1 className=" text-yellow-400 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
              KOP Solutions
            </h1>

            <p className=" h-20 text-[12px] text-gray-400 my-4 px-2  mx-auto tracking-wider cardFont text-center">
              That it's my student react shopping cart project with fetching
              data api from fakestore api .
            </p>

            <button className="  select-pointer   textgray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
              <a
                target="_blank"
                href="https://main--kop-shoppingcart.netlify.app/"
              >
                View Project
              </a>
            </button>
          </motion.div>
        </SwiperSlide>

        <SwiperSlide style={{ width: '500px' }} className="  w-full  sm:h-[455px]      ">
          <motion.div
            whileHover={{
              opacity: 0.7,
              scale: 1.02,

              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
            }}
            className=" rounded-lg shadow-md shadow-gray-950    h-auto lg:h-[400px] xl:h-[390px] bg-[#23053a]  "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              className="   object-cover  w-full  h-[180px]   rounded-2xl rounded-b-sm shadow-md shadow-[#2d183f]     opacity-95  "
              src="/recipe.png"
              alt=""
            />

            <h1 className=" text-yellow-400 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
              Recipe Vue
            </h1>

            <p className="h-20 text-[12px] text-gray-400 my-4 px-2  mx-auto tracking-wider cardFont text-center">
              A simple recipe management system built with Vue.js, featuring
              CRUD operations and pagination for efficient browsing. Users can
              add, edit, delete, and view recipes seamlessly.
            </p>

            <button className="  select-pointer    textgray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
              <a target="_blank" href="https://phyo-recipe.netlify.app/">
                View Project
              </a>
            </button>
          </motion.div>
        </SwiperSlide>

        <SwiperSlide style={{ width: '500px' }} className="  w-full  sm:h-[455px]      ">
          <motion.div
            whileHover={{
              opacity: 0.7,
              scale: 1.02,

              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
            }}
            className=" rounded-lg shadow-md shadow-gray-950    h-auto lg:h-[400px] xl:h-[390px] bg-[#23053a]  "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              className="   object-cover  w-full  h-[180px]   rounded-2xl rounded-b-sm shadow-md shadow-[#2d183f]     opacity-95  "
              src="/quiz.png"
              alt=""
            />

            <h1 className=" text-yellow-400 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
              Quiz App
            </h1>

            <p className="h-20 text-[12px] text-gray-400 my-4 px-2  mx-auto tracking-wider cardFont text-center">
              A dynamic quiz application built with Vue.js, allowing users to
              take quizzes, view scores, and navigate questions smoothly.
              Includes interactive UI and real-time feedback.
            </p>

            <button className="  select-pointer    textgray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
              <a target="_blank" href="https://phyo-recipe.netlify.app/">
                View Project
              </a>
            </button>
          </motion.div>
        </SwiperSlide>

        <SwiperSlide className="  w-full  sm:h-[455px]     ">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={false}
            whileHover={{
              opacity: 0.7,
              scale: 1.04,
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
            }}
            onMouseEnter={() => setToggleHover(true)}
            onMouseLeave={() => setToggleHover(false)}
            className=" shadow-gray-950 rounded-lg shadow-md bg-[#23053a] h-auto lg:h-[400px] xl:h-[390px]  "
          >
            <img
              className="   object-cover  w-full  h-[180px]   rounded-2xl rounded-b-sm shadow-md shadow-[#2d183f]     opacity-95  "
              src="https://i.ibb.co/vxHwcxb/Invoice-app.png"
              alt=""
            />

            <h1 className=" text-yellow-400 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
              Invoice App
            </h1>

            <p className="h-20 text-[12px] text-gray-400 my-4 px-2  mx-auto tracking-wider cardFont text-center">
              Invoice App is a simple and lightweight invoicing tool for small
              businesses and freelancers. It allows users to create, edit, and
              manage invoices efficiently with a clean and minimal UI{" "}
            </p>

            <button className=" select-pointer   textgray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
              <a
                target="_blank"
                href="https://invoice-app-nu-pearl.vercel.app/"
              >
                View Project
              </a>
            </button>
          </motion.div>
        </SwiperSlide>

        <SwiperSlide className=" w-full  sm:h-[455px]     ">
          <motion.div
            whileHover={{
              opacity: 0.7,
              scale: 1.04,
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
            }}
            className="  m-auto rounded-lg  shadow-gray-950  h-auto lg:h-[400px] xl:h-[390px]  shadow-md bg-[#23053a]  "
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
              className="    object-center  w-full  h-[180px]   rounded-2xl rounded-b-sm shadow-md shadow-[#2d183f]     opacity-95  "
              src="https://i.ibb.co/DkZLLsS/Japanese-Meal.png"
              alt=""
            />

            <h1 className=" text-yellow-400 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
              Japanese Meal
            </h1>

            <p className=" h-20 text-xs leading-6 text-[12px] text-gray-400 my-4 px-2  mx-auto tracking-wider cardFont text-center">
              Recipe search website that helps users explore Japanese
              dishes,with UI design and categorized recipes, users can easily
              find and cook their favorite meals
            </p>

            <button className=" select-pointer  textgray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
              <a target="_blank" href="https://kop-japanese-meals.netlify.app/">
                View Project
              </a>
            </button>
          </motion.div>
        </SwiperSlide>

        <SwiperSlide className=" w-full  sm:h-[455px]     ">
          <motion.div
            whileHover={{
              opacity: 0.7,
              scale: 1.04,
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
            }}
            className="  m-auto rounded-lg  shadow-gray-950 h-auto lg:h-[400px] xl:h-[390px]  shadow-md bg-[#23053a]  "
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
              className="  object-center  w-full  h-[180px]    rounded-2xl rounded-b-sm shadow-md shadow-[#2d183f]     opacity-95  "
              src="https://i.ibb.co/02Rt1BG/Screenshot-2024-06-27-195000.png"
              alt=""
            />

            <h1 className=" text-yellow-400 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
              CONTACT APP
            </h1>

            <p className=" h-20  leading-6 text-[12px] text-gray-400 my-4 px-2  mx-auto tracking-tight cardFont text-center">
              User contact management system with full CRUD and
              authentication,with React-Redux, features a sleek design for
              adding, editing, and organizing contacts efficiently
            </p>

            <button className="select-pointer   text-gray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
              <a
                target="_blank"
                href="https://student-project-with-contact-app.vercel.app/"
              >
                View Project
              </a>
            </button>
          </motion.div>
        </SwiperSlide>

        {/* <SwiperSlide className="   w-full  sm:h-[455px]      ">
					<motion.div
						whileHover={{
							opacity: 0.7,
							scale: 1.04,

							boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
						}}
						className=" rounded-lg shadow-md shadow-gray-950    h-auto lg:h-[400px] xl:h-[390px]bg-[#23053a]  "
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}>
						<img
							className="   object-cover  w-full  h-[54%]   rounded-2xl rounded-b-sm shadow-md shadow-[#2d183f]     opacity-95      "
							src="https://i.ibb.co/kK58r4R/image.png"
							alt=""
						/>

						<h1 className=" text-yellow-400 header tracking-wider  font-semibold mx-auto text-center text-xl mt-3">
							W .
						</h1>

						<p className="h-20 text-[12px] text-gray-400 my-4 px-2  mx-auto tracking-wider cardFont text-center">
							That it's simple project with using html css javascript &
							bootstrap .
						</p>

						<button className="select-pointer      text-gray-800 tracking-wide font-semibold text-center mx-auto flex justify-center   bg-[#ffcc23]   rounded-xl px-8 active:scale-95 hover:bg-yellow-500 duration-500 py-3">
							<a target="_blank" href="https://markyk2.netlify.app/">View Project</a>
						</button>
					</motion.div>
				</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default ProjectPage;
