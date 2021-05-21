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
      <div className="achievement-div">
        {this.state.preview ? (
          <div>
            <form className="achievement-form" onSubmit={this.handleSubmit}>
              <div id="style-div">
                <input
                  type="text"
                  name="achievement"
                  required
                  id="achievementName"
                  placeholder="Name of Position/Achievement"
                  onChange={this.formHandler}
                />
                <label htmlFor="achievementName">
                  Achievements {`&`} Responsibilities
                </label>
              </div>
              <div id="style-div">
                <textarea
                  type="text"
                  name="Description"
                  id="describe"
                  placeholder="Add DEscription"
                  onChange={this.formHandler}
                />
                <label htmlFor="describe">Description</label>
              </div>
              <div className="achievement-submit">
                <button type="submit">Add Achievement</button>
              </div>
            </form>
          </div>
        ) : null}
        <button onClick={this.handlePreview}>Preview</button>
      </div>
    ) : (
      <div className="gap" onClick={this.handlePreview}>
        <div className="cv-title">Achievements {`&`} Responsibility</div>
        {this.state.achievements.map((achievement) => (
          <ul key={achievement.achievementName}>
            <li className="list-item">
              <div className="name-score">
                <strong>{achievement.achievementName}</strong>
                {`: ${achievement.describe}`}
              </div>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Achievements;
