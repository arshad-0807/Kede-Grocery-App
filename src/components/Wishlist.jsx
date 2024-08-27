// import React from "react";
// import Deals from "./Deals";
// import HeaderSec from "./HeaderSec";

// const Wishlist = () => {
//   return (
//     <>
//
//     </>
//   );
// };

// export default Wishlist;

// src/components/Wishlist.js
import React, { useContext } from "react";
import Deals from "./Deals";
import { WishlistContext } from "../Context/WishlistContext";
import HeaderSec from "./HeaderSec";

const Wishlist = () => {
  const { likedItems } = useContext(WishlistContext);

  return (
    <>
      <HeaderSec title="Wishlist" />
      <div className="Wishlist-content">
        <Deals images={likedItems} />
      </div>
    </>
  );
};

export default Wishlist;
