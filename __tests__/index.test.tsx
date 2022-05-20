import { screen, render } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import { AddressContext } from "../contexts/AddressContext";
import renderer from "react-test-renderer";

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

  it("matches snapshot", () => {
    const tree = renderer.create(<Home />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
