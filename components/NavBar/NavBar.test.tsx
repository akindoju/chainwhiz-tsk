import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NavBar } from "./NavBar";

describe("Nav", () => {
  it("should be rendered", () => {
    render(<NavBar />);

    const logo = screen.getByAltText(`chainwhiz logo`);
    const links = screen.getAllByRole("link");
    const connectWalletBtn = screen.getByRole("button");

    expect(logo).toBeInTheDocument();
    links.forEach((link) => {
      expect(link).toBeInTheDocument();
    });
    expect(links).toHaveLength(3);
    expect(connectWalletBtn).toBeDefined();
  });

  it("should have less components on smaller screen", async () => {
    render(<NavBar />);

    const links = screen.getAllByRole("link");
    const connectWalletBtn = screen.getByRole("button");

    if (window.innerWidth <= 800) {
      links.forEach((link) => {
        expect(link).not.toBeInTheDocument();
      });
      expect(links).toHaveLength(0);
      expect(connectWalletBtn).not.toBeDefined();
    } else {
      links.forEach((link) => {
        expect(link).toBeInTheDocument();
      });
      expect(links).toHaveLength(3);
      expect(connectWalletBtn).toBeDefined();
    }
  });
});
