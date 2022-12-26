import React from "react";
import Form from "../components/Form";
import "../styles/Contact.css";

function Contact(props) {
    const handlePageChange = (e) => {
        props.setPage("Contact")
    };

    return (
        <section
        id="contact-me"
        className="scroll-snap d-flex flex-column"
        onMouseEnter={handlePageChange}
        >

            <header className="section-header ms-3 mb-3">
                <h2>Contact Me</h2>
            </header>
            <Form />
            <div className="section-body cobntact mt-auto">
                <a 
                className="contact-info"
                href="tel:646-745-6825"
                target="_blank"
                rel="noreferrer"
                >
                    <i className="fas fa-phone fa-2x"></i>
              </a>
                <a
                className="contact-info"
                href="mailto:cyrusk81@gmail.com"
                target="_blank"
                rel="noreferrer"
                >
                    <i className="fas fa-envelope-open-text fa-2x"></i>
                </a>
                <a
                className="contact-info"
                href="https://www.linkedin.com/in/cyrus-jalili-khiabani-44605b163/"
                target="_blank"
                rel="noreferrer"
                >
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a
                className="contact-info"
                href="https://github.com/cykj40"
                target="_blank"
                rel="noreferrer"
                >
                    <i className="fab fa-github fa-2x"></i>
                </a>
           </div>
        </section>
    );
}