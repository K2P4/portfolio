/** @format */

import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";

const ClientPage = () => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div
      data-aos="fade-right"
      id="review"
      className=" ContainerResponsive flex flex-col py-16    gap-10 justify-center sm:gap-16  "
    >
      <h1 className=" text-yellow-400 mt-10  text-2xl header font-bold tracking-wide ">
        Client & Reviews
      </h1>

      <div
        id="client"
        className={`flex flex-col lg:flex-row items-center justify-center  gap-5  sm:gap-4`}
      >
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={false}
          whileHover={{
            opacity: 0.7,
            scale: 0.9,
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
          }}
          className="  lg:h-[430px]  duration-300 xl:h-[400px]  h-[340px] md:h-[340px]  py-3 px-3 shadow-gray-950 rounded-lg w-full lg:w-[30%] shadow-md bg-[#23053a]  "
        >
          <img
            className="   object-cover ring-2 ring-purple-950    text-center mx-auto sm:mt-5    h-20 w-20  sm:h-32 sm:w-32 rounded-full    shadow-md shadow-[#2d183f]     opacity-95  "
            src="Min.jpg"
            alt=""
          />
          <h1 className=" text-gray-300 text-md  my-2 header tracking-wider  font-semibold mx-auto text-center sm:text-xl mt-3">
            Min Thu Khant
          </h1>

          <div className="flex sm:gap-3  gap-2 items-center  justify-center">
            {stars.map((item) => (
              <FaStar
                className="text-yellow-500  shadow-lg   h-4 w-4 sm:h-7 sm:w-7"
                key={item}
              />
            ))}
          </div>

          <p className="h-20 text-center mt-3 text-xs sm:text-base  text-gray-400 leading-6 sm:mt-5 sm:tracking-normal sm:my-4 sm:px-2  mx-auto  cardFont ">
            Their attention to detail, creativity, and responsiveness made the
            entire process seamless and enjoyable. I highly recommend their
            services .
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
          className=" lg:h-[520px] duration-300    xl:h-[470px]  h-[340px] py-3 px-3 shadow-gray-950 rounded-lg w-full lg:w-[30%] shadow-md bg-[#23053a]   "
        >
          <img
            className="   object-cover ring-2 ring-purple-950 sm:mt-5   text-center mx-auto    h-20 w-20  sm:h-32 sm:w-32 rounded-full     shadow-md shadow-[#2d183f]     opacity-95  "
            src="Aye.jpg"
            alt=""
          />

          <h1 className=" text-gray-300 text-md  my-2 header tracking-wider  font-semibold mx-auto text-center sm:text-xl mt-3">
            Aye Yadanar Kyaw
          </h1>

          <div className="flex sm:gap-3  gap-2 items-center  justify-center">
            {stars.map((item) => (
              <FaStar
                className="text-yellow-500  shadow-lg   h-4 w-4 sm:h-7 sm:w-7"
                key={item}
              />
            ))}
          </div>

          <p className="h-20  mt-3 text-center text-xs sm:text-base  text-gray-400 leading-6  sm:my-4 sm:px-5  mx-auto sm:tracking-normal cardFont ">
            Working with Phyo Thura was absolute delight! He is not only brought
            our vision to life but also added their own creative flair,
            resulting in a website that exceeded our expectations.{" "}
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
          className=" duration-300 xl:h-[400px]  h-[340px] lg:h-[420px]  py-3 px-3 mt-5 shadow-gray-950 rounded-lg w-full lg:w-[30%] shadow-md bg-[#23053a]  "
        >
          <img
            className="   object-cover ring-2 ring-purple-950    text-center mx-auto    h-20 w-20 sm:h-32 sm:w-32 rounded-full     shadow-md shadow-[#2d183f]     opacity-95  "
            src="myatpoe.jpg"
            alt=""
          />

          <h1 className=" text-gray-300 text-md  my-2 header tracking-wider  font-semibold mx-auto text-center sm:text-xl mt-3">
            Myat Poe Eain
          </h1>

          <div className="flex gap-2 sm:gap-3 items-center  justify-center">
            {stars.map((item) => (
              <FaStar
                className="text-yellow-500  shadow-lg   h-4 w-4 sm:h-7 sm:w-7"
                key={item}
              />
            ))}
          </div>

          <p className="h-20 mt-3 text-xs sm:text-base my-2  text-gray-400 leading-6  sm:my-4 sm:px-5 text-center  sm:tracking-normal  mx-auto tracking-wide cardFont ">
            Thanks to his hardwork and dedication. Hs is very good at coding &
            web design . Highly recommend his services !
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ClientPage;
