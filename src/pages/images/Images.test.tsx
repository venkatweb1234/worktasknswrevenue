import { render, screen, waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import { MemoryRouter } from "react-router-dom";
import Images from "./Images";

fetchMock.enableMocks();

const MockData = {
  success: true,
  total_images: 2,
  images: [
    {
      url: "https://api.slingacademy.com/public/sample-photos/6.jpeg",
      title: "Apply future response she reduce decide",

      description:
        "Training beautiful age four skin cultural hundred environmental ability blood go physical relate produce tough open police.",
      id: 6,
    },
    {
      url: "https://api.slingacademy.com/public/sample-photos/7.jpeg",
      title: "Fire year candidate too like",

      description: "Few address take for special development white career.",
      id: 7,
    },
  ],
};
describe("Should display images", () => {
  fetchMock.mockResponseOnce(JSON.stringify({ data: MockData }), {
    status: 200,
  });
  it("Should display the title and description", async () => {
    // Render the component
    render(
      <MemoryRouter>
        <Images />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByText("Images Data")).toBeInTheDocument();
    });
    expect(screen.queryByText("Prev")).not.toBeInTheDocument();
    expect(screen.queryByText("Next")).not.toBeInTheDocument();
  });
});
