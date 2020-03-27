import React, { Component } from "react";
import SearchList from "./SearchList";
import FilterForm from "./FilterForm";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class TutorSearch extends Component {
  //Get Screen Size
  constructor(props) {
    super(props);
    console.log(props);
    if (
      typeof props.history.location.state !== "undefined" &&
      props.history.action == "PUSH"
    ) {
      this.state = {
        width: 0,
        height: 0,
        search: props.history.location.state
      };
    } else {
      this.state = {
        width: 0,
        height: 0,
        search: {
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
        }
      };
    }
    console.log(this.state);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    function truncateText(selector, maxLength) {
      var element = document.getElementById(selector),
        truncated = element.innerText;

      if (truncated.length > maxLength) {
        truncated = truncated.substr(0, maxLength) + "...";
      }
      return truncated;
    }
    if (typeof userDetails !== "undefined") {
      document.getElementById("desc").innerText = truncateText("desc", 207);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  filter = state => {
    this.setState({
      ...this.state,
      search: state
    });
  };

  render() {
    //Hide collapse on <md screens
    let className = "navbar-collapse";
    if (this.state.width <= 768) {
      className += " collapse";
    }
    const { userDetails } = this.props;
    console.log(userDetails);
    console.log(this.props.history.action);

    if (typeof userDetails !== "undefined") {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-3 col-xl-3">
              <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                  <h2 className="text-center">Filters</h2>

                  {/* Toggle button */}
                  <button
                    className="navbar-toggler d-xs-block d-md-none"
                    data-toggle="collapse"
                    data-target="#mainFilt"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  {/* Filter Items */}
                  <div className={className} id="mainFilt">
                    <div className="navbar-nav mr-auto flexcol">
                      <FilterForm
                        func={this.filter}
                        state={this.state.search}
                      />
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="col-md-8 col-lg-9 col-xl-9">
              <div className="container-fluid bg-info">
                <SearchList
                  userDetails={userDetails}
                  filters={this.state.search}
                />
              </div>
            </div>
          </div>
        </div>

        // <div class="container">
        //   <div class="row">
        //     <div class="col-md-3 dropdown">
        //       <div className="col-12">
        //         <button
        //           type="button"
        //           data-toggle="collapse"
        //           data-target="#filters"
        //           class="d-block d-md-none btn btn-primary btn-block dropdown-toggle"
        //         >
        //           Dashboard
        //         </button>
        //       </div>
        //       <div
        //         id="filters"
        //         class=" col-12 collapse d-md-block btn-group-vertical"
        //       >
        //         <button type="button" class="d-block btn btn-primary btn-block">
        //           Account
        //         </button>
        //         <button type="button" class="d-block btn btn-primary btn-block">
        //           My Details
        //         </button>
        //         <hr class="d-block d-md-none" />
        //       </div>
        //     </div>
        //   </div>
        // </div>
      );
    } else {
      return "Hello";
    }
  }
}

const mapStateToProps = state => {
  console.log(state);

  return {
    userDetails: state.firestore.ordered.users || state.userDetails.users
  };
};

export default compose(
  firestoreConnect(["users"]),
  connect(mapStateToProps)
)(TutorSearch);
