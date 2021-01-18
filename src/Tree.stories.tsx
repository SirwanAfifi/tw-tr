import React, { useRef } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Tree } from "./components/Tree";
import data from "./data.json";
import { ContextMenu } from "./components/ContextMenu";
import { ContextMenuProvider } from "./context";

export default {
  title: "Tree View",
  decorators: [withKnobs],
};

export const Default = () => {
  return (
    <ContextMenuProvider>
      <ContextMenu />
      <Tree root={data} />
    </ContextMenuProvider>
  );
};
