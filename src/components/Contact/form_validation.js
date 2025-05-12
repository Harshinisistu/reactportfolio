import React, { useState } from "react";
import "./Form.css";
import "../../index.css";
const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",

    message: "",
  });

  const handleValidation = () => {
    const { name, email, mobile, message } = formData;
    let isValid = true;

    if (!name) {
      alert("Please enter your full name.");
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      alert("Please enter your email address.");
      isValid = false;
    } else if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      isValid = false;
    }

    if (!mobile) {
      alert("Please enter your mobile number.");
      isValid = false;
    } else if (mobile.length < 10 || mobile.length > 15) {
      alert("Mobile number must be between 10 and 15 digits.");
      isValid = false;
    }

    // if (!subject) {
    //   alert("Please enter a subject.");
    //   isValid = false;
    // } else if (subject.length > 100) {
    //   alert("Subject must be less than 100 characters.");
    //   isValid = false;
    // }

    if (!message) {
      alert("Please enter your message.");
      isValid = false;
    } else if (message.length < 10) {
      alert("Message must be at least 10 characters long.");
      isValid = false;
    }

    if (isValid) {
      document.getElementById("successMessage").textContent =
        "Message sent successfully!";
      setFormData({
        name: "",
        email: "",
        mobile: "",

        message: "",
      });
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleValidation();
        }}
      >
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
        />
        {/* <input
          type="text"
          placeholder="Subject"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
        /> */}
        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <div id="successMessage"></div>
    </div>
  );
};

export default FormValidation;
