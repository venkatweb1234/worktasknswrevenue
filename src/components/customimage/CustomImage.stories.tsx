import type { Meta } from "@storybook/react";

import CustomImage, { customImageProps } from "./CustomImage";

export default {
  component: CustomImage,
  title: "components/CustomImage",
} as Meta;

const Template: any = (args: customImageProps) => <CustomImage {...args} />;
export const Default = Template.bind({});
const mockImage = {
  url: "https://api.slingacademy.com/public/sample-photos/6.jpeg",
  title: "Test",
  description: "Images",
  id: 1,
};
Default.args = {
  image: mockImage,
};
