import { useRouter } from "next/router";
import NextLink from "next/link";
import {
  chakra,
  Stack,
  VStack,
  Divider,
  Link,
  Text,
  Flex,
  IconButton,
} from "@chakra-ui/react";

import {
  TWITTER_PROFILE,
  GITHUB_PROFILE,
  LINKEDIN_PROFILE,
  INS_PROFILE,
  BEHANCE_PROFILE
} from "../../constants";
import { Link as LinkType } from "../types/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaBehance,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const { pathname } = useRouter();

  return (
    <VStack as="footer" alignItems="flex-start" pb={8} spacing={8}>
      <Divider />
      <Stack
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
        w="full"
        spacing={{ base: 2, md: 8 }}
      >
        <Flex>
          <Link href={GITHUB_PROFILE} target="_blank">
            <IconButton icon={<FaGithub />} isRound={true} size="md" m="1" aria-label="Github" />
          </Link>
          <Link href={LINKEDIN_PROFILE} target="_blank">
            <IconButton icon={<FaLinkedin />} isRound={true} size="md" m="1" aria-label="Linkedin" />
          </Link>
          <Link href={INS_PROFILE} target="_blank">
            <IconButton icon={<FaInstagram />} isRound={true} size="md" m="1" aria-label="Instagram" />
          </Link>
          <Link href={BEHANCE_PROFILE} target="_blank">
            <IconButton icon={<FaBehance />} isRound={true} size="md" m="1" aria-label="Behance" />
          </Link>
          <Link href={TWITTER_PROFILE} target="_blank">
            <IconButton icon={<FaTwitter />} isRound={true} size="md" m="1" aria-label="Twitter" />
          </Link>
        </Flex>
      </Stack>
      <Stack
        alignItems="center"
        justifyContent={{ base: "center", md: "space-between" }}
        direction={{ base: "column", md: "row" }}
        gridRowGap={4}
        w="full"
        spacing={0}
      >
        <Text color="gray.500" fontSize="sm">
          ©{" "}
          <chakra.span as="time" color="purple.500">
            {new Date().getFullYear()}
          </chakra.span>{" "}
          Marx Wang
        </Text>
      </Stack>
    </VStack>
  );
};

export default Footer;
