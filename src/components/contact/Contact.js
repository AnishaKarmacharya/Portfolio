import React from "react";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <h2 className="contact_title"> Get in Touch</h2>
      <div className="contact__container  grid">
        <div>
          <div className="contact__information">
            <i class="uil uil-phone-alt contact__icon"></i>
            <div>
              <h3 className="contact__title">Call Me</h3>
              <span className="contact__subtitle"> +977 9861280345</span>
            </div>
          </div>
          <div className="contact__information">
            <i class="uil uil-envelope contact__icon"></i>
            <div>
              <h3 className="contact__title">Email </h3>
              <span className="contact__subtitle">
                {" "}
                aayush.dangol1@gmail.com
              </span>
            </div>
          </div>
          <div className="contact__information">
            <i class="uil uil-map-marker-alt contact__icon"></i>
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle"> Newroad, Kathmandu</span>
            </div>
          </div>
        </div>
        <form className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label>Name</label>
              <input type="text" className="contact__input" />
            </div>
            <div className="contact__content">
              <label>Email</label>
              <input type="email" className="contact__input" />
            </div>
          </div>
          <div className="contact__content">
            <label>Project</label>
            <input type="text" className="contact__input" />
          </div>
          <div className="contact__content">
            <label>Message</label>
            <textarea
              name=""
              id=""
              cols="0"
              rows="7"
              className="contact__input"
            />
          </div>
          <div>
            <a href="" className="button button--flex">Send Message <i class="uil uil-message"></i></a>
          </div>
        </form>
      </div>
    </section>
  );
};
