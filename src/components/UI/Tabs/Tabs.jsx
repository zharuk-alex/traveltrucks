import React, { useEffect, useRef, useState } from "react";
import css from "./Tabs.module.css";
import clsx from "clsx";

const Tabs = ({ tabs, active, onClick, className }) => {
  const [underlineCss, setUnderlineCss] = useState({ left: 0, width: 0 });
  const tabsRef = useRef([]);

  useEffect(() => {
    const indx = tabs.findIndex((tab) => tab === active);
    const { width } = tabsRef[indx].getBoundingClientRect();
    setUnderlineCss({
      left: `${tabsRef[indx].offsetLeft}px`,
      width: `${width}px`,
    });
  }, [active]);

  const handleClick = (indx) => {
    onClick(tabs[indx]);
  };

  return (
    <div className={clsx(css.container, className)}>
      {tabs.map((tab, indx) => (
        <div
          ref={(el) => (tabsRef[indx] = el)}
          key={indx}
          className={clsx(css.item, tab === active && css.active)}
          onClick={() => handleClick(indx)}
        >
          {tab}
        </div>
      ))}
      <div className={css.underline} style={underlineCss}></div>
    </div>
  );
};

export default Tabs;
