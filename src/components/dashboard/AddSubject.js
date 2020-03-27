import React, { Component } from "react";

class AddSubject extends Component {
  state = {
    addTeach: { subject: "" },
    addLearn: { subject: "" }
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: { subject: e.target.value }
    });
  };

  onClick = e => {
    e.preventDefault();
    if (e.target.querySelector("button").id == "addTeach") {
      this.props.addTeach(this.state.addTeach);
    } else {
      this.props.addLearn(this.state.addLearn);
    }
    this.setState({
      [e.target.querySelector("button").id]: { subject: "" }
    });
    e.target.querySelector("input").value = "";
  };

  render() {
    return (
      <form className="input-group" onSubmit={this.onClick}>
        <input
          type="text"
          className="form-control"
          id={this.props.id}
          onChange={this.handleChange}
          minLength="1"
          required
        />
        <button
          className="col-2 d-block btn btn-success btn-block"
          id={this.props.id}
        >
          +
        </button>
      </form>
    );
  }
}

export default AddSubject;
