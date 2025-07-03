// layout/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { FooterComponent, NavComponent } from "../Components";

const Layout = () => {
  return (
    <div className="layout">
      <div className="sm:w-[80%]  w-[90%]  h-full  mx-auto">
        <NavComponent />
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
};

export default Layout;
