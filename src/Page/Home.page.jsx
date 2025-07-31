import React, { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { ContactPage, AboutPage, ServicePage, SkillPage, ProjectPage, ClientPage } from "../Page";



const HomePage = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full Stack Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    AOS.init({ duration: 1000 });

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
    const url = "/thura_cv_update.png";
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
    <section id="home">

      {/* Home */}
      <div className="flex flex-col-reverse  lg:flex-row items-center  justify-center min-h-screen    py-16 gap-10 lg:gap-0">
        {/*  info  */}
        <div
          data-aos="fade-right"
          className="w-full mx-auto  duration-1000"
        >
          <h1 className="text-yellow-400 text-3xl text-center lg:text-left md:text-4xl font-bold tracking-widest">
            Hello! I'm <span className="text-gray-300 ">PHYO THURA</span>
          </h1>

          <h1 className="text-yellow-400 my-2 text-center lg:text-left text-2xl md:text-3xl font-bold tracking-widest">
            <span className="txt-rotate" dataperiod="800">
              <span className="wrap text">Junior {text}</span>
            </span>
          </h1>

          <p className="mt-4 text-sm md:text-base text-center lg:text-left text-gray-300 font-medium leading-relaxed md:leading-7">
            To be a Web Developer is an amazing career. I love helping others
            build their businesses. It's truly fulfilling for me—so let me help
            you!
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-normal gap-4 mt-7">
            <a
              href="mailto:pthuya381@gmail.com"
              className="text-sm md:text-base font-bold bg-[#ffcc23] text-black rounded-lg px-6 py-2 hover:bg-yellow-300 active:scale-95 transition duration-300"
            >
              Hire Me
            </a>
            <button
              onClick={downloadCV}
              className="text-sm md:text-base font-medium border border-[#ffcc23] text-yellow-400 px-6 py-2 rounded-lg hover:bg-[#ffcc23] hover:text-black active:scale-95 transition duration-300"
            >
              {loading ? "Loading" : "Download CV"}
            </button>
          </div>

          {/* Social  */}
          <div className="flex items-center justify-center lg:justify-normal gap-5 mt-6">
            <a
              href="https://www.facebook.com/profile.php?id=100077023871140"
              target="_blank"
            >
              <FaFacebookF className="bg-[#2a2a2a] text-yellow-500 rounded-full h-10 w-10 lg:h-12 lg:w-12 p-2 hover:scale-105 transition" />
            </a>
            <a href="https://www.instagram.com/vik83124" target="_blank">
              <AiFillInstagram className="bg-[#2a2a2a] text-yellow-500 rounded-full h-10 w-10 lg:h-12 lg:w-12 p-2 hover:scale-105 transition" />
            </a>
            <a
              href="https://discord.com/channels/1147540820203941888/1155112504146530334/1155112504146530334r"
              target="_blank"
            >
              <FaDiscord className="bg-[#2a2a2a] text-yellow-500 rounded-full h-10 w-10 lg:h-12 lg:w-12 p-2 hover:scale-105 transition" />
            </a>
            <a href="http://linkedin.com/in/phyothura21" target="_blank">
              <FaLinkedinIn className="bg-[#2a2a2a] text-yellow-500 rounded-full h-10 w-10 lg:h-12 lg:w-12 p-2 hover:scale-105 transition" />
            </a>
            <a href="https://github.com/K2P4" target="_blank">
              <FaGithub className="bg-[#2a2a2a] text-yellow-500 rounded-full h-10 w-10 lg:h-12 lg:w-12 p-2 hover:scale-105 transition" />
            </a>
          </div>
        </div>

        {/*  Profile  */}
        <div
          data-aos="fade-left"
          className="w-full flex justify-center items-center animate__animated animate__slideInRight duration-1000"
        >
          <div className="relative group">
            <img
              src="/Phyo.jpg"
              alt="Profile of Phyo Thura"
              className="w-52 h-52 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-4 border-yellow-400 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <p className="text-white text-sm font-semibold">
                Hello, I'm Phyo Thura 👋
              </p>
            </div>
          </div>
        </div>
      </div>


    <AboutPage />
    <ServicePage />
    <SkillPage />
    <ProjectPage />
    <ClientPage />
    <ContactPage/>
  
    </section>
  );
};

export default HomePage;
