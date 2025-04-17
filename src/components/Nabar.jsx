import React from "react";

const Nabar = () => {
  return (
    <div className="nav">
      <span>CVmake</span>
      <button onClick={() => window.print()}>Save Resume</button>
    </div>
  );
};

export default Nabar;
