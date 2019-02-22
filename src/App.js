import React, { Component } from "react";
import { Login, Signup } from "./components";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  toggleClass = () => {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    return (
      <div className={`container ${this.state.active ? "active" : ""}`}>
        <div className="row">
          <div className="pen-title">
            <h1>Material Login Form</h1>
          </div>

          <div className="container">
            <div className="card" />
            <Login {...this.state} />
            <Signup {...this.state} toggleClass={this.toggleClass} />
          </div>
          <a
            id="portfolio"
            href="javascript:void(0);"
            title="View my portfolio!"
          >
            <i className="fa fa-link" />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
