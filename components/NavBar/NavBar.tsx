import { Box, Flex, Text } from "@chakra-ui/react";
import navBar from "./NavBar.module.scss";
import logo from "../../assets/images/logo.svg";
import Image from "next/image";
import { ConnectWallet } from "../ConnectWallet/ConnectWallet";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "../Menu/Menu";

export const NavBar: React.FC = () => {
  const [isMenuBarClicked, setIsMenuBarClicked] = useState<boolean>(false);

  return (
    <Flex
      height={"16vh"}
      width={"100%"}
      background={"#0c0c0c"}
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={"20px"}
      position={"sticky"}
      zIndex={100}
      top={0}
      className={navBar.navBar}
    >
      <Image
        src={logo}
        width={"246px"}
        height={"131px"}
        objectFit={"cover"}
        style={{ marginLeft: "1vw" }}
        className={navBar.logo}
        alt="chainwhiz logo"
      />
      <svg
        className={navBar.menu}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        onClick={() => setIsMenuBarClicked((currentState) => !currentState)}
        data-testid="menuBar"
      >
        <title>menu</title>
        <path d="M3 6h18v2.016h-18v-2.016zM3 12.984v-1.969h18v1.969h-18zM3 18v-2.016h18v2.016h-18z"></path>
      </svg>

      <Box
        width={"60%"}
        justifyContent={"space-between"}
        className={navBar.options}
      >
        <Flex
          color={"white"}
          fontFamily={"Poppins"}
          fontSize={"16.5px"}
          fontWeight={300}
          letterSpacing={"0.3px"}
          width={["100%", "100%", "150%", "100%"]}
          paddingTop={"15px"}
          justifyContent={"space-around"}
          className={navBar.linkContainer}
        >
          <Text>
            <Link href="https://app.chainwhiz.app/post">
              <a className={navBar.link}>Post a Bounty</a>
            </Link>
          </Text>
          <Text>
            <Link href="https://app.chainwhiz.app/solve">
              <a className={navBar.link}>Solve a Bounty</a>
            </Link>
          </Text>
          <Text>
            <Link href="https://app.chainwhiz.app/vote">
              <a className={navBar.link}>Vote on Solutions</a>
            </Link>
          </Text>
        </Flex>
        <ConnectWallet />
        {isMenuBarClicked && <Menu />}
      </Box>
    </Flex>
  );
};
