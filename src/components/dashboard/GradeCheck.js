import React, { Component } from "react";

class GradeCheck extends Component {
  state = {
    items: this.props.gradesTeach
  };

  onToggle(index, e) {
    let newItems = this.state.items.slice();
    newItems[index].check = !newItems[index].check;
    this.setState({
      items: newItems
    });
    console.log(this.state.items);

    this.props.editGrades(this.state.items);
  }

  itemsForm = this.state.items.map((item, i) => {
    return (
      <label className="form-check form-check-inline" key={item.id}>
        <input
          className="form-check-input"
          onChange={this.onToggle.bind(this, i)}
          type="checkbox"
          defaultChecked={item.check}
        />
        <span className="form-check-label">{item.item}</span>
      </label>
    );
  });

  render() {
    console.log(this.state.items);

    return this.itemsForm;
  }
}

export default GradeCheck;
