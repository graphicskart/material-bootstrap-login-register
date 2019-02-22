import React, { Component } from "react";
import { Input } from "../components";

const initialUser = {
  username: "",
  password: ""
};

export default class Login extends Component {
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
    alert("Login Succesfully!");
  };

  render() {
    return (
      <div className="card">
        <h1 className="title">Login</h1>
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
          <div className="button-container">
            <button type="submit">
              <span>Login</span>
            </button>
          </div>
          <div className="footer">
            <a href="javascript:void(0);">Forgot your password?</a>
          </div>
        </form>
      </div>
    );
  }
}
