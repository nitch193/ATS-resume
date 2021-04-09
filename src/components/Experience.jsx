import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: "",
      startDate: "",
      endDate: "",
      role: "",
      whatYouDid: "",
      location: "",
      jobs: [],
      addnew: true,
    };
  }
  previewHandler = () => {
    console.log(this.state.jobs);
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
    const newJob = {
      company: this.state.company,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      role: this.state.role,
      location: this.state.location,
      whatYouDid: this.state.whatYouDid,
    };
    this.setState({
      jobs: [...this.state.jobs, newJob],
    });
  };
  render() {
    return this.state.addnew ? (
      <div className="jobs-div">
        {this.state.addnew ? (
          <div>
            <form className="job-form" onSubmit={this.appendEduation}>
              <div className="job-detail">
                <div className="about-job">
                  <div id="style-div">
                    <input
                      type="text"
                      name="Company"
                      placeholder="Company Name"
                      id="company"
                      required
                      onChange={this.formHandler}
                    />
                    <label htmlFor="company">Company </label>
                  </div>
                  <div id="style-div">
                    <input
                      type="text"
                      name="role"
                      id="role"
                      required
                      placeholder="Role"
                      onChange={this.formHandler}
                    />
                    <label htmlFor="role">Role </label>
                  </div>
                </div>
                <div className="time-place">
                  <div id="style-div">
                    <input
                      type="text"
                      name="location"
                      id="location"
                      required
                      placeholder="Location"
                      onChange={this.formHandler}
                    />
                    <label htmlFor="location">Location</label>
                  </div>
                  <div id="style-div">
                    <input
                      type="month"
                      name="start-date"
                      id="startDate"
                      required
                      placeholder="Start date"
                      onChange={this.formHandler}
                    />
                    <label htmlFor="startDate">Start Date </label>
                  </div>
                  <div id="style-div">
                    <input
                      type="month"
                      name="end-date"
                      id="endDate"
                      required
                      placeholder="End date"
                      onChange={this.formHandler}
                    />
                    <label htmlFor="endDate">End Date </label>
                  </div>
                </div>
              </div>
              <div className="describe-work">
                <div id="style-div">
                  <textarea
                    type="text"
                    name="whatYouDid"
                    id="whatYouDid"
                    required
                    placeholder="Describe what you did"
                    onChange={this.formHandler}
                  />
                  <label htmlFor="whatYouDid">What You did: </label>
                </div>
              </div>
              <div className="job-submit">
                <button type="submit">Add Experience</button>
              </div>
            </form>
          </div>
        ) : null}
        <button onClick={this.previewHandler}>Preview</button>
      </div>
    ) : (
      <div onClick={this.previewHandler}>
        Experience
        {this.state.jobs.map((item, index) => (
          <div key={index}>{item.company}</div>
        ))}
      </div>
    );
  }
}

export default Experience;
