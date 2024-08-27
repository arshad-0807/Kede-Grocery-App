// // import React, { useState } from "react";

// // const ImageRow = ({ images }) => {
// //   const [likedItems, setLikedItems] = useState(
// //     Array(images.length).fill(false)
// //   );

// //   const handleWishlistClick = (index) => {
// //     const updatedLikes = likedItems.map((item, idx) =>
// //       idx === index ? !item : item
// //     );
// //     setLikedItems(updatedLikes);
// //   };

// //   return (
// //     <div className="container">
// //       <div className="row">
// //         {images.map((src, index) => (
// //           <div className="col-lg-3 col-md-3 col-6" key={index}>
// //             <div className="item-box">
// //               <div className="item-media">
// //                 <img src={src} alt={`Deal ${index + 1}`} />
// //               </div>
// //               <label
// //                 className="wishlist-btn"
// //                 onClick={() => handleWishlistClick(index)}
// //               >
// //                 <input type="checkbox" checked={likedItems[index]} readOnly />
// //                 <span
// //                   className={`checkmark ${likedItems[index] ? "liked" : ""}`}
// //                 ></span>
// //               </label>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ImageRow;

// import React, { useState } from "react";
// import "../index.css";

// const ImageRow = () => {
//   const [likedItems, setLikedItems] = useState([
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//   ]);

//   // Array of image sources
//   const images = ["/deal1.jpg", "/deal2.jpg", "/deal3.jpg", "/deal4.jpg"];

//   const handleWishlistClick = (index) => {
//     const updatedLikes = likedItems.map((item, idx) =>
//       idx === index ? !item : item
//     );
//     setLikedItems(updatedLikes);
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         {images.map((src, index) => (
//           <div className="col-lg-3 col-md-3 col-6" key={index}>
//             <div className="item-box">
//               <div className="item-media">
//                 <img src={src} alt={`Deal ${index + 1}`} />
//               </div>
//               <label
//                 htmlFor=""
//                 className="wishlist-btn"
//                 onClick={() => handleWishlistClick(index)}
//               >
//                 <input type="checkbox" checked={likedItems[index]} readOnly />
//                 <span
//                   className={`checkmark ${likedItems[index] ? "liked" : ""}`}
//                 ></span>
//               </label>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageRow;

// import React, { useState } from "react";
// import "../index.css";

// const ImageRow = ({ images }) => {
//   // Initialize likedItems state with the length of the images array
//   const [likedItems, setLikedItems] = useState(
//     Array(images.length).fill(false)
//   );

//   const handleWishlistClick = (index) => {
//     const updatedLikes = likedItems.map((item, idx) =>
//       idx === index ? !item : item
//     );
//     setLikedItems(updatedLikes);
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         {images.map((src, index) => (
//           <div className="col-lg-3 col-md-3 col-6" key={index}>
//             <div className="item-box">
//               <div className="item-media">
//                 <img src={src} alt={`Deal ${index + 1}`} />
//               </div>
//               <label
//                 className="wishlist-btn"
//                 onClick={() => handleWishlistClick(index)}
//               >
//                 <input type="checkbox" checked={likedItems[index]} readOnly />
//                 <span
//                   className={`checkmark ${likedItems[index] ? "liked" : ""}`}
//                 ></span>
//               </label>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageRow;

// src/components/ImageRow.js
import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";

const ImageRow = ({ images, onWishlistClick }) => {
  const [likedItems, setLikedItems] = useState(
    Array(images.length).fill(false)
  );

  const handleWishlistClick = (index) => {
    const updatedLikes = likedItems.map((item, idx) =>
      idx === index ? !item : item
    );
    setLikedItems(updatedLikes);

    // Add the item to the wishlist if it's liked
    if (!likedItems[index]) {
      onWishlistClick(images[index]);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {images.map((src, index) => (
          <div className="col-lg-3 col-md-3 col-6" key={index}>
            <div className="item-box">
              <div className="item-media">
                <img src={src} alt={`Deal ${index + 1}`} />
              </div>
              <label
                className="wishlist-btn"
                onClick={() => handleWishlistClick(index)}
              >
                <input type="checkbox" checked={likedItems[index]} readOnly />
                <span
                  className={`checkmark ${likedItems[index] ? "liked" : ""}`}
                ></span>
              </label>
              <div className="item-content">
                <h3 className="title">
                  <Link
                    to="/product"
                    className="text-white text-decoration-none"
                  >
                    Avocado
                  </Link>
                </h3>
                <h4 className="price">$6.7</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageRow;
