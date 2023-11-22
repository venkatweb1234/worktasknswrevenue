import { render } from "@testing-library/react";
import LoadingSpinner from "./LoadingSpinner";

describe("LoadingSpinner Component", () => {
  it("LoadingSpinner component renders correctly", () => {
    // Render the component
    const { container } = render(<LoadingSpinner loading={true} />);
    // Assertion
    expect(container).not.toBeEmptyDOMElement();
  });
  it("LoadingSpinner component should not be visible", () => {
    // Render the component
    const { container } = render(<LoadingSpinner loading={false} />);
    // Assertion

    expect(
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      container.getElementsByClassName("sweet-loading")[0]
    ).toBeEmptyDOMElement();
  });
  it("LoadingSpinner component should be visible", () => {
    // Render the component
    const { container } = render(<LoadingSpinner loading={true} />);
    // Assertion

    expect(
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      container.getElementsByClassName("sweet-loading")[0]
    ).not.toBeEmptyDOMElement();
  });
});
