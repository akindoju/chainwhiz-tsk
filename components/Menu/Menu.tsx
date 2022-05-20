import Link from "next/link";
import { Flex, Text } from "@chakra-ui/react";
import { createPortal } from "react-dom";
import menu from "./Menu.module.scss";
import { ConnectWallet } from "../ConnectWallet/ConnectWallet";

export const Menu: React.FC = () => {
  const menuModal = document.getElementById("menu");

  return menuModal
    ? createPortal(
        <Flex
          background={"#0e0e0e"}
          height={"100vh"}
          position={"fixed"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          color={"white"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Flex
            direction={"column"}
            alignItems={"center"}
            height={"50%"}
            justifyContent={"space-around"}
            fontFamily={"Poppins"}
            fontSize={"25px"}
            fontWeight={500}
            letterSpacing={"0.3px"}
          >
            <Text>
              <Link href="https://app.chainwhiz.app/post">
                <a className={menu.link}>Post a Bounty</a>
              </Link>
            </Text>
            <Text>
              <Link href="https://app.chainwhiz.app/solve">
                <a className={menu.link}>Solve a Bounty</a>
              </Link>
            </Text>
            <Text>
              <Link href="https://app.chainwhiz.app/vote">
                <a className={menu.link}>Vote on Solutions</a>
              </Link>
            </Text>
            <ConnectWallet />
          </Flex>
        </Flex>,
        menuModal
      )
    : null;
};
