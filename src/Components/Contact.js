import React from "react";
const Contact = () => {
  return (
    <>
      <div id="contact">
        <div className="container">
       <div className="row">
           <div className="col-md-8 ">
           <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>

              <form name="sentMessage" id="contactForm" novalidate>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Name"
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn submitbtn btn-lg">
                  Send Message
                </button>
              </form>
           </div>
           <div className="col-md-3 ">
           <div className="contact-item">
              <h4>Contact Info</h4>
              <p>
                <span>Address</span>Plot # C 1-A, Abu Bakar Siddique Road, New
                Airport Town,
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>Phone</span> +92 312 9090007
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span >Email</span>
                <a href="mailto:csm.builders@icloud.com">
                  csm.builders@icloud.com
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/csmbuilders/photos/?ref=page_internal">
                    <i class="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <i class="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <i class="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
           </div>
       </div>
          
        </div>
      </div>
    </>
  );
};
export default Contact;
