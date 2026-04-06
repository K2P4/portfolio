import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavList } from '../data/nav';
import { AiOutlineClose } from 'react-icons/ai';
import useScrollManager from '../hooks/useScrollManager';
import useMobileMenu from '../hooks/useMobileMenu';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Nav() {
  const nav = useNavigate();
  const { isFixed, selectNav, scrollToSection } = useScrollManager({ fixedThreshold: 500 });
  const { toggle, MenuRef, toggleMenu, closeMenu } = useMobileMenu();

  const handleScrollToSection = (name, id) => {
    scrollToSection(name, id);
    closeMenu();
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
            onClick={closeMenu}
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
              <h1 className=" select-none items-center  text-gray-900  header font-bold tracking-wide">THURA</h1>
              <button type="button" onClick={closeMenu} className=" bg-transparent hover:text-primary rounded-md p-2" aria-label="Close menu">
                <AiOutlineClose className="text-xl" />
              </button>
            </div>
            <nav className="px-4 py-4 overflow-y-auto ">
              <ul className="space-y-2 font-medium">
                {NavList.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleScrollToSection(item.name, item.id)}
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
          <ul className="flex sm:space-x-4 md:space-x-5  lg:space-x-7">
            {NavList.map((nav) => (
              <li
                key={nav.id}
                value={nav.id}
                onClick={() => handleScrollToSection(nav.name, nav.id)}
                className={`  ${
                  selectNav == nav.id ? 'text-primary ' : ''
                }  capitalize text-gray-700 select-pointer  text-md lg:text-base tracking-wide select-none hover:text-primary   font-medium  hover:cursor-pointer transition-transform  duration-500  `}
              >
                {nav.name}
              </li>
            ))}
          </ul>
        </div>

        {/*  mobile*/}
        <div className="flex items-center gap-3 md:hidden z-10 text-center">
          <button className="text-xl flex text-gray-900 tracking-wide items-center font-bold" type="button" aria-label="Open menu" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  );
}
