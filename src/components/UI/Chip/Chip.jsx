import { Icon } from "components/UI";
import css from "./Chip.module.css";

const Chip = ({ icon, label }) => {
  return (
    <div className={css.chip}>
      {!!icon && <Icon style={{ marginRight: 8 }} name={icon} size="20" />}
      {label}
    </div>
  );
};

export default Chip;
