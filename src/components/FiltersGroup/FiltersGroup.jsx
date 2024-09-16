import FilterItem from "components/FilterItem/FilterItem";
import css from "./FiltersGroup.module.css";
import { Separator } from "components/UI";

const FiltersGroup = ({ title = "", items }) => {
  return (
    <div className={css.wrapper}>
      {title.length > 0 && <p className={css.title}>{title}</p>}
      <Separator />
      <ul className={css.itemsSet}>
        {items.map((item) => (
          <li className={css.setItem} key={item.id}>
            <FilterItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FiltersGroup;
