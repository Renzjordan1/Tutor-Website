import React, { Component } from "react";

class DayFilterForm extends Component {
  state = {
    items: this.props.items
  };

  onToggle(index, e) {
    let newItems = this.state.items.slice();
    newItems[index].check = !newItems[index].check;
    this.setState({
      items: newItems
    });

    this.props.func(this.state.items);
  }

  itemsForm = this.props.items.map((item, i) => {
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
    return (
      <article className="card-group-item">
        <header className="card-header">
          <h6 className="title">{this.props.title}</h6>
        </header>
        <div>
          <div className="card-body">
            <div>{this.itemsForm}</div>
          </div>
        </div>
      </article>
    );
  }
}

export default DayFilterForm;
