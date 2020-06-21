// Base
import React from "react";
import "./Button.stories.scss";

// Addons
import { withA11y } from "@storybook/addon-a11y";
import { withXD } from "storybook-addon-xd-designs";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";

// Components
import { colorTypes, sizes } from "../utils";
import { Button } from ".";

// Config
export default {
  title: "Átomos|Botón",
  component: Button,
  decorators: [withA11y, withXD, withKnobs],
  parameters: {
    design: {
      artboardUrl:
        "https://xd.adobe.com/view/0623a13b-8fc0-407c-6a4d-c1c24dc2c5fa-7012/screen/d1dd8e3f-6a3b-4a7b-a59e-ba883ca7c684/-TOMOS-BOTONES"
    }
  }
};

export const Interactivo = (): JSX.Element => {
  const type = select("Tipo", colorTypes, "primary");
  const size = select("Tamaño", sizes, "default");
  const content = text("Texto", "Texto");
  const disabled = boolean("Deshabilitado", false);
  const block = boolean("Expandible", false);

  return (
    <div className="btn-block-wrapper">
      <Button type={type} size={size} disabled={disabled} block={block}>
        {content}
      </Button>
    </div>
  );
};

export const Colores = (): JSX.Element => {
  return (
    <div className="buttons-container">
      {colorTypes.map(type => (
        <Button key={type} type={type}>
          {type}
        </Button>
      ))}
    </div>
  );
};

export const Tamanos = (): JSX.Element => {
  return (
    <div className="buttons-container">
      {sizes.map(size => (
        <Button key={size} type="secondary" size={size}>
          {size}
        </Button>
      ))}
    </div>
  );
};
Tamanos.story = {
  name: "Tamaños"
};

export const Deshabilitado = (): JSX.Element => {
  return (
    <Button type="secondary" disabled={true}>
      Deshabilitado
    </Button>
  );
};

export const Expandible = (): JSX.Element => {
  return (
    <div className="btn-block-wrapper">
      <Button type="secondary" block={true}>
        Expandible
      </Button>
    </div>
  );
};
