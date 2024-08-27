import React from "react";
import styles from "../ModuleCss/SignIn.module.css";
import { Link } from "react-router-dom";
import LargeButton from "./LargeButton";
import TitleBar from "./TitleBar";

const SignUp = () => {
  const LargeButtonData = [
    {
      text: "CREATE AN ACCOUNT ",
      url: "/sign-up",
    },
  ];
  const TitleBarData = [
    {
      title: "Create Your Account",
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
              <div
                className={`${styles.input_wrap} d-flex align-items-center `}
              >
                <label htmlFor="f_name"></label>
                <input
                  type="text"
                  name="f_name"
                  id="f_name"
                  placeholder="First Name"
                  className="me-2 d-inline-block"
                />
                <label htmlFor="l_name"></label>
                <input
                  type="text"
                  name="l_name"
                  id="l_name"
                  placeholder="Last Name"
                  className="ms-2 d-inline-block"
                />
              </div>
              <div className={styles.input_wrap}>
                <label htmlFor="email"></label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter Email Address"
                />
              </div>
              <div className={styles.input_wrap}>
                <label htmlFor="password"></label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                />
              </div>
              <div className={`${styles.forgot_password_wrap} text-center`}>
                <span className="me-1 ">
                  <span className="me-1">
                    By tapping Sign up you accept all
                  </span>
                  <Link to="/sign-in" className="fw-bold">
                    Terms
                  </Link>
                  <span className="ms-1">and</span>
                </span>
                <Link to="/sign-in" className="fw-bold">
                  Conditions
                </Link>
              </div>

              {LargeButtonData.map((data, index) => (
                <div className={styles.signin_btn}>
                  <LargeButton key={index} text={data.text} url={data.url} />
                </div>
              ))}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
