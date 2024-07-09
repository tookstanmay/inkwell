import React from "react";
import "../index.css";

export const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Inkwell</h1>
            <p className="contact-description">
                We appreciate your interest in Inkwell! We're always happy to hear from you. Feel free to reach out using the methods below if you have any questions, feedback, or suggestions.
            </p>

            <div className="contact-methods">
                <h2>Contact Methods</h2>
                <div className="contact-methods-list-container">
                    <ul className="contact-methods-list">
                        <li>
                            Email: {" "}
                            <a href="mailto:support@inkwell.com" className="contact-link">
                                support@inkwell.com
                            </a>
                        </li>
                        <li style={{ display: "flex", gap: "40px", justifyContent: "center", alignItems: "center", marginTop: "40px" }}>
                            <div>
                                <a href="https://www.linkedin.com/in/tookstanmay/" target="__blank">
                                    <img src="./images/linkedin.png" className="logos" />
                                </a>
                            </div>
                            <div>
                                <a href="https://www.instagram.com/tookstanmay/" target="__blank">
                                    <img src="./images/instagram.png" className="logos" />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <footer style={{marginTop: "80px"}}>
                made with ❤️ by tookstanmay
            </footer>
        </div>
    );
};
