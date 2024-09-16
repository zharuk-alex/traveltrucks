import css from "./ItemsGroup.module.css";
import clsx from "clsx";

const ItemsGroup = ({ as: ItemComponent, items, className, onClick }) => {
  const handleItemClick = (item) => {
    if (!onClick) {
      return;
    }
    onClick(item);
  };

  return (
    <ul className={clsx(className, css.group)}>
      {items.map((item, index) => (
        <li
          key={index}
          className={clsx("group-item", !!onClick && css.pointer)}
        >
          <ItemComponent {...item} onClick={() => handleItemClick(item)} />
        </li>
      ))}
    </ul>
  );
};

export default ItemsGroup;
