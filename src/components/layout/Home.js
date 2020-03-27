import React from "react";
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";
import Card from "./Card";
import Subject from "./Subject";

function Home() {
  return [
    //JUMBOTRON
    <div className="jumbotron  bg-info text-white text-center">
      <div className="container">
        <h1 className="display-1">HOME</h1>
        <p className="lead">hello</p>
        <Search />
      </div>
    </div>,

    //HOW IT WORKS
    <div className="container-fluid text-center">
      <div>
        <h1 className="display-4 pb-3">How it works</h1>

        {/* Step Cards */}
        <div className="container">
          <div className="row">
            <Card
              pic="1"
              title="Tell us your needs"
              desc="Connect with student tutors across Louisville that fit you!"
            />
            <Card
              pic="2"
              title="Choose your tutor"
              desc="Pick the best tutor for you!"
            />
            <Card
              pic="3"
              title="Book your tutor"
              desc="Schedule a lesson with your tutor!"
            />
          </div>
        </div>

        {/* Find Tutor Button */}
        <p className="lead my-3">Answer a few questions and get started</p>
        <button className="btn btn-warning my-sm-0">Start</button>
      </div>
    </div>,

    //POP SUBJECTS
    <div className="container text-center mt-3">
      <h1 className="display-4 pb-3">Popular Subjects</h1>

      <div className="row justify-content-center">
        <Subject subject="Math" />
        <Subject subject="English" />
        <Subject subject="Science" />
        <Subject subject="History" />
        <Subject subject="ACT" />
        <Subject subject="SAT" />
      </div>
    </div>
  ];
}

export default Home;
