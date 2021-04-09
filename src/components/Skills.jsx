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
      <div className="skill-div">
        {this.state.preview ? (
          <div>
            <form className="skill-form" onSubmit={this.handleSubmit}>
              <div id="style-div">
                <input
                  type="text"
                  name="domain"
                  required
                  id="domain"
                  placeholder="Domain"
                  onChange={this.formHandler}
                />
                <label htmlFor="domain">Domain</label>
              </div>
              <div id="style-div">
                <input
                  type="text"
                  name="domainSpecificSkills"
                  id="domainSpecificSkills"
                  placeholder="Add Skills"
                  onChange={this.formHandler}
                />
                <label htmlFor="domainSpecificSkills">Skills</label>
              </div>
              <div className="skill-submit">
                <button type="submit">Add Skills</button>
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
