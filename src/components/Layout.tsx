import React from "react";
import "../tailwind.output.css";

const Layout = ({ children }): JSX.Element => {
  return <div className="px-20 py-10">{children}</div>;
};

export default Layout;
