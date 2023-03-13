import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Result = () => {
  return (
    <p>Thank you ❤️ We received your message and will contact you soon.</p>
  );
};

const Contact = () => {
  const [modal, setModal] = useState(true);
  const [result, setResult] = useState(false);
  const form = useRef();

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const sendEmail = (event) => {
    event.preventDefault();
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
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Contact Us</h2>
            <br />
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <label htmlFor="from_name">Full Name:</label>
                <br />
                <input type="text" id="from_name" name="from_name" required autofocus/>
              </div>
              <div>
                <label htmlFor="from_email">Email:</label>
                <br />
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <br />
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button type="submit">Send</button>
            </form>
            {result && (
              <div onClick={() => setResult(false)}>
                <div>
                  <Result />
                </div>
              </div>
            )}
            <button className="close-modal" onClick={toggleModal}> x </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Contact;