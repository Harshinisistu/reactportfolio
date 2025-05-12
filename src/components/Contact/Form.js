import "./Form.css";

import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text" name="name" required />

        <label>Email</label>
        <input type="email" name="email" required />

        <label>Message</label>
        <textarea
          name="message"
          rows="5"
          placeholder="type your text here"
          required
        ></textarea>

        <button type="submit" className="btn">
          Submit
        </button>
        <div class="success" id="successMessage"></div>
      </form>
    </div>
  );
};

export default Form;
