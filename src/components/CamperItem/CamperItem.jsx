import { Btn, ItemsGroup, Thumb, Chip } from "components/UI";
import CamperHeading from "components/CamperHeading/CamperHeading";
import css from "./CamperItem.module.css";
import { useNavigate } from "react-router-dom";
import { selectVehicleEquipList as equipList } from "store/campers/selectors";
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";
import { useMemo } from "react";
import { filterEqipment } from "helpers";

const CamperItem = ({ ...camper }) => {
  const {
    id,
    gallery,
    name: title,
    price,
    reviews,
    rating,
    location,
    description,
  } = camper;

  const navigate = useNavigate();

  const camperEquipments = useMemo(
    () => filterEqipment(equipList, camper),
    [(equipList, camper)]
  );

  const titleProps = {
    id,
    title,
    price,
    rating,
    location,
    reviewsLen: reviews.length,
  };

  return (
    <div className={css.card}>
      <Thumb className={css.cardImage} src={gallery?.[0].thumb} alt={title} />
      <div className={css.cardContent}>
        <div className={css.cardHeader}>
          <CamperHeading {...titleProps} />
          <FavoriteBtn id={id} />
        </div>

        <p className={css.description}>{description}</p>
        <ItemsGroup
          as={Chip}
          className={css.chipsGroup}
          items={camperEquipments}
        />
        <Btn className={css.btn} onClick={() => navigate(`/catalog/${id}`)}>
          Show more
        </Btn>
      </div>
    </div>
  );
};

export default CamperItem;
