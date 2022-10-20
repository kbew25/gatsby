import React from "react";
import { within, fireEvent, screen } from '@storybook/testing-library';

import Header from "./Header"

export default {
  component: Header,
  title: "Components/Header",
}

const Template = args => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  siteTitle: "Something",
}
Default.play = async ({ canvasElement }) => {
  await fireEvent.click(screen.getByRole('button'));
};
