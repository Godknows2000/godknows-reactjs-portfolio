import React, { useEffect, useRef } from "react";
import "./About.css";
import { profile7 } from "../../images";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const el = container.current;
    gsap.fromTo(
      ".about__container",
      {
        scale: 0.7,
      },
      {
        scale: 1,
        scrollTrigger: {
          trigger: el,
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <section id="about" ref={container}>
      <div className="section__wrapper about__container">
        <div className="me__container blur-effect">
          <div className="photo__container">
            <img src={profile7} alt="" />
          </div>
        </div>
        <div className="section__header">
          <h2 className="primary__title">About Me</h2>
          <h1 className="title">
            I am<span className="color__primary"> Godknows</span>
          </h1>
          <p className="text__muted description">
            Skilled Full Stack Developer with a keen interest in building
            dynamic, user-friendly, and responsive applications. Expertise in
            various programming languages and frameworks, along with solid
            experience in database design and management. Strong analytical and
            problem-solving abilities, with a proven history of delivering
            high-quality code within deadlines and budget constraints.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
