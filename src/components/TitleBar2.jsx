import React from "react";
import styles from "../ModuleCss/SignIn.module.css";
import { Link } from "react-router-dom";

const TitleBar2 = ({ title, url, icon }) => {
  return (
    <>
      <div className={`${styles.title_bar_wrap} mt-4 mb-3`}>
        <div className={styles.title_bar}>
          <h3 className={`${styles.title_tb} title mb-0`}>Categories</h3>
          <Link to="">
            <img src="/right-arrow.png" className="" alt="" width="28" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TitleBar2;
