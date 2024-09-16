import css from "./AppLoader.module.css";
import { Loader } from "components/UI";

const AppLoader = ({ visible = true }) => {
  return (
    <div className={css.wrapper}>
      <Loader visible={visible} height="100" width="100" strokeWidth="4" />
    </div>
  );
};

export default AppLoader;
