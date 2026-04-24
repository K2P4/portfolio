import { Outlet } from "react-router-dom";
import { Footer, Nav } from "@layout";
import Chatbot from "../components/Chatbot";
import StructuredData from "../components/StructuredData";

export default function Layout() {
  return (
    <div className="layout overflow-x-hidden">
      <div className="sm:w-[80%] w-[90%] h-full mx-auto ">
        <StructuredData />
        <Nav />
        <Outlet />
      </div>
      <Chatbot />
      <Footer  />
    </div>
  );
}

