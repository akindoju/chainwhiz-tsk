import "../styles/globals.scss";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { AddressContext } from "../contexts/AddressContext";
import { useState } from "react";

const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }: AppProps) {
  const [walletAddress, setWalletAddress] = useState<string>("");

  return (
    <AddressContext.Provider value={{ walletAddress, setWalletAddress }}>
      <ChakraProvider>
        <ThirdwebProvider desiredChainId={activeChainId}>
          <Component {...pageProps} />
        </ThirdwebProvider>
      </ChakraProvider>
    </AddressContext.Provider>
  );
}

export default MyApp;
