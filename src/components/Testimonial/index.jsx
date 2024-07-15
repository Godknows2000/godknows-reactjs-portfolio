import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { avarta } from "../../images";

const data = [
  {
    avatar: avarta,
    name: "Tendai Chikumene",
    review:
      "Working with Godknows was a game-changer for our startup. Their expertise in web development turned our vision into reality swiftly and seamlessly. Our users love the intuitive design and smooth functionality of our new platform.",
  },
  {
    avatar: avarta,
    name: "Tinashe",
    review:
      "Choosing Godknows for my web development needs was the best decision I made. He delivered a robust, secure, and visually appealing website that perfectly captures my brand essence. Their professionalism and skill are unmatched.",
  },
  {
    avatar: avarta,
    name: "Stallone Chabvuta",
    review:
      "Godknows exceeded our expectations with their meticulous approach to developing our Asset management site. They ensured every aspect, from user interface to backend performance, was top-notch. Highly recommend their services!",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="primary__title">Testimonial's</h2>
          <p className="description">
            Explore client testimonials showcasing their experiences
            collaborating with me as their trusted web developer. Whether for
            startups or established businesses, my commitment to creating
            outstanding online experiences resonates in their feedback.
          </p>
        </div>

        <Swiper
          className="testimonial__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            700: {
              slidesPerView: 2,
            },
          }}
        >
          {data.map(({ avatar, name, review }, index) => (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h3 className="client__name">{name}</h3>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
