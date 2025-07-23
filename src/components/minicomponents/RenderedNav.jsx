import React, { useState } from "react";
import style from "../../styles/minicomponents/RenderedNav.module.css";
import img from "../../assets/Images/jewellery.jpg";

const items = [
  {
    name: "Gold",
    items: [
      "Jhumkas",
      "Bangles",
      "Necklaces",
      "Kadas",
      "Earrings",
      "Bracelets",
      "Gold Chains",
      "Pendants",
      "Rings",
      "Engagement Rings",
      "Nose Pins",
      "Mangalsutras"
    ]
  },
  {
    name: "Diamond",
    items: [
      "Rings",
      "Bracelets",
      "Gold Chains",
      "Earrings",
      "Bangles",
      "Necklaces",
      "Jhumkas",
      "Engagement Rings",
      "Mangalsutras",
      "Nose Pins",
      "Kadas",
      "Pendants"
    ]
  },
  {
    name: "Silver",
    items: [
      "Mangalsutras",
      "Nose Pins",
      "Kadas",
      "Pendants",
      "Jhumkas",
      "Bangles",
      "Bracelets",
      "Earrings",
      "Gold Chains",
      "Rings",
      "Engagement Rings",
      "Necklaces"
    ]
  }
];

const category = ["Diamond", "Gold", "Silver"];

const RenderedNav = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className={style.outer_Nav}>
      <div className={style.renNav_Wrapper}>
        {/* left bar  */}
        <div className={style.left_Col}>
          {/* category  */}
          <div className={style.categories}>
            {category.map((ctg, idx) => (
              <h2
                key={ctg}
                className={activeIdx === idx ? style.active : ""}
                onClick={() => setActiveIdx(idx)}
              >
                {ctg}
              </h2>
            ))}
          </div>
          <div className={style.middle_ctgy}>
            {items[activeIdx].items.map((subItem, idx) => (
              <div key={subItem + idx}>
                {/* You can add an image for each subItem if available */}
                {/* <img src="" alt="" /> */}
                <h1>{subItem}</h1>
              </div>
            ))}
          </div>
        </div>
        {/* right bar  */}
        <div className={style.right_Col}>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RenderedNav;
