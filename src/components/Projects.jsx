import React, { Component } from "react";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectName: "",
      start: "",
      end: "",
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
      start: this.state.start,
      end: this.state.end,
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
      <div>
        {this.state.addnew ? (
          <div>
            <form onSubmit={this.appendWork}>
              <div>
                <label htmlFor="projectName">
                  Project Name:
                  <input
                    type="text"
                    name="Project-Name"
                    placeholder="Project Name"
                    id="projectName"
                    required
                    onChange={this.formHandler}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="startDate">
                  Start Date:
                  <input
                    type="month"
                    name="start-project"
                    id="startDate"
                    required
                    placeholder="Start date"
                    onChange={this.formHandler}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="endDate">
                  End Date:
                  <input
                    type="month"
                    name="end-project"
                    id="endDate"
                    required
                    placeholder="End date"
                    onChange={this.formHandler}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="description">
                  Description:
                  <textarea
                    type="text"
                    name="Description"
                    id="description"
                    required
                    placeholder="Add Description"
                    onChange={this.formHandler}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="code">
                  Code:
                  <input
                    type="url"
                    name="Code"
                    id="code"
                    placeholder="Enter Code URL"
                    onChange={this.formHandler}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="demo">
                  Demo:
                  <input
                    type="url"
                    name="demo"
                    id="demo"
                    placeholder="Enter Demo URL"
                    onChange={this.formHandler}
                  />
                </label>
              </div>
              <div>
                <button type="submit">Submit</button>
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
