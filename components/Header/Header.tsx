import { Box, Flex, Text } from "@chakra-ui/react";
import { CustomButton } from "../CustomButton/CustomButton";
import variables from "../../styles/variables.module.scss";
import { useContext, useEffect } from "react";
import { AddressContext } from "../../contexts/AddressContext";
import Link from "next/link";
import header from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <Flex
      background={"#0e0e0e"}
      height={"100vh"}
      direction={"column"}
      justifyContent={"space-around"}
      alignItems={"center"}
      fontFamily={"Poppins"}
      padding={"78px 0"}
      textAlign={"center"}
      className={header.container}
    >
      <Text
        color={variables.primaryColor}
        fontSize={["20px", "18px", "20px", "25px"]}
        fontWeight={700}
      >
        Kickstart Your Journey in Web3
      </Text>
      <Text
        color={"white"}
        fontSize={["13px", "18px", "20px", "25px"]}
        fontWeight={500}
        lineHeight={"5.5vh"}
        className={header.subText}
      >
        Discover Bounties. Contribute to your favorite DAOs and Protocols. Earn
        in Crypto.
      </Text>
      <Flex
        justifyContent={"space-around"}
        width={"100%"}
        className={header.btnContainer}
      >
        <CustomButton
          text="Post a Bounty"
          variant="outline"
          border="2px"
          color="white"
          hover={{ color: "black", background: `${variables.primaryColor}` }}
          width={["200px", "230px", "300px", "300px"]}
          link="https://app.chainwhiz.app/post"
        />
        <CustomButton
          text="Start Solving Bounties"
          color="black"
          background={variables.primaryColor}
          hover={{
            border: `2px solid ${variables.primaryColor}`,
            background: `transparent`,
            color: "white",
          }}
          width={["280px", "350px", "420px", "420px"]}
          link="https://app.chainwhiz.app/solve"
        />
        <CustomButton
          text="Vote on Solutions"
          variant="outline"
          border="2px"
          color="white"
          hover={{ color: "black", background: `${variables.primaryColor}` }}
          width={["270px", "300px", "340", "340"]}
          link="https://app.chainwhiz.app/vote"
        />
      </Flex>
      <Text
        color={"white"}
        fontSize={["13px", "18px", "20px", "25px"]}
        fontWeight={300}
        textAlign={"center"}
        fontStyle={"italic"}
      >
        The mainnet is still a new product milestone. Report bugs and any
        improvements in our{" "}
        <span style={{ color: `${variables.primaryColor}` }}>
          <Link href="https://discord.com/invite/NjxUxWAfuz">Discord</Link>
        </span>
      </Text>
    </Flex>
  );
};
