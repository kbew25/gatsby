import React from "react";
import theme from '../gatsby-plugin-theme-ui/index';
import {
  ThemeProvider,
  Box,
  Label,
  Button,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider,
  Field,
  Switch
} from "theme-ui";

export default {
  title: "Base/Forms",
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

const Template = () => {
  return (
    <Box as="form" onSubmit={(e) => e.preventDefault()}>
      <Label htmlFor="text">Text</Label>
      <Input type="text" name="text" id="text" />
      <Label htmlFor="password">Password</Label>
      <Input type="password" name="password" id="password" />
      <Field label="Number" name="number" type="number" defaultValue="" />
      <Field label="Email" name="email" type="email" defaultValue="" />
      <Box>
        <Label>
          <Checkbox />
          Remember me
        </Label>
      </Box>
      <Label htmlFor="sound">Sound</Label>
      <Select name="sound" id="sound">
        <option>Beep</option>
        <option>Boop</option>
        <option>Blip</option>
      </Select>
      <Label htmlFor="comment">Comment</Label>
      <Textarea name="comment" id="comment" rows={6} />
      <Box as="radios">
        <Label>
          <Radio name="letter" /> Alpha
        </Label>
        <Label>
          <Radio name="letter" /> Bravo
        </Label>
        <Label>
          <Radio name="letter" /> Charlie
        </Label>
      </Box>
      <Label htmlFor="slider">Slider</Label>
      <Slider id="slider" />
      <Switch label="Enable email alerts?" />
      <Button>Submit</Button>
    </Box>
  )
}

export const Default = Template.bind({})
