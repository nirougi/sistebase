import * as React from "react";
import { ColorType, Size, sizeToClass } from "../utils";

export default interface ButtonProps {
  type?: ColorType;
  size?: Size;
  block?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (
  props: React.PropsWithChildren<ButtonProps>
) => {
  const { type, size, block, disabled, className, children, onClick } = props;
  let classText = `btn btn-${type || "secondary"}`;
  if (!!size && size !== "default") classText += ` btn-${sizeToClass(size)}`;
  if (block) classText += ` btn-block`;
  if (className) classText += ` ${className}`;

  return (
    <button
      type="button"
      className={classText}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
