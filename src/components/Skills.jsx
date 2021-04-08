import React, { Component } from "react";

export class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: [],
      domain: "",
      domainSpecificSkills: "",
      preview: true,
    };
  }
  formHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handlePreview = () => {
    this.setState({
      preview: !this.state.preview,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newSkill = {
      domain: this.state.domain,
      domainSpecificSkills: this.state.domainSpecificSkills,
    };
    this.setState({
      skills: [...this.state.skills, newSkill],
    });
  };
  render() {
    return this.state.preview ? (
      <div>
        {this.state.preview ? (
          <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="domain">Domain</label>
                <input
                  type="text"
                  name="domain"
                  required
                  id="domain"
                  placeholder="Domain"
                  onChange={this.formHandler}
                />
              </div>
              <div>
                <label htmlFor="domainSpecificSkills">Skills</label>
                <input
                  type="text"
                  name="domainSpecificSkills"
                  id="domainSpecificSkills"
                  placeholder="Add Skills"
                  onChange={this.formHandler}
                />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        ) : null}
        <button onClick={this.handlePreview}>Preview</button>
      </div>
    ) : (
      <div onClick={this.handlePreview}>
        Skills
        {this.state.skills.map((skill) => (
          <div key={skill.domain}>
            {`${skill.domain} ${skill.domainSpecificSkills}`}
          </div>
        ))}
      </div>
    );
  }
}

export default Skills;
