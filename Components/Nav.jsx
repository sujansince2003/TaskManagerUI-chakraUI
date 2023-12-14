import {
  Flex,
  Heading,
  Spacer,
  Box,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";

function Nav() {
  return (
    <>
      <Flex as={"nav"} p={"10px"} alignItems="center">
        <Heading as={"h1"}>Suzan Codes</Heading>
        <Spacer />
        <HStack spacing="10px">
          <Box px={"10px"} py={"3px"} bg="gray.200" borderRadius={"100%"}>
            S
          </Box>
          <Text>sujansince2059@gmail.com</Text>
          <Button colorScheme="purple" fontWeight={"bold"}>
            LogOut
          </Button>
        </HStack>
      </Flex>
    </>
  );
}

export default Nav;
