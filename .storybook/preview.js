import { action } from "@storybook/addon-actions"
import addons from '@storybook/addons';
import { DecoratorFn } from '@storybook/react';
import React, { useEffect } from 'react';
import { ThemeProvider, useColorMode  } from 'theme-ui';
import theme from '../src/gatsby-plugin-theme-ui/index';

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// This global variable prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/"

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook, it makes more sense to log an action than doing an actual navigate. Check out the actions addon docs for more info: https://storybook.js.org/docs/react/essentials/actions

window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

const channel = addons.getChannel();

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'default',
    toolbar: {
      // The icon for the toolbar item
      icon: 'circlehollow',
      // Array of options
      items: [
        { value: 'default', icon: 'circlehollow', title: 'Light mode' },
        { value: 'dark', icon: 'circle', title: 'Dark mode' },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      dynamicTitle: true,
    },
  },
}

const ThemeChanger = (context) => {
  const [colorMode, setColorMode] = useColorMode();
  const setDarkMode = setColorMode(context.globals.theme);

  useEffect(() => {
    channel.on('DARK_MODE', setDarkMode);
    return () => channel.removeListener('DARK_MODE', setDarkMode);
  }, [channel, setColorMode]);

  return <div/>
}

function withTheme(StoryFn, context) {
  return (
    <ThemeProvider theme={theme}>
      <ThemeChanger {...context} />
      <StoryFn />
    </ThemeProvider>
  );
}

export const decorators = [withTheme];
