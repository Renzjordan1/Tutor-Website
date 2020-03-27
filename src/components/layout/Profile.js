import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const Profile = props => {
  const { user } = props;
  console.log(user);
  if (user) {
    const teachList = user.gradesTeach.map(grade => {
      if (grade.check == true) {
        return <li>{grade.item}</li>;
      }
    });
    const learnList = user.subjectsLearn.map(grade => {
      return <li>{grade.subject}</li>;
    });
    const teacherList = user.subjectsTeach.map(grade => {
      return <li>{grade.subject}</li>;
    });

    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">
              Name: {user.firstName} {user.lastName}
            </span>
            <p>Title: {user.title}</p>
            <p>Desc: {user.desc}</p>
            <p>Grade: {user.grade}</p>
            <p>School: {user.school} </p>
            <p>
              Grades Taught:
              <ul>{teachList}</ul>
            </p>
            <p>
              Subjects I'm Teaching:
              <ul>{teacherList}</ul>
            </p>
            <p>
              Subjects I'm Learning:
              <ul>{learnList}</ul>
            </p>
            <p>Wage: ${user.wage}/hr </p>
            <p>Rating: {user.rating} </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading user...</p>
      </div>
    );
  }
};
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const users = state.firestore.data.users;
  // console.log(state.firestore.data);

  const user = users ? users[id] : null;
  return {
    user: user
  };
};

export default compose(
  firestoreConnect([{ collection: "users" }]),
  connect(mapStateToProps)
)(Profile);
