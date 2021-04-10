import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      institute: "",
      start: "",
      end: "",
      course: "",
      score: "",
      place: "",
      education: [],
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
  appendEduation = (e) => {
    e.preventDefault();
    const newEduaction = {
      institute: this.state.institute,
      start: this.state.start,
      end: this.state.end,
      course: this.state.course,
      place: this.state.place,
      score: this.state.score,
    };
    this.setState({
      education: [...this.state.education, newEduaction],
    });
  };
  render() {
    return this.state.addnew ? (
      <div className="education-div">
        {this.state.addnew ? (
          <div>
            <form className="education-body" onSubmit={this.appendEduation}>
              <div className="institute-detail">
                <div id="style-div">
                  <input
                    type="text"
                    name="Institute"
                    placeholder="Institute Name"
                    id="institute"
                    required
                    onChange={this.formHandler}
                  />
                  <label htmlFor="institute">Institute </label>
                </div>
                <div id="style-div">
                  <input
                    type="text"
                    name="course"
                    id="course"
                    required
                    placeholder="Couse Name"
                    onChange={this.formHandler}
                  />
                  <label htmlFor="course">Course</label>
                </div>
                <div id="style-div">
                  <input
                    type="text"
                    name="score"
                    id="score"
                    required
                    placeholder="Score"
                    onChange={this.formHandler}
                  />
                  <label htmlFor="score">Score:</label>
                </div>
              </div>
              <div className="course-time">
                <div id="style-div">
                  <input
                    type="month"
                    name="start"
                    id="start"
                    required
                    placeholder="Start date"
                    onChange={this.formHandler}
                  />
                  <label htmlFor="start">Start Date</label>
                </div>
                <div id="style-div">
                  <input
                    type="month"
                    name="end"
                    id="end"
                    required
                    placeholder="End date"
                    onChange={this.formHandler}
                  />
                  <label htmlFor="end">End Date</label>
                </div>
                <div id="style-div">
                  <input
                    type="text"
                    name="place"
                    id="place"
                    required
                    placeholder="Place"
                    onChange={this.formHandler}
                  />
                  <label htmlFor="place">Place </label>
                </div>
              </div>
              <div className="education-submit">
                <button type="submit"> Add Education</button>
              </div>
            </form>
          </div>
        ) : null}
        <button onClick={this.previewHandler}>Preview</button>
      </div>
    ) : (
      <div onClick={this.previewHandler}>
        <div className="cv-title">Education</div>
        {this.state.education.map((item, index) => (
          <ul key={index}>
            <li className="list-item">
              <div className="name-score">
                <div className="institute-name">{item.institute}</div>
                <div className="course-score">{`${item.course}; Score: ${item.score}`}</div>
              </div>
              <div className="place-date">
                <div className="place">{item.place}</div>
                <div className="duration">
                  {item.start} - {item.end}
                </div>
              </div>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Education;
