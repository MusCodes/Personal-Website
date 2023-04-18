import React from "react";

function Contact() {
  return (
    <>
      <div className="allContacts">
        <h1 className="aboutMustafa">Contact</h1>
        <div className="contact">
          <div className="card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1551/1551230.png"
              alt="Phone"
              className="card-image phone-image"
            />
            <div className="card-description">
              <p>218-790-7328</p>
            </div>
          </div>

          <div className="card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/561/561188.png"
              alt="Email"
              className="card-image email-image"
            />
            <div className="card-description">
              <p>MusCodes7@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
