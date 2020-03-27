import React, { Component } from "react";
import Subjects from "./Subjects";
import { connect } from "react-redux";
import { editUser } from "../../store/actions/userDetailsActions";

class Subjects2 extends Component {
  state = this.props.profile;

  componentDidUpdate(prevProps) {
    if (prevProps.profile !== this.props.profile) {
      this.setState(this.props.profile);
    }
  }

  deleteTeach = id => {
    let subjects = this.state.subjectsTeach.filter(subject => {
      return subject.id != id;
    });
    this.setState(
      {
        ...this.state,
        subjectsTeach: subjects
      },
      function() {
        this.edit();
      }
    );
  };

  addTeach = subject => {
    subject.id = this.state.subjectsTeach.length + 1;
    let subjects = [...this.state.subjectsTeach, subject];
    this.setState(
      {
        ...this.state,
        subjectsTeach: subjects
      },
      function() {
        this.edit();
      }
    );
  };

  edit() {
    console.log(this.state);
    this.props.editUser(this.state);
  }

  deleteLearn = id => {
    let subjects = this.state.subjectsLearn.filter(subject => {
      return subject.id != id;
    });
    this.setState(
      {
        ...this.state,
        subjectsLearn: subjects
      },
      function() {
        this.edit();
      }
    );
  };

  addLearn = subject => {
    subject.id = this.state.subjectsLearn.length + 1;
    let subjects = [...this.state.subjectsLearn, subject];
    this.setState(
      {
        ...this.state,
        subjectsLearn: subjects
      },
      function() {
        this.edit();
      }
    );
  };

  editGrades = grades => {
    this.setState(
      {
        ...this.state,
        gradesTeach: grades
      },
      function() {
        this.edit();
      }
    );
  };

  render() {
    if (this.state.isLoaded == true) {
      return (
        <Subjects
          deleteTeach={this.deleteTeach}
          deleteLearn={this.deleteLearn}
          subjectsTeach={this.state.subjectsTeach}
          subjectsLearn={this.state.subjectsLearn}
          addTeach={this.addTeach}
          addLearn={this.addLearn}
          gradesTeach={this.state.gradesTeach}
          editGrades={this.editGrades}
        />
      );
    } else {
      return null;
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Subjects2);
