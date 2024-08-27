import React from "react";
import styles from "../ModuleCss/SignIn.module.css";
import { Link } from "react-router-dom";
import "../index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <div className="header-content mt-3">
        <div className="container">
          <div className={styles.title_bar_wrap}>
            <div className={styles.title_bar}>
              <div className="user-info">
                <span className="text ">Good Morning</span>
                <h3 className="title mb-0 mt-2">Samuel Witwicky</h3>
              </div>
              <div className="media">
                <Link to="" className="notibell">
                  <FontAwesomeIcon icon={faBell} />
                  <div className="badge"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
