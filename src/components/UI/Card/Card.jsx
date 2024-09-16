import React from "react";
import css from "./Card.module.css";
import clsx from "clsx";

const Card = ({ variant, title, text, children, className }) => {
  return (
    <div className={clsx(css.wrapper, css[variant], className)}>
      {title.length > 0 && <h3 className={css.title}>{title}</h3>}
      {text.length > 0 && <p className={css.text}>{text}</p>}
      {!!children && <div> {children}</div>}
    </div>
  );
};

export default Card;
