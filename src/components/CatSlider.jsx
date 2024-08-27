import React from "react";
// import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import { Link } from "react-router-dom";
import "swiper/css/bundle";
import styles from "../ModuleCss/CatSlider.module.css";
const CatSlider = () => {
  return (
    <>
      <div className="cat-slider">
        <Swiper spaceBetween={20} slidesPerView={"auto"}>
          <SwiperSlide>
            <Link className={`${styles.cat_slide_tab} ${styles.button}`}>
              <img src="/grapes.svg" alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className={`${styles.cat_slide_tab} ${styles.button}`}>
              <img src="/cat2.svg" alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className={`${styles.cat_slide_tab} ${styles.button}`}>
              <img src="/mushroom.svg" alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className={`${styles.cat_slide_tab} ${styles.button}`}>
              <img src="/cat4.svg" alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className={`${styles.cat_slide_tab} ${styles.button}`}>
              <img src="/cat5.svg" alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className={`${styles.cat_slide_tab} ${styles.button}`}>
              <img src="/cat6.svg" alt="" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default CatSlider;
