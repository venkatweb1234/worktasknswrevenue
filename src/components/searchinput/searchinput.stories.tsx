import type { Meta } from "@storybook/react";

import SearchInput, { SearchInputProps } from "./SearchInput";

export default {
  component: SearchInput,
  title: "components/SearchInput",
} as Meta;

const Template: any = (args: SearchInputProps) => <SearchInput {...args} />;
export const Default = Template.bind({});
const SearchMock = {
  searchText: "",
  handleSearchChange: () => {},
};
Default.args = {
  ...SearchMock,
};

export const SearchText = Template.bind({});
SearchText.args = {
  ...SearchMock,
  searchText: "Hello",
};
