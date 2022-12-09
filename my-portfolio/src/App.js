import React, { useState } from 'react';
import './App.css';
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

import projects from "./assets/projects.js";
import skills from "./assets/skills.js";
import language from "./assets/skills-language.js";
import framework from "./assets/skills-framework.js";
import database from "./assets/skills-database.js";
import tool from "./assets/skills-tools.js";

function App() {
  const [page, setPage] = useState("About Me");
  return (
    <main className="scroll">
      <Landing setPage={setPage} />
      <Navbar page={page} setPage={setPage} />
      <AboutMe setPage={setPage} /> 
      <Projects setPage={setPage} projects={projects} />
      <Resume
        setPage={setPage}
        skills={skills}
        language={language}
        framework={framework}
        database={database}
        tool={tool}
      />
      <Contact setPage={setPage} />
    </main>
  );
}

export default App;
