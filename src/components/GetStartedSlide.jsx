import React from "react";
import styles from "../ModuleCss/GetStarted.module.css";

const GetStartedSlide = ({ title, info, img, img2 }) => {
  return (
    <div className={`${styles.slide_1} ${styles.slide_item} mt-5 pt-5`}>
      <div className={styles.slide_media}>
        <img src={img} alt="Logo Icon" className={styles.logo_icon} />
        <img src={img2} width="130" />
      </div>
      <div className={`${styles.slide_content} mt-2`}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.slide_info}>{info}</p>
      </div>
    </div>
  );
};

export default GetStartedSlide;
