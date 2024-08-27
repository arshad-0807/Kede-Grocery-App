import styles from "../ModuleCss/product.module.css";
import TitleBar from "./TitleBar";
import { Link, NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import Header from "./Header";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

SwiperCore.use([Navigation, Pagination]);
const Product = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={`${styles.product_page_content} product_page_content`}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className={styles.product_image_slider}
        >
          <SwiperSlide className={styles.swiper_slide}>
            <div className={styles.banner}></div>
            <div className={styles.banner_height}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.slide_2} ${styles.slide_item} `}>
              <div className={styles.banner2}></div>
              <div className={styles.banner_height}></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
            <div className={`${styles.slide_3} ${styles.slide_item} `}>
              <div className={styles.banner3}></div>
              <div className={styles.banner_height}></div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={styles.banner_height}></div>
        <div className={styles.form_content}>
          <div className="container pt-3">
            <div className={styles.title_bar_wrap}>
              <div className={styles.title_bar}>
                <div className={styles.product_info}>
                  <h4 className={styles.category}>fruits</h4>
                  <h3 className="title mb-0 mt-2">Avacado</h3>
                </div>
                <div className={`${styles.product_price}  ${styles.flex}`}>
                  <h4 className={styles.price}>$12.99</h4>
                  <div className={`${styles.product_quantity} my-4`}>
                    <div
                      onClick={() =>
                        setCount((count) => Math.max(0, count - 1))
                      }
                      className={styles.minus}
                    ></div>
                    <p className={styles.quantity}>{count}</p>
                    <div
                      onClick={() =>
                        setCount((count) => Math.min(10, count + 1))
                      }
                      className={styles.plus}
                    ></div>
                  </div>
                </div>
                <div className={`${styles.reviews}  ${styles.flex}`}>
                  <div className={`${styles.review_info}`}>
                    <FontAwesomeIcon
                      icon={faStar}
                      className={styles.rating_star}
                    />
                    <h5 className={styles.rating}>4.5</h5>
                    <p className={styles.total_reviews}>(128 reviews)</p>
                  </div>
                  <div className={styles.avatar_group}>
                    <img src="/avatar1.jpg" alt="" />
                    <img src="/avatar2.jpg" alt="" />
                    <img src="/avatar3.jpg" alt="" />
                  </div>
                </div>
                <div className={styles.product_toolbar}>
                  <div className={styles.product_toolbar_inner}>
                    <NavLink to="#tab1" activeClassName={styles.active_tab}>
                      Description
                    </NavLink>
                    <NavLink to="#tab2" activeClassName={styles.active_tab}>
                      Review
                    </NavLink>
                    <NavLink to="#tab3" activeClassName={styles.active_tab}>
                      Discussion
                    </NavLink>
                  </div>
                </div>
                <Swiper spaceBetween={50} slidesPerView={1}>
                  <SwiperSlide id="tab1">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam1
                    </p>
                  </SwiperSlide>
                  <SwiperSlide id="tab2">
                    <div className={styles.review_list}>
                      <ul>
                        <li>
                          <Link>
                            <div className={styles.review_media}>
                              <img src="/avatar1.jpg" alt="" />
                            </div>
                            <div className={styles.review_info}>
                              <div className={styles.title_row}>
                                <h5 className={styles.user_name}>
                                  James Logan
                                </h5>
                                <div className={styles.rating_stars}>
                                  <FontAwesomeIcon icon={faStar} />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide id="tab3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam3
                    </p>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
