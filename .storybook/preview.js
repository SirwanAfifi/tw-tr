import React from "react";
import { addDecorator } from "@storybook/react";
import Layout from "../src/components/Layout";

addDecorator((storyFn) => <Layout>{storyFn()}</Layout>);
