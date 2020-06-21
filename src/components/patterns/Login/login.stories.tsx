// Base
import React from "react";

// Addons
import { withA11y } from "@storybook/addon-a11y";
import { withXD } from "storybook-addon-xd-designs";
import { action } from "@storybook/addon-actions";

// Components
import { Login } from ".";
import { Modal } from "../../Modal";

// Config
export default {
  title: "Patrones|Login",
  decorators: [withA11y, withXD],
  parameters: {
    design: {
      artboardUrl:
        "https://xd.adobe.com/view/0623a13b-8fc0-407c-6a4d-c1c24dc2c5fa-7012/screen/d1dd8e3f-6a3b-4a7b-a59e-ba883ca7c684/-TOMOS-BOTONES"
    }
  }
};

export const Basico = (): JSX.Element => (
  <Login onSubmit={action("login-submit")} />
);

export const ConModal = (): JSX.Element => (
  <Modal
    title="Ingresá al sitio"
    visible={true}
    size="small"
    onClose={action("modal-close")}
  >
    <Login onSubmit={action("login-submit")} />
  </Modal>
);
ConModal.story = { name: "Modal" };
