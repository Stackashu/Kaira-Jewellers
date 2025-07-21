import styles from "../../styles/LandingPage/Catogories.module.css";
import React from "react";
import goldRingImg from "../../assets/Images/category/goldring.webp";
import pendantsCatImg from "../../assets/Images/category/pendants-cat.webp";
import silverRingImg from "../../assets/Images/category/silver ring.jpg";

const categoriesData = [
  {
    img: goldRingImg,
    label: "Gold",
  },
  {
    img: silverRingImg,
    label: "Silver",
  },
  {
    img: pendantsCatImg,
    label: "Diamond",
  },
];

const Catogories = () => {
  return (
    <div className={styles.Catogories_main}>
      <div className={styles.Catogories_title}>
        <h1>Categories</h1>
      </div>

      <div className={styles.Catogories_main_boxes}>
        {categoriesData.map((category, idx) => (
          <div className={styles.Catogories_boxes} key={idx}>
            <div   className={styles.Catogories_img}>
            <img
            
              src={category.img}
              alt={category.label}
            />
            </div>
           
            <h1 className={styles.catg_Name} >
              {category.label}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catogories;
