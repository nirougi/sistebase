// Base
import React from "react";

// Addons
import { withA11y } from "@storybook/addon-a11y";
import { withXD } from "storybook-addon-xd-designs";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

// Components
import { Modal } from ".";
import { Button } from "../Button";
import { sizes } from "../utils";

// Config
export default {
  title: "Átomos|Modal",
  component: Modal,
  decorators: [withA11y, withXD, withKnobs],
  parameters: {
    design: {
      artboardUrl:
        "https://xd.adobe.com/view/0623a13b-8fc0-407c-6a4d-c1c24dc2c5fa-7012/screen/d1dd8e3f-6a3b-4a7b-a59e-ba883ca7c684/-TOMOS-BOTONES"
    }
  }
};

export const Interactivo = (): JSX.Element => {
  const title = text("Título", "Título");
  const size = select("Tamaño", sizes, "default");
  const content = text(
    "Contenido",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequuntur voluptatem tempore rerum impedit veritatis quia unde harum quam magni."
  );
  const visible = boolean("Visible", true);

  return (
    <Modal
      title={title}
      visible={visible}
      size={size}
      onClose={action("modal-close")}
    >
      <p>{content}</p>
    </Modal>
  );
};

export const Texto = (): JSX.Element => (
  <Modal
    title="Ejemplo de modal"
    visible={true}
    onClose={action("modal-close")}
  >
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat qui odio
      sint quos placeat ipsa quaerat vero illum eligendi laboriosam? Neque in,
      commodi accusantium sit corporis temporibus voluptatibus assumenda
      tenetur!
    </p>
  </Modal>
);

export const Footer = (): JSX.Element => (
  <Modal
    title="Ejemplo de modal"
    visible={true}
    footer={
      <Button type="primary" onClick={action("footer-click")}>
        Qué lindo mi footer
      </Button>
    }
    onClose={action("modal-close")}
  >
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat qui odio
      sint quos placeat ipsa quaerat vero illum eligendi laboriosam? Neque in,
      commodi accusantium sit corporis temporibus voluptatibus assumenda
      tenetur!
    </p>
  </Modal>
);
