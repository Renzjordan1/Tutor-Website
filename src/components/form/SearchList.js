import React, { Component } from "react";
import SearchResults from "./SearchResults";
import { Link, NavLink } from "react-router-dom";

function SearchList({ userDetails, filters }) {
  console.log(userDetails);
  console.log(filters);
  return userDetails.map(user => {
    let show = true;

    //Search Bar
    for (let i = 0; i < Object.keys(user).length; i++) {
      if (
        Object.keys(user)[i] != "isLoaded" ||
        Object.keys(user)[i] != "isEmpty"
      ) {
        if (user[Object.keys(user)[i]].toString().includes(filters.search)) {
          show = true;
          break;
        } else {
          show = false;
        }
      }
    }

    //Prices
    if (
      user.wage < filters.prices[0].min ||
      user.wage > filters.prices[0].max
    ) {
      show = false;
    }

    //Tutor Grade
    for (let i = 0; i < filters.tutorGrades.length; i++) {
      if (user.grade == filters.tutorGrades[i].item) {
        if (filters.tutorGrades[i].check != true) {
          show = false;
        }
      }
    }

    //Tutor School
    if (user.school != filters.tutorSchool) {
      if (filters.tutorSchool != "Doesn't Matter") {
        show = false;
      }
    }

    //Grade Teach
    for (let i = 0; i < user.gradesTeach.length; i++) {
      if (user.gradesTeach[i].item == filters.yourGrade) {
        if (user.gradesTeach[i].check == false) {
          show = false;
        }
        break;
      }
    }

    //Rating
    if (
      user.rating < filters.ratings[0].min ||
      user.rating > filters.ratings[0].max
    ) {
      show = false;
    }

    console.log(show);
    if (show) {
      return (
        <Link to={"/user/" + user.id} key={user.id}>
          <SearchResults user={user} />
        </Link>
      );
    }
  });
}

export default SearchList;
