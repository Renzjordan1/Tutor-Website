import React, { Component } from "react";

class FilterSearch extends Component {
  state = {
    search: this.props.search
  };

  handleChange = e => {
    this.setState(
      {
        search: e.target.value
      },
      function() {
        this.func();
      }
    );
  };

  func() {
    this.props.func(this.state.search);
  }

  render() {
    console.log(this.props.search);
    return (
      <div>
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={this.handleChange}
          value={this.state.search}
        />
      </div>
    );
  }
}

export default FilterSearch;
