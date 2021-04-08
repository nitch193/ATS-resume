import React, { Component } from "react";

export class Achievements extends Component {
  constructor(props) {
    super(props);

    this.state = {
      achievements: [],
      achievementName: "",
      describe: "",
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
    const newAchievement = {
      achievementName: this.state.achievementName,
      describe: this.state.describe,
    };
    this.setState({
      achievements: [...this.state.achievements, newAchievement],
    });
  };
  render() {
    return this.state.preview ? (
      <div>
        {this.state.preview ? (
          <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="achievementName">Achievement</label>
                <input
                  type="text"
                  name="achievement"
                  required
                  id="achievementName"
                  placeholder="Name of Position/Achievement"
                  onChange={this.formHandler}
                />
              </div>
              <div>
                <label htmlFor="describe">Skills</label>
                <textarea
                  type="text"
                  name="Description"
                  id="describe"
                  placeholder="Add DEscription"
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
        Achievements {`&`} Responsibility
        {this.state.achievements.map((achievement) => (
          <div key={achievement.achievementName}>
            {`${achievement.achievementName} ${achievement.description}`}
          </div>
        ))}
      </div>
    );
  }
}

export default Achievements;
