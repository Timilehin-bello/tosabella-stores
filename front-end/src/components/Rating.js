import React from "react";
import PropTypes from "prop-types";

function Rating({ value, text, color }) {
  return (
    <div className="rating">
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 1
              ? "fa fa-star"
              : value >= 0.5
              ? "fas fa-half-star-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 2
              ? "fa fa-star"
              : value >= 1.5
              ? "fas fa-half-star-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 3
              ? "fa fa-star"
              : value >= 2.5
              ? "fas fa-half-star-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 4
              ? "fa fa-star"
              : value >= 3.5
              ? "fas fa-half-star-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 5
              ? "fa fa-star"
              : value >= 4.5
              ? "fas fa-half-star-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>{text && text}</span>
    </div>
  );
}

Rating.defaultProps = {
  color: "#F3CF75",
};

Rating.protoTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
