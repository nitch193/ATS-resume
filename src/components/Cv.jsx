import React from "react";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Achievements from "./Achievements";

const Cv = () => {
  return (
    <div className="cv">
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
    </div>
  );
};

export default Cv;
