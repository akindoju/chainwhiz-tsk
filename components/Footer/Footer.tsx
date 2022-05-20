import { Box, Flex, Text } from "@chakra-ui/react";
import logo from "../../assets/images/logo.svg";
import footerImage from "../../assets/images/footerImage.png";
import twitter from "../../assets/images/twitter.png";
import telegram from "../../assets/images/telegram.png";
import discord from "../../assets/images/discord.png";
import Image from "next/image";
import footer from "./Footer.module.scss";
import variables from "../../styles/variables.module.scss";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <Flex
      background={"#0e0e0e"}
      className={footer.container}
      justifyContent={"space-around"}
      color={"white"}
      padding={["80px 0", "50px 0", "80px 0"]}
      position={"relative"}
    >
      <Flex
        marginTop={-63}
        direction={"column"}
        width={["100%", "100%", "25%"]}
        height={"100%"}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        marginLeft={"5%"}
        className={footer.descContainer}
      >
        <Box>
          <Image src={logo} width={"246px"} height={"131px"} />
        </Box>

        <Box padding={"0 30px"}>
          <Text className={footer.desc}>
            Chainwhiz is an open-source bounty marketplace connecting Web3
            projects with builders and communities.
          </Text>
        </Box>

        <Box padding={"0 30px"} marginTop={"30px"}>
          <Text className={footer.desc}>
            Our mission is to build a transparent and community-centric bounty
            platform for scaling and forming communities.
          </Text>
        </Box>
      </Flex>

      <Flex
        alignItems={"center"}
        justifyContent={"space-around"}
        width={["100%", "100%", "50%"]}
        marginTop={["10", "10", "0"]}
        marginBottom={["5", "5", "0"]}
        className={footer.textContainer}
      >
        <Flex
          direction={"column"}
          justifyContent={"space-around"}
          height={"100%"}
        >
          <Text className={footer.text}>
            <Link href="https://www.app.chainwhiz.app/">
              <a className={footer.link}>Launch App</a>
            </Link>
          </Text>
          <Text className={footer.text} style={{ opacity: "0.4" }}>
            White Paper
          </Text>
          <Text className={footer.text} style={{ opacity: "0.4" }}>
            Documentation
          </Text>
          <Text className={footer.text}>
            <Link href="https://polygon.technology/">
              <a className={footer.link}>Polygon Network</a>
            </Link>
          </Text>
          <Text className={footer.text}>
            <Link href="https://app.chainwhiz.app/Product_Guidelines.pdf">
              <a className={footer.link}>Product Guidelines</a>
            </Link>
          </Text>
          <Text className={footer.text} style={{ opacity: "0.4" }}>
            Brand Kit
          </Text>
        </Flex>

        <Flex
          direction={"column"}
          height={"100%"}
          justifyContent={"space-around"}
        >
          <Text className={footer.text}>
            <Link href="https://youtu.be/Qfh-k9P8ZPI">
              <a className={footer.link}>Collective Intelligence</a>
            </Link>
          </Text>
          <Text className={footer.text}>
            <Link href="https://medium.com/articles-more-every-week">
              <a className={footer.link}>Articles</a>
            </Link>
          </Text>
          <Text className={footer.text}>
            <Link href="https://chainwhiz.substack.com/">
              <a className={footer.link}>Newsletter</a>
            </Link>
          </Text>
          <Text className={footer.text}>
            <Link href="https://app.chainwhiz.app/Disclaimer.pdf">
              <a className={footer.link}>Disclaimer</a>
            </Link>
          </Text>
          <Text className={footer.text}>
            <Link href="https://app.chainwhiz.app/Chainwhiz_Platform_FAQs.pdf">
              <a className={footer.link}>FAQs</a>
            </Link>
          </Text>
          <Text
            className={footer.text}
            style={{ color: `${variables.primaryColor}` }}
          >
            hello@chainwhiz.app
          </Text>
        </Flex>
      </Flex>

      <Flex width={["100%", "50%", "25%"]} justifyContent={"center"}>
        <Flex
          direction={"column"}
          justifyContent={"center"}
          width={["50%", "50%", "40%"]}
          className={footer.socials}
        >
          <Box height={"180px"} className={footer.footerImage}>
            <Image src={footerImage} alt="footerImage" />
          </Box>

          <Flex width={"90%"} justifyContent={"space-between"}>
            <a href="https://t.me/joinchat/wNfMm0mKzlBiNGNl">
              <Image src={telegram} />
            </a>

            <a href="https://discord.com/invite/NjxUxWAfuz">
              <Image src={discord} />
            </a>

            <a href="https://twitter.com/chainwhiz">
              <Image src={twitter} />
            </a>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
