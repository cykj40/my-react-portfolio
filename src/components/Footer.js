import React from "react";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer ms-2 mb-2 me-2">
            <a
                className="contact-info"
                href="linkedin.com/in/cyrus-jalili-khiabani-44605b163/"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
                className="contact-info"
                href="https://github/cykj40"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fab fa-github fa-2x"></i>
            </a>
        </div>
    );
}

export default Footer;