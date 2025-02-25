import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function BootstrapForm() {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wb9x0yg", "template_jqgybh9", form.current, {
        publicKey: "Si7VtRg39qqvDHEpE",
      })
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Message sending failed! Try again.");
        }
      );
  };

  return (
    <form className="mb-3" ref={form} onSubmit={sendEmail}>
      <div className="form-group">
        <input
          type="text"
          className="form-control mb-5"
          id="username"
          name="username"
          aria-describedby="nameHelp"
          placeholder="Enter your name*"
          style={{ boxShadow: "0px 2px 0px rgba(255, 255, 255, 0.25)" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control mb-5"
          id="useremail"
          name="useremail"
          aria-describedby="emailHelp"
          placeholder="Enter your email*"
          style={{ boxShadow: "0px 2px 0px rgba(255, 255, 255, 0.25)" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control mb-5"
          id="usersubject"
          name="usersubject"
          placeholder="Enter the subject*"
          style={{ boxShadow: "0px 2px 0px rgba(255, 255, 255, 0.25)" }}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control mb-5"
          id="usermessage"
          name="usermessage"
          rows={3}
          placeholder="Enter your message*"
          style={{ boxShadow: "0px 2px 0px rgba(255, 255, 255, 0.25)" }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="myButton"
        style={{ fontSize: "1.25rem" }}
      >
        Send Message
      </button>
    </form>
  );
}
