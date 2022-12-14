import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#B56576',
  colorSecondary: '#355070',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#eee',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#666',
  barSelectedColor: '#355070',
  barBg: '#fff',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: require('../src/images/logo.jpg'),
  brandTarget: '_self',
});
