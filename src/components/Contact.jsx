//importing useState
import { useState } from "react";
//function
import emailjs from 'emailjs-com';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');



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

