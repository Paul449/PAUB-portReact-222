//importing useState
import { useState } from "react";
//function
import emailjs from 'emailjs-com';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the email parameters
    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    // Sending the email using EmailJS
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      console.log('Email successfully sent!', response.status, response.text);
      setStatus('Email sent successfully!');
      setName(''); // Clear form fields after successful submission
      setEmail('');
      setMessage('');
    })
    .catch((err) => {
      console.error('Failed to send email.', err);
      setStatus('Failed to send email. Please try again later.');
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="Name">
        <label htmlFor="NameText">Name:</label>
        <input
          id="NameText"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="Email">
        <label htmlFor="EmailText">Email:</label>
        <input
          id="EmailText"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="Message">
        <label htmlFor="txtM">Message:</label>
        <textarea
          id="txtM"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <div id="submit">
        <button id="submitBtn" type="submit">Submit</button>
      </div>
    </form>
  );
}

