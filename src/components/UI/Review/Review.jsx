import React from "react";
import Avatar from "../Avatar/Avatar";
import Rating from "../Rating/Rating";
import css from "./Review.module.css";

const Review = ({ name, text, rating }) => {
  return (
    <div>
      <div className={css.head}>
        <Avatar name={name} />
        <div>
          <p className={css.title}>{name}</p>
          <Rating rating={Math.round(Number(rating))} />
        </div>
      </div>
      <p className={css.text}>{text}</p>
    </div>
  );
};

export default Review;
