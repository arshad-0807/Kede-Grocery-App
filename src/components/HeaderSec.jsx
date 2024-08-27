import React from "react";
import styles from "../ModuleCss/HeaderSec.module.css";
import { Link } from "react-router-dom";

const HeaderSec = ({ title }) => {
  return (
    <>
      <div className={`${styles.navbar} `}>
        <div className={`${styles.navbar_inner} container`}>
          <Link to="/home">
            <img src="/left-arrow.png" className="" alt="" width="30" />
          </Link>

          <h3 className={styles.header_title}>{title}</h3>

          <div className="right"></div>
        </div>
      </div>
    </>
  );
};

export default HeaderSec;
