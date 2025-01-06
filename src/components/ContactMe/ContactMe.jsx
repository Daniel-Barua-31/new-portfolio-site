import { useEffect, useRef, useState } from "react";
import "./ContactMe.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import Heading from "../Headling/Heading";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_vwi4mrl", "template_ssg2pis", form.current, {
        publicKey: "Fq2rCUii8VJM3qiTo",
      })
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          console.log("successful", result);
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to sent message!");
          console.log("Failed",error.text);
        }
      );
  };
  const contactRef = useRef();
  const [inView, setInView] = useState();
  console.log("contact", inView);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setInView(entry.isIntersecting);
    });
    observer.observe(contactRef.current);
  }, []);

  return (
    <div id="contact" ref={contactRef}>
      <section className="contact-me-section">
        <Heading titleName="Get In Touch" />
        <div
          className={` ${
            inView ? "contact-me-transition" : "contact-me-hidden"
          }`}
        >
          <p className="section-paragraph">
            I’m currently looking for any new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I’ll try
            my best to get back to you!
          </p>
          <label htmlFor="checkcontact">
            {" "}
            <div className="button"> Say Hello </div>{" "}
          </label>{" "}
          <input type="checkbox" name="" id="checkcontact" />
          <form className="form" ref={form} onSubmit={sendEmail}>
            <p className="input-wrapper">
              {" "}
              <input type="text" name="from_name" /> <label>Name</label>
            </p>
            <p className="input-wrapper">
              {" "}
              <input type="email" name="from_email" /> <label>Email</label>{" "}
            </p>
            <p className="textarea-wrapper">
              {" "}
              <textarea name="message" />
            </p>
            <input className="button" type="submit" value="Send" />
          </form>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default ContactMe;
