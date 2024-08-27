import { useContext } from "react";

import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import { Link } from "react-router-dom";
import "swiper/css/bundle";
import TitleBar2 from "./TitleBar2";
import CatSlider from "./CatSlider";
import "../ModuleCss/SliderConflict.css";
import TitleBar3 from "./TitleBar3";
import Deals from "./Deals";
import LargeButton from "./LargeButton";
import { WishlistContext } from "../Context/WishlistContext";

const Home = () => {
  const { addToWishlist } = useContext(WishlistContext);
  const imagesSet1 = ["/deal1.jpg", "/deal2.jpg", "/deal3.jpg", "/deal4.jpg"];

  const handleWishlistClick = (image) => {
    addToWishlist(image);
  };

  const LargeButtonData = [
    {
      text: "Load More ",
      url: "/sign-up",
    },
  ];

  return (
    <>
      <div className="home-page-content">
        <div className="container">
          <div className="home-slider">
            <Swiper spaceBetween={20} slidesPerView={"auto"}>
              <SwiperSlide>
                <div className="slide_item post-card">
                  <div className="post-media">
                    <img src="/card1.jpg" alt="" />
                  </div>
                  <div className="post-info">
                    <h3 className="title">Recomended Recipe Today</h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide_item post-card">
                  <div className="post-media">
                    <img src="/card2.jpg" alt="" />
                  </div>
                  <div className="post-info">
                    <h3 className="title">Recomended Recipe Today</h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide_item post-card">
                  <div className="post-media">
                    <img src="/card1.jpg" alt="" />
                  </div>
                  <div className="post-info">
                    <h3 className="title">Recomended Recipe Today</h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide_item post-card">
                  <div className="post-media">
                    <img src="/card2.jpg" alt="" />
                  </div>
                  <div className="post-info">
                    <h3 className="title">Recomended Recipe Today</h3>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <TitleBar2 />
          <CatSlider />
          <TitleBar3 />
          <Deals images={imagesSet1} onWishlistClick={handleWishlistClick} />
          {LargeButtonData.map((data, index) => (
            <div className="mt-3 show-more-button" key={index}>
              <LargeButton text={data.text} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
