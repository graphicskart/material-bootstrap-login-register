import React, { Component } from "react";
import { Input } from "../components";

const initialUser = {
  username: "",
  password: "",
  repeat_password: ""
};

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { ...initialUser }
    };
  }

  onChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      user: { ...initialUser }
    });
    alert("Registered Succesfully!");
  };

  render() {
    return (
      <div className="card alt">
        <div className="toggle" onClick={this.props.toggleClass} />
        <h1 className="title">
          Register
          <div className="close" onClick={this.props.toggleClass} />
        </h1>
        <form onSubmit={this.onSubmit}>
          <Input
            type="text"
            id="Username"
            label="Username"
            required={true}
            onChange={this.onChange}
            value={this.state.user.username}
            name="username"
          />
          <Input
            type="password"
            id="Password"
            label="Password"
            required={true}
            onChange={this.onChange}
            value={this.state.user.password}
            name="password"
          />
          <Input
            type="password"
            id="Repeat_Password"
            label="Repeat Password"
            required={true}
            onChange={this.onChange}
            value={this.state.user.repeat_password}
            name="repeat_password"
          />
          <div className="button-container">
            <button type="submit">
              <span>Submit</span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
