import React from "react";
import "..styles/Navbar.css";
import Logo from "..assets/images/sitelogo.png";

function Navbar(props) {
    const handlePageChange = (e) => {
        const { target } = e;
        const pageName = target.name;

        props.setPage(pageName);
    };

    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#landing">
                    <img
                        src={Logo}
                        alt="logo"
                        width="40"
                        height="40"
                        className="d-inline-block"
                    />
                    &nbsp;&nbsp; Cyrus Jalili Khiabani
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div 
                    className="collapse navbar-collapse text-center"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav ms-auto">
                        <a
                            name="About Me"
                            className={
                                props.page === "About Me"
                                    ? "active"
                                    : "nav-link"
                            }
                            href="#about-me"
                            onClick={handlePageChange}
                        >
                            About Me
                        </a>
                        <a
                            name="Portfolio"
                            className={
                                props.page === "Portfolio"
                                    ? "active"
                                    : "nav-link"
                            }
                            href="#projects"
                            onClick={handlePageChange}
                        >
                            Portfolio
                        </a>
                        <a
                            name="Resume"
                            className={
                                props.page === "Resume" ? "active" : "nav-link"
                            }
                            href="#resume"
                            onClick={handlePageChange}
                        >
                            Contact Me 
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;