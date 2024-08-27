// import React from "react";
import styles from "../ModuleCss/SignIn.module.css";
import { Link } from "react-router-dom";
import LargeButton from "./LargeButton";
import TitleBar from "./TitleBar";

const SignIn = () => {
  const LargeButtonData = [
    {
      text: "SIGN IN",
      url: "/home",
    },
    {
      text: "CREATE AN ACCOUNT ",
      url: "/sign-up",
    },
  ];
  const TitleBarData = [
    {
      title: "Sign In",
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
                <input type="password" placeholder="Enter Password" />
              </div>
              <div className={`${styles.forgot_password_wrap} text-center`}>
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>

              {LargeButtonData.map((data, index) => (
                <div className={styles.signin_btn} key={index}>
                  <LargeButton text={data.text} url={data.url} />
                </div>
              ))}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
