import React from "react";
import styles from "../ModuleCss/SignIn.module.css";
import { Link } from "react-router-dom";
import LargeButton from "./LargeButton";
import TitleBar from "./TitleBar";

const ForgotPassword = () => {
  const LargeButtonData = [
    {
      text: "SUBMIT",
      url: "/sign-in",
    },
  ];
  const TitleBarData = [
    {
      title: "Forgot Password",
      url: "/sign-in",
      icon: "/cancel.png",
    },
  ];
  return (
    <>
      <div className={styles.sign_in_page_content}>
        <div className={styles.banner}></div>
        <div className={styles.banner_height}></div>
        <div className={styles.form_content}>
          <div className="container">
            {/* <div className={styles.title_bar_wrap}>
              <div className={styles.title_bar}>
                <h3 className="title mb-0">Forget Password</h3>
                <Link to="/sign-in">
                  <img
                    src="/cancel.png"
                    className={styles.cancel_icon}
                    alt=""
                    width="40"
                  />
                </Link>
              </div>
            </div> */}
            {TitleBarData.map((data, index) => (
              <TitleBar
                key={index}
                title={data.title}
                url={data.url}
                icon={data.icon}
              />
            ))}
            <form action="">
              <div className={styles.input_wrap}>
                <input type="text" placeholder="Enter Email Address" />
              </div>
              <div className={styles.input_wrap}>
                <input type="password" placeholder="Enter New Password" />
              </div>

              {LargeButtonData.map((data, index) => (
                <div className={styles.signin_btn} key={index}>
                  <LargeButton text={data.text} url={data.url} />
                </div>
              ))}
              <div className={`${styles.forgot_password_wrap} text-center`}>
                <span className="me-1 ">
                  Sign in to your registered account
                </span>
                <Link to="/sign-in" className="fw-bold">
                  Login here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
