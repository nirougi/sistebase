import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

const theme = create({
  base: "light",

  colorPrimary: '#2b94b3',
  colorSecondary: '#2fa5b2',

  // UI
  appBorderRadius: 6,

  // Text colors
  textColor: '#303333',
  textInverseColor: '#8f9899',

  // Toolbar default and active colors
  barTextColor: '#303333',
  barSelectedColor: '#2fa5b2',
  barBg: '#fafafa',

  brandTitle: "Base para armar sisetmas diseño basados en componentes",
  brandUrl: "https://github.com/Jinik/sistebase",
  brandImage: "logo.svg",
});

addons.setConfig({
  theme: theme,
});
