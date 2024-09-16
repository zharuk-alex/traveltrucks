import React from "react";
import css from "./Avatar.module.css";

const Avatar = ({ name, children }) => {
  return (
    <div className={css.avatar}>
      {!!name && !children && <div className={css.letter}>{name?.[0]}</div>}
      {children}
    </div>
  );
};

export default Avatar;
