import clsx from "clsx";
import css from "./Hero.module.css";

const Hero = ({ image, title, subtitle, children }) => {
  return (
    <section className={css.section}>
      <img className={css.image} {...image} />

      <div className={css.wrapper}>
        <div className={clsx("container")}>
          <div className={css.heroInfo}>
            <h1 className={css.title}>{title}</h1>
            <p className={css.subtitle}>{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Hero;
