import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="columns mt-6">
        <div className="column is-2">
          <Sidebar />
        </div>
        <div className="column">
          <main>{React.cloneElement(children, {})}</main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
