import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "../ModuleCss/HomeSlider.module.css";
import "../index.css";

const HomeSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={"auto"}
      className="mb-30 post-area"
    >
      <SwiperSlide
        style={{ marginRight: "10px" }}
        role="group"
        aria-label="1 / 4"
      >
        <div className={styles.post_card}>
          <div className={styles.post_media}>
            <img src="img/post/pic1.jpg" alt="Recommended Recipe Today" />
          </div>
          <div className={styles.post_info}>
            <h3 className={`${styles.title} title`}>
              Recommended Recipe Today
            </h3>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide
        style={{ marginRight: "10px" }}
        role="group"
        aria-label="2 / 4"
      >
        <div className={styles.post_card}>
          <div className={styles.post_media}>
            <img src="img/post/pic2.jpg" alt="Fresh Fruits Delivery" />
          </div>
          <div className={styles.post_info}>
            <h3 className={`${styles.title} title`}>Fresh Fruits Delivery</h3>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide
        style={{ marginRight: "10px" }}
        role="group"
        aria-label="3 / 4"
      >
        <div className={styles.post_card}>
          <div className={styles.post_media}>
            <img src="img/post/pic1.jpg" alt="Recommended Recipe Today" />
          </div>
          <div className={styles.post_info}>
            <h3 className={`${styles.title} title`}>
              Recommended Recipe Today
            </h3>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide
        style={{ marginRight: "10px" }}
        role="group"
        aria-label="4 / 4"
      >
        <div className={styles.post_card}>
          <div className={styles.post_media}>
            <img src="img/post/pic2.jpg" alt="Fresh Fruits Delivery" />
          </div>
          <div className={styles.post_info}>
            <h3 className={`${styles.title} title`}>Fresh Fruits Delivery</h3>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;
