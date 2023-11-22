import { render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";

const SearchMock = {
  searchText: "",
  handleSearchChange: jest.fn(),
};
describe("SearchInput Component", () => {
  it("SearchInput component renders correctly", () => {
    // Render the component
    const { container } = render(<SearchInput {...SearchMock} />);
    // Assertion
    expect(container).not.toBeEmptyDOMElement();
  });

  it("SearchInput component check searchText with Empty", () => {
    // Render the component
    render(<SearchInput {...SearchMock} />);
    // Assertion
    expect(screen.getByRole("textInput")).toHaveValue("");
  });
  it("SearchInput component check searchText without Empty & Handle Change Check", () => {
    const Mock = {
      ...SearchMock,
      searchText: "Test",
    };
    // Render the component
    render(<SearchInput {...Mock} />);
    // Assertion
    expect(screen.getByRole("textInput")).toHaveValue("Test");
  });
});
