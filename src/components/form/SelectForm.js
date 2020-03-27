import React, { Component } from "react";

class SelectForm extends Component {
  state = {
    selected: this.props.selected
  };

  onSelect = e => {
    this.setState(
      {
        selected: e.target.options[e.target.selectedIndex].text
      },
      function() {
        this.func();
      }
    );
  };

  func() {
    this.props.func(this.state.selected);
  }

  optionsForm = this.props.options.map(option => {
    return <option>{option}</option>;
  });

  render() {
    return (
      <select
        className="form-control"
        id={this.props.id}
        onChange={this.onSelect}
      >
        {this.optionsForm}
      </select>
    );
  }
}

export default SelectForm;
