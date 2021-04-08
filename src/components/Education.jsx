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
    console.log(this.state.education);
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
      <div>
        {this.state.addnew ? (
          <div>
            <form onSubmit={this.appendEduation}>
              <div>
                <label htmlFor="institue">
                  Institute:
                  <input
                    type="text"
                    name="Institute"
                    placeholder="Institute Name"
                    id="institute"
                    required
                    onChange={this.formHandler}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="start">
                  Start Date:
                  <input
                    type="month"
                    name="start"
                    id="start"
                    required
                    placeholder="Start date"
                    onChange={this.formHandler}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="end">
                  End Date:
                  <input
                    type="month"
                    name="end"
                    id="end"
                    required
                    placeholder="End date"
                    onChange={this.formHandler}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="course">
                  Course:
                  <input
                    type="text"
                    name="course"
                    id="course"
                    required
                    placeholder="Couse Name"
                    onChange={this.formHandler}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="score">
                  Score:
                  <input
                    type="text"
                    name="score"
                    id="score"
                    required
                    placeholder="Score"
                    onChange={this.formHandler}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="place">
                  Place:
                  <input
                    type="text"
                    name="place"
                    id="place"
                    required
                    placeholder="Place"
                    onChange={this.formHandler}
                  />
                </label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        ) : null}
        <button onClick={this.previewHandler}>Preview</button>
      </div>
    ) : (
      <div onClick={this.previewHandler}>
        {this.state.education.map((item, index) => (
          <div key={index}>{item.institute}</div>
        ))}
      </div>
    );
  }
}

export default Education;
