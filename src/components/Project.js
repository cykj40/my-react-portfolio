import React from "react";
import "..styles/Project.css";
import Link from "./Link";
import { Image } from "antd";

function Project(props) {
    return (
        <div 
            className={
                props.index % 2 === 0 ? "timeline left" : "timeline right"
            }
        >
            <div classNamer="card">
                <Image
                    src={props.project.img}
                    placeholder={
                        <Image preview={false} src={props.project.img_low} />
                    }
                    />
                    <div className="card-body p-4">
                        <h4 className="fw-bold mb-4">{props.project.name}</h4>
                        <p className="text-muted mb-4">
                            <i
                                className="fas fa-calendar-day"
                                aria-hidden="true"
                            ></i>{" "}
                            &nbsp; 
                            {props.project.date}
                        </p>
                        <p className="mb-4">{props.project.description}</p>
                        <div className="d-flex flex-wrap">
                            {props.project.repoUrl !== "" ? (
                                <Link
                                name="Project Link"    
                                url={props.project.deployUrl}
                                />
                            ) : (
                                ""
                            )}
                            {props.project.deployUrl !== "" ? (
                                <Link
                                name="Project Link"
                                url={props.project.deployUrl}
                                />
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Project;