import React, { Component } from "react";
import AddSubject from "./AddSubject";
import GradeCheck from "./GradeCheck";

function Subjects({
  deleteTeach,
  subjectsTeach,
  subjectsLearn,
  addTeach,
  deleteLearn,
  addLearn,
  gradesTeach,
  editGrades
}) {
  //   handleChange = e => {
  //     this.setState({
  //       [e.target.id]: e.target.value
  //     });
  //   };

  const iTeach = subjectsTeach.map(subject => {
    return [
      <div className="col-10" key={subject.id}>
        {subject.subject}
      </div>,
      <button
        className="col-2 d-block btn btn-danger btn-block"
        onClick={() => deleteTeach(subject.id)}
      >
        X
      </button>
    ];
  });

  const iLearn = subjectsLearn.map(subject => {
    return [
      <div className="col-10">{subject.subject}</div>,
      <button
        className="col-2 d-block btn btn-danger btn-block"
        onClick={() => deleteLearn(subject.id)}
      >
        X
      </button>
    ];
  });

  return (
    <div className="container">
      {/* Title */}
      <h1 className="display-4 mb-3 text-center">My Subjects</h1>

      <div className="row">
        {/* Teach col */}
        <div className="col-sm-6">
          <h2 className="text-center">I Teach</h2>

          {/* List of Subjects */}
          <div className="col-12 input-group">
            {iTeach}
            <AddSubject addTeach={addTeach} id="addTeach" />
          </div>
        </div>

        {/* Learn col */}
        <div className="col-sm-6 mt-3 mt-sm-0 ">
          {/* Title */}
          <h2 className="text-center">I'm Learning</h2>

          {/* List of Subjects */}
          <div className="col-12 input-group">
            {iLearn}
            <AddSubject addLearn={addLearn} id="addLearn" />
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-sm-6">
          <h2 className="text-center">Grades I Teach</h2>
          <div className="col-12 input-group">
            <GradeCheck gradesTeach={gradesTeach} editGrades={editGrades} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subjects;
