import * as React from "react";
import { Size, sizeToClass } from "../utils";

export interface ModalProps {
  title: string;
  visible: boolean;
  size?: Size;
  footer?: React.ReactElement;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = (
  props: React.PropsWithChildren<ModalProps>
) => {
  const { title, visible, onClose, children, footer, size } = props;
  const show = visible ? "show" : "";
  const modalSize =
    !!size && size !== "default" ? ` modal-${sizeToClass(size)}` : "";

  return (
    <>
      <div
        className={`modal fade d-block ${show}`}
        tabIndex={-1}
        role="dialog"
        onClick={onClose}
      >
        <div
          className={`modal-dialog ${modalSize}`}
          onClick={e => e.stopPropagation()}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{children}</div>
            {footer && <div className="modal-footer">{footer}</div>}
          </div>
        </div>
      </div>
      <div className={`modal-backdrop fade ${show}`}></div>
    </>
  );
};
