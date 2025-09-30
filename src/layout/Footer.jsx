import { useEffect, useState } from "react";
import { Social } from "@components";
import { FaAngleUp } from "react-icons/fa6";
import { NavList } from "../data/nav";

export const Footer = () => {
  const [showToTop, setShowToTop] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      setShowToTop(window.scrollY > 240);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="w-full relative border-t border-slate-300/40 bg-gradient-to-b from-white to-slate-50/70 backdrop-blur-[1px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <nav aria-label="Footer Navigation" className="w-full">
          <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 cardFont">
            {NavList.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.name)}
                  className="capitalize text-sm sm:text-base text-slate-700 hover:text-primary transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded px-1"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="">
          <Social isFooter={true} />
        </div>
      </div>

      {/* Scroll Btn */}
      <div className="pointer-events-none">
        <button
          type="button"
          aria-label="Scroll to top"
          onClick={scrollToTop}
          className={`fixed  bottom-40 sm:bottom-32 animate-bounce right-[50%] z-40 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 ring-1 ring-white/50 transition-all duration-300   ${
            showToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ pointerEvents: showToTop ? "auto" : "none" }}
        >
          <FaAngleUp className="h-5 w-5" />
        </button>
      </div>
    </footer>
  );
};
