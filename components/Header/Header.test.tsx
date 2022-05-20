import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./Header";

describe("Nav", () => {
  it("should render initial components", () => {
    render(<Header />);

    const heading1 = screen.getByText(/Kickstart Your Journey in Web3/i);
    const heading2 = screen.getByText(
      /Discover Bounties. Contribute to your favorite DAOs and Protocols. Earn in Crypto./i
    );
    const heading3 = screen.getByRole("dialog");
    const buttons = screen.getAllByRole("button");

    expect(heading1).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
    expect(heading3).toBeInTheDocument();

    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
    expect(buttons).toHaveLength(3);
  });
});
