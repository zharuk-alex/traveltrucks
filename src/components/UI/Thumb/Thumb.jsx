import clsx from "clsx";
import css from "./Thumb.module.css";
import { useState } from "react";
import { Loader } from "components/UI";

const Thumb = ({ src, alt, className, onClick }) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    console.error(error);
  };

  return (
    <>
      {isLoading && <Loader />}
      <img
        className={clsx(
          "thumb",
          !!onClick && css.clickable,
          css.thumb,
          className
        )}
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        onError={handleImageError}
        onClick={onClick}
      />
    </>
  );
};

export default Thumb;
