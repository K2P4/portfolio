// routes/index.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../Page/Home.page";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        
      </Route>
    </Routes>
  );
};

export default AppRoutes;
