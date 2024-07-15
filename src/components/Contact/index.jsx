import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <div className="section__wrapper contact__container">
        <div className="section__header">
          <h2 className="primary__title">Contact Me</h2>
          <p className="text__muted description">
            Ready to take your digital presence to the next level? Whether
            you're looking to launch a new website, revamp an existing one, or
            need expert advice on the best web technologies, I'm here to help.
            Reach out to discuss your project, ask questions, or just say hello.
          </p>
        </div>
        <div className="contact__group">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__icon" />
              <h3>Email</h3>
              <h5>godknowsaresho@gmail.com</h5>
              <a
                href="godknowsaresho@gmail.com"
                target="_blank"
                className="btn"
              >
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <FaLinkedinIn className="contact__icon" />
              <h3>LinkedIn</h3>
              <h5>Godknows Aresho</h5>
              <a
                href="https://www.linkedin.com/in/godknows-aresho-1231361b1"
                target="_blank"
                className="btn"
              >
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__icon" />
              <h3>Whatsapp</h3>
              <h5>+263 71 572 5572</h5>
              <a
                href="https://api.whatsapp.com/send?phone=+263715725572"
                target="_blank"
                className="btn"
              >
                Send a message
              </a>
            </article>
          </div>
          <form>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="meassage"
              rows={6}
              placeholder="Your message"
            ></textarea>
            <button type="submit" className="btn btn__primary">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
