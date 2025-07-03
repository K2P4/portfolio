/** @format */

import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { DiCodeigniter } from "react-icons/di";

const NavComponent = () => {
  const [toggle, settoggle] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [selectNav, setSelectNav] = useState();
  const [activeSection, setActiveSection] = useState("home");

  const NavList = [
    {
      id: 0,
      name: "home",
    },
    {
      id: 1,
      name: "about",
    },
    {
      id: 2,
      name: "service",
    },
    {
      id: 3,
      name: "project",
    },
    {
      id: 4,
      name: "contact",
    },
    {
      id: 5,
      name: "review",
    },
  ];

  const MenuRef = useRef();

  const nav = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "service", "about", "contact"];
      if (window.scrollY > 500) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    const handleMouse = (e) => {
      if (!MenuRef?.current?.contains(e.target)) {
        settoggle(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleMouse);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.addEventListener("mousedown", handleMouse);
    };
  }, []);

  const handelCloseMenu = () => {
    nav("/");
    settoggle(!toggle);
  };

  const toggleMenu = () => {
    settoggle(!toggle);
  };

  const scrollToSection = (id, navId) => {
    const element = document.getElementById(id);
    setSelectNav(navId);

    console.log(selectNav);
    if (element) {
      settoggle(false);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="">
        <div
          className={` ${
            isFixed &&
            "fixed top-0 left-0  w-full  px-9  sm:px-20   lg:pe-32 lg:px-32  mx-auto bg-[#200435]  duration-500      z-30 "
          } flex   py-7 justify-between items-center`}
        >
          <h1
            onClick={() => nav("/")}
            className="flex  select-none items-center gap-0 sm:gap- sm:text-sm md:text-lg lg:text-xl text-yellow-400  header font-bold tracking-widest  "
          >
             THURA{" "}
            <span>
              <DiCodeigniter className=" w-4 " />
            </span>
          </h1>

          {/* toggle menu */}
          {toggle && (
            <div
              ref={MenuRef}
              className={`fixed  duration-700  bg-[#26063f]  animate__animated  animate__bounceInLeft  top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform w-64 dark:bg-gray-800`}
            >
              <h5 className="text-xl mt-3 tracking-wide font-semibold text-yellow-500 uppercase dark:text-gray-400">
                Menu
              </h5>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-5 mt-3 text-yellow-500 h-5"
                  onClick={handelCloseMenu}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>

              <div className="py-4 mt-6 overflow-y-auto">
                <ul className="space-y-5 font-medium">
                  <li>
                    <a
                      
                      onClick={() => scrollToSection("home", 0)}
                      className={`flex items-center p-2  ${
                        selectNav == 0 ? "bg-purple-950" : ""
                      } hover:bg-purple-950   rounded-lg dark:text-white  dark:hover:bg-gray-700 group`}
                    >
                      <svg
                        className="w-7 h-7  text-yellow-500 transition duration-75 dark:text-gray-400 group-hover:text-yellow-400 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 21"
                      >
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                      </svg>
                      <span className="ms-5 text-gray-300 hover:text-white  text-lg font-medium cardFont tracking-wider">
                        Home
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => scrollToSection("service", 1)}
                      className={`flex items-center p-2  ${
                        selectNav == 1 ? "bg-purple-950" : ""
                      } hover:bg-purple-950   rounded-lg dark:text-white  dark:hover:bg-gray-700 group`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-7 h-7  text-yellow-500 transition duration-75 dark:text-gray-400 group-hover:text-yellow-400 dark:group-hover:text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                          clipRule="evenodd"
                        />
                        <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
                        <path
                          fillRule="evenodd"
                          d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="ms-5 text-gray-300 hover:text-white  text-lg font-medium cardFont tracking-wider">
                        Services
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      onClick={() => scrollToSection("about", 2)}
                      className={`flex items-center p-2  ${
                        selectNav == 2 ? "bg-purple-950" : ""
                      } hover:bg-purple-950   rounded-lg dark:text-white  dark:hover:bg-gray-700 group`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-7 h-7  text-yellow-500 transition duration-75 dark:text-gray-400 group-hover:text-yellow-400 dark:group-hover:text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="ms-5 text-gray-300 hover:text-white  text-lg font-medium cardFont tracking-wider">
                        About
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      value="3"
                      onClick={() => scrollToSection("project", 3)}
                      className={`flex items-center p-2  ${
                        selectNav == 3 ? "bg-purple-950" : ""
                      } hover:bg-purple-950   rounded-lg dark:text-white  dark:hover:bg-gray-700 group`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-7 h-7  text-yellow-500 transition duration-75 dark:text-gray-400 group-hover:text-yellow-400 dark:group-hover:text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="ms-5 text-gray-300 hover:text-white  text-lg font-medium cardFont tracking-wider">
                        Projects
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      onClick={() => scrollToSection("contact",4 )}
                      className={`flex items-center p-2  ${
                        selectNav == 4 ? "bg-purple-950" : ""
                      } hover:bg-purple-950   rounded-lg dark:text-white  dark:hover:bg-gray-700 group`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-7 h-7  text-yellow-500 transition duration-75 dark:text-gray-400 group-hover:text-yellow-400 dark:group-hover:text-white"
                      >
                        <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                        <path
                          fillRule="evenodd"
                          d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="ms-5 text-gray-300 hover:text-white  text-lg font-medium cardFont tracking-wider">
                        Contact
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      onClick={() => scrollToSection("review",5 )}
                      className={`flex items-center p-2  ${
                        selectNav == 5 ? "bg-purple-950" : ""
                      } hover:bg-purple-950   rounded-lg dark:text-white  dark:hover:bg-gray-700 group`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-7 h-7  text-yellow-500 transition duration-75 dark:text-gray-400 group-hover:text-yellow-400 dark:group-hover:text-white"
                      >
                        <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                      </svg>

                      <span className="ms-5 text-gray-300 hover:text-white  text-lg font-medium cardFont tracking-wider">
                        Review
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* navigation bar for sm */}
          <div className=" hidden sm:flex">
            <ul className="flex sm:space-x-4 md:space-x-4  lg:space-x-7">
              {NavList.map((nav) => (
                <li
                key={nav.id}
                  value={nav.id}
                  onClick={(event) => scrollToSection(nav.name, event.target.value)}
                  className={`  ${
                    selectNav == nav.id ? "text-yellow-400" : ""
                  }  capitalize text-gray-400 select-pointer  text-md lg:text-base tracking-wide select-none hover:text-yellow-400  font-medium  hover:cursor-pointer transition-transform  duration-500  hover:border-b-yellow-400  active:text-yellow-500  `}
                >
                  {nav.name}
                </li>
              ))}
            </ul>
          </div>

          {/* navigation menu */}
          <div className="flex sm:hidden z-10   text-center">
            <button
              className=" text-xl  flex  text-yellow-500  tracking-wide items-center font-bold "
              type="button"
              data-drawer-target="drawer-navigation"
              data-drawer-show="drawer-navigation"
              aria-controls="drawer-navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                onClick={toggleMenu}
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

    </div>
  );
};

export default NavComponent;
