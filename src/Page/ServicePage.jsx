import React, { useState } from "react";
import { LuDot } from "react-icons/lu";
import { motion } from "framer-motion";
import { services } from "../data/services";

const ServicePage = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const iconUrls = [
    "https://cdn-icons-png.flaticon.com/128/1197/1197511.png",
    "https://cdn-icons-png.flaticon.com/128/8606/8606660.png",
    "https://cdn-icons-png.flaticon.com/128/9672/9672242.png",
  ];

  return (
    <section    data-aos="fade-left" className="ContainerResponsive py-16 flex flex-col justify-center">
      <h1
        className={`mx-auto my-5 sm:my-5 header tracking-wider text-xl sm:text-2xl text-gray-300  flex justify-center w-full gap-2`}
      >
        My <span className="text-yellow-400">Services</span>
      </h1>

      <div
        id="service"
        className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 
           transition-transform duration-1000"
      >
        {services.map((serviceItem, index) => (
          <motion.div
            key={index}
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
              className="w-[90px] xl:w-[100px] object-cover mx-auto"
              src={iconUrls[index] || iconUrls[0]} // fallback to default icon
              alt={serviceItem.title}
            />
            <h1 className="sm:text-xl text-lg h-14 mx-auto text-center mt-3 text-yellow-400 tracking-wide font-semibold">
              {serviceItem.title}
            </h1>
            <div className="flex flex-col text-justify gap-2 items-start mt-4">
              {serviceItem.service.map((point, i) => (
                <div key={i} className="flex items-center">
                  <LuDot className="text-3xl text-yellow-400" />
                  <p className="text-sm lg:text-sm xl:text-md text-nowrap tracking-wide font-medium text-gray-300">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicePage;
