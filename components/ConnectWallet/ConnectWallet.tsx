import { Button, Text } from "@chakra-ui/react";
import variables from "../../styles/variables.module.scss";
import connectWallet from "./ConnectWallet.module.scss";
import { useContext } from "react";
import { AddressContext } from "../../contexts/AddressContext";
declare var window: any;

export const ConnectWallet: React.FC = () => {
  const { setWalletAddress } = useContext(AddressContext);

  const getAccountHandler = (account: string) => {
    setWalletAddress(account);
  };

  const connectWalletHandler = () => {
    window.ethereum
      ?.request({ method: "eth_accounts" })
      .then((result: string) => {
        getAccountHandler(result[0]);
      });
  };

  if (typeof window !== "undefined") {
    window.ethereum?.on!("accountsChanged", getAccountHandler);
  }

  return (
    <Button
      background={variables.primaryColor}
      height={"16vh"}
      width={"200px"}
      marginTop={"8px"}
      shadow={"2xl"}
      rounded={4}
      color={"rgba(0, 0, 0, 0.87)"}
      className={connectWallet.button}
      _hover={{ background: variables.primaryColor }}
      _focus={{ outline: "none" }}
      _active={{ background: variables.primaryColor }}
      onClick={connectWalletHandler}
    >
      <Text fontSize={"1.5rem"} lineHeight={1.75}>
        Connect
        <br />
        Wallet
      </Text>
    </Button>
  );
};
