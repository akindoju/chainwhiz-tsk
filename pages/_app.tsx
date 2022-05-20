import "../styles/globals.scss";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { AddressContext } from "../contexts/AddressContext";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [walletAddress, setWalletAddress] = useState<string>("");

  return (
    <AddressContext.Provider value={{ walletAddress, setWalletAddress }}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AddressContext.Provider>
  );
}

export default MyApp;
