import React from "react";
import Footer from "../components/Footer";

const FifthLayout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default FifthLayout;
