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
      <div>
        {this.state.addnew ? (
          <div>
            <form onSubmit={this.appendEduation}>
              <div>
                <label htmlFor="company">
                  Company:
                  <input
                    type="text"
                    name="Company"
                    placeholder="Company Name"
                    id="company"
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
                    name="start-date"
                    id="startDate"
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
                <label htmlFor="role">
                  Role:
                  <input
                    type="text"
                    name="role"
                    id="role"
                    required
                    placeholder="Role"
                    onChange={this.formHandler}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="location">
                  Location:
                  <input
                    type="text"
                    name="location"
                    id="location"
                    required
                    placeholder="Location"
                    onChange={this.formHandler}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="whatYouDid">
                  What You did:
                  <textarea
                    type="text"
                    name="whatYouDid"
                    id="whatYouDid"
                    required
                    placeholder="Describe what you did"
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
        Experience
        {this.state.jobs.map((item, index) => (
          <div key={index}>{item.company}</div>
        ))}
      </div>
    );
  }
}

export default Experience;
