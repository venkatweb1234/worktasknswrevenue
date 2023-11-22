import { render, screen } from "@testing-library/react";
import CustomImage from "./CustomImage";

const mockImage = {
  url: "http://test/test.png",
  title: "Test",
  description: "Images",
  id: 1,
};
describe("Custom Image Component", () => {
  it("CustomImage component should not be empty", () => {
    // Render the component
    const { container } = render(<CustomImage image={mockImage} />);
    // Assertion
    expect(container).not.toBeEmptyDOMElement();
  });

  it("should display image correctly", () => {
    // Render the component
    render(<CustomImage image={mockImage} />);
    // Assertion
    expect(screen.getByAltText(`Image ${mockImage.id}`)).toBeInTheDocument();
  });
  it("should title display correctly", () => {
    // Render the component
    render(<CustomImage image={mockImage} />);
    // Assertion
    expect(screen.getByText(mockImage.title)).toBeInTheDocument();
  });
  it("should description display correctly", () => {
    // Render the component
    render(<CustomImage image={mockImage} />);
    // Assertion
    expect(screen.getByText(mockImage.description)).toBeInTheDocument();
  });
});
