import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_be66arn",
        "template_dbaiclx",
        form.current,
        "3G4DnwBs5izsX1OGh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <form ref={form} onSubmit={sendEmail} id="contact-form">
        <input name="name" type="text" placeholder="Name" />
        <input name="email" type="email" placeholder="Email" />
        <input name="phone" type="text" placeholder="Phone" />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button type="submit" className="x-btn btn-black">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
