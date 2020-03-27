import React, { Component } from "react";
import { withRouter } from "react-router";

class Search extends Component {
  state = {
    days: [
      { item: "Sunday", check: true, id: 1 },
      { item: "Monday", check: true, id: 2 },
      { item: "Tuesday", check: true, id: 3 },
      { item: "Wednesday", check: true, id: 4 },
      { item: "Thursday", check: true, id: 5 },
      { item: "Friday", check: true, id: 6 },
      { item: "Saturday", check: true, id: 7 }
    ],
    types: [
      { item: "In-Person", check: true, id: 1 },
      { item: "Online", check: true, id: 2 }
    ],
    tutorGrades: [
      { item: "HS Freshman", check: true, id: 1 },
      { item: "HS Sophomore", check: true, id: 2 },
      { item: "HS Junior", check: true, id: 3 },
      { item: "HS Senior", check: true, id: 4 },
      { item: "College", check: true, id: 5 }
    ],
    prices: [{ min: 10, max: 30, id: 1 }],
    ratings: [{ min: 0, max: 5, id: 1 }],
    tutorSchool: "Doesn't Matter",
    yourGrade: "Doesn't Matter",
    search: ""
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push({
      pathname: "/search",
      state: this.state
    });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit.bind(this)}
          className="form-inline justify-content-center my-2 my-lg-0"
        >
          <input
            onChange={this.handleChange}
            className="form-control mr-sm-2 col-sm-6"
            type="search"
            placeholder="Search"
            aria-label="Search"
            id="search"
          />
          <button className="btn btn-warning my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Search);
