import { Text, Center } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Center
        borderRadius="2%"
        mt="8"
        py="20px"
        bg="purple.700"
        color="white"
      >
        <Text fontSize="15px">Estatery &copy; 2023</Text>
      </Center>
    </>
  );
};

export default Footer;
