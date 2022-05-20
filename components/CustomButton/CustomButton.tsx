import { Button } from "@chakra-ui/react";
import Link from "next/link";
import variables from "../../styles/variables.module.scss";

export const CustomButton: React.FC<{
  text: string;
  variant?: string;
  border?: string;
  color: string;
  background?: string;
  hover: {};
  width: string[];
  link: string;
}> = ({ text, variant, border, color, background, hover, width, link }) => {
  return (
    <Link href={link}>
      <Button
        width={width}
        height={16}
        rounded={50}
        variant={variant}
        border={border}
        color={color}
        borderColor={variables.primaryColor}
        background={background}
        fontSize={"18px"}
        fontWeight={600}
        _hover={hover}
      >
        {text}
      </Button>
    </Link>
  );
};
