import css from "./CamperFeatures.module.css";
import { ItemsGroup, Chip, Separator } from "components/UI";
import { selectVehicleEquipList as equipList } from "store/campers/selectors";
import { useMemo } from "react";
import { filterEqipment } from "helpers";

const CamperFeatures = ({ camper = {} }) => {
  const camperEquipments = useMemo(
    () => filterEqipment(equipList, camper),
    [equipList, camper]
  );

  const selectVehicleDetailsList = [
    "form",
    "length",
    "width",
    "height",
    "tank",
    "consumption",
  ];

  return (
    <div className={css.wrapper}>
      <ItemsGroup
        as={Chip}
        className={css.chipsGroup}
        items={camperEquipments}
      />

      <div className={css.details}>
        <h3 className={css.detailsTitle}>Vehicle details</h3>
        <Separator />
        <ul className={css.detailsList}>
          {selectVehicleDetailsList.map((key) => (
            <li key={key} className={css.detailsItem}>
              <span>{key}</span>
              <span>{camper?.[key]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CamperFeatures;
