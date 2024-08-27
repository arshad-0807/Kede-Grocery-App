import React, { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [likedItems, setLikedItems] = useState([]);

  const addToWishlist = (item) => {
    setLikedItems((prevItems) => [...prevItems, item]);
  };

  return (
    <WishlistContext.Provider value={{ likedItems, addToWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
