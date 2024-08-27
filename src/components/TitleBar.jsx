import React from "react";
import styles from "../ModuleCss/SignIn.module.css";
import { Link } from "react-router-dom";

const TitleBar = ({ title, url, icon }) => {
  return (
    <>
      <div className={styles.title_bar_wrap}>
        <div className={styles.title_bar}>
          <h3 className="title mb-0">{title}</h3>
          <Link to={url}>
            <img src={icon} className={styles.cancel_icon} alt="" width="40" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TitleBar;
