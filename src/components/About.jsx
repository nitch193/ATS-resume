import React, { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      github: "",
      linkedin: "",
      email: "",
      phone: "",
      clicked: false,
    };
    // this.handleInput = this.handleInput.bind(this); or use arrow function
  }
  handleInput = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  preventSubmit = (e) => {
    this.setState({
      clicked: !this.state.clicked,
    });
    e.preventDefault();
  };

  render() {
    return !this.state.clicked ? (
      <div>
        <form onSubmit={this.preventSubmit}>
          <div className="about-div">
            <div className="name-and-url">
              <div id="style-div">
                <input
                  type="text"
                  name="Name"
                  id="name"
                  value={this.state.name}
                  required
                  placeholder="Full Name"
                  onChange={this.handleInput}
                />
                <label id="name-id" htmlFor="name">
                  Name
                </label>
              </div>
              <div id="style-div">
                <input
                  type="url"
                  name="Github"
                  id="github"
                  placeholder="Github Profile"
                  value={this.state.gitHub}
                  required
                  onChange={this.handleInput}
                />
                <label htmlFor="github">Github</label>
              </div>
              <div id="style-div">
                <input
                  type="url"
                  name="LinkedIn"
                  id="linkedin"
                  placeholder="LinkedIn Profile"
                  value={this.state.linkedIn}
                  required
                  onChange={this.handleInput}
                />
                <label htmlFor="linkedin">LinkedIn</label>
              </div>
            </div>
            <div className="email-phone">
              <div id="style-div">
                <input
                  type="email"
                  name="Email"
                  id="email"
                  placeholder="Email"
                  required
                  value={this.state.email}
                  onChange={this.handleInput}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div id="style-div">
                <input
                  type="tel"
                  name="Phone"
                  id="phone"
                  placeholder="Mobile No."
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  required
                  value={this.state.phone}
                  onChange={this.handleInput}
                />
                <label htmlFor="phone">Phone</label>
              </div>
            </div>
          </div>
          <div className="submit">
            <button type="submit">Add Personal Info</button>
          </div>
        </form>
      </div>
    ) : (
      <div className="gap info" onClick={this.preventSubmit}>
        <div className="name-web">
          <div className="full-name">{this.state.name}</div>
          <div className="web">
            <a href={this.state.linkedin}>LinkedIn</a>
            <a href={this.state.github}>Github</a>
          </div>
        </div>
        <div className="contact">
          <a className="mail" href={`mailto:${this.state.email}`}>
            Email:{this.state.email}
          </a>
          <div className="mobile">Phone:{` ${this.state.phone}`}</div>
        </div>
      </div>
    );
  }
}

export default About;
