import React from "react";
import HeaderSec from "../components/HeaderSec";

const SecLayout = ({ children }) => {
  return (
    <>
      <HeaderSec />
      <main>{children}</main>
    </>
  );
};

export default SecLayout;
