import * as _ from "lodash";
import * as React from "react";
import { InputType } from "../utils";

export interface InputProps {
  type: InputType;
  label: string;
  placeholder?: string;
  value?: string;
  id?: string;
  onChange: (value: string) => void;
}

export const Input: React.FC<InputProps> = (
  props: React.PropsWithChildren<InputProps>
) => {
  const { type, label, placeholder, value, id, onChange } = props;
  const inputId = id || _.uniqueId("input_");

  return (
    <div className="form-group">
      <label htmlFor={inputId}>{label}</label>
      <input
        className="form-control"
        type={type}
        id={inputId}
        value={value}
        placeholder={placeholder}
        onChange={event => onChange(event.target.value)}
      />
    </div>
  );
};
