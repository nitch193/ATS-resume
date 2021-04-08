import React from "react";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Achievements from "./Achievements";
import Interests from "./Interests";

const Cv = () => {
  return (
    <div className="cv">
      <About />
      <hr />
      <Education />
      <hr />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Interests />
    </div>
  );
};

export default Cv;
