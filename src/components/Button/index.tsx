import * as React from "react";
import { ColorType, Size, sizeToClass } from "../utils";

export interface ButtonProps {
  type?: ColorType;
  size?: Size;
  block?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (
  props: React.PropsWithChildren<ButtonProps>
) => {
  const { type, size, block, disabled, children, onClick } = props;
  let className = `btn btn-${type || "secondary"}`;
  if (!!size && size !== "default") className += ` btn-${sizeToClass(size)}`;
  if (block) className += ` btn-block`;

  return (
    <button
      type="button"
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
