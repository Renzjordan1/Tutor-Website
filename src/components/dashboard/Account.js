import React, { Component } from "react";
import { connect } from "react-redux";
import { editUser } from "../../store/actions/userDetailsActions";

class Account extends Component {
  state = this.props.profile;

  componentDidUpdate(prevProps) {
    if (prevProps.profile !== this.props.profile) {
      this.setState(this.props.profile);
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.editUser(this.state);
  };

  onSelect = e => {
    this.setState({
      [e.target.id]: e.target.options[e.target.selectedIndex].text
    });
  };

  schools = [
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
  ];

  grades = ["6th-8th", "HS Freshman", "HS Sophomore", "HS Junior", "College"];

  render() {
    const { auth, msg } = this.props;

    // All School Select Options
    let optionsForm = this.schools.map(option => {
      if (option == this.state.school) {
        return (
          <option selected disabled>
            {option}
          </option>
        );
      }
      return <option>{option}</option>;
    });

    let gradesForm = this.grades.map(option => {
      if (option == this.state.grade) {
        return (
          <option selected disabled>
            {option}
          </option>
        );
      }
      return <option>{option}</option>;
    });
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          {/* Title */}
          <h1 className="display-4 mb-3 text-center">My Account</h1>

          {/* Row 1 */}
          <div className="row">
            {/* First Name */}
            <div className="form-group col-sm-6">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={this.state.firstName || ""}
                onChange={this.handleChange}
              />
            </div>

            {/* Last Name */}
            <div className="form-group col-sm-6">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                onChange={this.handleChange}
                value={this.state.lastName || ""}
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="row">
            {/* Email */}
            <div className="form-group col-sm-6">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={this.handleChange}
                value={this.state.email || ""}
                disabled
              />
            </div>

            {/* Password */}
            <div className="form-group col-sm-6">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={this.handleChange}
                value={this.state.password || ""}
                disabled
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="row">
            {/* Telephone */}
            <div className="form-group col-sm-4">
              <label htmlFor="tel">Number</label>
              <input
                type="tel"
                className="form-control"
                id="tel"
                onChange={this.handleChange}
                value={this.state.tel || ""}
              />
            </div>

            {/* School */}
            <div className="form-group col-sm-4">
              <label htmlFor="school">School</label>
              <select
                className="form-control"
                id="school"
                onChange={this.onSelect}
              >
                {optionsForm}
              </select>
            </div>

            {/* Grade */}
            <div className="form-group col-sm-4">
              <label htmlFor="school">Grade</label>
              <select
                className="form-control"
                id="grade"
                onChange={this.onSelect}
              >
                {gradesForm}
              </select>
            </div>
          </div>

          {/* Row 4 */}
          <div className="row justify-content-center">
            {/* Title */}
            <div className="form-group col-sm-6">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                onChange={this.handleChange}
                value={this.state.title || ""}
              />
            </div>
          </div>

          {/* Row 5 */}
          <div className="row justify-content-center">
            {/* Description */}
            <div className="form-group col-sm-6">
              <label htmlFor="desc">Description</label>
              <textarea
                className="form-control"
                id="desc"
                rows="3"
                value={this.state.desc || ""}
                onChange={this.handleChange}
              ></textarea>
            </div>
          </div>

          {/* Row 6 */}
          <div className="row justify-content-center">
            {/* Save button */}
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <div className="text-success">{msg ? <p>{msg}</p> : null}</div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    msg: state.userDetails.msg,
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    editUser: userDetails => dispatch(editUser(userDetails))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Account);
