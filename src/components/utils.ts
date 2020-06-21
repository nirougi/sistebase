export type ColorType =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "danger"
  | "warning"
  | "link";

export const colorTypes: ColorType[] = [
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "danger",
  "link"
];

export type Size = "default" | "small" | "large";
export const sizes: Size[] = ["small", "default", "large"];

export const sizeToClass = (size: Size | "default"): string => {
  switch (size) {
    case "large":
      return "lg";
    case "small":
      return "sm";
    default:
      return "";
  }
};

export type InputType =
  | "text"
  | "email"
  | "color"
  | "url"
  | "number"
  | "password";

export const inputTypes: InputType[] = [
  "text",
  "email",
  "color",
  "url",
  "number",
  "password"
];
