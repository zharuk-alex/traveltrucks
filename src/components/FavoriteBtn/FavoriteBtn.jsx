import { useDispatch, useSelector } from "react-redux";
import { Icon } from "components/UI";
import { selectIsFavorite } from "store/favorites/selectors";
import { toggleFavorite } from "store/favorites/slice";
import clsx from "clsx";
import css from "./FavoriteBtn.module.css";

const FavoriteBtn = ({ id }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => selectIsFavorite(state, id));

  const handleToggleFav = () => {
    dispatch(toggleFavorite(id));
  };
  return (
    <Icon
      className={clsx(isFavorite && css.active)}
      style={{ marginLeft: 12 }}
      name="icon-heart"
      size="24"
      onClick={handleToggleFav}
    />
  );
};

export default FavoriteBtn;
