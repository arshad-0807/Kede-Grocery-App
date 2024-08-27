import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import styles from "../ModuleCss/GetStarted.module.css";
import LargeButton from "./LargeButton";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import GetStartedSlide from "./GetStartedSlide";

SwiperCore.use([Navigation, Pagination]);

const GetStarted = () => {
  // const slideData = [
  //   {
  //     title: "Welcome to Kede! Your grocery application",
  //     info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  //     img: "./logo-icon.png",
  //     img2: "./logo-text-dark.png",
  //   },
  //   {
  //     title: "We provide the best quality products to your family",
  //     info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  //     img: "./slide2.svg",
  //     img2: "",
  //   },
  //   {
  //     title: "Fast and responsible delivery by our courier",
  //     info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  //     img: "./slide3.svg",
  //     img2: "",
  //   },
  // ];
  const LargeButtonData = [
    {
      text: "GET STARTED",
      url: "/sign-in",
    },
  ];
  return (
    <>
      <div
        className={`${styles.getstarted_page_content} get-started container`}
      >
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className={`${styles.slide_1} ${styles.slide_item} mt-5 pt-5`}>
              <div className={styles.slide_media}>
                <img
                  src="./logo-icon.png"
                  alt="Logo Icon"
                  className={styles.logo_icon}
                />
                <img src="./logo-text-dark.png" width="130" />
              </div>
              <div className={`${styles.slide_content} mt-2`}>
                <h1 className={`${styles.title} text-center`}>
                  Welcome to Kede! Your grocery application
                </h1>
                <p className={styles.slide_info}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.slide_1} ${styles.slide_item} mt-5 pt-5`}>
              <div className={styles.slide_media}>
                <img
                  src="./slide2.svg"
                  alt="Logo Icon"
                  // className={styles.logo_icon}
                />
              </div>
              <div className={`${styles.slide_content} mt-2`}>
                <h1 className={`${styles.title} text-center`}>
                  We provide the best quality products to your family
                </h1>
                <p className={styles.slide_info}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.slide_1} ${styles.slide_item} mt-5 pt-5`}>
              <div className={styles.slide_media}>
                <img
                  src="./slide3.svg"
                  alt="Logo Icon"
                  // className={styles.logo_icon}
                />
              </div>
              <div className={`${styles.slide_content} mt-2`}>
                <h1 className={`${styles.title} text-center`}>
                  Fast and responsible <br /> delivery by our courier
                </h1>
                <p className={styles.slide_info}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {LargeButtonData.map((data, index) => (
          <LargeButton key={index} text={data.text} url={data.url} />
        ))}
      </div>
    </>
  );
};

export default GetStarted;
