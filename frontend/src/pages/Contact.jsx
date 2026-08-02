import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

  };

  return (
    <>
      <Navbar />

      {/* Hero */}

      <div
        className="text-white py-5"
        style={{
          background:
            "linear-gradient(135deg, #0047FF 0%, #0D6EFD 50%, #4DA3FF 100%)"
        }}
      >

        <div className="container text-center">

          <h1
            className="display-3 fw-bold"
            style={{ letterSpacing: "1px" }}
          >
            Contact Us
          </h1>

          <p className="lead fs-4 mt-3">
            We'd love to hear from you.
          </p>

        </div>

      </div>

      {/* Contact Section */}

      <div className="container my-5">

        <div className="row g-4">

          {/* Contact Info */}

          <div className="col-lg-5">

            <div className="card shadow-lg border-0 rounded-4 h-100">

              <div className="card-body p-4">

                <h2
                  className="fw-bold mb-4 text-primary"
                >
                  Get In Touch
                </h2>

                <div className="mb-4">

                  <h5>📍 Address</h5>

                  <p className="text-muted">
                    Visakhapatnam,
                    Andhra Pradesh,
                    India
                  </p>

                </div>

                <hr />

                <div className="my-4">

                  <h5>📞 Phone</h5>

                  <p className="text-muted">
                    +91 9876543210
                  </p>

                </div>

                <hr />

                <div className="my-4">

                  <h5>📧 Email</h5>

                  <p className="text-muted">
                    support@dinenavigator.com
                  </p>

                </div>

                <hr />

                <div className="mt-4">

                  <h5>🌐 Website</h5>

                  <p className="text-primary">
                    www.dinenavigator.com
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="col-lg-7">

            <div className="card shadow-lg border-0 rounded-4">

              <div className="card-body p-4">

                <h2
                  className="fw-bold mb-4 text-primary"
                >
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit}>

                  <div className="mb-3">

                    <label className="form-label">
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  <div className="mb-3">

                    <label className="form-label">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  <div className="mb-3">

                    <label className="form-label">
                      Subject
                    </label>

                    <input
                      type="text"
                      name="subject"
                      className="form-control form-control-lg"
                      placeholder="Enter subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  <div className="mb-4">

                    <label className="form-label">
                      Message
                    </label>

                    <textarea
                      rows="5"
                      name="message"
                      className="form-control"
                      placeholder="Write your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>

                  </div>

                  <button
                    className="btn btn-primary btn-lg w-100"
                  >
                    📩 Send Message
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Google Map */}

      <div className="container mb-5">

        <div className="card shadow-lg border-0 rounded-4 overflow-hidden">

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Visakhapatnam&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>

      </div>

      <Footer />

    </>
  );

}

export default Contact;