import React from "react";
import Footer from "../components/Footer";
import "../styles/AboutMe.css";

function AboutMe(props) {
    const handlePageChange = (e) => {
        props.setPage("About Me")
    };

    return (
        <section
        id="about-me"
        className="scroll-snap d-flex align-items-start flex-column"
        onMouseEnter={handlePageChange}
        >
            <header className="Section-header ms-3 mb-3">
                <h2>About Me</h2>
            </header>
            <div className="section-body ms-3 mb-3">
                <p></p>
            </div>
            <div className="mt-auto scroll-snap-end">
                <Footer />
            </div>
        </section>
    );
}