// import React from "react";
// import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCartShopping,
//   faHeart,
//   faHouse,
//   faRightLeft,
// } from "@fortawesome/free-solid-svg-icons";

// const Footer = () => {
//   return (
//     <div className="menu-bar nav-bar mt-3">
//       <div className="menu-bar-inner">
//         <NavLink
//           to="/home"
//           className={({ isActive }) => `menu-link ${isActive ? "active" : ""}`}
//         >
//           <FontAwesomeIcon icon={faHouse} className="menu-icon" />
//         </NavLink>
//         <NavLink
//           to="/categories"
//           className={({ isActive }) => `menu-link ${isActive ? "active" : ""}`}
//         >
//           <FontAwesomeIcon icon={faRightLeft} className="menu-icon" />
//         </NavLink>
//         <NavLink
//           to="/cart"
//           className={({ isActive }) => `menu-link ${isActive ? "active" : ""}`}
//         >
//           <FontAwesomeIcon icon={faCartShopping} className="menu-icon" />
//         </NavLink>
//         <NavLink
//           to="/wishlist"
//           className={({ isActive }) => `menu-link ${isActive ? "active" : ""}`}
//         >
//           <FontAwesomeIcon icon={faHeart} className="menu-icon" />
//         </NavLink>
//         <NavLink
//           to="/profile"
//           className={({ isActive }) => `menu-link ${isActive ? "active" : ""}`}
//         >
//           <img src="/user.jpg" alt="" className="user-img" />
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faHouse,
  faRightLeft,
} from "@fortawesome/free-solid-svg-icons";
import "../index.css";

const Footer = () => {
  return (
    <div className="menu-bar nav-bar mt-3">
      <div className="menu-bar-inner">
        <NavLink
          to="/home"
          className={({ isActive }) => `menu-link ${isActive ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faHouse} className="menu-icon" />
        </NavLink>
        <NavLink
          to="/categories"
          className={({ isActive }) => `menu-link ${isActive ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faRightLeft} className="menu-icon" />
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => `menu-link ${isActive ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faCartShopping} className="menu-icon" />
        </NavLink>
        <NavLink
          to="/wishlist"
          className={({ isActive }) => `menu-link ${isActive ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faHeart} className="menu-icon" />
        </NavLink>
        <NavLink
          to="/user-dashboard"
          className={({ isActive }) => `menu-link ${isActive ? "active" : ""}`}
        >
          <img src="/user.jpg" alt="User Profile" className="user-img" />
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
