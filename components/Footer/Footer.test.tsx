import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from "./Footer";

describe("Nav", () => {
  it("should render initial components", () => {
    render(<Footer />);

    const images = screen.getAllByRole("img");
    const links = screen.getAllByRole("link");

    images.forEach((image) => {
      expect(image).toBeInTheDocument();
    });
    expect(images).toHaveLength(5);

    links.forEach((link) => {
      expect(link).toBeInTheDocument();
    });
    expect(links).toHaveLength(11);
  });
});
