import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

class Slider extends React.Component {
  state = {
    value: [this.props.start, this.props.end],
    range: { min: this.props.start, max: this.props.end }
  };

  onChangeSlide = data => {
    var element = document.getElementById(this.props.id);
    var d1 = Math.floor(data[0]);
    var d2 = Math.floor(data[1]);
    element.innerHTML = this.props.symbol + " " + d1 + "-" + d2;

    this.props.func([{ min: d1, max: d2, id: 1 }]);

    // console.log(data[0]); // logs the value
  };

  render() {
    const { value, range } = this.state;
    return (
      <article className="card-group-item">
        <header className="card-header">
          <h6 className="title">{this.props.title}</h6>
        </header>
        <div>
          <div className="card-body">
            <h6 id={this.props.id}>
              {this.props.symbol}
              {value[0]}-{value[1]}
            </h6>
            <Nouislider
              connect={(true, true)}
              onSlide={this.onChangeSlide.bind(this)}
              start={value}
              range={range}
              tooltips={false}
            />
          </div>
        </div>
      </article>
    );
  }
}

export default Slider;
