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
                <p>Hi my name Cyrus, I am a full stack web developer 
                    with a background in construction project managment.
                    I find that both jobs are extremely similar whether you
                    are constructing a building or a software program. Both 
                    tasks have steps involved. There is a beggining and an end 
                    to the proccess. There is pre work that makes the project go 
                    smoothe, then of course to wrap up the whole process there is 
                    the handing over of the finished product to the client and all 
                    the inspections and licenses that must be handed over as well. 
                </p>
                <p>I have recently graduated from a full stack web development bootcamp 
                    at Rutgers University. I learned the latest technologies in web 
                    developmentsuch as React, Node, Express, and MongoDB and much more. 
                    Before enrolling in bootcamp I was studyong General Sciemces with a 
                    focus on Chemistry at Santa Monica College.My goal was to transfer 
                    to UCLA to study Chemistry. The pandemic hit and my fiance and I 
                    where forced to move back to the east coast. I was accepted 
                    into Rutgers School of Arts and Sciences for chemistry. 
                  </p>
                  <p>              
                    My Major strength is I dont give up. I finish what I start no matter 
                    what challenges I face. I am a hard worker and I am a fast learner. I 
                    learned in construction industry that things rarely go as planned. I 
                    learned that you have to be able to adapt to the situation and be willing 
                    to work with what you have to get the job done, not what you wish you had.
                    </p>


            </div>
            <div className="mt-auto scroll-snap-end">
                <Footer />
            </div>
        </section>
    );
}

export default AboutMe;