import React, { useState } from "react";

function ContactPage() {
  // State variables to store user input
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle the form submission, e.g., sending an email or saving to a database.
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Please provide us with your email and your design service request and we will get back to you!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Request: </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4" // You can adjust the number of rows as needed
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;
