import type { Meta } from "@storybook/react";

import LoginForm from "./LoginForm";
import { MemoryRouter } from "react-router-dom";

export default {
  component: LoginForm,
  title: "pages/LoginForm",
} as Meta;

const Template: any = () => (
  <MemoryRouter>
    <LoginForm />
  </MemoryRouter>
);
export const DefaultForm = Template.bind({});
