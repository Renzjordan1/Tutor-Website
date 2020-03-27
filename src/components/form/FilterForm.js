import React, { Component } from "react";
import DayFilterForm from "./DayFilterForm";
import Slider from "./Slider";
import FilterSearch from "./FilterSearch";
import SelectForm from "./SelectForm";

class FilterForm extends Component {
  state = this.props.state;

  daysFunc = days => {
    this.setState({
      ...this.state,
      days: days
    });
    console.log(
      "You checked:" +
        JSON.stringify(this.state.days.filter(item => item.check))
    );
  };

  typeFunc = types => {
    this.setState({
      ...this.state,
      types: types
    });
    console.log(
      "You checked:" +
        JSON.stringify(this.state.types.filter(item => item.check))
    );
  };

  tutorGradeFunc = tutorGrades => {
    this.setState({
      ...this.state,
      tutorGrades: tutorGrades
    });
    console.log(
      "You checked:" +
        JSON.stringify(this.state.tutorGrades.filter(item => item.check))
    );
  };

  priceFunc = prices => {
    this.setState({
      ...this.state,
      prices: prices
    });
    console.log("You checked:" + JSON.stringify(this.state.prices));
  };

  ratingFunc = ratings => {
    this.setState({
      ...this.state,
      ratings: ratings
    });
    console.log("You checked:" + JSON.stringify(this.state.ratings));
  };

  schoolFunc = school => {
    this.setState(
      {
        ...this.state,
        tutorSchool: school
      },
      function() {
        this.schoolFunc2();
      }
    );
  };

  schoolFunc2() {
    console.log("You checked:" + this.state.tutorSchool);
  }

  gradeFunc = grade => {
    this.setState(
      {
        ...this.state,
        yourGrade: grade
      },
      function() {
        this.gradeFunc2();
      }
    );
  };

  gradeFunc2() {
    console.log("You checked:" + this.state.yourGrade);
  }

  searchFunc = search => {
    this.setState(
      {
        ...this.state,
        search: search
      },
      function() {
        this.searchFunc2();
      }
    );
  };

  searchFunc2() {
    console.log("You checked:" + this.state.search);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.func(this.state);
  };

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Search Form */}
        <div className="form-group">
          <FilterSearch search={this.state.search} func={this.searchFunc} />
        </div>
        {/* Day Input Form */}
        <DayFilterForm
          title="Availability"
          items={this.state.days}
          func={this.daysFunc}
        />

        {/* Price Slider */}
        <div className="form-group">
          <Slider
            id="price"
            title="Price Range"
            start={10}
            end={30}
            symbol="$"
            func={this.priceFunc}
          />
        </div>
        {/* Lesson Type */}
        <DayFilterForm
          title="Lesson Type"
          items={this.state.types}
          func={this.typeFunc}
        />
        {/* Tutor Grade */}
        <DayFilterForm
          title="Tutor's Grade"
          items={this.state.tutorGrades}
          func={this.tutorGradeFunc}
        />

        {/* Tutor School */}
        <div className="form-group">
          <label htmlFor="tutorSchool">Tutor's School</label>
          <SelectForm
            title="Tutor's School"
            id="tutorSchool"
            options={[
              "Doesn't Matter",
              "Atherton High",
              "Ballard High",
              "Butler Traditional High",
              "Central High Magnet Career Academy",
              "Doss High",
              "Dupont Manual High",
              "Eastern High",
              "Fairdale High",
              "Fern Creek High",
              "Iroquois High",
              "J. Graham Brown School",
              "Jeffersontown High",
              "Louisville Male High",
              "Marion C. Moore School",
              "Pleasure Ridge Park High",
              "Seneca High",
              "Southern High",
              "The Academy @ Shawnee",
              "Valley High",
              "Waggener High",
              "Waggener High",
              "Western High",
              "Other"
            ]}
            selected={this.state.tutorSchool}
            func={this.schoolFunc}
          />
        </div>

        {/* Your Grade */}
        <div className="form-group">
          <label htmlFor="yourGrade">Your Grade</label>
          <SelectForm
            title="Your Grade"
            id="tutorGrade"
            options={[
              "Doesn't Matter",
              "6th-8th",
              "HS Freshman",
              "HS Sophomore",
              "HS Junior",
              "HS Senior"
            ]}
            selected={this.state.yourGrade}
            func={this.gradeFunc}
          />
        </div>

        {/* Rating Slider */}
        <div className="form-group">
          <Slider
            title="Rating"
            id="rating"
            start={0}
            end={5}
            symbol="★"
            func={this.ratingFunc}
          />
        </div>

        <div className="form-group text-center">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default FilterForm;
