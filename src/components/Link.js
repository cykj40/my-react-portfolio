import React from "react";
import "../styles/Link.css";

function Link(props) {
    return (
        <a className="links" href={props.url} target="_blank" rel="noreferrer">
            {props.name === "Repository" ? (
            <i classman="fab fa-github fa-2x"></i>
            ) : (
            <i classman="fas fa-globe fa-2x"></i>   
            )}
        </a>
    );
}

export default Link;