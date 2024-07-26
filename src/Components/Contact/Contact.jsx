import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "55243541-2c4e-4c00-ad08-8e5a86b735cb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };



  return (
    <div id = 'contact' className="contact">
      <div className="contact-title">
        <h1>Contact Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Get in touch</h1>
          <p>
            My inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>anthamaniket@gmail.com</p>
            </div>
            
            <div className="contact-detail">
            <img src={call_icon} alt="" /> <p>8801007909</p>
            </div>
            
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Hyderabad, India</p>
            </div>
          </div>
        </div>
            <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder="Enter your Name"  name="name"/>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder="Enter your Email" name="email"/>
                    <label htmlFor=""> Write Your Message Here </label>
                    <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                   <button type="submit" className="contact-submit">Send Message</button>
            </form> 
      </div>
    </div>
  );
};

export default Contact;
