import React from "react";

export default function Movie(props) {
  return (
    <div className="card">
      <div className="container">
        <img
          className="poster"
          src={props.image}
          alt="Star Wars"
          width="100%"
          height="260px"
        />
        <h3>{props.name}</h3>
        <h4>
          {props.genre} - {props.year}
        </h4>
      </div>
    </div>
  );
}
