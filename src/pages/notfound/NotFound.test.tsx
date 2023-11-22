import { render, screen } from "@testing-library/react";
import NoMatch from "./NotFound";

it("renders NoMatch Component correctly", () => {
  const testText = "404: Page Not Found";

  // Render the component
  render(<NoMatch />);

  // Use screen to query for the text
  const renderedText = screen.getByText(testText);

  // Assertion
  expect(renderedText).toBeInTheDocument();
});
