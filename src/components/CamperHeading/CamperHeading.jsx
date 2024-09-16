import { Link } from "react-router-dom";
import { Icon } from "components/UI";
import css from "./CamperHeading.module.css";
import { currencyFormat } from "helpers";
import clsx from "clsx";

const CamperHeading = ({
  id,
  title,
  price,
  rating,
  reviewsLen,
  location,
  className,
}) => {
  return (
    <div className={clsx(css.wrapper, className)}>
      <div className={css.titleWrapper}>
        <h2 className={css.title}>{title}</h2>
        <div className={css.itemsSet}>
          <div className={css.subtitle}>
            <Icon
              className={css.subtitleIcon}
              name="icon-star"
              size="16"
              color="#ffc531"
            />
            <Link to={`/catalog/${id}/reviews`} className={css.reviewLink}>
              <span>{rating}</span>({reviewsLen} reviews)
            </Link>
          </div>
          <div className={css.subtitle}>
            <Icon className={css.subtitleIcon} name="icon-map" size="16" />
            {location}
          </div>
        </div>
      </div>
      <div className={css.price}>{currencyFormat(price)}</div>
    </div>
  );
};

export default CamperHeading;
