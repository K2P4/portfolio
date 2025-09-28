// routes/index.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import {Layout} from "@layout";
import {Home} from "@pages";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
