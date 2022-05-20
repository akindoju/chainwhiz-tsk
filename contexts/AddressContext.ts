import React, { createContext, useState } from "react";

type AddressContextState = {
  walletAddress: string;
  setWalletAddress: React.Dispatch<React.SetStateAction<string>>;
};

const contextDefaultValues: AddressContextState = {
  walletAddress: "",
  setWalletAddress: () => {},
};

const AddressContext = createContext(contextDefaultValues);

export { AddressContext };
