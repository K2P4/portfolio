import { Outlet } from "react-router-dom";
import { Footer, Nav } from "@layout";
import Chatbot from "../components/Chatbot";

export default function Layout() {
  return (
    <div className="layout overflow-x-hidden transition-colors duration-300">
      <div className="sm:w-[80%] w-[90%] h-full mx-auto ">
        <Nav />
        <Outlet />
      </div>
      <Chatbot />
      <Footer  />
    </div>
  );
}

