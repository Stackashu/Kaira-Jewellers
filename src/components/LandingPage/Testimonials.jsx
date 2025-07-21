import style from "../../styles/LandingPage/Testimonials.module.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TestimonialCard from "../minicomponents/TestimonialCard";

const testimonialsData = [
  {
    name: "Amit Sharma",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Absolutely loved the craftsmanship ."
  },
  {
    name: "Rahul Verma",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Fast delivery and beautiful packaging"
  },
  {
    name: "Rahul Verma",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Fast delivery and beautiful packaging"
  },
  {
    name: "Rahul Verma",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Fast delivery and beautiful packaging"
  },
  {
    name: "Priya Singh",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "The jewelry exceeded my expectations."
  },
  {
    name: "Meera Joshi",
    img: "https://randomuser.me/api/portraits/women/23.jpg",
    text: "Support was very helpful and friendly."
  }
];

const Testimonials = () => {
  return (
    <div className={style.test_Cont}>
      <div className={`${style.bubble} ${style.b1}`}></div>
      <div className={`${style.bubble} ${style.b2}`}></div>
      <div className={`${style.bubble} ${style.b3}`}></div>
      <h1>Testimonials</h1>
        <Swiper
        modules={[ Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          // when window width is >= 0px
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 640px (tablet)
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 1024px (desktop)
          1024: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
        className={style.swiper}
      >
        {testimonialsData.map((testimonial, idx) => (
          <SwiperSlide key={idx}>
            <TestimonialCard
              name={testimonial.name}
              img={testimonial.img}
              text={testimonial.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
