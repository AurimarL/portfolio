// Button.stories.ts|tsx

import React from "react";

import { PrimaryButton } from ".";
import { Theme } from "react-daisyui";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: PrimaryButton,
  decorators: [
    (Story) => (
      <Theme dataTheme="cyberpunk">
        <Story />
      </Theme>
    ),
  ],
} as ComponentMeta<typeof PrimaryButton>;

export const Primary: ComponentStory<typeof PrimaryButton> = () => (
  <PrimaryButton text={"Button"}></PrimaryButton>
);
