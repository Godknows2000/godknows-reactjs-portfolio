import React, { useRef } from "react";
import "./Header.css";
import { logo, profile7 } from "../../images";
import Facts from "./Facts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Header = () => {
  const [text] = useTypewriter({
    words: ["SOFTWARE DEVELOPER.", "UI/UX DESIGNER.", "MOBILE APP DEVELOPER."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      gsap.fromTo(
        ".profile__photo__container",
        {
          scale: 0.5,
          opacity: 0.5,
          duration: 1,
        },
        {
          scale: 1,
          duration: 1,
          ease: "sine.in",
          opacity: 1,
        }
      );
      gsap.from(".intro__text", {
        fontSize: 100,
        duration: 1,
        delay: 1,
        ease: "sine.in",
      });

      const timeline = gsap.timeline();
      timeline
        .from(".header__info__top", { opacity: 0 })
        .from(".header__title", { opacity: 0, y: -30 })
        .from(".header__description", { opacity: 0 })
        .from(".btn", { opacity: 0, x: -40, stagger: 0.5 });
    },
    { scope: container }
  );
  return (
    <header id="header" className="blur-effect" ref={container}>
      <div className="stroke__text intro__text">HELLO</div>
      <div className="section__wrapper header__container">
        <div className="column intro__container blur-effect">
          <div className="header__info">
            <div className="header__info__top">
              Hello There! I'm <span className="color__primary">Godknows</span>
            </div>
            <div className="header__info__middle">
              <h1 className="primary__title header__title">
                I'm a <span>{text}</span>
                <Cursor
                  cursorStyle="|"
                  cursorColor="#024CC8"
                  className="color__primary"
                />
              </h1>
              <p className="text__muted header__description">
                Godknows is a driven and disciplined Software Developer with a
                passion for innovation.
              </p>
            </div>
            <Facts />
            <div className="header__info__bottom">
              <button className="btn">Download CV</button>
              <a href="mailto:godknowsaresho92@gmail.com" className="btn">
                Email Me
              </a>
            </div>
          </div>
        </div>
        <div className="column profile__wrapper">
          <div className="profile__photo__container">
            <img src={profile7} className="profile__photo" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
