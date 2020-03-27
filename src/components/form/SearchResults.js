import React, { Component } from "react";
import ProfilePic from "../../melita-banana.jpg";

function SearchResults({ user }) {
  return (
    <div className="row btn-light py-3">
      <div className="col-3 col-sm-2 col-md-2 col-lg-1">
        {/* Image */}
        <img
          src={ProfilePic}
          className="rounded-circle profile-image img-fluid"
        />
      </div>

      <div className="col-6 col-sm-6 col-md-6 col-lg-8">
        {/* Main Block */}
        <div className="card-block">
          {/* Name */}
          <h4 className="lead">
            {user.firstName} {user.lastName}
          </h4>

          {/* Title */}
          <h4 className="card-title">{user.title}</h4>

          {/* Description */}
          <p className="card-text" id="desc">
            {user.desc}
          </p>
        </div>
      </div>

      <div className="col-3 col-sm-4 col-md-4 col-lg-3 text-right">
        {/* Secondary Block */}
        <div className="card-block">
          {/* Wage */}
          <h4 className="lead font-weight-bold">${user.wage}/hour</h4>

          {/* Rating */}
          <p className="card-text">Rating: *{user.rating}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
