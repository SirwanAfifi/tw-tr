import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Tree } from "./components/Tree";
import data from "./data.json";

export default {
  title: "Tree View",
  decorators: [withKnobs],
};

export const Default = () => {
  return <Tree root={data} />;
};
export const WithBG = () => {
  return <Tree root={data} />;
};
