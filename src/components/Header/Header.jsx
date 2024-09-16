import Logo from "components/Logo/Logo";
import NavMenu from "components/NavMenu/NavMenu";
import css from "./Header.module.css";

import { clsx } from "clsx";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={clsx("container", css.wrapper)}>
        <Logo className={css.logo} />
        <NavMenu></NavMenu>
      </div>
    </header>
  );
};

export default Header;
