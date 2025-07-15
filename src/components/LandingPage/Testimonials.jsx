import style from "../../styles/LandingPage/Testimonials.module.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const testimonialsData = [
  {
    name: "Kaira Advani",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    stars: 5,
    text: "Best Products ever bought."
  },
  {
    name: "Amit Sharma",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
    text: "Best Products ever bought."
  },
  {
    name: "Priya Singh",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    stars: 5,
    text: "Best Products ever bought."
  },
  {
    name: "Priya Singh",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    stars: 5,
    text: "Best Products ever bought."
  },
  {
    name: "Priya Singh",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    stars: 5,
    text: "Best Products ever bought."
  },
  {
    name: "Priya Singh",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    stars: 5,
    text: "Best Products ever bought."
  } 
];

const Testimonials = () => {
  return (
    <div className={style.testimonials_main}>
      <div className={style.testimonials}>
        <h1>Testimonials</h1>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Scrollbar]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        // scrollbar={{ draggable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className={style.testimonials_boxes_wrapper}
        style={{ padding: "3rem 0" }}
      >
        {testimonialsData.map((testimonial, idx) => (
          <SwiperSlide key={idx}>
            <div className={style.testimonials_boxes}>
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className={style.testimonials_img}
              />
              <div className={style.testimonial_content}>
                <h1 className={style.testimonial_name}>{testimonial.name}</h1>
                <div className={style.testimonial_stars}>
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#FFD700" xmlns="http://www.w3.org/2000/svg" style={{marginRight: 2}}>
                      <polygon points="10,1.5 12.6,7.5 19,8 14,12.2 15.5,18.3 10,15 4.5,18.3 6,12.2 1,8 7.4,7.5" />
                    </svg>
                  ))}
                </div>
                <p className={style.testimonial_text}>{testimonial.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;

