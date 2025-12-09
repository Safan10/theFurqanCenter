import { useState } from "react";
import applyImg from "../assets/apply.jpeg";

export default function Apply(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const mailtoLink = `
      mailto:thefurqancenter@gmail.com
      ?subject=New Admission Application
      &body=
      Name: ${encodeURIComponent(name)}
      %0D%0AEmail: ${encodeURIComponent(email)}
      %0D%0APhone: ${encodeURIComponent(phone)}
      %0D%0AMessage: ${encodeURIComponent(message)}
    `;

    window.location.href = mailtoLink;
  };

  return(
    <div className="page">

      {/* HEADER TEXT MOVED HERE */}
      <h1 className="apply-title">
        Connect with your <span>Faith & Heritage</span>
      </h1>

      {/* JPEG IMAGE SPACE */}
      <img src={applyImg}
           alt="Islamic learning"
           className="apply-img"/>

      <h2>Apply for Classes</h2>

      {/* ✅ FORM UPDATED — STYLES SAME */}
      <form onSubmit={sendEmail} className="form">

        <input
          name="name"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">
          Submit Application
        </button>

      </form>

      {/* ✅ DISPLAY CONTACT EMAIL */}
      <p style={{ textAlign: "center", marginTop: "12px" }}>
  📧 Or email us directly at{" "}
  <b style={{ textTransform: "none" }}>
    thefurqancenter@gmail.com
  </b>
</p>

    </div>
  );
}
