import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_06fn2wd",
        "template_ju6g93i",
        form.current,
        "B2vQOmnf0vm_FUueE",
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      <section id="contact">
        <div className="contact-container">
          <h2>
            Get In <span className="accent">Touch</span>
          </h2>
          <p>
            Have a question or want to work together? Leave your details and
            I'll get back to you as soon as possible.
          </p>
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
            ></textarea>
            <button type="submit" className="submit-btn">
              SUBMIT
            </button>
          </form>
        </div>
      </section>

      <footer>
        <a href="#home" className="back-to-top">
          <FaArrowUp />
        </a>
        <div className="footer-links">
          <a href="https://github.com/adi-y" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-yadav-4a9adit/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="footer-name">ADITYA © 2026</p>
      </footer>
    </>
  );
}

export default Contact;
