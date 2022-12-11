// Button.stories.ts|tsx

import React from "react";

import { Button } from ".";
import { Theme } from "react-daisyui";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
  decorators: [
    (Story) => (
      <Theme dataTheme="luxury">
        <Story />
      </Theme>
    ),
  ],
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => (
  <Button text={"Button"}></Button>
);
