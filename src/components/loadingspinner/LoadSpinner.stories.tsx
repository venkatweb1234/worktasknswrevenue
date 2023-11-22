import type { Meta } from "@storybook/react";

import LoadingSpinner from "./LoadingSpinner";

export default {
  component: LoadingSpinner,
  title: "components/LoadingSpinner",
} as Meta;

const Template: any = (args: any) => <LoadingSpinner {...args} />;
export const Default = Template.bind({});

Default.args = {
  loading: true,
};

export const LoadingSpinnerFalse = Template.bind({});

LoadingSpinnerFalse.args = {
  loading: false,
};
