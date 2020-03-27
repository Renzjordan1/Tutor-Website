import React, { Component } from "react";

class Subject extends Component {
  handleHoverOn = e => {
    e.target.textContent = this.props.subject;
    e.target.className = "bg-info col-sm-3 m-1";
  };
  handleHoverOff = e => {
    e.target.textContent = "Subject";
    e.target.className = "bg-primary col-sm-3 m-1";
  };

  render() {
    return (
      <div
        className="bg-primary col-sm-3 m-1"
        onMouseEnter={this.handleHoverOn}
        onMouseLeave={this.handleHoverOff}
      >
        Subject
      </div>
    );
  }
}

export default Subject;
