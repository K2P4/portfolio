import { Outlet } from "react-router-dom";
import { Footer, Nav } from "@layout";

export const Layout = () => {
  return (
    <div className="layout overflow-x-hidden">
      <div className="sm:w-[80%] w-[90%] h-full mx-auto ">
        <Nav />
        <Outlet />
      </div>
      <Footer  />
    </div>
  );
};

