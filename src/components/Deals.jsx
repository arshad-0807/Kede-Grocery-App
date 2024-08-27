// import React from "react";
// import ImageRow from "./ImageRow";

// const Deals = ({ images }) => {
//   return (
//     <>
//       <ImageRow images={images} />
//     </>
//   );
// };

// export default Deals;

// import React from "react";
// import ImageRow from "./ImageRow";

// const Deals = ({ images, likedItems, onWishlistClick }) => {
//   return (
//     <>
//       <ImageRow
//         images={images}
//         likedItems={likedItems}
//         onWishlistClick={onWishlistClick}
//       />
//     </>
//   );
// };

// export default Deals;

// src/components/Deals.js
import React from "react";
import ImageRow from "./ImageRow";

const Deals = ({ images, onWishlistClick }) => {
  return <ImageRow images={images} onWishlistClick={onWishlistClick} />;
};

export default Deals;
