import React, { useRef, useEffect } from "react";
import "./Services.css";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { BsCodeSquare } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Services = () => {
  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const el = container.current;
    gsap.fromTo(
      ".service__head",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
    gsap.fromTo(
      ".service",
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "-100% bottom",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section id="services" ref={container}>
      <div className="section__wrapper services__wrapper">
        <div className="section__header center">
          <h2 className="primary__title">Services</h2>
          <p className="text__muted description">
            I turn your ideas and aspirations into a unique web project that
            both inspires you and engages your customers.
          </p>
        </div>
        <div className="services__group">
          <article className="service">
            <div className="service__top">
              <div className="icon__container">
                <BsCodeSquare className="icon" />
              </div>
              <h3 className="title">Software Development</h3>
            </div>
            <div className="service__middle">
              <p className="text__muted description">
                Design and develop robust software solutions customized to meet
                clients' unique needs, utilizing a range of technologies and
                frameworks to deliver efficient and scalable applications.
              </p>
            </div>
            <div className="service__bottom">
              <button className="btn btn__primary">Read More</button>
            </div>
          </article>

          <article
            className="service"
            style={{ "--color-primary": "var(--color-success)" }}
          >
            <div className="service__top">
              <div className="icon__container">
                <FaMobile className="icon" />
              </div>
              <h3 className="title">Mobile App Development</h3>
            </div>
            <div className="service__middle">
              <p className="text__muted description">
                Develop cross-platform mobile applications using Flutter,
                ensuring seamless and engaging user experiences on both iOS and
                Android devices.
              </p>
            </div>
            <div className="service__bottom">
              <button className="btn btn__primary">Read More</button>
            </div>
          </article>

          <article
            className="service"
            style={{ "--color-primary": "blueviolet" }}
          >
            <div className="service__top">
              <div className="icon__container">
                <FaGlobe className="icon" />
              </div>
              <h3 className="title">Hosting Websites</h3>
            </div>
            <div className="service__middle">
              <p className="text__muted description">
                I offer web hosting services, delivering reliable and secure
                hosting solutions for deploying and maintaining websites and web
                applications.
              </p>
            </div>
            <div className="service__bottom">
              <button className="btn btn__primary">Read More</button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
