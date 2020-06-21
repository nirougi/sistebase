// Base
import React from "react";

// Addons
import { withA11y } from "@storybook/addon-a11y";
import { withXD } from "storybook-addon-xd-designs";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";

// Components
import { inputTypes } from "../utils";
import { Input } from ".";

// Config
export default {
  title: "Átomos|Input",
  component: Input,
  decorators: [withA11y, withXD, withKnobs],
  parameters: {
    design: {
      artboardUrl:
        "https://xd.adobe.com/view/0623a13b-8fc0-407c-6a4d-c1c24dc2c5fa-7012/screen/d1dd8e3f-6a3b-4a7b-a59e-ba883ca7c684/-TOMOS-BOTONES"
    }
  }
};

export const Interactivo = (): JSX.Element => {
  const type = select("Tipo", inputTypes, "text");
  const label = text("Etiqueta", "Etiqueta");
  const placeholder = text("Placeholder", "Placeholder");

  return (
    <Input
      type={type}
      label={label}
      placeholder={placeholder}
      onChange={action("input-change")}
    />
  );
};

export const Texto = (): JSX.Element => (
  <Input type="text" label="Texto" onChange={action("input-change")} />
);

export const Contrasena = (): JSX.Element => (
  <Input
    type="password"
    label="Contraseña"
    value="contraseña"
    onChange={action("input-change")}
  />
);
Contrasena.story = { name: "Contraseña" };

export const Numero = (): JSX.Element => (
  <Input
    type="number"
    label="Número"
    value="12345"
    onChange={action("input-change")}
  />
);
Numero.story = { name: "Número" };
