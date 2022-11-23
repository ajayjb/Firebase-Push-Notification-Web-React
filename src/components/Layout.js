import React from "react";
import { Outlet } from "react-router-dom";
import "../app.css";

const Layout = () => {
  return (
    <div className="app">
      <Outlet />
    </div>
  );
};

export default Layout;
