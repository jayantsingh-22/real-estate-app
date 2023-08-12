import {
  VStack,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const HouseItem = ({ house }) => {
  return (
    <Flex justify="center" align="center">
      <Stack
        justify="center"
        width="310px"
        bg="white"
        boxShadow="xl"
        borderRadius="xl"
      >
        <Image src={house.imageLg} h="170" alt="houses" borderRadius="xl" />

        <VStack p="4" align="left">
          <Text
            mt="-1"
            fontWeight="extrabold"
            fontSize="14px"
            color="purple.500"
          >
            Rs.{house.price}
            <span style={{ fontSize: 12, color: "grey", fontWeight: "normal" }}>
              /month
            </span>
          </Text>

          <Heading fontSize="20px" letterSpacing="tight">
            {house.name}
          </Heading>

          <Text fontSize="11px" color="grey">
            {house.address}
          </Text>

          <Divider my="2.5" />

          <HStack spacing="4">
            <HStack>
              <BiBed style={{ color: "#D53F8C" }} />
              <Text fontSize="11px">{house.bedrooms}</Text>
            </HStack>

            <HStack>
              <BiBath style={{ color: "#D53F8C" }} />
              <Text fontSize="11px">{house.bathrooms}</Text>
            </HStack>

            <HStack>
              <BiArea style={{ color: "#D53F8C" }} />
              <Text fontSize="11px">{house.surface}</Text>
            </HStack>
          </HStack>
        </VStack>
      </Stack>
    </Flex>
  );
};

export default HouseItem;
