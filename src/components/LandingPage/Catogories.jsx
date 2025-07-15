import styles from "../../styles/LandingPage/Catogories.module.css";
import React from "react";

const categoriesData = [
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400&q=80",
    label: "Gold",
  },
  {
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400&q=80",
    label: "Silver",
  },
  {
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=400&q=80",
    label: "Diamond",
  },
];

const Catogories = () => {
  return (
    <div>
      <div className={styles.Catogories_main}>
        <div className={styles.Catogories_title}>
          <h1>Categories</h1>
        </div>
        <div className={styles.Catogories_main_boxes}>
          {categoriesData.map((category, idx) => (
            <div className={styles.Catogories_boxes} key={idx}>
              <img
                className={styles.Catogories_img}
                src={category.img}
                alt={category.label}
              />
              <button className={styles.Catogories_button} type="button">
                {category.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catogories;
