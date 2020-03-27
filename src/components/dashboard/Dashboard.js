import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Account from "./Account";
import Subjects2 from "./Subjects2";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
class Dashboard extends Component {
  //Get Screen Size
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    //Hide collapse on <md screens
    let className = "navbar-collapse";
    if (this.state.width <= 768) {
      className += " collapse";
    }

    const { auth, profile } = this.props;

    console.log(profile);

    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-lg-3 col-xl-2">
            <nav className="navbar navbar-light bg-light">
              <div className="container">
                <h2 className="text-center">Dashboard</h2>

                {/* Toggle button */}
                <button
                  className="navbar-toggler d-xs-block d-md-none"
                  data-toggle="collapse"
                  data-target="#mainDash"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                {/* Dash Items */}
                <div className={className} id="mainDash">
                  <div className="navbar-nav mr-auto flexcol">
                    <Link className="nav-item nav-link" to="/dash/account">
                      My Account
                    </Link>
                    <Link className="nav-item nav-link" to="/dash/subjects">
                      Subjects
                    </Link>
                    <Link className="nav-item nav-link" to="#">
                      My Tutors/Tutees
                    </Link>
                    <Link className="nav-item nav-link" to="#">
                      My Schedule
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          {/* Main Page */}
          <div className="col-md-8 col-lg-9 col-xl-10">
            <div className="container-fluid">
              <Switch>
                <Route
                  path="/dash/account"
                  render={props => <Account {...props} profile={profile} />}
                />
                <Route
                  path="/dash/subjects"
                  render={props => <Subjects2 {...props} profile={profile} />}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Dashboard);
