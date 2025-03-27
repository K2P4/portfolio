/** @format */

import React, { useEffect, useState } from "react";
import { LuDot } from "react-icons/lu";
import "../../node_modules/animate.css/animate.min.css";
import { motion } from "framer-motion";

const ServicePage = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hover, setHovered] = useState(false);
  const [toggleHover, setToggleHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const serviceComponent = document.getElementById("service");
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
    <div>
      <div
        className={`ContainerResponsive      mt-72   sm:mt-48 md:mt-32   flex  flex-col justify-center`}
      >
        <h1
          className={`mx-auto  my-5 sm:my-5 header tracking-wider text-xl sm:text-2xl text-gray-300 ${
            showAnimation &&
            "  animate__animated  animate__fadeInLeftBig  duration-1000 "
          } gap-2 flex justify-center w-full`}
        >
          My <span className="text-yellow-400">Services</span>
        </h1>

        <div
          id="service"
          className={`grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 ${
            showAnimation &&
            "animate__animated transition-transform animate__slideInLeft duration-1000"
          }`}
        >
          {/* Card 1 */}
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={false}
            whileHover={{
              opacity: 0.7,
              scale: 1.04,
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
            }}
            className="w-full hover:cursor-pointer duration-300 shadow bg-[#210538] hover:bg-[#23053b] px-1 cardFont py-4 h-[345px] sm:h-[385px] rounded-lg border-gray-500"
          >
            <img
              className="lg:w-[100px] w-[80px] object-cover mx-auto"
              src="https://cdn-icons-png.flaticon.com/128/1197/1197511.png"
              alt=""
            />
            <h1 className="sm:text-xl text-lg h-14 mx-auto text-center mt-3 text-yellow-400 tracking-wide font-semibold">
              Interactive Frontend Development
            </h1>
            <div className="flex flex-col text-justify gap-2 items-start mt-4">
              <div className="flex items-center">
                <LuDot className="text-3xl text-yellow-400" />
                <p className="text-sm sm:text-md tracking-wide font-medium text-gray-300">
                  Creation of responsive websites
                </p>
              </div>
              <div className="flex items-center">
                <LuDot className="text-3xl text-yellow-400" />
                <p className="text-sm tracking-wide font-medium text-gray-300">
                  HTML, CSS, JavaScript , Vue & React
                </p>
              </div>
              <div className="flex items-center">
                <LuDot className="text-3xl text-yellow-400" />
                <p className="text-sm sm:text-md font-medium text-gray-300">
                  Website Performance & Optimization
                </p>
              </div>
              <div className="flex items-center">
                <LuDot className="text-3xl text-yellow-400" />
                <p className="text-sm sm:text-md tracking-wide font-medium text-gray-300">
                  Other Service & Activities
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={false}
            whileHover={{
              opacity: 0.7,
              scale: 1.04,
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
            }}
            className="w-full hover:cursor-pointer duration-300 shadow bg-[#210538] hover:bg-[#23053b] px-1 cardFont py-4 h-[345px] sm:h-[385px] rounded-lg border-gray-500"
          >
            <img
              className="w-[80px] sm:w-[100px] object-cover mx-auto"
              src="https://cdn-icons-png.flaticon.com/128/8606/8606660.png"
              alt=""
            />
            <h1 className="sm:text-xl text-lg h-14 mx-auto text-center mt-3 text-yellow-400 tracking-wide font-semibold">
              Maintenance & Technical Support
            </h1>
            <div className="flex flex-col text-justify gap-2 items-start mt-4">
              <div className="flex items-center">
                <LuDot className="text-3xl text-yellow-400" />
                <p className="text-sm sm:text-md tracking-wide font-medium text-gray-300">
                  Regular website updates
                </p>
              </div>
              <div className="flex items-center">
                <LuDot className="text-3xl text-yellow-400" />
                <p className="text-sm sm:text-md tracking-wide font-medium text-gray-300">
                  Website performance tracking
                </p>
              </div>
              <div className="flex items-center">
                <LuDot className="text-3xl text-yellow-400" />
                <p className="text-sm sm:text-md font-medium text-gray-300">
                  24/7 support
                </p>
              </div>
              <div className="flex items-center">
                <LuDot className="text-3xl text-yellow-400" />
                <p className="text-sm sm:text-md tracking-wide font-medium text-gray-300">
                  Technical bug fixing
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={false}
            whileHover={{
              opacity: 0.7,
              scale: 1.04,
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
            }}
            className="w-full duration-300 hover:cursor-pointer shadow bg-[#210538] hover:bg-[#23053b] px-1 cardFont py-4 h-[345px] sm:h-[385px] rounded-lg border-gray-500"
          >
            <img
              className="sm:w-[100px] w-[80px] object-cover mx-auto"
              src="https://cdn-icons-png.flaticon.com/128/9672/9672242.png"
              alt=""
            />
            <h1 className="sm:text-xl text-lg h-14 mx-auto text-center mt-3 text-yellow-400 tracking-wide font-semibold">
              Interactive Backend Development
            </h1>
            <div className="flex flex-col text-justify gap-2 items-start mt-4">
              <div className="flex items-center">
                <LuDot className="text-3xl text-yellow-400" />
                <p className="text-sm sm:text-md tracking-wide font-medium text-gray-300">
                  Database Design & Management
                </p>
              </div>
              <div className="flex items-center">
                <LuDot className="text-3xl text-yellow-400" />
                <p className="text-sm sm:text-md tracking-wide font-medium text-gray-300">
                  RESTful & API Development
                </p>
              </div>
              <div className="flex items-center">
                <LuDot className="text-3xl text-yellow-400" />
                <p className="text-sm sm:text-md tracking-wide font-medium text-gray-300">
                  Performance Optimization & Caching
                </p>
              </div>
              <div className="flex items-center">
                <LuDot className="text-3xl text-yellow-400" />
                <p className="text-sm sm:text-md tracking-wide font-medium text-gray-300">
                  Secure Backend Development
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
