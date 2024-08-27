import React from "react";
import { Link } from "react-router-dom";
import Styles from "../ModuleCss/LargeButton.module.css";

const LargeButton = ({ text, url }) => {
  return (
    <>
      <div className="bottom-button">
        {/* <div className="container"> */}
        <Link to={url} className={Styles.large_button}>
          {text}
        </Link>
        {/* </div> */}
      </div>
    </>
  );
};

export default LargeButton;
