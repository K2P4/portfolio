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

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        settoggle(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleMouse);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleMouse);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handelCloseMenu = () => {
    settoggle(false);
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
        <h1 onClick={() => nav("/")}
          className="flex select-none items-center gap-0 sm:gap-2 sm:text-md md:text-lg text-yellow-400 header font-bold tracking-widest">
          THURA{" "}
          <span>
            <DiCodeigniter className=" w-4 " />
          </span>
        </h1>

        {/* toggle menu */}
        {toggle && (
          <div className="fixed inset-0 z-40 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" />
            <div
              ref={MenuRef}
              className="relative z-50 w-11/12 max-w-sm bg-[#26063f] rounded-xl p-6 overflow-y-auto shadow-lg"
            >
              <div className="flex items-center justify-between">
                <h5 className="text-xl tracking-wide font-semibold text-yellow-500 uppercase dark:text-gray-400">
                  Menu
                </h5>
                <button
                  type="button"
                  onClick={handelCloseMenu}
                  className="text-gray-300 bg-transparent hover:text-white rounded-md p-2"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-5 h-5 text-yellow-500"
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
              </div>

              <div className="mt-6">
                <ul className="space-y-4 font-medium text-center">
                  {NavList.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.name, item.id)}
                        className={`w-full text-lg text-gray-200 py-3 rounded-lg hover:bg-purple-950 transition ${
                          selectNav == item.id ? "bg-purple-950" : ""
                        }`}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* navigation bar  */}
  <div className="hidden md:flex">
          <ul className="flex sm:space-x-4 md:space-x-4  lg:space-x-7">
            {NavList.map((nav) => (
              <li
                key={nav.id}
                value={nav.id}
    onClick={() => scrollToSection(nav.name, nav.id)}
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
        <div className="flex md:hidden z-10   text-center">
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
