import React from "react";
import "../../styles/index.css";
const Card = (props) => {
  return (
    <div className="Card">
      <div className="img" />
      <h2>{props.title || "Hello World"} </h2>
      <p>
        {props.description ||
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do siusmod tempor incididunt ut labore et dolore magna aliqua."}
      </p>
      <button>Read More </button>
    </div>
  );
};

export default Card;
