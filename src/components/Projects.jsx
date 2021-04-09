import React, { Component } from "react";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectName: "",
      description: "",
      code: "",
      demo: "",
      works: [],
      addnew: true,
    };
  }
  previewHandler = () => {
    this.setState({
      addnew: !this.state.addnew,
    });
  };
  formHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  appendWork = (e) => {
    e.preventDefault();
    const newWork = {
      projectName: this.state.projectName,
      description: this.state.description,
      code: this.state.code,
      demo: this.state.demo,
    };
    this.setState({
      works: [...this.state.works, newWork],
    });
  };
  render() {
    return this.state.addnew ? (
      <div className="projects-div">
        {this.state.addnew ? (
          <div>
            <form className="project-form" onSubmit={this.appendWork}>
              <div className="project-detail">
                <div id="style-div">
                  <input
                    type="text"
                    name="Project-Name"
                    placeholder="Project Name"
                    id="projectName"
                    required
                    onChange={this.formHandler}
                  />
                  <label htmlFor="projectName">Project Name </label>
                </div>
                <div id="style-div">
                  <textarea
                    type="text"
                    name="Description"
                    id="description"
                    required
                    placeholder="Add Description"
                    onChange={this.formHandler}
                  />
                  <label htmlFor="description">Description: </label>
                </div>
              </div>
              <div className="code-demo">
                <div id="style-div">
                  <input
                    type="url"
                    name="Code"
                    id="code"
                    placeholder="Enter Code URL"
                    onChange={this.formHandler}
                  />
                  <label htmlFor="code">Code</label>
                </div>
                <div id="style-div">
                  <input
                    type="url"
                    name="demo"
                    id="demo"
                    placeholder="Enter Demo URL"
                    onChange={this.formHandler}
                  />
                  <label htmlFor="demo">Demo</label>
                </div>
              </div>
              <div className="project-submit">
                <button type="submit">Add Project</button>
              </div>
            </form>
          </div>
        ) : null}
        <button onClick={this.previewHandler}>Preview</button>
      </div>
    ) : (
      <div onClick={this.previewHandler}>
        Projects
        {this.state.works.map((item, index) => (
          <div key={index}>{item.projectName}</div>
        ))}
      </div>
    );
  }
}

export default Projects;
