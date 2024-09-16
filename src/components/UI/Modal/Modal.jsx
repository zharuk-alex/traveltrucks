import React from "react";
import clsx from "clsx";
import css from "./Modal.module.css";
import { Icon } from "components/UI";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={css.modalOverlay} onClick={onClose}>
      <div
        className={clsx(css.modalContent)}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <Icon
            name="icon-close"
            className={css.closeButton}
            onClick={onClose}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
