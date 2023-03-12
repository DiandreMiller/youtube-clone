
import "./Contact.css";

function Contact() {
  const name__modal = document.querySelector("#recipient-name");
  const email__modal = document.querySelector("#recipient-email");
  const message__modal = document.querySelector("#message-text");
  const response = document.querySelector("#message-response");
  const form__modal = document.querySelector("#modal__form");
  const submit__modal = document.querySelector("#send-button");

  emailjs.init(process.env.REACT_APP_EMAIL);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      name__modal.value == "" ||
      email__modal.value == "" ||
      message__modal.value == ""
    ) {
      response.textContent = "Please fill all the fields";
    } else {
      // emailjs.sendForm("service_nj48cb8", "template_vandhana", form__modal)
      emailjs
        .send("service_nj48cb8", "template_vandhana", {
          from_name: name__modal.value,
          to_name: "vandhana",
          message: message__modal.value,
          reply_to: email__modal.value,
        })
        .then(
          function (response) {
            console.log(
              "SUCCESS. status=%d, text=%s",
              response.status,
              response.text
            );
          },
          function (error) {
            console.log("FAILED. error=", error);
          }
        );
      response.textContent = "Thank you ❤️ We received your message";
      form__modal.reset();
    }
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header style__contact">
            <h1 className="modal-title" id="exampleModalLabel">
              Contact Us
            </h1>
            <br />
            <button
              type="button"
              className="btn-close close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form id="modal__form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control style__border"
                  id="recipient-name"
                  required
                  autoFocus
                />
              </div>
              <div className="mb-3">
                <label htmlFor="recipient-email" className="col-form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control style__border"
                  id="recipient-email"
                  required
                  autoFocus
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message-text" className="col-form-label">
                  Message
                </label>
                <textarea
                  className="form-control style__border"
                  rows="3"
                  id="message-text"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <h6 id="message-response"> </h6>
            <button
              type="submit"
              className="btn button__green"
              id="send-button"
            >
              Send message
            </button>
            <button
              type="button"
              className="btn button__green"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
