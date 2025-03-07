import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/contactus.css";

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/api/feedback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message }),
            });
            navigate("/", { state: { feedbackSent: true } });
    } catch (err) {
        console.error("Error during feedback submission:", err);
    }

};

return (
    <div className="contact-container">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us!</p>
        <div className="contact-info">
            <div className="contact-item">
                <h3>Address</h3>
                <p>123 Blood Bank St, Health City, HC 12345</p>
            </div>
            <div className="contact-item">
                <h3>Email</h3>
                <p>info@bloodbank.com</p>
            </div>
            <div className="contact-item">
                <h3>Phone</h3>
                <p>+91 9099003399</p>
            </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            ></textarea>
            <button type="submit">Send Message</button>
        </form>
    </div>
);
};

export default ContactUs;