/** @format */

import React, { useEffect, useState } from "react";
import { WebLottie } from "../../Components";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

import { FaGithub } from "react-icons/fa";

const HomePage = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Software Developer",
    "Full Stack Developer",
  ];
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
    setLoading(true);
    const url = "/cv_dev.png";
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Phyo Thura_CV");
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setLoading(false);
  };

  return (
    <div
      id="home"
      className=" flex flex-col h-screen sm:h-full   md:h-full justify-center md:flex-row  md:justify-between align-middle items-center md:ContainerResponsive "
    >
      <div className="  mb-auto    mt-24  lg:mb-0 lg:mt-16   xl:mt-0 animate__animated animate__slideInLeft duration-1000 w-full lg:w-[50%] ">
        <h1 className="text-yellow-400  text-3xl md:text-4xl header font-bold tracking-widest">
          Hello ! I'm{" "}
          <span className="text-gray-300 font-bold">PHYO THURA</span>
        </h1>

        <h1 className="text-yellow-400 my-1 md:my-2 text-3xl md:text-3xl header font-bold tracking-widest">
          <span
            className="txt-rotate"
            dataperiod="800"
            data-rotate='[ "Software Developer", "Full Stack Developer"]'
          >
            <span className="wrap text">Junior {text}</span>
          </span>
        </h1>

        <p className=" mt-6 md:mt-5 text-md  md:text-base  lg:text-justify md:text-pretty w-full lg:w-[80%] text-gray-300 font-medium tracking-wide  leading-6 md:leading-8">
          To Be a Web Developer is so amazing career . I can help everyone build
          their business. it such happiness for me.So let me to help you !
        </p>

        <div className="flex mt-8   md:justify-normal md:mt-7 items-center gap-4 ">
          <a
            href="mailto:pthuya381@gmail.com"
            className="text-md md:text-base cardFont font-bold bg-[#ffcc23] rounded-lg px-7 active:scale-95 hover:bg-yellow-300 duration-500 py-2"
          >
            Hire Me
          </a>

          <button
            onClick={downloadCV}
            className=" text-md  md:text-base cardFont font-medium  border border-[#ffcc23]  text-yellow-400   px-6 rounded-lg md:px-5 active:scale-95 hover:bg-[#ffcc23] hover:text-black  transition-transform  duration-500 py-2"
          >
            {loading ? "Loading" : "Download CV"}
          </button>
        </div>

        <div className="flex gap-6 md:gap-6   mt-7">
          <a
            href="https://www.facebook.com/profile.php?id=100077023871140&mibextid=LQQJ4d"
            target="_blank"
          >
            <FaFacebookF className="bg-yellow-400  rounded-full md:h-9 md:w-9  h-10 p-1 w-10   active:scale-95  " />
          </a>

          <a
            href="https://www.instagram.com/vik83124?igsh=MWdtMmphc3hodjBucg%3D%3D&utm_source=qr"
            target="_blank"
          >
            <AiFillInstagram className="bg-yellow-400  rounded-full   md:h-9 md:w-9 h-10 p-1 w-10   active:scale-95  " />
          </a>

          <a
            href="https://discord.com/channels/1147540820203941888/1155112504146530334/1155112504146530334r"
            target="_blank"
          >
            <FaDiscord className="bg-yellow-400  rounded-full  md:h-9 md:w-9 h-10 p-1 w-10   active:scale-95  " />
          </a>

          <a href="http://linkedin.com/in/phyothura21" target="_blank">
            <FaLinkedinIn className="bg-yellow-400  rounded-full md:h-9 md:w-9  h-10 p-1 w-10   active:scale-95  " />
          </a>

          <a href="https://github.com/K2P4" target="_blank">
            <FaGithub className="bg-yellow-400  rounded-full  md:h-9 md:w-9 h-10 p-1 w-10   active:scale-95  " />
          </a>
        </div>
      </div>

      <div className="w-full hidden lg:flex md:w-[50%] animate__animated animate__slideInRight duration-1000">
        <WebLottie />
      </div>
    </div>
  );
};

export default HomePage;
