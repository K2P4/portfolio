import { NavList } from '../data/nav';
import { AiOutlineClose } from 'react-icons/ai';
import useScrollManager from '../hooks/useScrollManager';
import useMobileMenu from '../hooks/useMobileMenu';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import useTheme from '../hooks/useTheme';

export default function Nav() {
  const { isFixed, selectNav, scrollToSection } = useScrollManager({ fixedThreshold: 500 });
  const { toggle, MenuRef, toggleMenu, closeMenu } = useMobileMenu();
  const { isDark, toggleTheme } = useTheme();

  const handleScrollToSection = (name, id) => {
    scrollToSection(name, id);
    closeMenu();
  };

  return (
    <div className="">
      <div
        className={`relative flex py-6 sm:py-10 lg:pt-8 lg:pb-0 justify-between md:justify-center items-center ${
          isFixed ? 'md:fixed  md:left-1/2 md:-translate-x-1/2 md:z-50 md:w-auto md:py-0' : ''
        }`}
      >
        {/* sheet */}
        <div className={`md:hidden ${toggle ? 'fixed inset-0 z-40' : ''}`}>
          <button
            aria-label="Close menu overlay"
            onClick={closeMenu}
            className={`absolute inset-0 transition-opacity duration-300 ${toggle ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          />
          <div
            ref={MenuRef}
            className={`fixed top-0 left-0 h-screen w-80 max-w-[85%] bg-white dark:bg-slate-950 shadow-xl z-50 transform transition-transform duration-300 ease-out ${toggle ? 'translate-x-0' : '-translate-x-full'}`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation drawer"
          >
            <div className="px-5 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="select-none items-center text-gray-900 dark:text-slate-100 header font-bold tracking-wide">Menu</div>
              <button type="button" onClick={closeMenu} className="bg-transparent text-slate-700 dark:text-slate-300 hover:text-primary rounded-md p-2" aria-label="Close menu">
                <AiOutlineClose className="text-xl" />
              </button>
            </div>
            <div className="px-4 pt-4">
              <button
                type="button"
                onClick={toggleTheme}
                className="surface-panel flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200"
                aria-label="Toggle color theme"
              >
                {isDark ? <BsSunFill className="text-amber-400" /> : <BsMoonStarsFill className="text-slate-700" />}
                {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              </button>
            </div>
            <nav className="px-4 py-4 overflow-y-auto ">
              <ul className="space-y-2 font-medium">
                {NavList.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleScrollToSection(item.name, item.id)}
                      className={`w-full text-left capitalize text-base px-4 py-4 rounded-md hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-primary transition ${
                        selectNav == item.id ? 'text-primary' : 'text-gray-700 dark:text-slate-300'
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
        <div className="hidden md:flex items-center gap-3">
          <ul
            className={`rounded-full px-4 py-2 flex items-center gap-2 border shadow-xl transition-colors duration-300 ${
              isDark
                ? 'border-slate-700 bg-slate-900 text-slate-200 shadow-slate-950/20'
                : 'border-slate-200/80 bg-white/95 text-slate-700 shadow-slate-300/20 backdrop-blur-sm'
            }`}
          >
            {NavList.map((nav) => (
              <li
                key={nav.id}
                value={nav.id}
                onClick={() => handleScrollToSection(nav.name, nav.id)}
                className={`${
                  selectNav == nav.id
                    ? 'text-primary'
                    : isDark
                      ? 'text-slate-300 hover:text-white'
                      : 'text-slate-700 hover:text-slate-950'
                } px-5 py-2 capitalize text-sm lg:text-base tracking-wide select-none font-semibold hover:cursor-pointer transition-all duration-300`}
              >
                {nav.name}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={toggleTheme}
            className="surface-panel inline-flex items-center justify-center rounded-full p-3 text-slate-700 dark:text-slate-100"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <BsSunFill className="text-amber-400" /> : <BsMoonStarsFill />}
          </button>
        </div>

        {/*  mobile*/}
        <div className="flex w-full items-center justify-between md:hidden z-10 text-center">
          <button
            type="button"
            onClick={toggleTheme}
            className="surface-panel inline-flex items-center justify-center rounded-full p-2.5 text-slate-700 dark:text-slate-100"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <BsSunFill className="text-amber-400" /> : <BsMoonStarsFill />}
          </button>
          <button className="text-xl flex text-gray-900 dark:text-slate-100 tracking-wide items-center font-bold" type="button" aria-label="Open menu" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  );
}
