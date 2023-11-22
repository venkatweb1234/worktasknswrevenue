import { render, screen, waitFor } from "@testing-library/react";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";
import fetchMock from "jest-fetch-mock";
import { MemoryRouter } from "react-router-dom";

fetchMock.enableMocks();

describe("LoginForm Component", () => {
  const getFormFields = () => ({
    usernameField: screen.getByPlaceholderText("Enter username"),
    passwordField: screen.getByPlaceholderText("Enter password"),
  });
  it("should login page has username and password fields", async () => {
    // Render the component
    //const mock = new MockAdapter(axios);

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
    const { usernameField, passwordField } = getFormFields();
    await waitFor(() => {
      expect(screen.getAllByText("Login")[0]).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(usernameField).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(passwordField).toBeInTheDocument();
    });

    userEvent.type(usernameField, "test");

    userEvent.type(passwordField, "abc");

    await waitFor(() => {
      expect(usernameField).toHaveValue("test");
    });
    await waitFor(() => {
      expect(passwordField).toHaveValue("abc");
    });
    await waitFor(() => {
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });
});
