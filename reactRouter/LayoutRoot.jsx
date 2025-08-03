import React from "react";
import Header from "./src/components/Header/Header";
import Footer from "./src/components/Footer/Footer";
import { Outlet } from "react-router-dom";
export const LayoutRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
