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
    };
    // this.handleInput = this.handleInput.bind(this); or use arrow function
  }
  handleInput = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  preventSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.preventSubmit}>
          <div className="body">
            <div>
              <input
                type="text"
                name="Name"
                id="name"
                value={this.state.name}
                placeholder="Name"
                required
                onChange={this.handleInput}
              />
              <input
                type="url"
                name="Github"
                id="github"
                placeholder="Github Profile"
                value={this.state.gitHub}
                required
                onChange={this.handleInput}
              />
              <input
                type="url"
                name="LinkedIn"
                id="linkedin"
                placeholder="LinkedIn Profile"
                value={this.state.linkedIn}
                required
                onChange={this.handleInput}
              />
            </div>
            <div className="email-phone">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="Email"
                  id="email"
                  placeholder="Email"
                  required
                  value={this.state.email}
                  onChange={this.handleInput}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
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
              </div>
            </div>
          </div>
          <div className="submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default About;
