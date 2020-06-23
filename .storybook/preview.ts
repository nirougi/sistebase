import { addDecorator, addParameters } from "@storybook/react";
import { withHTML } from "@whitespace/storybook-addon-html/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import "./preview.scss";
import "../src/scss/sistebase.scss";

addDecorator(withHTML);

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
