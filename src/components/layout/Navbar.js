import React from "react";
import { Link, NavLink } from "react-router-dom";
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";
import { connect } from "react-redux";

function Navbar(props) {
  console.log(props);
  const { auth } = props;

  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">{links}</nav>
  );
}

const mapStateToProps = state => {
  console.log(state);

  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar);
