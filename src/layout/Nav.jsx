import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavList } from '../data/nav';
import { AiOutlineClose } from 'react-icons/ai';

export const Nav = () => {
  const [toggle, settoggle] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [selectNav, setSelectNav] = useState();

  const MenuRef = useRef();

  const nav = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
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
      if (e.key === 'Escape') {
        settoggle(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleMouse);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleMouse);
      window.removeEventListener('keydown', handleKeyDown);
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

    if (element) {
      settoggle(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="">
      <div
        className={` ${
          isFixed && 'fixed top-0 left-0  w-full  px-9 lg:pb-8  lg:pe-32 lg:px-32  mx-auto shadow-sm border-b border-slate-300/60 bg-white backdrop-blur-[1px]  duration-500      z-50 '
        } flex py-6 sm:py-10 lg:pt-8 lg:pb-0 justify-between items-center `}
      >
        <h1 onClick={() => nav('/')} className="flex select-none items-center gap-0 sm:gap-2 sm:text-md md:text-xl text-gray-900  header font-bold tracking-wide">
          THURA{' '}
        </h1>

        {/* sheet */}
        <div className={`md:hidden ${toggle ? 'fixed inset-0 z-40' : ''}`}>
          <button
            aria-label="Close menu overlay"
            onClick={handelCloseMenu}
            className={`absolute inset-0 transition-opacity duration-300 ${toggle ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          />
          <div
            ref={MenuRef}
            className={`fixed top-0 left-0 h-screen w-80 max-w-[85%] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-out ${toggle ? 'translate-x-0' : '-translate-x-full'}`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation drawer"
          >
            <div className="px-5 py-5 border-b border-slate-200 flex items-center justify-between">
              <h1  className=" select-none items-center  text-gray-900  header font-bold tracking-wide">
                THURA
              </h1>
              <button type="button" onClick={handelCloseMenu} className=" bg-transparent hover:text-primary rounded-md p-2" aria-label="Close menu">
              <AiOutlineClose className='text-xl'/>
              </button>
            </div>
            <nav className="px-4 py-4 overflow-y-auto ">
              <ul className="space-y-2 font-medium">
                {NavList.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.name, item.id)}
                      className={`w-full text-left capitalize text-base px-3 py-3 rounded-md hover:bg-slate-50 hover:text-primary transition ${
                        selectNav == item.id ? 'text-primary' : 'text-gray-700'
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* navigation bar for lg layout  */}
        <div className="hidden md:flex">
          <ul className="flex sm:space-x-4 md:space-x-4  lg:space-x-7">
            {NavList.map((nav) => (
              <li
                key={nav.id}
                value={nav.id}
                onClick={() => scrollToSection(nav.name, nav.id)}
                className={`  ${
                  selectNav == nav.id ? 'text-primary ' : ''
                }  capitalize text-gray-700 select-pointer  text-md lg:text-base tracking-wide select-none hover:text-primary   font-medium  hover:cursor-pointer transition-transform  duration-500  `}
              >
                {nav.name}
              </li>
            ))}
          </ul>
        </div>

        {/* navigation menu trigger for mobile*/}
        <div className="flex items-center gap-3 md:hidden z-10 text-center">
          <button className="text-xl flex text-gray-900 tracking-wide items-center font-bold" type="button" aria-label="Open menu" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
