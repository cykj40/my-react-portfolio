import React, { useState } from "react";
import Project from "../components/Project";
import "../styles/Project.css";

function Projects(props) {
    const [showMore, setShowMore] = useState("");

    let projects = props.projects;

    if (showMore) {
        projects = props.projects;
    } else {
        projects = props.projects.slice(0, 6);
    }

    const handlePageChange = (e) => {
        props.setpage("Portfolio");
    };

    const handleButtonChange = (e) => {
        if (showMore) {
            setShowMore(false);
        } else {
            setShowMore(true);
        }
    };

    return (
        <section
            id="projects"
            className="scroll-snap"
            onMouseEnter={handlePageChange}
        >
            <header ClassName="section-header ms-3 mb-3">
                <h2>Portfolio</h2>
            </header>

            <div className="container py-5">
                <div className="main-timeline">
                    {projects.map((project, index) => (
                        <Project key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
            <div className="d-grid scroll-snap-end">
                <button
                    className="btn ms-3 mb-3 me-3"
                    onClick={handleButtonChange}
                >
                    {showMore === true ? (
                        <>
                        <i className="fas fa-minus"></i>&nbsp;&nbsp;Show 
                        Less
                        </>
                    ) : (
                        <>
                        <i className="fas fa-plus"></i>&nbsp;&nbsp;Show More 
                        </>
                    )}
                </button>
            </div>
        </section>
    );
}

export default Projects;