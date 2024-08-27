import React from "react";
import { NavLink } from "react-router-dom";
import HeaderSec from "./HeaderSec";
import "../ModuleCss/user.css";
const UserDashboard = () => {
  return (
    <>
      <HeaderSec title="User" />
      {/* <section className="section_gap"> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="important-sec">
              <div className="user-profile">
                <span>
                  <img src="/user.svg" alt="" width="30px" />
                </span>
                <NavLink to="/profile">MY PROFILE</NavLink>
              </div>

              <div className="user-profile">
                <span>
                  <img src="/star.svg" alt="" width="30px" />
                </span>
                <NavLink to="/notifications">NOTIFICATION</NavLink>
              </div>

              <div className="user-profile">
                <span>
                  <img src="/announcement.svg" alt="" width="30px" />
                </span>
                <NavLink to="/messages">MESSAGE</NavLink>
              </div>

              <div className="user-profile">
                <span>
                  <img src="/dashboard.svg" alt="" width="30px" />
                </span>
                <NavLink to="/elements">ELEMENTS</NavLink>
              </div>

              <div className="user-profile">
                <span>
                  <img src="/work.svg" alt="" width="30px" />
                </span>
                <NavLink to="/color-skins">COLOR SKINS</NavLink>
              </div>

              <div className="user-profile">
                <span>
                  <img src="/clipboard.svg" alt="" width="30px" />
                </span>
                <NavLink to="/logout">LOGOUT</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
    </>
  );
};

export default UserDashboard;
