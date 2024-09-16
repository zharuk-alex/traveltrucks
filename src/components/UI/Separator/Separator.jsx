import clsx from "clsx";
import css from "./Separator.module.css";

const Separator = ({ className }) => {
  return <hr className={clsx(className, css.separator)} />;
};

export default Separator;
