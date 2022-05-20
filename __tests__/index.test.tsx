import { screen, render } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import { AddressContext } from "../contexts/AddressContext";

describe("Home", () => {
  it("expect components to be rendered", () => {
    render(
      <AddressContext.Provider
        value={{
          walletAddress: "test",
          setWalletAddress: jest.fn(),
        }}
      >
        <Home />
      </AddressContext.Provider>
    );

    const separators = screen.getAllByRole("separator");

    separators.forEach((separator) => {
      expect(separator).toBeInTheDocument();
    });
    expect(separators).toHaveLength(2);
  });
});
