import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import "./Contact.css";

const Result = () => {
  return (
    <p>Thank you ❤️ We received your message and will contact you soon.</p>
  );
};

const Contact = () => {
  const [result, setResult] = useState(false);
  const form = useRef();
  const sendEmail = (event) => {
    event.preventDefault();
    console.log(process.env.REACT_APP_EMAIL);
    emailjs
      .sendForm(
        "service_nj48cb8",
        "template_vandhana",
        form.current,
        process.env.REACT_APP_EMAIL
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
    setResult(true);
  };

  // hide result
  setTimeout(() => {
    setResult(false);
  }, 5000);

  return (
    <>
      <div
        className={result ? "modal-container modal-show" : "modal-container"}
      >
        <form className="modal-form" ref={form} onSubmit={sendEmail}>
          <h2>Contact Us</h2>
          <div>
            <label htmlFor="from_name">Full Name:</label>
            <br />
            <input type="text" id="from_name" name="from_name" required />
          </div>
          <div>
            <label htmlFor="from_email">Email:</label>
            <br />
            <input type="email" id="from_email" name="from_email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <br />
            <textarea id="message" name="message" rows="3" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
        {result && (
          <div className="modal-overlay" onClick={() => setResult(false)}>
            <div className="modal-result">
              <Result />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
