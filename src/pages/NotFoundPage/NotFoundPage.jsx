import { Link } from "react-router-dom";
import { Btn } from "components/UI";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>404 - Page Not Found</h1>
      <p className={css.description}>
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link to="/">
        <Btn>Go back to Home</Btn>
      </Link>
    </div>
  );
};

export default NotFoundPage;
