import CamperItem from "components/CamperItem/CamperItem";
import css from "./CampersList.module.css";

const CampersList = ({ items = [] }) => {
  return (
    <ul className={css.cardSet}>
      {items.map((item) => (
        <li key={item.id}>
          <CamperItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default CampersList;
