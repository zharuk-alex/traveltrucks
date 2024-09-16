import clsx from "clsx";
import css from "./Icon.module.css";
import iconsSprite from "/src/assets/icons/icons.svg";

const Icon = ({
  name,
  size = "20",
  color = "currentColor",
  className = "",
  onClick,
  ...restProps
}) => {
  return (
    <svg
      {...restProps}
      className={clsx(className, !!onClick && css.clickable)}
      width={size}
      height={size}
      fill={color}
      aria-hidden="true"
      onClick={onClick}
    >
      <use href={`${iconsSprite}#${name}`} />
    </svg>
  );
};

export default Icon;
