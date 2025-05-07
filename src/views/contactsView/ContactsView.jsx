
import React, { useState } from "react";
import "./contactsView.scss";

function ContactsView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form yuborildi!");
  };

  return (
    <section id="contacts" className="contacts-view">
      <div className="container">
      <div className="form-section">
        <h2 className="contacts__title">Contact Me</h2>
        <p className="contacts__text">Feel free to reach out to me through the form below:</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
            />
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      </div>
    </section>
  );
}

export default ContactsView;
