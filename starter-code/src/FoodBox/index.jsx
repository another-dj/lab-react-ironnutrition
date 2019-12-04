import React from "react";
import "./style.scss";
import foods from "./../foods.json";

function FoodBox(props) {
  const imgStyle = {
    maxWidth: "10em"
  };

  return (
    <div>
      {foods.map((value, index) => {
        return(
        <div key={value.image} className="media">
          <img
            src={value.image}
            className="img-thumbnail mr-3 mw-25 border-0"
            style={imgStyle}
            alt=""
          />
          <div className="media-body align-self-center">
            <h5 className="mt-0 mb-1">{value.name}</h5>
            <small>{value.calories} cal</small>
          </div>
          <form className="row align-self-center">
            <input className="form-control col-9" type="number" value="1" />
            <button className="btn btn-primary col-3">+</button>
          </form>
        </div>
      )})}
      {/* <button className="btn btn-dark">Add new food!</button> */}
    </div>
  );
}

export default FoodBox;
