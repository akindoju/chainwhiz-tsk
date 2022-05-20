import { Button, Text } from "@chakra-ui/react";
import variables from "../../styles/variables.module.scss";
import connectWallet from "./ConnectWallet.module.scss";
import { useAddress, useMetamask } from "@thirdweb-dev/react";
import { useContext } from "react";
import { AddressContext } from "../../contexts/AddressContext";

export const ConnectWallet: React.FC = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();

  const { setWalletAddress } = useContext(AddressContext);

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
      onClick={async () => {
        await connectWithMetamask()
          .then(() => {
            setWalletAddress(address!);
          })
          .catch((err) => console.log(err));
      }}
    >
      <Text fontSize={"1.5rem"} lineHeight={1.75}>
        Connect
        <br />
        Wallet
      </Text>
    </Button>
  );
};
